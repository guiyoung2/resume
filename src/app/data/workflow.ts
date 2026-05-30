import type {
  WorkflowStep,
  HarnessItem,
  ArchiveItem,
} from "@/app/types/workflow";

export const workflowIntro =
  "AI 도구를 단순히 사용하는 것이 아니라, 프로젝트마다 적합한 개발 체계 자체로 설계해 적용합니다. 기능 구현 전 요구사항을 명확화하고 다중 검증을 거치는 과정을 반복 가능한 프레임워크로 만들고 있습니다.";

export const workflowSteps: WorkflowStep[] = [
  {
    step: "①",
    title: "요구사항 명확화",
    description:
      "기능 구현 전 범위·제약·완료 기준 정리. 흐린 채로 작업 시작하지 않음.",
  },
  {
    step: "②",
    title: "계획 수립",
    description:
      "Claude Code 및 Codex로 단계별 구현 계획 작성. 파일·함수 단위 사전 설계.",
  },
  {
    step: "③",
    title: "다중 검증",
    description:
      "Claude Code 및 Codex 등 다른 에이전트 모델로 2차 검토. 한 모델이 놓친 부분을 다른 모델이 보완.",
  },
  {
    step: "④",
    title: "구현",
    description: "검증된 계획 기반 단계별 작업. 단계마다 검증 후 다음 진행.",
  },
];

export const harnessItems: HarnessItem[] = [
  {
    name: "harness_framework",
    description:
      "신규·기존 프로젝트에 반복 적용 가능한 범용 프레임워크. 리팩토링용을 만든 경험에서 더 보편적인 흐름을 추출해 별도로 구축. 신규 프로젝트에 검증 적용 중.",
    githubUrl: "https://github.com/guiyoung2/harness_framework",
  },
  {
    name: "gy_rf_harness_framework",
    description:
      "기존 4개 개인 프로젝트의 코드 품질에 한계를 느껴 2026년 5월에 구축한 맞춤 하네스. 공통 리팩토링 흐름(번들 최적화, 테스트 인프라, CI 자동화 등)을 체계화하기 위해 직접 설계.",
    appliedProjects: "VibeBoard, LogOfReview, Notion Blog, GeminiChat",
    githubUrl: "https://github.com/guiyoung2/gy_rf_harness_framework",
  },
];

export const archiveItem: ArchiveItem = {
  name: "claude-workbook",
  description:
    "AI 도구·스킬·플러그인 활용법을 직접 정리·운영하는 학습 아카이브. 새로운 도구·기법을 발견하면 적용 가능한 형태로 항상 정리.",
  liveUrl: "https://claude-workbook.vercel.app/",
  githubUrl: "https://github.com/guiyoung2/claude-workbook",
};
