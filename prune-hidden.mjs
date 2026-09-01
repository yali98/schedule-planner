// 삭제 대기(hidden) task 자동 제거 스크립트
// 앱의 "삭제" 버튼은 tasks.js를 안 건드리고 Gist(hidden 필드)에만 숨김 표시를 남긴다.
// 이 스크립트는 Gist의 hidden 목록을 읽어, 해당 id의 task 객체를 tasks.js에서
// 통째로 제거한다. 제거 후 결과가 정상 PLANNER로 파싱되는지 검증하고,
// 실패하면 파일을 건드리지 않는다(공개 파일 손상 방지).
//
// 사용법: node prune-hidden.mjs           (제거 실행)
//        node prune-hidden.mjs --dry-run  (제거 대상만 출력, 파일 미변경)
//
// PostToolUse 훅(Edit|Write on tasks.js)에서 자동 호출된다.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SYNC_FILENAME = "planner-sync.json";
const TASKS_PATH = join(__dirname, "tasks.js");

function loadConfig() {
  const cfg = JSON.parse(readFileSync(join(__dirname, "sync-config.json"), "utf8"));
  if (!cfg.token || cfg.token.includes("여기에")) {
    throw new Error("sync-config.json에 토큰이 아직 안 채워졌습니다.");
  }
  return cfg;
}

async function gh(token, url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", ...(opts.headers || {}) },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} (${url})`);
  return res;
}

async function findGistId(token) {
  const res = await gh(token, "https://api.github.com/gists?per_page=100");
  const gists = await res.json();
  const hit = gists.find((g) => g.files && g.files[SYNC_FILENAME]);
  if (!hit) throw new Error("planner-sync.json이 든 Gist를 못 찾았습니다.");
  return hit.id;
}

async function getHidden(token, gistId) {
  const res = await gh(token, `https://api.github.com/gists/${gistId}`);
  const data = await res.json();
  const file = data.files[SYNC_FILENAME];
  if (!file) throw new Error("Gist에 planner-sync.json이 없습니다.");
  let content = file.content;
  if (file.truncated && file.raw_url) content = await (await fetch(file.raw_url)).text();
  const parsed = JSON.parse(content || "{}");
  return parsed.hidden || {};
}

function evalPlanner(src) {
  return new Function(`${src}; return PLANNER;`)();
}

// tasks.js 소스에서 특정 id의 task 객체 블록을 (앞 구분선 주석 포함) 제거한다.
// 문자열 안의 중괄호는 무시하도록 문자열 상태를 추적한다.
function removeTaskBlock(src, id) {
  const marker = new RegExp(`\\{\\s*\\n\\s*id:\\s*"${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`);
  const m = marker.exec(src);
  if (!m) return src; // 이미 없음

  const braceStart = m.index; // task 객체를 여는 '{'의 위치
  // 균형 중괄호 매칭으로 닫는 '}' 찾기
  let depth = 0;
  let i = braceStart;
  let inStr = false, quote = "";
  for (; i < src.length; i++) {
    const ch = src[i];
    const prev = src[i - 1];
    if (inStr) {
      if (ch === quote && prev !== "\\") inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { inStr = true; quote = ch; continue; }
    if (ch === "{") depth++;
    else if (ch === "}") { depth--; if (depth === 0) break; }
  }
  if (depth !== 0) throw new Error(`중괄호 매칭 실패: ${id}`);
  let end = i + 1;
  // 닫는 '}' 뒤의 쉼표 흡수
  if (src[end] === ",") end++;

  // 앞쪽으로 확장: 이 블록 바로 앞의 구분선 주석(// ───) + 공백 줄들 흡수
  let start = braceStart;
  // 현재 줄 시작으로
  while (start > 0 && src[start - 1] !== "\n") start--;
  // 위로 올라가며 주석/빈 줄 흡수
  let p = start;
  while (p > 0) {
    let lineStart = p - 1;
    while (lineStart > 0 && src[lineStart - 1] !== "\n") lineStart--;
    const line = src.slice(lineStart, p - 1).trim();
    if (line === "" || line.startsWith("//")) { p = lineStart; } else break;
  }
  start = p;

  return src.slice(0, start) + src.slice(end);
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const quiet = process.argv.includes("--quiet"); // no-op일 때 무출력(훅용)
  const cfg = loadConfig();
  const gistId = cfg.gistId || (await findGistId(cfg.token));
  const hidden = await getHidden(cfg.token, gistId);

  const src = readFileSync(TASKS_PATH, "utf8");
  const planner = evalPlanner(src);
  const presentIds = new Set(planner.tasks.map((t) => t.id));
  const toRemove = Object.keys(hidden).filter((id) => hidden[id] && presentIds.has(id));

  if (toRemove.length === 0) {
    if (!quiet) console.log("[prune] 삭제 대기 없음 — 변경 없음.");
    return;
  }

  console.log(`[prune] 삭제 대기 제거 대상: ${toRemove.join(", ")}`);
  if (dryRun) { console.log("[prune] --dry-run: 파일 미변경."); return; }

  let out = src;
  for (const id of toRemove) out = removeTaskBlock(out, id);

  // 검증: 결과가 여전히 정상 PLANNER로 파싱되고, 대상 id가 모두 사라졌는지
  let after;
  try {
    after = evalPlanner(out);
  } catch (e) {
    throw new Error(`제거 후 파싱 실패 — 파일을 건드리지 않음: ${e.message}`);
  }
  const afterIds = new Set(after.tasks.map((t) => t.id));
  const stillThere = toRemove.filter((id) => afterIds.has(id));
  if (stillThere.length) throw new Error(`제거 실패(잔존: ${stillThere.join(", ")}) — 파일을 건드리지 않음`);
  const expectedRemaining = planner.tasks.length - toRemove.length;
  if (after.tasks.length !== expectedRemaining) {
    throw new Error(`task 개수 불일치(예상 ${expectedRemaining}, 실제 ${after.tasks.length}) — 파일을 건드리지 않음`);
  }

  writeFileSync(TASKS_PATH, out, "utf8");
  console.log(`[prune] 제거 완료: ${toRemove.join(", ")} (남은 task ${after.tasks.length}개)`);
}

main().catch((e) => {
  console.error("[prune 오류]", e.message);
  process.exit(1);
});
