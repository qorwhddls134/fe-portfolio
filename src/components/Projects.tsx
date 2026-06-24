/** Projects 섹션 레이아웃과 프로젝트 목록 UI를 렌더합니다. */
import { ProjectSplitCard } from "@/components/ui/ProjectSplitCard";
import { SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";
import { projects } from "@/data/projects";

export default function Projects() {
  const headingId = "projects-heading";

  return (
    <section
      id="projects"
      aria-labelledby={headingId}
      className={`${SECTION_SCROLL_MARGIN_CLASS} flex w-full flex-col gap-8`}
    >
      <h2 id={headingId} className="text-2xl font-semibold tracking-tight">
        Projects
      </h2>

      <ul className="flex w-full flex-col gap-8">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectSplitCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
