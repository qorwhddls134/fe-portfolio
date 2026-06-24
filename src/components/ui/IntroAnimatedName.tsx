/** Intro h1 이름을 글자별 fade-up 애니메이션으로 렌더합니다. */
import { introLetterAnimationClass } from "@/utils/intro-animation-classes";

type IntroAnimatedNameProps = {
  name: string;
  className?: string;
};

export function IntroAnimatedName({ name, className }: IntroAnimatedNameProps) {
  const letters = [...name];

  return (
    <h1 id="intro-heading" className={className}>
      {letters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={introLetterAnimationClass(index)}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}
