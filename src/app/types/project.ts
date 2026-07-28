export interface ProjectItem {
  id: number;
  /** 대표 프로젝트 여부. true면 큰 카드, false/미지정이면 요약 카드로 렌더링된다. */
  featured?: boolean;
  title: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
  detailedTechStack: string;
  projectType: "개인 프로젝트";
  period: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  thumbnailSrc: string;
  thumbnailAlt: string;
}
