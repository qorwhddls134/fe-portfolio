/** Education 섹션과 학력 목록 UI를 렌더합니다. */
import { SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";
import { educationItems } from "@/data/education";

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

      <ul className="flex w-full flex-col gap-4">
        {educationItems.map((item) => (
          <li
            key={`${item.institution}-${item.period}`}
            className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-6"
          >
            <p className="text-sm font-medium text-neutral-600">{item.period}</p>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <p className="text-base font-medium">{item.courseName}</p>
            </div>
            <p className="text-sm leading-relaxed text-neutral-800">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
