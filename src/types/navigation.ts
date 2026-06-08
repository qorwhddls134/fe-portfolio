/** 네비게이션 상수에서 파생한 NavItem·SectionId 타입을 제공합니다. */
import type { NAV_ITEMS } from "@/constants/navigation";

export type NavItem = (typeof NAV_ITEMS)[number];
export type SectionId = NavItem["id"];
