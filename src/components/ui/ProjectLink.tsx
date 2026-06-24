/** URL 유무에 따라 외부 링크 pill 또는 "준비 중" 문구를 렌더합니다. */
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";
import { PROJECT_LINK_PILL_CLASS } from "@/constants/project-animation";

type ProjectLinkProps = {
  href: string | undefined;
  label: string;
};

export function ProjectLink({ href, label }: ProjectLinkProps) {
  if (!href) {
    return (
      <span className="text-sm text-neutral-500" aria-disabled="true">
        {label}: 준비 중
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={PROJECT_LINK_PILL_CLASS}
    >
      {label}
      <ExternalLinkIcon size="sm" />
    </a>
  );
}
