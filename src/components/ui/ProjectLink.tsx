/** URL 유무에 따라 외부 링크 또는 "준비 중" 문구를 렌더합니다. */
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
      className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
    >
      {label}
    </a>
  );
}
