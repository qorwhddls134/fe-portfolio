/** Intro fade-up 애니메이션용 Tailwind 클래스 문자열을 제공합니다. */
import {
  INTRO_BLOCK_GAP_MS,
  INTRO_H1_BASE_DELAY_MS,
  INTRO_LETTER_STAGGER_MS,
  INTRO_TAGLINE_DELAY_MS,
} from "@/constants/intro-animation";

const FADE_UP_BASE = "animate-intro-fade-up";

const DELAY_CLASS: Record<number, string> = {
  0: `${FADE_UP_BASE} [animation-delay:0ms]`,
  500: `${FADE_UP_BASE} [animation-delay:500ms]`,
  580: `${FADE_UP_BASE} [animation-delay:580ms]`,
  660: `${FADE_UP_BASE} [animation-delay:660ms]`,
  700: `${FADE_UP_BASE} [animation-delay:700ms]`,
  740: `${FADE_UP_BASE} [animation-delay:740ms]`,
  780: `${FADE_UP_BASE} [animation-delay:780ms]`,
  820: `${FADE_UP_BASE} [animation-delay:820ms]`,
  860: `${FADE_UP_BASE} [animation-delay:860ms]`,
  900: `${FADE_UP_BASE} [animation-delay:900ms]`,
  940: `${FADE_UP_BASE} [animation-delay:940ms]`,
  980: `${FADE_UP_BASE} [animation-delay:980ms]`,
  1020: `${FADE_UP_BASE} [animation-delay:1020ms]`,
  1060: `${FADE_UP_BASE} [animation-delay:1060ms]`,
  1140: `${FADE_UP_BASE} [animation-delay:1140ms]`,
  1220: `${FADE_UP_BASE} [animation-delay:1220ms]`,
  1300: `${FADE_UP_BASE} [animation-delay:1300ms]`,
  1380: `${FADE_UP_BASE} [animation-delay:1380ms]`,
  1460: `${FADE_UP_BASE} [animation-delay:1460ms]`,
};

function fadeUpDelayClass(delayMs: number): string {
  return DELAY_CLASS[delayMs] ?? DELAY_CLASS[0];
}

export function getIntroLetterDelayMs(index: number): number {
  return INTRO_H1_BASE_DELAY_MS + index * INTRO_LETTER_STAGGER_MS;
}

export function getIntroDescriptionDelayMs(letterCount: number): number {
  if (letterCount <= 0) {
    return INTRO_H1_BASE_DELAY_MS + INTRO_BLOCK_GAP_MS;
  }
  const lastLetterDelay = getIntroLetterDelayMs(letterCount - 1);
  return lastLetterDelay + INTRO_BLOCK_GAP_MS;
}

export function introTaglineAnimationClass(): string {
  return fadeUpDelayClass(INTRO_TAGLINE_DELAY_MS);
}

export function introLetterAnimationClass(index: number): string {
  return `inline-block ${fadeUpDelayClass(getIntroLetterDelayMs(index))}`;
}

export function getIntroButtonsDelayMs(letterCount: number): number {
  return getIntroDescriptionDelayMs(letterCount) + INTRO_BLOCK_GAP_MS;
}

export function introDescriptionAnimationClass(letterCount: number): string {
  return fadeUpDelayClass(getIntroDescriptionDelayMs(letterCount));
}

export function introButtonsAnimationClass(letterCount: number): string {
  return fadeUpDelayClass(getIntroButtonsDelayMs(letterCount));
}
