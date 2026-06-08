/** 스크롤 위치에 따라 현재 보이는 섹션 id를 추적합니다. */
import { useEffect, useState } from "react";
import { DEFAULT_SECTION_ID, NAV_ITEMS } from "@/constants/navigation";
import { LAYOUT } from "@/constants/layout";
import type { SectionId } from "@/types/navigation";
import {
  getActiveSectionFromScroll,
  getScrollSpyMarkerPx,
} from "@/utils/scroll-spy";

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>(DEFAULT_SECTION_ID);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = getScrollSpyMarkerPx(LAYOUT.scrollSpyExtraPx);
      const nextId =
        getActiveSectionFromScroll(NAV_ITEMS, marker) ?? DEFAULT_SECTION_ID;

      setActiveId((prev) => (prev === nextId ? prev : nextId));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeId;
}
