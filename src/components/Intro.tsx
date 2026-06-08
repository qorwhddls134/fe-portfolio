/** Intro 섹션 히어로 카피와 연락처 버튼 UI를 렌더합니다. */
import { INTRO_SECTION_CLASS, SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";
import { introContent } from "@/data/intro";
import { SITE_EMAIL, SITE_GITHUB } from "@/data/site";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";

export default function Intro() {
  return (
    <section
      id="intro"
      aria-label="소개"
      className={`${SECTION_SCROLL_MARGIN_CLASS} w-full ${INTRO_SECTION_CLASS}`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium tracking-wide text-neutral-600">
          {introContent.subtitle}
        </p>
        <p className="max-w-xl text-xl font-base text-neutral-600 md:text-3xl">
          {introContent.tagline}
        </p>
        <h1
          id="intro-heading"
          className="text-5xl font-bold leading-none tracking-tight text-neutral-950 md:text-6xl lg:text-7xl"
        >
          {introContent.name}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          {introContent.description}
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="inline-flex h-12 w-full items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-700 sm:w-auto"
          aria-label="이메일 보내기"
        >
          Contact Me
        </a>
        <a
          href={SITE_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center rounded-full border border-neutral-300 px-6 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50 sm:w-auto"
          aria-label="GitHub 프로필 (새 탭)"
        >
          <span className="inline-flex items-center gap-1.5">
            GitHub
            <ExternalLinkIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
