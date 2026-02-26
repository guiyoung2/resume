export interface ContactLinkItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactContent {
  title: string;
  description: string;
  links: ContactLinkItem[];
}
