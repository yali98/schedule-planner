// ============================================================
//  스케줄 데이터 — 이 파일은 Claude(이 세션)가 편집합니다.
//  세부 목표 추가/기한 재배분이 필요하면 세션에서 말로 부탁하세요.
//  마지막 갱신: 2026-10-14
// ============================================================

const PLANNER = {
  updated: "2026-10-14",

  tasks: [
    // ───────────────────────────────────────────────
    {
      id: "taslp-multiparty",
      title: "다자대화 논문 — IEEE TASLP 제출 📮",
      priority: 1,
      deadline: "2026-10-23",
      deadlineNote: "다음주 금요일(10/23)까지 제출 목표",
      note: "논문 형식은 TASLP에 맞춰 변경 완료. 제출 사항에 이전 투고에서 reject된 이유를 명시해야 해서, 해당 서술(reject 사유 + 이번 수정 반영 내역)을 작성 중.",
      steps: [
        { id: "taslp-multiparty-1", date: "2026-10-16", text: "이전 reject 사유 명시 서술 작성 완료 (진행 중)" },
        { id: "taslp-multiparty-2", date: "2026-10-20", text: "사유별 수정 반영 내역을 본문과 대조 정리 + 전체 최종 점검(형식·참고문헌·그림)" },
        { id: "taslp-multiparty-3", date: "2026-10-22", text: "제출 서류·업로드 준비 (cover letter, 파일 구성)" },
        { id: "taslp-multiparty-4", date: "2026-10-23", text: "IEEE TASLP 제출" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "dialogue-study",
      title: "대화 스터디 (격주 수요일) 📚",
      priority: 2,
      deadline: "2026-12-23",
      deadlineNote: "2주에 한 번, 10/14부터 시작 — 12/23까지 6회 (이후 연장 가능)",
      note: "격주 수요일 대화 스터디. 오늘(10/14)부터 시작.",
      steps: [
        { id: "dialogue-study-1", date: "2026-10-14", text: "대화 스터디 1회차" },
        { id: "dialogue-study-2", date: "2026-10-28", text: "대화 스터디 2회차" },
        { id: "dialogue-study-3", date: "2026-11-11", text: "대화 스터디 3회차" },
        { id: "dialogue-study-4", date: "2026-11-25", text: "대화 스터디 4회차" },
        { id: "dialogue-study-5", date: "2026-12-09", text: "대화 스터디 5회차" },
        { id: "dialogue-study-6", date: "2026-12-23", text: "대화 스터디 6회차" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "paper-seminar",
      title: "논문 세미나 발표 준비 🎤",
      priority: 2,
      deadline: "2026-09-23",
      deadlineNote: "다음주 수요일(9/23) 세미나 — 발표자료는 완성, 논문·자료 재검토만 남음",
      note: "발표자료 작성 완료. 세미나 전에 논문 한 번 더 정독하고 발표자료 쭉 훑어보기.",
      steps: [
        { id: "paper-seminar-1", date: "2026-09-22", text: "논문 재정독 + 발표자료 쭉 읽어보며 흐름 점검" },
        { id: "paper-seminar-2", date: "2026-09-23", text: "논문 세미나 발표" }
      ]
    },

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
      title: "NRF 제안서 — 유형B 장기대화중심 (본문 + 그림) ✍️",
      priority: 2,
      deadline: "2026-09-25",
      deadlineNote: "금요일(9/25) 목표 — 본문 마무리 + 그림 작업 포함, 교수님 전달",
      note: "초안 작성 완료, 검토반영본 기준으로 항목별 순차 수정 중. 최신본: 2026 NRF/연구계획서_유형B_장기대화중심_검토반영본_20260913.hwpx. 본문 구성: 1)필요성 2)연구목표·내용(5개 연구축) 3)추진전략·방법+추진체계 4)연구역량(6항목) 5)활용방안+기대효과. 아직 실제 공고가 뜬 게 아니라 미리 작성 중인 단계라 대표실적·부속서식(개인정보·과세 동의서 등)은 지금 단계에서 제외 — 본문 완성 + 그림 작업까지만 진행하고 교수님께 전달.",
      steps: [
        { id: "nrf-13", date: "2026-09-17", text: "5) 활용방안 + 기대효과(과학기술·경제산업·사회적) 수정 마무리" },
        { id: "nrf-14", date: "2026-09-21", text: "본문 전체 일관성 + 분량(10P 이내) 점검" },
        { id: "nrf-15", date: "2026-09-23", text: "그림(Figure) 작업 — NRF_Figure.pptx 기반 도식 제작·정리" },
        { id: "nrf-16", date: "2026-09-25", text: "최종 점검 → 금요일 교수님 전달" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "next-topic",
      title: "논문 — diffusion LLM (ARR 1월 / ACL 2027 목표) 🧪",
      priority: 2,
      deadline: "2027-01-15",
      deadlineNote: "ARR 1월 사이클(ACL 2027) 목표 — 정확한 날짜 미공개, 내부 목표 1/15 (공지되면 조정)",
      note: "메인 트랙 중 하나. ARR 10월 사이클(10/12)은 지나서 준비 기간을 늘림 — ACL 2027의 마지막 ARR 제출이 'January, 2027'로만 공지돼 있어 내부 목표를 1/15로 잡음. WSDM 2027 short(마감 11/17)는 일정이 되면 보너스로만 고려. 대화 벤치마크 트랙과는 별개.",
      steps: [
        { id: "nt-20", date: "2026-10-21", text: "diffusion LLM 연구 방향·실험 셋업 확정 + 관련 연구 정리" },
        { id: "nt-21", date: "2026-11-20", text: "핵심 실험 1차 결과 정리 (WSDM short 11/17은 사실상 패스, 되면 보너스)" },
        { id: "nt-22", date: "2026-12-16", text: "추가 실험·ablation + 논문 초안 작성" },
        { id: "nt-23", date: "2027-01-08", text: "초안 완성 + 내부 검토" },
        { id: "nt-24", date: "2027-01-15", text: "ARR 1월 사이클 제출 목표 (정확한 날짜 공지되면 조정)" }
      ]
    },

    // ───────────────────────────────────────────────
    {
      id: "dialogue-benchmark",
      title: "대화 벤치마크 프레임워크 구축 + 논문 (ARR 1월 목표) 💬",
      priority: 2,
      deadline: "2027-01-15",
      deadlineNote: "ARR 1월 사이클(ACL 2027) 목표 — 정확한 날짜 미공개, 내부 목표 1/15 (공지되면 조정)",
      note: "메인 트랙 중 하나. 대화 통합 벤치마크 프레임워크 + 모델. diffusion LLM과는 별개 트랙. 이미 진행된 부분이 있어 설계 확정부터 이어가되, 10월 ARR 사이클을 놓쳤으므로 일정을 늦춰 1월 ARR(ACL 2027) 목표로 재배분. WSDM 2027 short(11/17)는 보너스.",
      steps: [
        { id: "dialogue-benchmark-1", date: "2026-10-28", text: "벤치마크 프레임워크 설계 확정 — 태스크·스키마·평가 지표" },
        { id: "dialogue-benchmark-2", date: "2026-11-25", text: "프레임워크 구현 + 데이터 구성·정제" },
        { id: "dialogue-benchmark-3", date: "2026-12-23", text: "모델 실험·베이스라인 비교 + 결과 정리" },
        { id: "dialogue-benchmark-4", date: "2027-01-08", text: "논문 초안 완성 + 내부 검토" },
        { id: "dialogue-benchmark-5", date: "2027-01-15", text: "ARR 1월 사이클 제출 목표 (정확한 날짜 공지되면 조정)" }
      ]
    }
  ]
};
