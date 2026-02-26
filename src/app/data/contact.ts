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
};
