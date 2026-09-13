// ============================================================
//  스케줄 데이터 — 이 파일은 Claude(이 세션)가 편집합니다.
//  세부 목표 추가/기한 재배분이 필요하면 세션에서 말로 부탁하세요.
//  마지막 갱신: 2026-09-10
// ============================================================

const PLANNER = {
  updated: "2026-09-10",

  tasks: [
    // ───────────────────────────────────────────────
    {
      id: "rag-presentation",
      title: "RAG 수업 발표 준비 — Corpus-aware pre-training 논문 🎤",
      priority: 2,
      deadline: "2026-10-13",
      deadlineNote: "10/13 발표 — 자료는 일주일 전인 10/6까지 완성",
      note: "발표 논문: Gao, Luyu, and Jamie Callan. \"Unsupervised corpus aware language model pre-training for dense passage retrieval.\" ACL 2022 (Long Papers). 발표자료는 10/6까지 완성하고 이후에는 리허설과 보완만 진행.",
      steps: [
        { id: "rag-presentation-1", date: "2026-09-25", text: "논문 정독 + 핵심 문제·방법·실험·결론 요약" },
        { id: "rag-presentation-2", date: "2026-10-02", text: "발표 구성 확정 + 핵심 그림·표 선정, 슬라이드 초안 작성" },
        { id: "rag-presentation-3", date: "2026-10-06", text: "발표자료 완성 (발표 일주일 전)" },
        { id: "rag-presentation-4", date: "2026-10-11", text: "발표 리허설 + 예상 질문 정리·슬라이드 보완" },
        { id: "rag-presentation-5", date: "2026-10-13", text: "RAG 수업 발표" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "rag-weekly-questions",
      title: "RAG 수업 — 매주 질문 올리기 (14주) ❓",
      priority: 2,
      deadline: "2026-12-13",
      deadlineNote: "9/13부터 14주간 매주 일요일 마감",
      note: "매주 해당 주차 RAG 수업 자료를 읽고, 단순 요약보다 토론 가능한 질문을 하나 이상 작성해 일요일까지 올리기.",
      steps: [
        { id: "rag-question-1", date: "2026-09-13", text: "1주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-2", date: "2026-09-20", text: "2주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-3", date: "2026-09-27", text: "3주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-4", date: "2026-10-04", text: "4주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-5", date: "2026-10-11", text: "5주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-6", date: "2026-10-18", text: "6주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-7", date: "2026-10-25", text: "7주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-8", date: "2026-11-01", text: "8주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-9", date: "2026-11-08", text: "9주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-10", date: "2026-11-15", text: "10주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-11", date: "2026-11-22", text: "11주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-12", date: "2026-11-29", text: "12주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-13", date: "2026-12-06", text: "13주차 RAG 수업 질문 올리기 (일요일)" },
        { id: "rag-question-14", date: "2026-12-13", text: "14주차 RAG 수업 질문 올리기 (일요일)" }
      ]
    },


    // ───────────────────────────────────────────────
    {
      id: "grant-survey",
      title: "1년치 과제 조사 (과기정통부 제외) 🔎",
      priority: 2,
      deadline: "2026-09-11",
      deadlineNote: "다음주 금요일(9/11)경까지",
      note: "지난 1년치 (공모)과제 조사 — 과학기술정보통신부(MSIT)는 제외. 부처·기관별 공고를 훑어 지원 가능 후보를 마감·자격·규모와 함께 목록화·우선순위화.",
      steps: [
        { id: "grant-survey-1", date: "2026-09-05", text: "조사 범위·출처 확정 — 부처/기관 목록화(과기정통부 제외), 검색처(NTIS·각 부처 공고) 정리" },
        { id: "grant-survey-2", date: "2026-09-09", text: "1년치 공고 훑고 후보 과제 목록화 — 마감·신청자격·과제규모 정리" },
        { id: "grant-survey-3", date: "2026-09-11", text: "후보 정리·우선순위 표 완성 (9/11 목표)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "paper-csl",
      title: "기존 논문 CSL 저널 타겟 재수정 📝",
      priority: 2,
      deadline: "2026-09-11",
      deadlineNote: "다음주 금요일(9/11)경까지",
      note: "기존 논문을 CSL(Computer Speech & Language) 저널 타겟으로 재수정. 저널 스코프·형식에 맞춰 본문·구성 조정하고 참고문헌·투고 규정 정리.",
      steps: [
        { id: "paper-csl-1", date: "2026-09-05", text: "CSL 투고 규정·형식 확인(스코프·분량·참고문헌 스타일) + 재수정 계획 수립" },
        { id: "paper-csl-2", date: "2026-09-09", text: "본문 CSL 타겟에 맞춰 재구성·수정 — 스코프·기여 강조 조정" },
        { id: "paper-csl-3", date: "2026-09-11", text: "형식·참고문헌 정리 + 최종 점검 (9/11 목표)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "nrf",
      title: "NRF 제안서 — 유형B 장기대화중심 (본문 순차 수정) ✍️",
      priority: 2,
      deadline: "2026-09-18",
      deadlineNote: "금요일(9/18)까지 본문(2~5번) 순차 수정 마무리 목표 — 실적·서식은 이후",
      note: "초안 작성 완료, 검토반영본 기준으로 항목별 순차 수정 중. 최신본: 2026 NRF/연구계획서_유형B_장기대화중심_검토반영본_20260913.hwpx (수정내용 정리: 연구계획서_장기대화중심_수정내용_20260913.md). 본문 구성: 1)필요성 2)연구목표·내용(5개 연구축) 3)추진전략·방법+추진체계 4)연구역량(6항목) 5)활용방안+기대효과. 남은 순서 = 2→3→4→5 순차 수정 후 일관성·분량(10P 이내) 점검. 대표적 연구실적 5건(요약문+증빙)·부속서식(개인정보·과세 동의서 등)은 그 다음.",
      steps: [
        { id: "nrf-10", date: "2026-09-14", text: "2) 연구과제의 내용 수정 — 5개 연구축(계층적 기억구조·중요도/저장정책·구조기반 검색/시간변화 적응·주제·목표 대화전략·다자 관점추론·공동최적화) 다듬기" },
        { id: "nrf-11", date: "2026-09-15", text: "3) 추진전략·방법 + 추진체계 정합화 — 연차 로드맵·4개 팀 역할 정리" },
        { id: "nrf-12", date: "2026-09-16", text: "4) 연구역량 6항목 정리 — 지식그래프·대화시스템·수행능력·논문/특허·LLM 생성기술·인력 확보" },
        { id: "nrf-13", date: "2026-09-17", text: "5) 활용방안 + 기대효과(과학기술·경제산업·사회적) 수정" },
        { id: "nrf-14", date: "2026-09-18", text: "본문 전체 일관성 + 분량(10P 이내) 점검 → 금요일 1차 마무리" },
        { id: "nrf-15", date: "2026-09-22", text: "대표적 연구실적 5건 요약문 작성(최근 5년, 질적 우수성·연구계획 연관성) + 증빙 스캔 정리" },
        { id: "nrf-16", date: "2026-09-24", text: "부속서식(개인정보·과세 제공활용/제3자 제공 동의서, 신청자격·신분 확인서) + 최종 취합 → 교수님 전달" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "next-topic",
      title: "논문 — diffusion LLM (WSDM short / NAACL 목표) 🧪",
      priority: 3,
      deadline: "2026-11-17",
      deadlineNote: "WSDM 2027 short 마감 11/17 (또는 NAACL=ARR 10월 10/12) — 되면 제출",
      note: "기존 다자대화+장기대화+페르소나 벤치마크는 다른 학생들에게 넘김. diffusion LLM 관련 연구를 WSDM short/NAACL 목표로 진행(대화 통합 벤치마크 트랙과는 별개). 조금씩 천천히 써보다 완성되면 제출, 무리면 다음 기회로 미루는 저우선 트랙. WSDM 2027 short 제출 마감 11/17(통지 12/18, 개최 2027.2.15~19 홍콩) / NAACL은 ACL Rolling Review 10월 사이클 마감 10/12(→NAACL 2027) — 둘 중 준비되는 쪽으로.",
      steps: [
        { id: "nt-20", date: "2026-09-28", text: "diffusion LLM 연구 방향·실험 셋업 구체화 + 관련 연구 정리" },
        { id: "nt-21", date: "2026-10-25", text: "핵심 실험 진행 + 결과 정리 (short 분량 기준) — 빠르면 ARR 10/12도 노려봄" },
        { id: "nt-22", date: "2026-11-17", text: "가능하면 WSDM 2027 short 제출 (안 되면 다음 기회로)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "dialogue-benchmark",
      title: "논문 후보 — 대화 통합 벤치마크 및 모델 💬",
      priority: 3,
      deadline: "2026-11-17",
      deadlineNote: "WSDM 2027 short 마감 11/17 (또는 NAACL=ARR 10월 10/12) — 되면 제출",
      note: "페르소나 벤치마크 대신 WSDM short/NAACL에 낼까 고민 중인 후보. diffusion LLM과는 별개 트랙 — 대화 통합 벤치마크 및 모델. 천천히 진행하다 가능하면 제출. WSDM 2027 short 제출 마감 11/17(통지 12/18, 개최 2027.2.15~19 홍콩) / NAACL은 ACL Rolling Review 10월 사이클 마감 10/12 → NAACL 2027 — 둘 중 준비되는 쪽으로.",
      steps: [
        { id: "dialogue-benchmark-1", date: "2026-09-22", text: "대화 통합 벤치마크 설계 + 통합 모델 방향 정리" },
        { id: "dialogue-benchmark-2", date: "2026-10-25", text: "벤치마크 구성·정제 + 모델 실험 진행 — 빠르면 ARR 10/12도 노려봄" },
        { id: "dialogue-benchmark-3", date: "2026-11-17", text: "가능하면 WSDM 2027 short 제출 (안 되면 다음 기회로)" }
      ]
    }
  ]
};
