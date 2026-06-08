/** About Me 카드 본문과 강조 구간 데이터를 제공합니다. */
export type AboutSegment = {
  text: string;
  emphasis?: boolean;
};

export type AboutCard = {
  title: string;
  subtitle: string;
  segments: AboutSegment[];
};

export const aboutCards: AboutCard[] = [
  {
    title: "01. 시작점",
    subtitle: "웹에 빠진 계기",
    segments: [
      {
        text: "코딩의 결과가 바로 확인되는 화면 구현의 매력에 빠져 개발을 시작했습니다. 대학 졸업 후 퍼블리셔 수업을 들으며 능력을 키웠지만, 단순 UI 구현을 넘어 ",
      },
      {
        text: "데이터 처리와 유저 인터랙션을 제어하는 '프론트엔드 개발'",
        emphasis: true,
      },
      { text: "에 강한 매력을 느껴 코드잇 스프린트에 합류했습니다." },
    ],
  },
  {
    title: "02. 터닝 포인트",
    subtitle: "6개월의 교훈",
    segments: [
      { text: "잘 만든 UI는 " },
      { text: "탄탄한 기본기와 팀과의 소통", emphasis: true },
      {
        text: " 위에 세워진다는 것을 깨달았습니다. 혼자 빠르게 끝내는 코드보다, ",
      },
      { text: "코드 리뷰와 공식 문서 기반 학습", emphasis: true },
      {
        text: "으로 깊게 이해한 내용이 실제 프로젝트에서 훨씬 견고하게 남는다는 것을 경험했습니다.",
      },
    ],
  },
  {
    title: "03. 향후 목표",
    subtitle: "Next Step",
    segments: [
      { text: "탄탄한 퍼블리싱 감각을 살리면서도 " },
      { text: "데이터·상태·웹 접근성", emphasis: true },
      { text: "을 책임지는 개발자가 되겠습니다. 단기적으로는 " },
      { text: "TypeScript와 React/Next.js 생태계", emphasis: true },
      {
        text: "를 깊게 다루며 웹 표준을 의식하고, 장기적으로는 팀과 함께 지속 가능한 제품을 만드는 일원이 되겠습니다.",
      },
    ],
  },
];
