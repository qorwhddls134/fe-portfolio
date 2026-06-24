/** Projects 섹션 프로젝트 상세 데이터를 제공합니다. */
export type Project = {
  name: string;
  summary: string;
  role: string;
  contribution: string;
  techStack: string[];
  tasks: string[];
  troubleshooting: string;
  mockupSrc: string;
  mockupWidth: number;
  mockupHeight: number;
  githubUrl?: string;
  deployUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Coworkers",
    summary: "팀 협업·할 일 관리·채용/홍보 게시판을 제공하는 웹 서비스",
    role: "팀 프로젝트 · 프론트엔드 개발 (채용/홍보 게시판 담당)",
    contribution: "4인 팀 구성 · 전체 기여도 25%",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tasks: [
      "게시글 목록 무한 스크롤·베스트 글 페이지네이션·키워드 검색 구현",
      "게시글 상세·작성/수정·댓글 CRUD 및 인증 분기 처리",
      "제목·본문 유효성 검사 및 미저장 이탈 방지 폼 구현",
      "모바일·태블릿·데스크톱 반응형 게시판 UI",
    ],
    troubleshooting:
      "게시글 작성·수정 중 폼 밖 네비게이션(사이드바·헤더 링크) 클릭 시 저장 없이 이탈되는 문제가 있었습니다. 커스텀 폼 상태(useBoardFormFields)만으로는 전역 클릭을 막을 수 없어, document capture 단계의 pointerdown/click 리스너와 beforeunload, 폼 영역(data-allow-unsaved) 예외 규칙을 가진 미저장 이탈 가드 훅으로 해결했습니다.",
    mockupSrc: "/images/projects/coworkers.png",
    mockupWidth: 1902,
    mockupHeight: 907,
    githubUrl: "https://github.com/part4-3team/Coworkers",
    deployUrl: "https://coworkers-blond.vercel.app/",
  },
];
