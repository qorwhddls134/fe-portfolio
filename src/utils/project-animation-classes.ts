/** Projects fade-up 애니메이션용 Tailwind 클래스 문자열을 제공합니다. */

const FADE_UP_CLASS = "animate-project-fade-up";

export function projectCardRevealClass(
  isInView: boolean,
  prefersReducedMotion: boolean,
): string {
  if (prefersReducedMotion) {
    return "";
  }

  if (!isInView) {
    return "opacity-0";
  }

  return FADE_UP_CLASS;
}
