/** 모바일 햄버거 메뉴 열림 상태와 데스크톱 전환 시 닫기를 관리합니다. */
import { useCallback, useEffect, useState } from "react";
import { LAYOUT } from "@/constants/layout";

export function useMobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${LAYOUT.navDesktopMinWidthPx}px)`,
    );
    const closeOnDesktop = () => {
      if (mediaQuery.matches) setIsOpen(false);
    };

    mediaQuery.addEventListener("change", closeOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return { isOpen, close, toggle };
}
