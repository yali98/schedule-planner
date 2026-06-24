// 체크 현황 조회 스크립트
// sync-config.json의 토큰으로 GitHub Gist에서 체크 상태를 읽어
// tasks.js의 step과 대조해 사람이 읽기 좋게 출력한다.
// 사용법: node check-status.mjs            (전체)
//        node check-status.mjs next-survivor  (특정 task만)
//        node check-status.mjs --json        (기계용 JSON)

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SYNC_FILENAME = "planner-sync.json";

function loadConfig() {
  try {
    const cfg = JSON.parse(readFileSync(join(__dirname, "sync-config.json"), "utf8"));
    if (!cfg.token || cfg.token.includes("여기에")) {
      throw new Error("sync-config.json에 토큰이 아직 안 채워졌습니다.");
    }
    return cfg;
  } catch (e) {
    console.error("[설정 오류]", e.message);
    process.exit(1);
  }
}

function loadPlanner() {
  // tasks.js는 모듈이 아니라 `const PLANNER = {...}` 형태라 직접 eval로 추출
  const src = readFileSync(join(__dirname, "tasks.js"), "utf8");
  const fn = new Function(`${src}; return PLANNER;`);
  return fn();
}

async function gh(token, url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      ...(opts.headers || {}),
    },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} (${url})`);
  return res;
}

async function findGistId(token) {
  // 회원님 Gist 목록에서 planner-sync.json이 든 Gist를 자동 탐색
  const res = await gh(token, "https://api.github.com/gists?per_page=100");
  const gists = await res.json();
  const hit = gists.find((g) => g.files && g.files[SYNC_FILENAME]);
  if (!hit) throw new Error(`planner-sync.json이 든 Gist를 못 찾았습니다. 앱에서 체크 동기화를 한 번 켰는지 확인하세요.`);
  return hit.id;
}

async function getChecks(token, gistId) {
  const res = await gh(token, `https://api.github.com/gists/${gistId}`);
  const data = await res.json();
  const file = data.files[SYNC_FILENAME];
  if (!file) throw new Error("Gist에 planner-sync.json이 없습니다.");
  // content가 잘려있으면(raw_url) 직접 받아온다
  let content = file.content;
  if (file.truncated && file.raw_url) {
    content = await (await fetch(file.raw_url)).text();
  }
  const parsed = JSON.parse(content || "{}");
  return parsed.checks || {};
}

async function main() {
  const args = process.argv.slice(2);
  const asJson = args.includes("--json");
  const filterId = args.find((a) => !a.startsWith("--"));

  const cfg = loadConfig();
  const gistId = cfg.gistId || (await findGistId(cfg.token));
  const checks = await getChecks(cfg.token, gistId);
  const planner = loadPlanner();

  let tasks = planner.tasks;
  if (filterId) tasks = tasks.filter((t) => t.id === filterId);

  if (asJson) {
    const out = tasks.map((t) => ({
      id: t.id,
      title: t.title,
      steps: t.steps.map((s) => ({ id: s.id, date: s.date, text: s.text, done: !!checks[s.id] })),
    }));
    console.log(JSON.stringify(out, null, 2));
    return;
  }

  console.log(`\n📋 체크 현황  (Gist: ${gistId})\n`);
  for (const t of tasks) {
    const done = t.steps.filter((s) => checks[s.id]).length;
    console.log(`■ ${t.title}  [${done}/${t.steps.length}]`);
    for (const s of t.steps) {
      const mark = checks[s.id] ? "✅" : "⬜";
      console.log(`   ${mark} ${s.id}  (${s.date})  ${s.text}`);
    }
    console.log("");
  }
}

main().catch((e) => {
  console.error("[오류]", e.message);
  process.exit(1);
});
