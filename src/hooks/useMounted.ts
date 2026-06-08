/** 클라이언트 마운트 여부를 반환해 포털 등 SSR 이후 렌더에 사용합니다. */
import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
