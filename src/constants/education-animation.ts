/** Education 섹션 애니메이션·카드 인터랙션 상수 */

/** 카드 간 순차 등장 간격 */
export const EDUCATION_CARD_STAGGER_MS = 280;

/** 카드 fade-up 재생 시간 — globals.css `--education-reveal-duration`과 동기화 */
export const EDUCATION_REVEAL_DURATION_MS = 850;

/** 타임라인 선 그리기 시간 — globals.css `--education-timeline-duration`과 동기화 */
export const EDUCATION_TIMELINE_DRAW_MS = 1500;

/** Education 카드 hover 피드백용 Tailwind 클래스 */
export const EDUCATION_CARD_HOVER_CLASS =
  "transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm";

/** Education 기술 태그 hover 강조용 Tailwind 클래스 */
export const EDUCATION_TECH_TAG_HOVER_CLASS =
  "transition-colors duration-150 hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900";
