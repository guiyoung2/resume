export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface HarnessItem {
  name: string;
  description: string;
  appliedProjects?: string;
  githubUrl: string;
}

export interface ArchiveItem {
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}
