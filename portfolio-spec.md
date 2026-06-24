# Portfolio Website Spec Docs

## Global Project Rules
* Framework: Next.js (App Router), TypeScript
* Styling: Tailwind CSS — 시각 장식은 최소화하고, 여백·정렬·그리드 등 레이아웃 구조 위주로 구현
* **Architecture (관심사 분리):** **`ai-rules.md` §1** 준수 — **컴포넌트는 UI만**, 로직·설정·타입·순수 함수·카피는 `hooks/` · `utils/` · `constants/` · `types/` · `data/` 등 **역할별 폴더**로 분리
* 콘텐츠·URL: 연락처·GitHub 등은 `src/data/site.ts`에 정의 (개발자가 값 채움)
* **Typography:** 본문·UI 기본 폰트는 **Pretendard**. 파일은 `src/fonts/`에 두고 `next/font/local`로 `layout.tsx`에서 로드한다. (`public/fonts`·Google Fonts Geist 사용하지 않음)

---

## Page Assembly (`src/app/page.tsx`)
* Server Component only. 비즈니스 로직·긴 마크업 금지.
* **섹션 순서:** Intro → Education → Projects
* **DOM 구조:**
    * `<Header />` (sticky, `main` 밖)
    * Intro 전용 래퍼 — `max-w-5xl` + `INTRO_VIEWPORT_CLASS` (`constants/layout.ts`)
    * `<main>` — Education · Projects (`MAIN_AFTER_INTRO_CLASS` — Intro 직후 `pt-12`/`md:pt-16`)
    * `<Footer />`
* 공통 가로 레이아웃: `mx-auto w-full max-w-5xl px-4 md:px-8`
* 각 섹션: `id` 부여 (`intro`, `education`, `projects`)
* **Header Navigation:** 상단 sticky 목차(`Intro / Education / Projects`)를 제공하고, 클릭 시 해당 섹션으로 부드럽게 이동. **640px 미만**(`sm` 미만)은 햄버거·오버레이, **640px 이상**은 가로 목차 (`ai-rules.md` §3)
* **Active Section Highlight:** 스크롤 위치에 따라 현재 섹션 목차를 하이라이트
* 푸터: Contact 영역 포함 (`SITE_EMAIL`, `SITE_GITHUB` 재노출)

---

## Root Layout (`src/app/layout.tsx`)
* `lang="ko"`
* `metadata`: title, description (한국어, 포트폴리오 소개 1~2문장)
* 다크 모드: 사용 안 함 (라이트 테마만)
* **Font:** `src/fonts/PretendardVariable.woff2` → `next/font/local`, CSS 변수 `--font-pretendard` → Tailwind `font-sans` (`globals.css` `@theme`)

---

## Fonts (`src/fonts/`)
* **경로:** `src/fonts/PretendardVariable.woff2` (가변 폰트, 프로젝트 공통)
* **적용:** `src/app/layout.tsx`에서 `localFont` 등록 후 `html`·`body`에 `variable` className 부여
* **추가 파일:** 굵기별 static 파일이 필요하면 동일 폴더에 추가하고 `localFont`의 `src` 배열로 확장 (기본은 Variable 1개만 사용)

---

## 1. Intro Component
* **Path:** `src/components/Intro.tsx`
* **Data:** 카피 `src/data/intro.ts` · 이메일·GitHub `src/data/site.ts` (`SITE_EMAIL`, `SITE_GITHUB`만 수정하면 연락처·링크 반영)
* **UI Layout:** 첫 화면에서 Intro만 보이도록, **헤더(`h-16`) 아래 남은 뷰포트** 안에서 세로·가로 중앙 정렬
    * 래퍼: `min-h-[calc(100dvh-var(--layout-header-height))]` — `globals.css` 변수, `page.tsx`에서 적용
    * 섹션: `flex flex-1 flex-col justify-center` — `INTRO_SECTION_CLASS` (`Intro.tsx`)
    * `main` 상단 padding으로 Intro를 밀지 않음 (중앙이 아래로 쏠리지 않도록)
* **Content Text:**
    * Sub-title: "Front-end Developer"
    * **표시 순서:** Sub-title → Tagline → **h1(이름)** → Supporting Copy
    * **Tagline:** 한 줄 역할 소개 (이름 위에 배치, `text-3xl`/`md:text-4xl`) — AI 키워드 사용하지 않음
    * **h1:** "백종인" (이름만, Tagline 아래, `text-5xl`~`lg:text-7xl`)
    * **Supporting Copy:** 보조 설명 1문장 (`intro.ts`의 `description`)
    * **Contact Block Layout:** 하단 액션 영역은 플랫한 버튼 그룹으로 배치. `Contact Me` 버튼과 `GitHub` 버튼 2개를 동일한 높이/정렬로 배치 (모바일은 세로, 데스크톱은 가로 정렬).
    * **Email:** `Contact Me` 버튼(`mailto:`)
    * **GitHub:** "GitHub" + 외부 링크 아이콘(`/icons/Open-In-New.svg`) → `SITE_GITHUB` (새 탭, `rel="noopener noreferrer"`)

---

## 2. Education Component
* **Path:** `src/components/Education.tsx`
* **Section Title:** "Education"
* **UI Layout:** 모바일·데스크톱 공통 — 세로 리스트(카드형). 각 Item은 기간·교육 기관·과정명·내용 4필드를 한눈에 스캔 가능하게 배치.
* **Content Text:**
    * **Item 1:**
        * 기간: 2025.11 ~ 2026.05 (6개월)
        * 교육 기관: 코드잇
        * 과정명: 프론트엔드 엔지니어 부트캠프
        * 내용: Next.js, React, TypeScript, GitHub 등 실무에서 요구하는 기술 학습 및 팀 프로젝트 수행
    * **Item 2:**
        * 기간: 2025.03 ~ 2025.07 (5개월)
        * 교육 기관: 이지디자인컴퓨터학원
        * 과정명: 반응형웹디자인(UI/UX) 및 웹퍼블리셔 취업과정
        * 내용: HTML5, CSS3, JavaScript 중심의 반응형 웹 퍼블리싱 기본기 및 UI/UX 구현 역량 습득

---

## 3. Projects Component
* **Path:** `src/components/Projects.tsx`
* **Section Title:** "Projects"
* **1차 구현:** 정적 레이아웃만 (`'use client'` 없음). 상단 요약 블록 + 하단 상세 블록을 세로로 배치.
* **UI Layout:**
    * 상단: 프로젝트명·한 줄 소개·역할·기여도
    * 하단: My Tasks(목록) + Troubleshooting(단락)
    * Mockup placeholder: `aspect-video w-full rounded border border-dashed` 등 이미지 확정 전 placeholder `<div>`
* **Links:** 깃허브 URL·사이트 URL은 `src/data/projects.ts`의 `githubUrl`, `deployUrl` (없으면 "준비 중" 표시)
* **Tech Stack:** Next.js, TypeScript, React (팀 프로젝트에서 사용한 스택 추가)
* **Content Text:**
    * **Project Meta:** Coworkers (팀 프로젝트, 업무 배정 및 현황 공유 SaaS 플랫폼, 기여도 25%)
    * **My Tasks:** 게시글 목록/조회 최적화(무한스크롤, 페이지네이션, 검색), 상세 페이지 동적 라우팅, 유효성 검사 폼, Mobile-First 반응형 UI.
    * **Troubleshooting:** 무한 스크롤 데이터 캐시 미동기화 문제를 Next.js 캐시 무효화 및 훅 설계를 통해 주도적으로 AI를 제어하여 해결한 경험.

---

## 4. Footer Component
* **Path:** `src/components/Footer.tsx`
* **UI Layout:** 상단 경계선(`border-t`) + 내부 컨테이너(`max-w-5xl`)에 Contact 정보 세로 배치
* **Content:**
    * Label: "Contact"
    * Email: `SITE_EMAIL` 텍스트 노출 (`mailto:` 링크)
    * GitHub: `SITE_GITHUB` 텍스트 링크 + 외부 링크 아이콘(`/icons/Open-In-New.svg`)
