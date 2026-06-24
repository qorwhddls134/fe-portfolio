/** 섹션 목차의 id·라벨과 기본 활성 섹션 id를 정의합니다. */
export const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
] as const;

export const DEFAULT_SECTION_ID = NAV_ITEMS[0].id;
