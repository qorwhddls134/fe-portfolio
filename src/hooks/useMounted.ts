/** 클라이언트 마운트 여부를 반환해 포털 등 SSR 이후 렌더에 사용합니다. */
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
