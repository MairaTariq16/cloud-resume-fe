import { IconType } from "react-icons";

export interface SideNavItem {
  title: string;
  path: string;
}

export interface ContentItem {
  primaryHeading: string;
  secondaryHeading?: string;
  primaryLink?: string;
  secondaryLink?: string;
  description?: string[];
  date?: string;
}

export interface Content {
  title: string;
  items: ContentItem[];
}

export interface AboutInfoItem {
  icon?: IconType;
  label?: string;
  value: string;
  link?: string;
}
