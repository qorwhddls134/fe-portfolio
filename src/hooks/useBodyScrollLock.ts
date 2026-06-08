/** 메뉴 열림 시 body 스크롤을 잠그고 Escape 키로 닫을 수 있게 합니다. */
import { useEffect } from "react";

export function useBodyScrollLock(locked: boolean, onEscape?: () => void) {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [locked, onEscape]);
}
