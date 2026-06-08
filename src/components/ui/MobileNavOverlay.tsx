/** 모바일 전체 화면 목차 오버레이 UI를 렌더합니다. */
import type { NavItem, SectionId } from "@/types/navigation";
import { SectionNavLink } from "@/components/ui/SectionNavLink";

type MobileNavOverlayProps = {
  navItems: readonly NavItem[];
  activeId: SectionId;
  onClose: () => void;
};

export function MobileNavOverlay({
  navItems,
  activeId,
  onClose,
}: MobileNavOverlayProps) {
  return (
    <div
      id="mobile-nav-overlay"
      className="fixed inset-0 z-100 sm:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="모바일 목차 메뉴"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-label="목차 메뉴 닫기"
        onClick={onClose}
      />

      <div className="relative mx-auto w-full max-w-5xl px-4 pt-14">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="flex items-center justify-end border-b border-neutral-200 px-3 py-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center text-2xl leading-none text-neutral-900 transition-colors hover:bg-neutral-100"
              aria-label="목차 메뉴 닫기"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-1 p-2">
            {navItems.map((item) => (
              <SectionNavLink
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                variant="mobile"
                onNavigate={onClose}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
