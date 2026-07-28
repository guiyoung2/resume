export interface ContactLinkItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactNoteLink {
  label: string;
  href: string;
}

export interface ContactNote {
  text: string;
  links: ContactNoteLink[];
}

export interface ContactContent {
  title: string;
  description: string;
  links: ContactLinkItem[];
  note: ContactNote;
}
