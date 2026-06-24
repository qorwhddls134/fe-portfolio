/** 요소가 뷰포트에 들어왔는지 IntersectionObserver로 감지합니다. */
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onStoreChange: () => void) {
  const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  motionQuery.addEventListener("change", onStoreChange);
  return () => motionQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function useInView(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  const { threshold, rootMargin, root } = options;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setHasEnteredView(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin, root });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, threshold, rootMargin, root]);

  const isInView = prefersReducedMotion || hasEnteredView;

  return { ref, isInView, prefersReducedMotion };
}
