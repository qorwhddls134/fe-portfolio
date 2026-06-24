/** 하단 저작권·연락 메타 정보 UI를 렌더합니다. */
import { introContent } from "@/data/intro";
import { SITE_EMAIL, SITE_GITHUB } from "@/data/site";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";

const FOOTER_GITHUB_LINK_CLASS =
  "inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:text-neutral-600 hover:underline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8 md:py-12">
        <p className="text-sm text-neutral-500">
          © {year} {introContent.name}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="text-neutral-600">{SITE_EMAIL}</span>
          <span className="text-neutral-400" aria-hidden="true">
            ·
          </span>
          <a
            href={SITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={FOOTER_GITHUB_LINK_CLASS}
            aria-label="GitHub 프로필 (새 탭)"
          >
            GitHub
            <ExternalLinkIcon size="sm" />
          </a>
        </div>
      </div>
    </footer>
  );
}
