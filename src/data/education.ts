/** Education 섹션 학력 항목 데이터를 제공합니다. */
export type EducationItem = {
  period: string;
  institution: string;
  courseName: string;
  description: string;
  techTags: string[];
};

export const educationItems: EducationItem[] = [
  {
    period: "2025.11 ~ 2026.05 (6개월)",
    institution: "코드잇",
    courseName: "프론트엔드 엔지니어 부트캠프",
    description:
      "Next.js, React, TypeScript, GitHub 등 실무에서 요구하는 기술 학습 및 팀 프로젝트 수행",
    techTags: ["Next.js", "React", "TypeScript", "GitHub"],
  },
  {
    period: "2025.03 ~ 2025.07 (5개월)",
    institution: "이지디자인컴퓨터학원",
    courseName: "반응형웹디자인(UI/UX) 및 웹퍼블리셔 취업과정",
    description:
      "HTML5, CSS3, JavaScript 중심의 반응형 웹 퍼블리싱 기본기 및 UI/UX 구현 역량 습득",
    techTags: ["HTML5", "CSS3", "JavaScript"],
  },
];
