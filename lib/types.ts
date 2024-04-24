export interface SideNavItem {
  title: string;
  path: string;
}

export interface ContentItem {
  primaryHeading: string;
  secondaryHeading?: string;
  description?: string[];
  date?: string;
}

export interface Content {
  title: string;
  items: ContentItem[];
}
