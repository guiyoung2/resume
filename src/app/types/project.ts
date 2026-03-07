export interface ProjectItem {
  id: number;
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
