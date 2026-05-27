# 이력서 AI 활용 어필 업데이트 계획

## 배경 및 목적

현재 서류 단계에서만 탈락 중. 프론트엔드 시장에서 AI 활용 역량이 차별화 포인트가 되고 있으므로,
기존 이력서에 AI 워크플로우를 녹여 서류 통과율을 높이는 것이 목표.

**지원자 현황**
- 실무 경험: 아만타 1년 8개월 (HTML/CSS/JS/TS, React/Next.js 미사용, GitHub 미사용)
- 포지셔닝: 신입 수준으로 지원 중
- 핵심 자산: 개인 프로젝트 4개 + AI 워크플로우 직접 설계·운영

---

## 전략적 포지셔닝 전환

**AS-IS:** "기능 구현하는 신입"

**TO-BE:** "AI 워크플로우를 직접 설계하고 적용하는 프론트엔드 개발자"

### 핵심 메시지 3가지
1. AI를 수동적으로 쓰는 게 아니라 **개발 프로세스 자체를 설계**함
2. AIDT(AI 디지털 교과서) 개발 경험으로 **AI 도메인 이해** 보유
3. harness_framework로 **반복 가능한 개발 체계**를 직접 만들어 신규 프로젝트에 적용 중

### 현재 AI 워크플로우 (이력서에 녹일 내용)
```
1. deep-interview     — 기능 구현 전 요구사항/범위/제약 명확화
2. 계획 수립          — Claude Code로 단계별 구현 계획 작성
3. 다중 AI 검증       — 동일 계획을 Codex에게 2차 검토
4. 구현               — 검증된 계획 기반 작업 시작
```
이 프로세스를 **harness_framework**로 만들어 check_later 프로젝트에 적용 중.
학습 아카이브: https://claude-workbook.vercel.app/

---

## 업데이트 대상 3개 채널

| 채널 | 파일/위치 | 특성 |
|------|----------|------|
| 포트폴리오 사이트 | 이 프로젝트 (`/src/app/data/`) | 코드 수정으로 반영 |
| 랠릿 이력서 | https://www.rallit.com/resumes/1608154@guiyoung22 | 직접 편집 |
| 노션 이력서 | https://ruby-denim-34e.notion.site/... | 자유 형식, 가장 상세하게 작성 가능 |

---

## 작업 1: 포트폴리오 사이트 수정 (이 프로젝트)

### 1-1. `src/app/data/about.ts` — 소개글 수정

**현재 세 번째 단락 교체:**
```
동료들과 활발히 소통하며 기술적 성과를 비즈니스의 성공으로 연결하는 프론트엔드 개발자가 되겠습니다.
```
↓
```
최근에는 AI 도구를 개발 워크플로우에 통합하는 방식을 직접 설계해 적용하고 있습니다.
기능 구현 전 deep-interview로 요구사항을 체계화하고, Claude Code와 Codex로 계획을 다중 검증하는
프로세스를 harness_framework로 만들어 신규 프로젝트에 실제 적용 중입니다.
```

### 1-2. `src/app/data/skills.ts` — AI Tools 카테고리 추가

**현재:**
```ts
{
  label: "Tools",
  skills: ["Git", "Vite", "Vercel", "ESLint", "Claude"],
},
```

**수정 후:**
```ts
{
  label: "Tools",
  skills: ["Git", "Vite", "Vercel", "ESLint"],
},
{
  label: "AI Tools",
  skills: ["Claude Code", "Codex", "Prompt Engineering"],
},
```

### 1-3. `src/app/data/projects.ts` — 각 프로젝트 highlights에 AI 활용 한 줄 추가

각 프로젝트 highlights 배열 마지막에 추가:
```
"개발 방식: deep-interview 요구사항 설계 → Claude Code/Codex 다중 검증 → 구현"
```

대상 프로젝트: GeminiChat, Notion Blog, VibeBoard, LogOfReview (4개 전부)

### 1-4. harness_framework 프로젝트 추가 (check_later 진행 후)

check_later 프로젝트가 어느 정도 완성되면 `projects.ts`에 신규 항목 추가:
- title: "harness_framework"
- description: "AI 기반 개발 워크플로우 프레임워크 — deep-interview, multi-agent 검증, TDD 패턴을 반복 적용 가능하게 구조화"
- githubUrl: https://github.com/guiyoung2/harness_framework
- 관련 프로젝트: check_later (https://github.com/guiyoung2/check_later) — 프레임워크를 실제 적용 중인 프로젝트로 언급

---

## 작업 2: 랠릿 이력서 수정

### 2-1. 자기소개 문구 교체

**추천 문구:**
```
AI 도구를 개발 워크플로우에 통합해 구조적으로 개발하는 프론트엔드 개발자입니다.

기능 구현 전 AI 기반 deep-interview로 요구사항을 명확히 하고, Claude Code와 Codex로
계획을 다중 검증한 뒤 작업합니다. 이 프로세스를 직접 설계해 harness_framework로 만들어
신규 프로젝트에 적용 중입니다.

AIDT(AI 디지털 교과서) 개발 경험을 통해 AI 도메인 맥락도 이해하고 있습니다.
```

### 2-2. 기술 스택 섹션 — AI Tools 항목 신설

| 도구 | 용도 |
|------|------|
| Claude Code | 설계·코드 생성·리뷰 |
| OpenAI Codex | 계획 다중 검증 |
| Prompt Engineering | deep-interview, multi-agent 워크플로우 설계 |

### 2-3. 경력사항 — AIDT 키워드 제목 레벨로 끌어올리기

**현재:** AIDT 언급이 설명 문장 중간에 묻혀 있음

**수정 방향:** 경력 설명 첫 줄을 아래처럼 변경:
```
AIDT(AI 디지털 교과서) 인터랙티브 콘텐츠 개발 — 교육부 가이드라인 분석 및 AI 기반 교육 서비스 구현
```

### 2-4. 각 프로젝트에 개발 방식 한 줄 추가

포트폴리오 사이트와 동일한 내용 반영:
```
개발 방식: deep-interview 설계 → Claude Code/Codex 다중 검증 → 구현
```

---

## 작업 3: 노션 이력서 수정

노션은 자유 형식이므로 가장 상세하게 작성. 면접 전달용으로 활용.

### 3-1. AI 개발 워크플로우 섹션 신설

프로젝트 목록 위 또는 자기소개 아래에 독립 섹션으로 배치:

```
🤖 AI 개발 워크플로우

[사용 도구]
- Claude Code — 설계 협업, 코드 생성, 리뷰
- OpenAI Codex — 계획 2차 검증
- superpowers 플러그인 — 전역 설치로 응답 품질 향상

[프로세스]
1. deep-interview로 요구사항/범위/제약/완료 기준 명확화
2. Claude Code로 단계별 구현 계획 수립
3. 동일 계획을 Codex에게 2차 검토 (놓친 부분 보완)
4. 검증된 계획 기반으로 구현 시작

[결과물]
- harness_framework: 이 프로세스를 반복 적용 가능하게 만든 프레임워크 (직접 구축)
- check_later: harness_framework를 실제 신규 프로젝트에 적용하며 검증 중

[학습 아카이브]
- claude-workbook.vercel.app — AI 툴 활용법·스킬·플러그인 직접 정리·운영 중
```

### 3-2. check_later 프로젝트 추가

"진행 중" 상태로 추가:
> harness_framework를 실제 신규 프로젝트에 적용하며 검증 중인 프로젝트.
> 무작정 작업을 시작하지 않고, deep-interview로 방향성을 정하고 기술 스택을 선정한 뒤
> 설계→검증→구현 프로세스를 따라 개발 중.

---

## 우선순위 및 순서

| 순서 | 작업 | 예상 소요 |
|------|------|----------|
| 1 | 포트폴리오 사이트 `about.ts` + `skills.ts` 수정 | 30분 |
| 2 | 포트폴리오 사이트 `projects.ts` 각 프로젝트 한 줄 추가 | 30분 |
| 3 | 랠릿 이력서 자기소개 + 기술스택 수정 | 30분 |
| 4 | 랠릿 이력서 경력/프로젝트 수정 | 30분 |
| 5 | 노션 이력서 AI 워크플로우 섹션 추가 | 1시간 |
| 6 | harness_framework + check_later 프로젝트 등록 | check_later 진행 후 |

---

## 참고 링크

- 포트폴리오 사이트 GitHub: https://github.com/guiyoung2/resume (현재 프로젝트)
- harness_framework: https://github.com/guiyoung2/harness_framework
- check_later: https://github.com/guiyoung2/check_later
- 학습 아카이브: https://claude-workbook.vercel.app/
- 랠릿 이력서: https://www.rallit.com/resumes/1608154@guiyoung22/%EA%B9%80%EA%B7%80%EC%98%81
- 노션 이력서: https://ruby-denim-34e.notion.site/_-35ea8e753e3a805cb088cd36c2099743
