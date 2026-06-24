/** 2열 스플릿 프로젝트 카드(mockup·메타 / My Tasks·Troubleshooting) UI를 렌더합니다. */
"use client";

import Image from "next/image";
import {
  PROJECT_MOCKUP_FRAME_CLASS,
  PROJECT_MOCKUP_IMAGE_CLASS,
  PROJECT_MOCKUP_IMAGE_HOVER_CLASS,
  PROJECT_MOCKUP_LINK_CLASS,
} from "@/constants/project-animation";
import type { Project } from "@/data/projects";
import { useInView } from "@/hooks/useInView";
import { ProjectLink } from "@/components/ui/ProjectLink";
import { projectCardRevealClass } from "@/utils/project-animation-classes";

const PROJECT_IN_VIEW_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -5% 0px",
};

type ProjectSplitCardProps = {
  project: Project;
};

const META_COLUMN_CLASS =
  "flex min-w-0 w-full flex-col justify-center gap-4 p-6";

export function ProjectSplitCard({ project }: ProjectSplitCardProps) {
  const { ref, isInView, prefersReducedMotion } = useInView(PROJECT_IN_VIEW_OPTIONS);

  const mockupImage = (
    <Image
      src={project.mockupSrc}
      alt={`${project.name} 프로젝트 목업`}
      fill
      className={`${PROJECT_MOCKUP_IMAGE_CLASS} ${PROJECT_MOCKUP_IMAGE_HOVER_CLASS}`}
      sizes="(max-width: 1024px) 100vw, 55vw"
    />
  );

  const mockupFrameClass = `${PROJECT_MOCKUP_FRAME_CLASS} ${project.deployUrl ? PROJECT_MOCKUP_LINK_CLASS : ""}`;

  return (
    <article
      ref={ref}
      className={`overflow-x-hidden rounded-lg border border-neutral-200 ${projectCardRevealClass(isInView, prefersReducedMotion)}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] lg:items-stretch">
        {project.deployUrl ? (
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={mockupFrameClass}
            aria-label={`${project.name} 사이트 방문 (새 탭)`}
          >
            {mockupImage}
          </a>
        ) : (
          <div className={mockupFrameClass}>{mockupImage}</div>
        )}

        <div className={META_COLUMN_CLASS}>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="text-base leading-relaxed text-neutral-800">
              {project.summary}
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              {project.role}
            </p>
            <p className="text-sm text-neutral-600">{project.contribution}</p>
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

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ProjectLink href={project.githubUrl} label="깃허브 URL" />
            <ProjectLink href={project.deployUrl} label="사이트 URL" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-t border-neutral-200 lg:grid-cols-2">
        <div className="flex flex-col gap-3 p-6 lg:border-r lg:border-neutral-200">
          <h4 className="text-base font-semibold">My Tasks</h4>
          <ul className="flex flex-col gap-2 pl-5 text-sm leading-relaxed text-neutral-800 list-disc">
            {project.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-neutral-200 p-6 lg:border-t-0">
          <h4 className="text-base font-semibold">Troubleshooting</h4>
          <p className="text-sm leading-relaxed text-neutral-800">
            {project.troubleshooting}
          </p>
        </div>
      </div>
    </article>
  );
}
