export interface AboutContent {
  title: string;
  introduction: string;
}

export interface CareerLink {
  label: string;
  url: string;
}

export interface CareerProject {
  title: string;
  links: CareerLink[];
  duties: string[];
}

export interface CareerContent {
  company: string;
  meta: string;
  period: string;
  description: string;
  projects: CareerProject[];
  extraLink: CareerLink;
  techStackText: string;
}

export interface InsightItem {
  title: string;
  description: string;
}
