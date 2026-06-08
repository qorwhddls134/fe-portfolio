/** Projects 섹션 레이아웃과 프로젝트 목록 UI를 렌더합니다. */
import { SECTION_SCROLL_MARGIN_CLASS } from "@/constants/layout";
import { projects } from "@/data/projects";
import { ProjectLink } from "@/components/ui/ProjectLink";

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

      <ul className="flex w-full flex-col gap-12">
        {projects.map((project) => (
          <li key={project.name} className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-base text-neutral-800">{project.summary}</p>
                <p className="text-sm text-neutral-600">
                  {project.role} · {project.contribution}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <ProjectLink href={project.repositoryUrl} label="Repository" />
                <ProjectLink href={project.demoUrl} label="Demo" />
              </div>
            </div>

            <div
              className="aspect-video w-full rounded-lg border border-dashed border-neutral-300 bg-neutral-50"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold">My Tasks</h4>
                <ul className="flex flex-col gap-2 pl-5 text-sm leading-relaxed text-neutral-800 list-disc">
                  {project.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-base font-semibold">Troubleshooting</h4>
                <p className="text-sm leading-relaxed text-neutral-800">
                  {project.troubleshooting}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
