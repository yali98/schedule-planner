// ============================================================
//  스케줄 데이터 — 이 파일은 Claude(이 세션)가 편집합니다.
//  세부 목표 추가/기한 재배분이 필요하면 세션에서 말로 부탁하세요.
//  마지막 갱신: 2026-06-25
// ============================================================

const PLANNER = {
  updated: "2026-06-25",

  tasks: [
    // ───────────────────────────────────────────────
    {
      id: "paper1",
      title: "다자대화 데이터셋 LLM 적응성 연구 — 논문 작성",
      priority: 1,
      deadline: "2026-06-30",
      deadlineNote: "원래 6/30 마감, 연장 가능성 있음",
      note: "초안 작성 완료. 이제 실험 재확인 → 분석 → 결론 정리 단계. 연장되면 말해주면 뒤 일정 여유 있게 재배분함. 주간 회의가 목요일→수요일로 변경됨 — 7/1(수) 첫 회의에서 1저자 정하기, 저널 후보 논의 진행.",
      steps: [
        { id: "p1-1", date: "2026-06-23", text: "실험 결과 재검토 — 재현 확인, 누락·오류 체크" },
        { id: "p1-2", date: "2026-06-25", text: "분석 정리 — 결과 해석, 표/그래프 보완·확정" },
        { id: "p1-2b", date: "2026-06-26", text: "김유정 학생이 보내는 헷갈리는 실험표·부분 확인 후 정리 (오후)" },
        { id: "p1-2c", date: "2026-06-30", text: "제출할 저널 후보 미리 찾아보기 (성균관대 박은일 교수 제출 저널 위주) — 다음 주 회의 전까지" },
        { id: "p1-2d", date: "2026-07-01", text: "수요일 오전 10:30 회의 (요일 변경 후 첫 회의)" },
        { id: "p1-3", date: "2026-06-27", text: "결론(Discussion + Conclusion) 다시 정리" },
        { id: "p1-4", date: "2026-06-29", text: "전체 초안 재검토 + 다듬기 (figure·reference 점검)" },
        { id: "p1-5", date: "2026-06-30", text: "최종 교정 후 제출 (연장 시 추가 보완)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "nrf",
      title: "NRF 제안서 — 페르소나 + 장기대화",
      priority: 2,
      deadline: "2026-08-05",
      deadlineNote: "대략 8월 초 (확정 아님)",
      note: "방향: on-device LLM은 크기 제약으로 general 정보 보유가 어려움 → 실생활 사용 위해 자율적 정보 관리 필수. KG(Wikidata/DBPedia 등)에 실생활 정보를 저장하고, 대화 중 사용자 정보(페르소나·대화)를 트리플화해 그래프에 추가. 핵심 모듈: graph construction, triple extraction, persona triple extraction, SLM distillation, graph completion, graph conflict detection, graph fusion.",
      steps: [
        { id: "nrf-1", date: "2026-07-01", text: "배경·필요성 초안 — on-device LLM 한계 + 자율적 정보 관리 필요성 정리" },
        { id: "nrf-2", date: "2026-07-08", text: "관련 KG 자원 조사(Wikidata, DBPedia 등) + 그래프 저장 구조 설계" },
        { id: "nrf-3", date: "2026-07-15", text: "Triple extraction + persona triple extraction 모듈 설계" },
        { id: "nrf-4", date: "2026-07-22", text: "Graph construction + SLM distillation 방법론 정리" },
        { id: "nrf-5", date: "2026-07-27", text: "Graph completion + conflict detection + fusion 방법론 정리" },
        { id: "nrf-6", date: "2026-08-01", text: "연구목표·추진방법·기대효과 통합 작성" },
        { id: "nrf-7", date: "2026-08-05", text: "전체 다듬기 + 제출" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "next-survivor",
      title: "넥스트 에디션 생존자 테마 예약",
      priority: 1,
      deadline: "2026-06-26",
      deadlineNote: "이번 주 금요일까지",
      note: "수동 확인 대신 Claude로 자동 예약 구현. 실행 프롬프트(자동 예약 플로우 단계에서 그대로 사용): \"7월 4일 생존자 테마 16:25 슬롯이 열렸는지 확인하고, 열리면 이름 '[개인정보 제거됨]', 연락처 '[개인정보 제거됨]', 메모 '2인'을 입력한 뒤 제출해줘. 어차피 취소가 되는 제출이라서, 너가 직접 제출해도 전혀 문제가 없어. 아직이면 열릴 때까지 페이지를 확인하면서 기다려줘.\"",
      steps: [
        { id: "ns-1", date: "2026-06-24", text: "예약 페이지 구조·조건(가격·수량·오픈시간) 파악 + 자동화 가능 여부 확인" },
        { id: "ns-2", date: "2026-06-25", text: "자동 예약 플로우 구현 (브라우저 자동화 / computer-use)" },
        { id: "ns-3", date: "2026-06-26", text: "테스트 실행 — 버튼 위치·플로우 검증 (실제 결제 직전까지)" },
        { id: "ns-4", date: "2026-06-26", text: "실제 예약 오픈 시 자동 실행 + 결제 직전 사용자 확인" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "helea-rebuttal",
      title: "HELEA 논문 리부탈 대비 — OOD 실험",
      priority: 1,
      deadline: "2026-07-03",
      deadlineNote: "리부탈 7월 초 예정 (정확한 날짜 알려주면 재배분)",
      note: "우선 OOD 데이터에 대한 실험부터 진행.",
      steps: [
        { id: "helea-1", date: "2026-06-24", text: "OOD 데이터셋 선정 + 실험 세팅 구성" },
        { id: "helea-2", date: "2026-06-27", text: "OOD 실험 1차 실행" },
        { id: "helea-3", date: "2026-06-30", text: "결과 분석 + 추가 실험 필요 여부 판단" },
        { id: "helea-4", date: "2026-07-03", text: "리부탈용 결과 정리 (표·설명 초안)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "next-topic",
      title: "다음 논문 주제 구상",
      priority: 3,
      deadline: null,
      deadlineNote: "상시 — 마감 없음",
      note: "후순위. 논문 마감 전까지는 틈틈이 아이디어만 메모, 7월부터 본격화.",
      steps: [
        { id: "nt-1", date: "2026-06-30", text: "떠오르는 아이디어 자유롭게 메모해두기 (마감일 아님)" },
        { id: "nt-2", date: "2026-07-06", text: "후보 주제 2~3개로 좁히고 each 한 문단 정리" }
      ]
    }
  ]
};
