/** 새 탭·외부 링크를 나타내는 Open-In-New 아이콘을 표시합니다. */
import Image from "next/image";
import { EXTERNAL_LINK_ICON_SIZES } from "@/constants/external-link-icon";

type ExternalLinkIconProps = {
  size?: keyof typeof EXTERNAL_LINK_ICON_SIZES;
};

export function ExternalLinkIcon({ size = "md" }: ExternalLinkIconProps) {
  const { width, height, className } = EXTERNAL_LINK_ICON_SIZES[size];

  return (
    <Image
      src="/icons/Open-In-New.svg"
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
    />
  );
}
