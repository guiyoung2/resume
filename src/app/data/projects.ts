import type { ProjectItem } from "@/app/types/project";

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "VibeBoard",
    description:
      "Supabase 기반 데이터 조회와 인증, React Query/Zustand 상태 관리를 통합한 웹 프로젝트입니다.",
    detailedDescription:
      "Supabase를 통해 서버 데이터 조회와 사용자 인증을 구성하고, React Query로 서버 상태를, Zustand로 클라이언트 상태를 분리해 관리한 프로젝트입니다. 로그인부터 리뷰 작성, 카페 검색까지 하나의 사용자 흐름으로 연결해 서비스 완성도를 높였습니다.",
    highlights: [
      "문제: 데이터 조회, 인증, 전역 상태가 분산되어 기능 간 흐름을 일관되게 유지하기 어려웠습니다.",
      "해결: Supabase(Auth/DB)와 React Query(서버 상태), Zustand(클라이언트 상태)를 역할별로 분리해 설계했습니다.",
      "결과: 로그인·리뷰·카페 검색 흐름을 안정적으로 연결했고 Lighthouse 점수를 47 → 91로 개선했습니다.",
    ],
    detailedTechStack:
      "React 19.2.0, TypeScript 5.9.3, React Query 5.90.12, Zustand 5.0.9, React Router DOM 7.11.0, Vite 7.2.4, Tailwind CSS 4.1.18, Supabase, 카카오 로컬 API, 카카오맵 JavaScript SDK, Vercel",
    projectType: "개인 프로젝트",
    period: "2025. 12. ~ 2026. 01.",
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
    description: "리뷰를 작성하고 조회할 수 있는 블로그 프로젝트입니다.",
    detailedDescription:
      "리뷰 작성/조회/댓글 기능을 중심으로 구성한 블로그 프로젝트입니다. 서버 상태 관리, 인증 상태 영속화, 환경별 데이터 전략 분리를 통해 배포 안정성과 유지보수성을 강화한 프로젝트입니다.",
    highlights: [
      "문제: 검색/정렬/댓글 변경이 많은 화면에서 데이터 동기화와 인증 상태 유지를 안정적으로 관리해야 했습니다.",
      "해결: React Query queryKey 설계와 invalidateQueries를 적용하고, Zustand persist와 Axios 인터셉터로 인증 흐름을 통합했습니다.",
      "결과: 조건 변경 시 재요청과 댓글 갱신이 즉시 반영되고, 배포 환경에서 테스트 데이터 누적을 방지했습니다.",
    ],
    detailedTechStack:
      "React 19.2.0, TypeScript 5.9.3, React Query 5.90.11, Zustand 5.0.9, Axios, Styled Components, React Router DOM, Vercel",
    projectType: "개인 프로젝트",
    period: "2025. 12. ~ 2025. 12.",
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
  {
    id: 3,
    title: "emotionDiary",
    description: "투두리스트 형식처럼 하루 감정을 기록하는 프로젝트입니다.",
    detailedDescription:
      "하루 감정을 기록/수정/삭제하는 흐름을 중심으로 구현한 웹앱 프로젝트입니다. 상태 관리의 명확한 경계를 목표로 Context 분리, reducer 설계, localStorage 동기화를 체계적으로 적용한 프로젝트입니다.",
    highlights: [
      "문제: 일기 CRUD와 localStorage 영속화를 함께 처리하면서 상태 일관성과 타입 안정성을 유지해야 했습니다.",
      "해결: Context API와 useReducer를 분리하고 Discriminated Union 및 커스텀 훅으로 책임을 명확히 나눴습니다.",
      "결과: 새로고침 이후에도 안정적으로 데이터가 복원되고, 중복 코드와 id 충돌 가능성을 줄였습니다.",
    ],
    detailedTechStack:
      "React 19.2.0, TypeScript 5.9.3, React Router DOM, Vite 7.2.4",
    projectType: "개인 프로젝트",
    period: "2025. 11. ~ 2025. 11.",
    githubUrl: "https://github.com/guiyoung2/emotionDiary",
    liveUrl: "https://emotiondiary-pi.vercel.app/",
    techStack: ["React", "TypeScript", "React Router", "Vite"],
    thumbnailSrc: "/projects/emotiondiary.webp",
    thumbnailAlt: "emotionDiary 프로젝트 썸네일",
  },
  {
    id: 4,
    title: "틱택토 (Tic-Tac-Toe)",
    description:
      "리액트 자습서 틱택토를 참조해 다른 방식으로 재구현한 프로젝트입니다.",
    detailedDescription:
      "React 자습서의 틱택토를 그대로 복제하지 않고 데이터 구조와 상태 파생 방식을 바꿔 재구현한 프로젝트입니다. 단일 소스 기반으로 게임 상태 일관성을 유지하도록 설계한 프로젝트입니다.",
    highlights: [
      "문제: 보드 상태와 턴 히스토리를 동시에 관리하면 시점 이동 후 상태 불일치가 발생하기 쉬웠습니다.",
      "해결: 턴 데이터를 단일 소스로 두고 보드를 파생 계산했으며, 승리/현재 플레이어 로직을 순수 함수로 분리했습니다.",
      "결과: 타임트래블 이후 재진행 시에도 히스토리 분기가 안정적으로 동작하며 게임 상태 일관성을 유지했습니다.",
    ],
    detailedTechStack: "React 19.2.0, JavaScript (ES6+), Vite 7.2.4",
    projectType: "개인 프로젝트",
    period: "2025. 11. ~ 2025. 11.",
    githubUrl: "https://github.com/guiyoung2/tic-tac-toe",
    liveUrl: "https://tic-tac-toe-delta-henna-68.vercel.app/",
    techStack: ["React", "JavaScript", "Vite"],
    thumbnailSrc: "/projects/tic-tac-toe.webp",
    thumbnailAlt: "틱택토 (Tic-Tac-Toe) 프로젝트 썸네일",
  },
  {
    id: 5,
    title: "Early Works 1",
    description:
      "초기 프론트엔드 학습 시기 작업물을 정리한 아카이브 프로젝트입니다.",
    detailedDescription:
      "초기 프론트엔드 학습 시기 작업물을 정리한 아카이브 프로젝트입니다. 다양한 UI 구현 실험을 통해 기본기를 확장한 프로젝트입니다.",
    highlights: [],
    detailedTechStack: "HTML, CSS, JavaScript, React, jQuery",
    projectType: "개인 프로젝트",
    period: "2023. 05. ~ 2023. 08.",
    githubUrl: "https://github.com/guiyoung2/Project_group",
    liveUrl: "https://guiyoung2.github.io/portFolio/",
    techStack: ["HTML", "CSS", "JavaScript", "React", "jQuery"],
    thumbnailSrc: "/projects/projectgroup1.webp",
    thumbnailAlt: "과거 포트폴리오 1 프로젝트 썸네일",
  },
  {
    id: 6,
    title: "Early Works 2",
    description:
      "초기 프론트엔드 학습 시기 작업물의 확장 버전을 정리한 아카이브 프로젝트입니다.",
    detailedDescription:
      "이전 작업물의 확장 버전을 정리한 아카이브 프로젝트입니다. UI 구성 다양화와 구현 속도 개선을 목표로 진행한 프로젝트입니다.",
    highlights: [],
    detailedTechStack: "HTML, CSS, JavaScript, React, jQuery",
    projectType: "개인 프로젝트",
    period: "2023. 09. ~ 2023. 12.",
    githubUrl: "https://github.com/guiyoung2/Project_group_2",
    liveUrl: "https://guiyoung2.github.io/portFolio2/",
    techStack: ["HTML", "CSS", "JavaScript", "React", "jQuery"],
    thumbnailSrc: "/projects/projectgroup2.webp",
    thumbnailAlt: "과거 포트폴리오 2 프로젝트 썸네일",
  },
];
