/** 데스크톱·모바일 목차용 섹션 앵커 링크 UI를 렌더합니다. */
import type { NavItem } from "@/types/navigation";

type SectionNavLinkProps = {
  item: NavItem;
  isActive: boolean;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function SectionNavLink({
  item,
  isActive,
  variant,
  onNavigate,
}: SectionNavLinkProps) {
  if (variant === "mobile") {
    return (
      <a
        href={`#${item.id}`}
        onClick={onNavigate}
        className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
          isActive
            ? "bg-neutral-900 text-white"
            : "text-neutral-900 hover:bg-neutral-100"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </a>
    );
  }

  return (
    <a
      href={`#${item.id}`}
      className={`relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-neutral-900 text-white"
          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {item.label}
      <span
        className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white/70 transition-opacity ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </a>
  );
}
