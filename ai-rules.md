# AI Coding Rules & Conventions

AI 에디터(Cursor, Claude 등)는 코드를 생성, 수정, 리팩토링할 때 반드시 아래 규칙과 `portfolio-spec.md`를 함께 준수해야 합니다.

---

## 0. Source of Truth
* UI·카피·섹션 구조는 **`portfolio-spec.md`**를 따른다.
* 스펙에 없는 섹션·문구를 임의로 추가하지 않는다.
* 카피·URL 변경은 스펙 또는 `src/data/`만 수정한다. (컴포넌트 JSX에 문장 하드코딩 지양)
* **Intro 링크:** 이메일·GitHub는 `src/data/site.ts`만 수정한다. Intro 카피는 `src/data/intro.ts`.

---

## 1. 관심사 분리 & 폴더 역할 (Architecture)

### 1-1. 핵심 원칙

**컴포넌트(`components/`)는 UI(표시)만 담당한다.**  
스크롤 감지, DOM 잠금, 상태, 순수 계산, 설정 상수, 타입, 카피 문장은 **역할에 맞는 폴더로 분리**하고, 컴포넌트에서는 import해서 **조합·렌더만** 한다.

| 역할 | 폴더 | 책임 |
|------|------|------|
| **UI · 조합** | `src/components/` | 섹션·레이아웃 JSX, props/state를 화면에 반영 |
| **UI 조각** | `src/components/ui/` | 여러 곳에서 쓰는 작은 표시 단위 (버튼·링크·아이콘 등) |
| **데이터** | `src/data/` | 카피, 이력, URL 등 콘텐츠 |
| **설정** | `src/constants/` | NAV 목록, 레이아웃 클래스 문자열 등 앱 설정 |
| **타입** | `src/types/` | 여러 모듈이 공유하는 TypeScript 타입 |
| **훅** | `src/hooks/` | `useState`, `useEffect`, 브라우저 API 등 클라이언트 동작 |
| **유틸** | `src/utils/` | React 없이 동작하는 순수 함수 |
| **앱 셸** | `src/app/` | 라우트, 전역 레이아웃, `globals.css` |
| **폰트** | `src/fonts/` | 로컬 폰트 파일 |

**금지 (컴포넌트 안에 두지 않음):**

* `IntersectionObserver`·스크롤 이벤트 처리 → `hooks/` + `utils/`
* `NAV_ITEMS` 같은 상수 배열 → `constants/`
* `NavItem`, `SectionId` 등 공용 타입 → `types/`
* 긴 카피·프로젝트 목록 → `data/`
* 복잡한 조건 분기·계산 → `utils/` (또는 훅 내부에서 util 호출)

**허용 (컴포넌트에 남겨도 됨):**

* `map`으로 목록 렌더, `aria-*`, Tailwind 클래스
* 훅 호출 결과를 JSX에 넘기기 (`const activeId = useActiveSection()`)
* 섹션별 `headingId` 같은 **UI 접근성용** 지역 변수

### 1-2. `components/` vs `components/ui/`

| | `src/components/` | `src/components/ui/` |
|--|-------------------|------------------------|
| **의미** | 페이지의 한 **구역** (Intro, Header, About …) | 섹션 이름과 무관한 **재사용 UI** |
| **판별** | 이름만 봐도 어느 섹션인지 알 수 있음 | `ProjectLink`, `ExternalLinkIcon`처럼 범용 |
| **데이터** | `@/data/*` import 후 **표시만** | props로만 받음 (`data/` 직접 import 지양) |

### 1-3. 코드 추가 시 체크리스트

1. 화면에 보이는가? → `components/` 또는 `components/ui/`
2. 브라우저·React 상태인가? → `hooks/`
3. 입력→출력만 있는 함수인가? → `utils/`
4. 여러 파일에서 쓰는 타입인가? → `types/` (한 파일 전용이면 `data/` 옆에 둬도 됨)
5. 바뀌지 않는 설정·목록인가? → `constants/`
6. 문장·이력·URL인가? → `data/`

### 1-4. 네이밍·import

* **Component Files:** 컴포넌트 파일명·컴포넌트 이름은 `PascalCase`. (예: `About.tsx`, `SectionNavLink.tsx`)
* **Hooks:** `use` + `PascalCase` 파일명. (예: `useActiveSection.ts`)
* **그 외 TS 파일:** `camelCase` 또는 도메인명. (예: `navigation.ts`, `scroll-spy.ts`)
* **Fonts:** 자체 호스팅 폰트(`.woff2`)는 `src/fonts/`에 둔다. `public/fonts`나 컴포넌트 CSS `@font-face` 금지. Pretendard는 `layout.tsx`의 `next/font/local`만 사용.
* **Path Alias:** 상대 경로(`../../`) 대신 `@/*`만 사용. (예: `import About from '@/components/About'`)
* **Export:** 페이지 섹션·`Header`·`Footer`는 `export default`. `components/ui/`·훅·유틸은 named export.

### 1-5. Intro 첫 화면 레이아웃

* Intro는 **`main` 밖**, Header 바로 아래 전용 래퍼에 둔다. (`page.tsx` + `INTRO_VIEWPORT_CLASS`)
* 높이: `100dvh − 헤더(h-16)` → `globals.css`의 `--layout-header-height`와 `constants/layout.ts` 동기화.
* 세로 중앙: 래퍼 안에서 Intro에 `flex-1 justify-center` (`INTRO_SECTION_CLASS`). `main` 상단 `py`로 Intro를 밀지 않는다.
* About 이하 간격: `main`의 `pt-24` 등으로만 처리.

---

## 2. Documentation & Clean Code (문서화 및 코드 품질)
* **TSDoc (파일 상단 1문장):** `src/` 아래 모든 `.ts`·`.tsx` 파일 최상단에 `/** … */`로 **역할을 한 문장**으로 적는다. (함수마다 중복 작성하지 않음)
* **관심사의 분리:** §1 규칙 준수. `page.tsx`는 섹션 **조합만** (로직·마크업 덩어리 금지).
* **Header:** 스크롤 스파이(`useActiveSection`)·햄버거 메뉴(`useMobileNavMenu`)·스크롤 잠금(`useBodyScrollLock`)·포털(`useMounted`)은 훅·`ui/`로 분리하고, `Header.tsx`는 조합·마크업만 유지한다. `MobileNavOverlay`에는 `navItems`를 props로 넘긴다. 활성 목차는 **`#${sectionId}-heading` top이 헤더 하단 + `scrollSpyExtraPx` 선을 지날 때** 전환한다(앵커 `scroll-mt`와 별도).
* **About 섹션:** 화면 제목은 스펙대로 **"About Me"** (파일명 `About.tsx`와 구분).

예시:

```typescript
/** About Me 섹션과 카드 그리드 UI를 렌더합니다. */
export default function About() {
  // ...
}
```

---

## 3. Styling & Responsiveness Rules (스타일 및 반응형 전략)
* **Tailwind CSS Only:** 컴포넌트·페이지 스타일은 Tailwind 유틸리티만 사용.
* **예외:** `src/app/globals.css` — `@import "tailwindcss"`, `@theme`, CSS 변수 정의만 허용.
* **Font:** 기본 sans는 Pretendard (`font-sans`). Geist 등 다른 웹폰트를 추가·교체하지 않는다. 폰트 파일 경로·변수명은 스펙(`src/fonts/`, `--font-pretendard`)을 따른다.
* **금지:** 컴포넌트별 `.css` 파일, `style={{ }}` 인라인 스타일.
* **Mobile-First:** 기본은 모바일(`flex flex-col w-full`), `sm:`·`md:`·`lg:`로 확장.
    * 예: `className="grid grid-cols-1 md:grid-cols-3"`
* **헤더 목차 브레이크포인트:** 뷰포트 **640px 미만** → 햄버거(`sm:hidden` / `hidden sm:flex`). **640px 이상** → 가로 목차. 섹션 본문 레이아웃의 `md:`(768px)와 **별도**로 유지한다.

---

## 4. Next.js & React 19 Rules
* **React Compiler:** 불필요한 `useMemo`·`useCallback` 남발 금지. 측정·버그 해결 등 필요할 때만 사용.
* **Server Component 기본:** 스크롤 이벤트, 탭/아코디언 state, 브라우저 API가 필요할 때만 해당 파일에 `'use client'`.
* **App Router:** Server / Client 역할을 명확히 구분한다.
* **이미지:** `public/` 자산은 `next/image` 사용.
