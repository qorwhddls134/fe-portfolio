/** 헤더 높이 — Intro calc·globals.css 변수, Header `h-12` / `sm:h-16`과 동기화합니다. */
export const LAYOUT = {
  headerHeightMobile: "3rem",
  headerHeightDesktop: "4rem",
  /** Header 가로 목차 전환 — Tailwind `sm` (640px) */
  navDesktopMinWidthPx: 640,
  /**
   * 스크롤 스파이: 기준선 = 헤더 하단 + 이 값(px).
   * 섹션 제목 top이 기준선을 지나면 해당 목차로 전환.
   * 값을 키우면 더 일찍, 줄이면 헤더 근처까지 와야 바뀜.
   */
  scrollSpyExtraPx: 96,
} as const;

/** 헤더 바로 아래 남은 뷰포트 높이(첫 화면) */
export const INTRO_VIEWPORT_CLASS =
  "flex min-h-[calc(100dvh-var(--layout-header-height))] w-full flex-col";

/** 위 영역 안에서 Intro 콘텐츠를 세로·가로 중앙에 배치 */
export const INTRO_SECTION_CLASS = "flex flex-1 flex-col justify-center gap-8";

/** 앵커 스크롤 여백 — 헤더 높이에 맞춤 (모바일 짧은 헤더 / sm+ 기본) */
export const SECTION_SCROLL_MARGIN_CLASS = "scroll-mt-16 sm:scroll-mt-20";
