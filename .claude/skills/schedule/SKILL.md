---
name: schedule
description: Add, update, remove, or reschedule tasks/steps in the personal planner (tasks.js), then sync to GitHub Pages. Use when the user wants to manage their schedule planner tasks.
---

이 스킬은 `스케줄플래너` 프로젝트의 `tasks.js`를 편집해서 데스크톱 위젯·폰 화면에 반영하는 작업입니다.

## 데이터 위치
- `tasks.js` (프로젝트 루트) — `PLANNER.tasks` 배열, 각 task는:
  ```js
  {
    id: "kebab-id",
    title: "제목",
    priority: 1|2|3,        // 낮을수록 우선
    deadline: "YYYY-MM-DD" | null,
    deadlineNote: "마감 관련 짧은 설명",
    note: "맥락/방향 메모",
    steps: [ { id: "taskid-N", date: "YYYY-MM-DD", text: "세부 단계" }, ... ]
  }
  ```

## 할 일
0. **삭제 대기(앱 "삭제" 버튼으로 숨김된) task 제거는 이제 자동이다.** `tasks.js`를 Edit/Write하면 PostToolUse 훅이 `node prune-hidden.mjs --quiet`를 돌려 Gist의 hidden 목록에 있는 task를 `tasks.js`에서 통째로 잘라낸다(제거 후 정상 파싱 검증, 실패 시 파일 미변경). 따라서 수동으로 삭제 대기를 지울 필요는 없다 — 단, 편집 뒤 훅이 파일을 바꿨을 수 있으니 **git commit 전 tasks.js를 다시 읽어 반영 상태를 확인**할 것. 훅 설정: `.claude/settings.local.json`(gitignored). 필요하면 `node check-status.mjs`로 삭제 대기·체크 현황을 직접 볼 수도 있다(step 재구성 시 완료 여부 참고).
1. 사용자 요청을 듣고 task 추가/삭제/수정/마감 변경을 판단.
   - 새 task 추가: 큰 목표를 받으면 합리적인 sub-step으로 쪼개고, 오늘 날짜(현재 맥락의 currentDate) 기준 마감일까지 날짜를 적절히 분배.
   - 기존 task 수정: 진행 상황(예: "초안 다 끝냈어")을 들으면 남은 steps만 남기고 재구성.
   - 마감 변경: deadline·deadlineNote 갱신하고 steps 날짜 재분배.
   - 삭제: 배열에서 해당 task 객체 통째로 제거.
2. `tasks.js` 맨 위 `// 마지막 갱신:` 주석과 `PLANNER.updated` 값을 오늘 날짜로 갱신.
3. 편집 후 git으로 GitHub Pages에 반영 (폰 화면 동기화):
   ```
   git add tasks.js
   git commit -m "update tasks"
   git push
   ```
   (push는 Credential Manager로 토큰 없이 인증됨 — 사용자에게 토큰을 요청하지 말 것)
4. 데스크톱 위젯(Electron)이 켜져 있으면 파일 변경은 자동 반영 안 되니, 사용자가 새로고침(F5) 또는 재실행해야 한다고 짧게 안내.
5. 변경 내용을 한국어로 1~2문장 요약해서 알려줄 것 — 전체 파일을 다시 보여주지 않음.

## 주의
- steps의 id는 `{taskId}-{n}` 형식 유지.
- localStorage 체크 상태는 기기별로 따로 저장되므로 이 스킬에서 건드리지 않음.
- 완료 여부는 사용자가 직접 체크박스로 표시하는 것이므로, "끝냈다"는 말을 들었다고 checks 상태를 임의로 바꾸지 말고, 대신 해당 step을 steps 배열에서 제거하거나 다음 단계로 갈음.
