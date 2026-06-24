/** Intro 섹션 히어로 카피와 연락처 UI를 렌더합니다. */
import { INTRO_SECTION_CLASS, SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";
import { introContent } from "@/data/intro";
import { SITE_EMAIL, SITE_GITHUB } from "@/data/site";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";
import { IntroAnimatedName } from "@/components/ui/IntroAnimatedName";
import {
  introButtonsAnimationClass,
  introDescriptionAnimationClass,
  introTaglineAnimationClass,
} from "@/utils/intro-animation-classes";

const INTRO_GITHUB_BUTTON_CLASS =
  "inline-flex h-12 w-fit items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50";

export default function Intro() {
  const nameLetterCount = [...introContent.name].length;

  return (
    <section
      id="intro"
      aria-label="소개"
      className={`${SECTION_SCROLL_MARGIN_CLASS} w-full ${INTRO_SECTION_CLASS}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            {introContent.subtitle}
          </p>
          <p
            className={`max-w-xl text-lg font-normal text-neutral-600 md:text-2xl ${introTaglineAnimationClass()}`}
          >
            {introContent.tagline}
          </p>
        </div>

        <IntroAnimatedName
          name={introContent.name}
          className="text-5xl font-bold leading-none tracking-tight text-neutral-950 md:text-6xl lg:text-7xl"
        />

        <div className="flex flex-col gap-3">
          <p
            className={`text-base font-normal text-neutral-700 md:text-lg ${introDescriptionAnimationClass(nameLetterCount)}`}
          >
            {SITE_EMAIL}
          </p>
          <a
            href={SITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={`${INTRO_GITHUB_BUTTON_CLASS} ${introButtonsAnimationClass(nameLetterCount)}`}
            aria-label="GitHub 프로필 (새 탭)"
          >
            <span className="inline-flex items-center gap-1.5">
              GitHub
              <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
