/** 하단 Contact 영역 UI를 렌더합니다. */
import { SITE_EMAIL, SITE_GITHUB } from "@/data/site";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 md:px-8">
        <p className="text-xs font-medium tracking-wide text-neutral-500">Contact</p>
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="w-fit text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:text-neutral-600 hover:underline"
        >
          {SITE_EMAIL}
        </a>
        <a
          href={SITE_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:text-neutral-600 hover:underline"
          aria-label="GitHub 프로필 (새 탭)"
        >
          GitHub
          <ExternalLinkIcon size="sm" />
        </a>
      </div>
    </footer>
  );
}
