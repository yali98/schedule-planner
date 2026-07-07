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
0. `node check-status.mjs`를 실행해 "🗑 삭제 대기" 목록을 확인한다. 앱의 "삭제" 버튼은 task를 완전히 지우지 않고 숨김 처리만 하므로, 여기 나온 task id는 이번 편집에서 `tasks.js`에서 통째로 제거한다 (일괄 정리).
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
