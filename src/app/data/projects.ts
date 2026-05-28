import type { ProjectItem } from "@/app/types/project";

export const projects: ProjectItem[] = [
  {
    id: 8,
    title: "GeminiChat",
    description:
      "Google Gemini API 기반 실시간 AI 채팅과 구독 결제를 통합한 SaaS 서비스입니다.",
    detailedDescription:
      "Google Gemini API를 기반으로 실시간 AI 채팅과 구독 결제를 통합한 SaaS 서비스입니다. 단순 채팅 기능을 넘어 '가입 → 무료 플랜 시작 → 한도 도달 → 업그레이드 유도 → 결제 → 기능 해제'로 이어지는 SaaS 비즈니스 흐름 전체를 직접 설계하고 구현했습니다. 결제 완료 신호는 Webhook으로 서버 간 처리하고, 사용량 차감은 AI 응답 성공 후에만 기록하는 등 실제 서비스 수준의 안정성을 고려해 구현했습니다. 리팩토링 단계에서 직접 구축한 gy_rf_harness_framework를 기반으로 재구성했습니다.",
    highlights: [
      "AI 스트리밍: ReadableStream으로 Gemini 응답을 청크 단위 전달, 스트리밍 중 임시 ID 관리 후 DB 저장 완료 시 실제 ID로 교체",
      "사용량 제어: 한도 선체크 → Gemini 호출 성공 후에만 카운트 기록, API 실패 시 차감되지 않도록 처리",
      "결제 연동: Polar Webhook 서명 검증(validateEvent) 후 구독 상태 자동 갱신, 검증 실패 시 403 반환으로 위조 요청 차단",
      "보안: Supabase RLS로 사용자별 데이터 격리, 사용자 IP를 AES-256-GCM으로 암호화 후 DB 저장",
      "대화 문맥: 이전 메시지를 Gemini history 파라미터로 주입해 멀티턴 대화 지원, 날짜별 사이드바 그룹핑(오늘 / 어제 / 이번 주)",
      "테스트: Vitest 기반 테스트 커버리지 24.19% 달성 (34개 케이스)",
    ],
    detailedTechStack:
      "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Supabase (Auth/PostgreSQL/RLS), Google Gemini API, Polar, Framer Motion, Vercel",
    projectType: "개인 프로젝트",
    period: "2026. 04. ~ 2026. 05.",
    githubUrl: "https://github.com/guiyoung2/gemini-chat",
    liveUrl: "https://gemini-gy-ruby.vercel.app/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "Tailwind CSS",
      "Polar",
    ],
    thumbnailSrc: "/projects/geminiChat.webp",
    thumbnailAlt: "GeminiChat 프로젝트 썸네일",
  },
  {
    id: 7,
    title: "Notion Blog",
    description:
      "Notion을 CMS로 활용해 태그 필터링·무한 스크롤·동적 SEO를 제공하는 개인 개발 블로그입니다.",
    detailedDescription:
      "Notion을 CMS처럼 활용해 기술 글을 발행하고, 태그 필터링·무한 스크롤·동적 SEO를 제공하는 개인 개발 블로그입니다. 별도의 관리자 페이지 없이 Notion에서 콘텐츠를 관리하고, 서비스에서는 이를 블로그 UI와 탐색 경험에 맞게 가공해 보여주도록 구현했습니다. 리팩토링 단계에서 직접 구축한 gy_rf_harness_framework를 기반으로 재구성했습니다.",
    highlights: [
      "CMS 연동: Notion API를 CMS처럼 연동해 별도 관리자 페이지 없이 포스트 발행 및 콘텐츠 관리 구조 구현",
      "캐싱 전략: unstable_cache와 캐시 태그 갱신 전략 적용, 클라이언트 필터링에서 Notion API 쿼리 레벨 필터링으로 전환해 반복 조회 비용 절감",
      "무한 스크롤: TanStack Query useInfiniteQuery 기반 무한 스크롤을 구현해 포스트 탐색 경험 개선",
      "MDX 렌더링: rehype-pretty-code를 적용해 코드 포함 기술 글 가독성 강화",
      "TOC: 헤딩 기반 TOC 자동 추출로 모바일/데스크톱 반응형 목차 UI를 구성해 긴 글 탐색성 개선",
      "SEO: generateMetadata와 동적 OG 이미지 생성으로 포스트 단위 SEO 및 공유 미리보기 품질 개선",
      "다크 모드: 다크 모드 지원으로 블로그 운영 기능 확장",
      "테스트: 0개 → 27개 추가, 커버리지 23% 달성",
      "검증: Lighthouse 리팩토링 전후 CWV 무변화 검증",
      "문서: README 코드 불일치 8건 식별 및 수정",
    ],
    detailedTechStack:
      "Next.js 16, React 19, TypeScript, TanStack Query 5, Notion API, MDX, Tailwind CSS 4, shadcn/ui, Giscus, Vercel",
    projectType: "개인 프로젝트",
    period: "2026. 03. ~ 2026. 05.",
    githubUrl: "https://github.com/guiyoung2/notion-blog",
    liveUrl: "https://notion-blog-rose-phi.vercel.app",
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Notion API",
      "Tailwind CSS",
      "MDX",
    ],
    thumbnailSrc: "/projects/notionBlog.webp",
    thumbnailAlt: "Notion Blog 프로젝트 썸네일",
  },
  {
    id: 1,
    title: "VibeBoard",
    description:
      "위치 기반 보드게임 카페 검색, 추천, 후기 작성 웹 서비스입니다.",
    detailedDescription:
      "카카오 지도 기반으로 주변 보드게임 카페를 검색하고, 후기를 작성·공유할 수 있는 웹 서비스입니다. Supabase를 통해 서버 데이터 조회와 사용자 인증을 구성하고, React Query로 서버 상태를, Zustand로 클라이언트 상태를 역할별로 분리해 관리했습니다. 리팩토링 단계에서 직접 구축한 gy_rf_harness_framework를 기반으로 재구성했습니다.",
    highlights: [
      "문제: 데이터 조회, 인증, 전역 상태가 분산되어 기능 간 흐름을 일관되게 유지하기 어려웠습니다.",
      "해결: Supabase(Auth/DB)와 React Query(서버 상태), Zustand(클라이언트 상태)를 역할별로 분리하고 카카오 로컬/맵 SDK를 추상화했습니다.",
      "성능: manualChunks로 초기 번들 8.4 MB → ~560 KB 축소, CLS 0.295 → 0.123 (-58%), Performance 62 → 72점 개선",
      "테스트: Vitest + RTL + MSW 테스트 인프라 구축 (24개 테스트)",
      "CI: GitHub Actions 기반 CI 자동화",
    ],
    detailedTechStack:
      "React 19.2.0, TypeScript 5.9.3, TanStack Query 5.90.12, Zustand 5.0.9, React Router 7, Vite 7, Tailwind CSS 4, Supabase, 카카오 로컬 API, 카카오맵 JavaScript SDK, Vitest, GitHub Actions, Vercel",
    projectType: "개인 프로젝트",
    period: "2025. 12. ~ 2026. 05.",
    githubUrl: "https://github.com/guiyoung2/VibeBoard",
    liveUrl: "https://vibeboard-nine.vercel.app",
    techStack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "Supabase",
    ],
    thumbnailSrc: "/projects/vibeboard.webp",
    thumbnailAlt: "VibeBoard 프로젝트 썸네일",
  },
  {
    id: 2,
    title: "리뷰 블로그 (LogOfReview)",
    description:
      "URL 상태 관리와 테스트 커버리지 60%를 달성한 리뷰 블로그 프로젝트입니다.",
    detailedDescription:
      "리뷰 작성/조회/댓글 기능을 중심으로 구성한 블로그 프로젝트입니다. URL 상태 직렬화, 환경별 데이터 전략 분리, 인증 일원화를 통해 배포 안정성과 유지보수성을 강화했습니다. 리팩토링 단계에서 직접 구축한 gy_rf_harness_framework를 기반으로 재구성했습니다.",
    highlights: [
      "URL 상태: useSearchParams로 검색어·카테고리·정렬 상태를 URL에 직렬화해 새로고침·공유 시 상태 유지",
      "API 레이어: dataSource.ts 단일 파일로 환경별 데이터 전략을 분리해 배포 환경 테스트 데이터 누적 방지",
      "인증: ProtectedRoute로 인증 흐름 일원화, Zustand persist + Axios 인터셉터로 인증 상태 영속화",
      "테스트: 0개 → 22개 추가, 커버리지 60.31% 달성",
      "성능: 초기 번들 124 kB → 61.6 kB (-50%), TBT 660ms → 610ms 개선",
    ],
    detailedTechStack:
      "React 19.2.0, TypeScript 5.9.3, TanStack Query 5.90.11, Zustand 5.0.9, Axios, Styled Components, React Router 7, Vite 7, Vitest, GitHub Actions, Vercel",
    projectType: "개인 프로젝트",
    period: "2025. 12. ~ 2026. 05.",
    githubUrl: "https://github.com/guiyoung2/LogOfReview",
    liveUrl: "https://log-of-review.vercel.app/",
    techStack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Styled Components",
    ],
    thumbnailSrc: "/projects/logofreview.webp",
    thumbnailAlt: "리뷰 블로그 (LogOfReview) 프로젝트 썸네일",
  },
];
