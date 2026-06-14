import type { ProjectItem } from "@/app/types/project";

export const projects: ProjectItem[] = [
  {
    id: 11,
    title: "Costflow",
    description:
      "npm에 배포한 CLI와 Next.js 대시보드를 모노레포로 설계한 풀스택 제품으로, 개발 세션·토큰 사용 데이터를 hook으로 자동 수집·시각화합니다.",
    detailedDescription:
      "Claude Code·Codex의 세션·토큰·tool 사용 데이터를 hook으로 자동 수집해 웹 대시보드에서 분석하는 풀스택 제품입니다. npm workspaces 모노레포로 Next.js 대시보드(apps)와 CLI(packages/cli)를 함께 설계하고, CLI는 costflow-ai로 npm에 공개 배포했습니다. transcript의 토큰 4종 분리, turn 단위 멱등 집계, 전송 실패에도 작업을 막지 않는 장애 허용(outbox) 수집까지 데이터 수집의 정확성·신뢰성을 직접 설계한 것이 핵심입니다. plan/fix 폴더로 phase·roadmap을 정리하고 harness 기반 다중 검증 워크플로우로 작업했습니다.",
    highlights: [
      "모노레포 풀스택 설계 + npm 배포: npm workspaces로 apps(Next.js 15 대시보드+API route)와 packages/cli를 함께 구성하고, CLI를 costflow-ai로 npm에 공개 배포",
      "토큰 4종 분리 집계(과다 집계 방지): transcript usage의 input·output·cache_creation·cache_read를 합산하지 않고 컬럼 단위로 분리 저장 — 캐시 토큰이 청구 기준과 다르게 부풀려지는 문제 차단, 대시보드에서 목적별 선택 합산",
      "멱등 turn 집계: Stop hook이 세션 종료가 아니라 turn마다 발생하는 점을 파악해 (session_id, turn_index) 유니크 제약 + 증분(delta) 파싱으로 동일 turn 중복 합산 방지",
      "장애 허용 수집(outbox 패턴): 전송 실패 시 로컬 outbox(SQLite, better-sqlite3)에 보관 후 성공 종료해 에디터 작업을 막지 않으며, 다음 hook 실행·flush 시 재전송",
      "멀티 소스 hook 통합: Claude Code(transcript JSONL 파싱)와 Codex(세션 파일 스캔·sync) 두 경로를 동일 이벤트 스키마로 통합 — hook payload엔 토큰이 없어 transcript_path 파싱으로 추출",
      "프라이버시 설계: 프롬프트 마스킹 3모드(raw·redacted·metadata_only)를 서버 전송 전 로컬에서 적용하고, Supabase RLS로 사용자별 데이터 격리",
      "테스트: CLI 파서·hook·transcript 핵심 로직에 단위 테스트 적용 (Vitest)",
    ],
    detailedTechStack:
      "Next.js 15 (App Router), TypeScript (strict), Supabase (Auth/PostgreSQL/RLS), Node.js CLI (costflow-ai, npm 배포), better-sqlite3, npm workspaces 모노레포, Vitest, Vercel",
    projectType: "개인 프로젝트",
    period: "2026. 06.",
    githubUrl: "https://github.com/guiyoung2/costflow",
    liveUrl: "https://costflow-seven.vercel.app/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Node.js CLI",
      "Monorepo",
      "SQLite",
    ],
    thumbnailSrc: "/projects/costflow.png",
    thumbnailAlt: "Costflow 프로젝트 썸네일",
  },
  {
    id: 10,
    title: "oil_now",
    description:
      "Opinet 공공 유가 API와 카카오맵을 연동해 \"지금 내 주변에서 가장 싼 주유소\"를 몇 초 안에 찾도록 만든 모바일 우선 유가 대시보드입니다.",
    detailedDescription:
      "실시간 전국·지역 평균 유가, 위치 기반 주변 주유소 가격, 유가 뉴스를 한 곳에 모은 모바일 우선 웹앱입니다. \"앱을 연 지 몇 초 안에 가장 싼 주유 선택지를 찾는다\"를 성공 기준으로 잡았습니다. Supabase Edge Function과 pg_cron으로 Opinet 공공 API를 매일 자동 수집하는 서버리스 데이터 파이프라인을 직접 구축하고, 숫자(가격·거리)를 주인공으로 두는 글랜스 UX와 색 역할 분리·숫자 우선 위계를 토큰화한 디자인 시스템을 정의했습니다. plan/fix 폴더로 31개 Step을 TDD로 추적하며 harness 기반으로 작업했습니다.",
    highlights: [
      "서버리스 수집 파이프라인: Supabase Edge Function(collect-prices·around-stations·collect-regional-avg·collect-news)으로 Opinet API를 수집하고 pg_cron으로 매일 자동 적재(KST). KATEC→WGS84 좌표 변환을 _shared 모듈로 단일화, 1회 실행에 1,667행·1,356개 주유소 적재",
      "데이터 신뢰성: collection_logs를 success/partial/fail 3-state로 기록(HTTP 200이어도 rows=0이면 partial), service_role 키를 Supabase Vault 시크릿으로 참조해 평문 노출 차단, 조합 단위 배치 upsert로 DB 왕복 최소화",
      "위치 기반 최저가 글랜스 UX: Geolocation 좌표로 거리 계산 후 가격·거리 정렬·최저가 배지, 카카오맵 SDK 말풍선 오버레이로 상호·가격·거리 표시",
      "성능 최적화: 단일 835KB CSR 번들을 React.lazy 라우트 분할 + recharts(319KB) 지연 로딩으로 분리하고 폰트 렌더 블로킹 체인 제거 → Lighthouse Performance 79→82, FCP 2.7→2.3s, LCP 4.7→4.4s",
      "접근성: axe-core 자동 테스트 + 키보드·터치 타깃(≥44px) 테스트, 가격 변동을 색+▲▼로 이중 표기(색약 배려), 명도대비 보정 → Lighthouse Accessibility 100·Best-Practices 100",
      "디자인 시스템 직접 정의: 색 역할 분리(그린=액션, 빨강·파랑=가격 변동)·숫자 우선 위계를 Tailwind v4 @theme 토큰으로 정의한 DESIGN.md, 'AI 슬롭·클로드 룩' 안티레퍼런스 명문화",
      "리스트 가상화 + 테스트: @tanstack/react-virtual 가상 스크롤, Vitest+RTL+MSW로 101개 테스트(23개 파일) 전수 통과",
    ],
    detailedTechStack:
      "React 19, TypeScript 6, Vite 8, Tailwind CSS 4, TanStack Query 5, Zustand 5, React Router 7, recharts 3, @tanstack/react-virtual, 카카오맵 SDK, Supabase (Edge Functions/pg_cron/RLS), Deno, vite-plugin-pwa, Vitest, Testing Library, MSW, axe-core, Vercel",
    projectType: "개인 프로젝트",
    period: "2026. 06.",
    githubUrl: "https://github.com/guiyoung2/oil_now",
    liveUrl: "https://oil-now.vercel.app/",
    techStack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Kakao Map",
      "Supabase",
    ],
    thumbnailSrc: "/projects/oil_now.png",
    thumbnailAlt: "oil_now 프로젝트 썸네일",
  },
  {
    id: 9,
    title: "Check Later",
    description:
      "\"나중에 봐야지\"를 실제로 다시 찾아보게 만드는, 모바일 홈 화면에 설치해 쓰는 개인용 북마크 PWA입니다.",
    detailedDescription:
      "영상·글·캡처·메모를 한곳에 모아 '형태(영상/글/캡처/메모)'와 '상태(안 봄/봤음/보관)' 두 축으로 필터링하는 개인용 북마크 PWA입니다. 흩어진 \"나중에 볼 것\"을 다시 찾지 못하는 불편을 해결하려고 직접 만들었고, 모바일 홈 화면에 앱처럼 설치한 뒤 유튜브·브라우저 공유 메뉴에서 1탭으로 저장해 쓰도록 설계했습니다(PC 웹에서도 동일하게 사용 가능). 직접 구축한 범용 harness_framework를 처음부터 적용·검증한 신규 프로젝트로, 40여 개 Step 단위로 구조화해 개발했습니다.",
    highlights: [
      "성능 측정(Lighthouse 모바일·배포 기준): Accessibility 100·Best Practices 100점, CLS 0.002·TBT 0ms로 레이아웃 안정성·메인 스레드 응답성 확보, 초기 전송량 JS 152.93 kB·CSS 7.77 kB(gzip). 단일 번들 CSR 구조에서 LCP 5.8s 확인 → 라우트 기반 코드 스플리팅을 개선 과제로 식별",
      "API 호출 최적화: 한 항목에 이미지 N장 첨부 시 Signed URL 발급이 항목당 N×2회 발생하던 것을 createSignedUrls(paths[]) 배치 1회로 고정 — 10장 기준 20회 → 1회(약 95%↓), 이미지 수와 무관하게 네트워크 왕복 1회 유지",
      "품질 게이트: 테스트 74개(16개 파일) 전수 통과·실패 0건, tsc --noEmit 타입 에러 0건, 디자인 토큰 하드코딩 색상 위반 0건 유지",
      "중복 제거 리팩토링: 신규/수정 폼을 mode('create'|'edit') 기반 ItemForm 단일 컴포넌트로 통합해 중복 폼 블록 5곳·고아 상태 5개·함수 5개 정리",
      "PWA 설치형 사용: 모바일 홈 화면에 앱처럼 설치하고 Web Share Target API로 유튜브·브라우저 공유 메뉴에서 1탭 저장 (vite-plugin-pwa로 SW·매니페스트 자동 생성, Lighthouse PWA 체크리스트 충족, PC 웹 동시 지원)",
      "2축 분류 UX: 입력값 기반 자동 타입 판정(영상/글/캡처/메모) + 카드 스와이프 상태 전환(안 봄 → 봤음 → 보관); 타입 판정 우선순위(이미지>URL → URL>이미지)를 재설계해 'YouTube + 이미지 첨부' 케이스를 영상으로 정확 분류",
      "보안: Supabase RLS로 모든 DB 접근에 user_id = auth.uid() 조건을 DB 레벨에서 강제",
      "접근성·개발 체계: WCAG AA 기준 터치 타깃 ≥44px·키보드 네비게이션, 154개 커밋을 4개 Phase·40여 Step으로 구조화(소스 48개 파일·6개 라우트)",
    ],
    detailedTechStack:
      "React 19, TypeScript 6, Vite 8, Tailwind CSS 4, TanStack Query 5, Zustand 5, Supabase (Auth/PostgreSQL/Storage/RLS), vite-plugin-pwa (Web Share Target), Vitest, Testing Library, Vercel",
    projectType: "개인 프로젝트",
    period: "2026. 05.",
    githubUrl: "https://github.com/guiyoung2/check_later",
    liveUrl: "https://check-later.vercel.app/",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "PWA",
    ],
    thumbnailSrc: "/projects/check_later.webp",
    thumbnailAlt: "Check Later 프로젝트 썸네일",
  },
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
