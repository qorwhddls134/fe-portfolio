/** Projects 섹션 애니메이션·hover 인터랙션 상수 */

/** 카드 fade-up 재생 시간 — globals.css `--project-reveal-duration`과 동기화 */
export const PROJECT_REVEAL_DURATION_MS = 700;

/** 목업 프레임 — lg 미만: 4:3 고정, lg 이상: 메타 열 높이에 맞춰 stretch */
export const PROJECT_MOCKUP_FRAME_CLASS =
  "group relative min-w-0 w-full overflow-hidden border-b border-neutral-200 max-lg:aspect-4/3 max-lg:min-h-56 lg:h-full lg:min-h-0 lg:border-b-0 lg:border-r lg:border-neutral-200";

/** 목업 이미지 — fill + object-cover로 프레임을 꽉 채움 */
export const PROJECT_MOCKUP_IMAGE_CLASS = "object-cover object-left-top";

/** 목업 이미지 hover 확대용 Tailwind 클래스 */
export const PROJECT_MOCKUP_IMAGE_HOVER_CLASS =
  "origin-center transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-[1.04] motion-reduce:group-hover:scale-100";

/** ProjectLink pill 버튼 스타일 Tailwind 클래스 */
export const PROJECT_LINK_PILL_CLASS =
  "inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-neutral-300 px-4 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

/** 목업 클릭 가능 시 커서·포커스 스타일 */
export const PROJECT_MOCKUP_LINK_CLASS =
  "block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";
