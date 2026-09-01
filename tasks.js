// ============================================================
//  스케줄 데이터 — 이 파일은 Claude(이 세션)가 편집합니다.
//  세부 목표 추가/기한 재배분이 필요하면 세션에서 말로 부탁하세요.
//  마지막 갱신: 2026-09-01
// ============================================================

const PLANNER = {
  updated: "2026-09-01",

  tasks: [
    // ───────────────────────────────────────────────
    {
      id: "graphrag-slides",
      title: "GraphRAG 발표자료 📽️",
      priority: 1,
      deadline: "2026-08-26",
      deadlineNote: "수요일(8/26)까지 — 촉박",
      note: "GraphRAG 관련 발표자료 작성. 마감이 이번 수요일(8/26)이라 이틀밖에 없음 — 최우선으로 뺄 것.",
      steps: [
        { id: "graphrag-slides-1", date: "2026-08-25", text: "발표 구성·핵심 메시지 잡고 자료·그림 수집 → 초안 슬라이드 작성" },
        { id: "graphrag-slides-2", date: "2026-08-26", text: "슬라이드 다듬기 + 발표 흐름 점검 후 완성 (수요일 마감)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "pie-camera-ready",
      title: "EMNLP PIE 논문 Camera-ready 📄",
      priority: 1,
      deadline: "2026-08-30",
      deadlineNote: "Camera-ready 마감 8/30",
      note: "EMNLP에 제출·채택된 PIE 논문의 Camera-ready 버전 작성. 리뷰어 코멘트 최종 반영 + 저작권/양식·분량·참고문헌 정리해서 8/30까지 제출.",
      steps: [
        { id: "pie-camera-ready-1", date: "2026-08-27", text: "리뷰어·메타리뷰 코멘트 최종 반영 + 본문 수정사항 정리" },
        { id: "pie-camera-ready-2", date: "2026-08-29", text: "Camera-ready 양식 맞추기 — 저자정보·저작권 블록·분량·그림/표·참고문헌 정리" },
        { id: "pie-camera-ready-3", date: "2026-08-30", text: "최종 점검 후 Camera-ready 제출 (마감)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "nrf",
      title: "NRF 제안서 — 페르소나 + 장기대화 (기본연구B)",
      priority: 3,
      deadline: "2026-09-15",
      deadlineNote: "1차본 교수님 전달 완료 — 나머지 보완은 천천히",
      note: "1차 작성본은 교수님께 전달 완료. 남은 건 부속 서식(개인정보·과세 동의서, 신청자격·신분 확인서)과 본문 보완·최종 취합 — 급하지 않게 천천히 마무리하면 됨. 방향(교수님 회의 반영): on-device는 sLM 기반 → 일반 상식은 sLM이 distillation으로 보유, KG에는 도메인 지식 + 페르소나만. 참조: 2026 NRF/서식_추출/03. 핵심연구(기본연구B)/.",
      steps: [
        { id: "nrf-8", date: "2026-09-05", text: "부속 서식 작성 — 개인정보·과세정보 제공활용 동의서 + 제3자 제공 동의서, 신청자격·신분 확인서" },
        { id: "nrf-9", date: "2026-09-15", text: "본문 보완 + 최종 취합·점검 → 교수님께 전달" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "helea",
      title: "HELEA 논문 — ACM 형식 변환 📝",
      priority: 2,
      deadline: "2026-08-24",
      deadlineNote: "Abstract 8/17, Full paper 8/24",
      note: "ACL에 냈던 HELEA 논문을 ACM 형식(acmart)으로 변환해 재제출. 새 연구가 아니라 포맷 변환이라 오래 걸리진 않지만 그림·표·참고문헌 스타일 손보는 게 조금 번거로움. Abstract 마감 8/17, Full paper 마감 8/24.",
      steps: [
        { id: "helea-4", date: "2026-08-24", text: "Full paper 최종 점검 + 제출 (마감)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "dad-birthday",
      title: "아빠 생신 선물 준비 🎁",
      priority: 2,
      deadline: "2026-08-31",
      deadlineNote: "8/31 생신 — 그 전까지 준비",
      note: "아빠 생신(8/31) 선물 준비. 늦지 않게 미리 정하고 주문/구입해둘 것.",
      steps: [
        { id: "dad-birthday-1", date: "2026-08-27", text: "선물 후보 정하기 (예산·취향 고려)" },
        { id: "dad-birthday-2", date: "2026-08-29", text: "주문/구입 — 배송 여유 두고 확보" },
        { id: "dad-birthday-3", date: "2026-08-31", text: "생신 챙기기 🎂" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "dataset-qa",
      title: "데이터셋 검수 관리 — 인턴 배분 🗂️",
      priority: 2,
      deadline: "2026-09-11",
      deadlineNote: "다음주까지 검수 파일 완성 → 이후 매주 인턴 배분·관리",
      note: "데이터셋 검수 관리. 다음주까지 페르소나·토픽 모델링·번역 작업 검수 파일을 만들어두는 게 선행 작업. 그 이후로 매주 인턴들에게 나눠주며 검수 진행·관리(반복 업무).",
      steps: [
        { id: "dataset-qa-1", date: "2026-09-04", text: "페르소나 검수 파일 만들기" },
        { id: "dataset-qa-2", date: "2026-09-08", text: "토픽 모델링 검수 파일 만들기" },
        { id: "dataset-qa-3", date: "2026-09-11", text: "번역 작업 검수 파일 만들기 → 검수 파일 세트 완성" },
        { id: "dataset-qa-4", date: "2026-09-14", text: "인턴 배분 시작 + 매주 검수 관리 (이후 매주 반복)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "next-topic",
      title: "논문 — diffusion LLM (WSDM short / NAACL 목표) 🧪",
      priority: 3,
      deadline: "2026-11-15",
      deadlineNote: "WSDM short(11월)·NAACL 목표 — 되면 제출, 아니면 말고",
      note: "기존 다자대화+장기대화+페르소나 벤치마크는 다른 학생들에게 넘김. 지금은 diffusion LLM 관련 연구를 WSDM short(11월)/NAACL 목표로 진행. 조금씩 천천히 써보다 완성되면 제출, 무리면 다음 기회로 미루는 저우선 트랙.",
      steps: [
        { id: "nt-20", date: "2026-09-30", text: "diffusion LLM 연구 방향·실험 셋업 구체화 + 관련 연구 정리" },
        { id: "nt-21", date: "2026-10-20", text: "핵심 실험 진행 + 결과 정리 (WSDM short 분량 기준)" },
        { id: "nt-22", date: "2026-11-15", text: "가능하면 WSDM short/NAACL 제출 (안 되면 다음 기회로)" }
      ]
    }
  ]
};
