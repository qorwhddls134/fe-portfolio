/** Education fade-up 애니메이션용 Tailwind 클래스 문자열을 제공합니다. */
import { EDUCATION_CARD_STAGGER_MS } from "@/constants/education-animation";

const FADE_UP_BASE = "animate-education-fade-up";

const DELAY_CLASS: Record<number, string> = {
  0: `${FADE_UP_BASE} [animation-delay:0ms]`,
  280: `${FADE_UP_BASE} [animation-delay:280ms]`,
  560: `${FADE_UP_BASE} [animation-delay:560ms]`,
  840: `${FADE_UP_BASE} [animation-delay:840ms]`,
  1120: `${FADE_UP_BASE} [animation-delay:1120ms]`,
};

function fadeUpDelayClass(delayMs: number): string {
  return DELAY_CLASS[delayMs] ?? DELAY_CLASS[0];
}

export function educationCardAnimationClass(
  index: number,
  isInView: boolean,
  prefersReducedMotion: boolean,
): string {
  if (prefersReducedMotion) {
    return "";
  }

  if (!isInView) {
    return "opacity-0";
  }

  return fadeUpDelayClass(index * EDUCATION_CARD_STAGGER_MS);
}
