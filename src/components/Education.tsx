/** Education 섹션과 학력 목록 UI를 렌더합니다. */
import { EducationTimeline } from "@/components/EducationTimeline";
import { SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";

export default function Education() {
  const headingId = "education-heading";

  return (
    <section
      id="education"
      aria-labelledby={headingId}
      className={`${SECTION_SCROLL_MARGIN_CLASS} flex w-full flex-col gap-8`}
    >
      <h2 id={headingId} className="text-2xl font-semibold tracking-tight">
        Education
      </h2>

      <EducationTimeline />
    </section>
  );
}
