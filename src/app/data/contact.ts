import type { ContactContent } from "@/app/types/contact";

export const contactContent: ContactContent = {
  title: "저의 작업물을 확인해 주셔서 감사합니다",
  description:
    "저에 대해 궁금하신 점이 있으시다면 편하게 연락주세요. 확인 후 빠르게 답변드리겠습니다.",
  links: [
    {
      id: "email",
      label: "Email",
      value: "guiyoung22@naver.com",
      href: "mailto:guiyoung22@naver.com",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/guiyoung2",
      href: "https://github.com/guiyoung2",
    },
    {
      id: "phone",
      label: "Phone",
      value: "010-6426-2375",
    },
  ],
  note: {
    text: "개발에는 Claude Code와 Codex를 설계 검토·코드 리뷰에 활용합니다. 다만 구현 전에 요구사항의 범위와 완료 기준을 먼저 정리하고, 각 단계를 검증한 뒤 다음으로 넘어가는 순서는 직접 지킵니다. 반복되는 작업 흐름은 개발 하네스로 정리해 개인 프로젝트에 적용하고 있습니다.",
    links: [
      {
        label: "harness_framework",
        href: "https://github.com/guiyoung2/harness_framework",
      },
      {
        label: "claude-workbook",
        href: "https://claude-workbook.vercel.app/",
      },
    ],
  },
};
