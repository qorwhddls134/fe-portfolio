/** 상단 sticky 네비게이션과 모바일 메뉴를 조합해 표시합니다. */
"use client";

import { createPortal } from "react-dom";
import { NAV_ITEMS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useMobileNavMenu } from "@/hooks/useMobileNavMenu";
import { useMounted } from "@/hooks/useMounted";
import { MobileNavOverlay } from "@/components/ui/MobileNavOverlay";
import { SectionNavLink } from "@/components/ui/SectionNavLink";

export default function Header() {
  const activeId = useActiveSection();
  const { isOpen: isMenuOpen, close: closeMenu, toggle: toggleMenu } =
    useMobileNavMenu();
  const mounted = useMounted();

  useBodyScrollLock(isMenuOpen, closeMenu);

  const mobileMenu =
    mounted && isMenuOpen
      ? createPortal(
          <MobileNavOverlay
            navItems={NAV_ITEMS}
            activeId={activeId}
            onClose={closeMenu}
          />,
          document.body,
        )
      : null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur-md">
        <nav
          className="mx-auto flex h-12 w-full max-w-5xl items-center justify-end px-4 sm:h-16 sm:justify-center sm:px-8"
          aria-label="섹션 목차"
        >
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-neutral-900 sm:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-overlay"
            aria-label={isMenuOpen ? "목차 메뉴 닫기" : "목차 메뉴 열기"}
            onClick={toggleMenu}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 block h-0.5 w-5 bg-current" />
              <span className="absolute left-0 top-[7px] block h-0.5 w-5 bg-current" />
              <span className="absolute left-0 top-[14px] block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {NAV_ITEMS.map((item) => (
              <SectionNavLink
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                variant="desktop"
              />
            ))}
          </div>
        </nav>
      </header>
      {mobileMenu}
    </>
  );
}
