/** About Me 섹션과 카드 그리드 UI를 렌더합니다. */
import { SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";
import { aboutCards } from "@/data/about";

export default function About() {
  const headingId = "about-heading";

  return (
    <section
      id="about"
      aria-labelledby={headingId}
      className={`${SECTION_SCROLL_MARGIN_CLASS} flex w-full flex-col gap-8`}
    >
      <h2 id={headingId} className="text-2xl font-semibold tracking-tight">
        About Me
      </h2>

      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {aboutCards.map((card) => (
          <li
            key={card.title}
            className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-6"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-neutral-600">{card.subtitle}</p>
            </div>
            <p className="text-sm leading-relaxed text-neutral-800">
              {card.segments.map((segment, index) =>
                segment.emphasis ? (
                  <strong key={index} className="font-semibold text-neutral-950">
                    {segment.text}
                  </strong>
                ) : (
                  <span key={index}>{segment.text}</span>
                ),
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
