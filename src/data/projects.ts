/** Projects 섹션 프로젝트 상세 데이터를 제공합니다. */
export type Project = {
  name: string;
  summary: string;
  role: string;
  contribution: string;
  techStack: string[];
  tasks: string[];
  troubleshooting: string;
  repositoryUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Coworkers",
    summary: "업무 배정 및 현황 공유 SaaS 플랫폼",
    role: "팀 프로젝트",
    contribution: "기여도 25%",
    techStack: ["Next.js", "TypeScript", "React"],
    tasks: [
      "게시글 목록/조회 최적화(무한스크롤, 페이지네이션, 검색)",
      "상세 페이지 동적 라우팅",
      "유효성 검사 폼",
      "Mobile-First 반응형 UI",
    ],
    troubleshooting:
      "무한 스크롤 데이터 캐시 미동기화 문제를 Next.js 캐시 무효화 및 훅 설계를 통해 주도적으로 AI를 제어하여 해결한 경험.",
    repositoryUrl: undefined,
    demoUrl: undefined,
  },
];
