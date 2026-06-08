/** 스크롤 스파이 판별에 쓸 요소(섹션 제목 우선)를 반환합니다. */
export function getSectionSpyTarget(sectionId: string): HTMLElement | null {
  const heading = document.getElementById(`${sectionId}-heading`);
  if (heading) return heading;

  const section = document.getElementById(sectionId);
  if (!section) return null;

  return section.querySelector("h1, h2") ?? section;
}

/** sticky 헤더 하단(px) + 여유값으로 스크롤 스파이 기준선을 계산합니다. */
export function getScrollSpyMarkerPx(extraPx: number): number {
  const header = document.querySelector("header");
  const headerBottom = header?.getBoundingClientRect().bottom ?? 0;

  return headerBottom + extraPx;
}

/** 기준선을 지난 섹션 제목 중 맨 아래(가장 최근) 항목 id를 반환합니다. */
export function getActiveSectionFromScroll<T extends { id: string }>(
  items: ReadonlyArray<T>,
  markerOffsetPx: number,
): T["id"] | undefined {
  let active: T["id"] | undefined;

  for (const item of items) {
    const target = getSectionSpyTarget(item.id);
    if (!target) continue;

    if (target.getBoundingClientRect().top <= markerOffsetPx) {
      active = item.id;
    }
  }

  return active;
}
