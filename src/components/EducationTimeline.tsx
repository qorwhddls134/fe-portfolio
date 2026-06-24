/** Education 타임라인·카드 목록과 스크롤 진입 애니메이션 UI를 렌더합니다. */
"use client";

import {
  EDUCATION_CARD_HOVER_CLASS,
  EDUCATION_TECH_TAG_HOVER_CLASS,
} from "@/constants/education-animation";
import { educationItems } from "@/data/education";
import { useInView } from "@/hooks/useInView";
import { educationCardAnimationClass } from "@/utils/education-animation-classes";

const EDUCATION_IN_VIEW_OPTIONS: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: "0px 0px -5% 0px",
};

export function EducationTimeline() {
  const { ref, isInView, prefersReducedMotion } = useInView(EDUCATION_IN_VIEW_OPTIONS);

  const timelineLineClass = prefersReducedMotion
    ? "scale-y-100"
    : isInView
      ? "scale-y-100"
      : "scale-y-0";

  return (
    <div ref={ref} className="relative w-full">
      <div
        className={`education-timeline-line absolute top-3 bottom-3 left-[5px] hidden w-px origin-top bg-neutral-200 motion-reduce:scale-y-100 md:block ${timelineLineClass}`}
        aria-hidden="true"
      />

      <ul className="flex w-full flex-col gap-4">
        {educationItems.map((item, index) => (
          <li
            key={`${item.institution}-${item.period}`}
            className={`relative pl-0 md:pl-7 ${educationCardAnimationClass(index, isInView, prefersReducedMotion)}`}
          >
            <span
              className="absolute top-6 left-0 z-10 hidden h-2.5 w-2.5 rounded-full bg-neutral-950 ring-2 ring-white md:block"
              aria-hidden="true"
            />

            <article
              className={`flex flex-col gap-3 rounded-lg border border-neutral-200 p-6 ${EDUCATION_CARD_HOVER_CLASS}`}
            >
              <p className="text-sm font-medium text-neutral-600">{item.period}</p>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{item.institution}</h3>
                <p className="text-base font-medium">{item.courseName}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {item.techTags.map((tag) => (
                  <li
                    key={tag}
                    className={`rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-600 ${EDUCATION_TECH_TAG_HOVER_CLASS}`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="text-sm leading-relaxed text-neutral-800">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
