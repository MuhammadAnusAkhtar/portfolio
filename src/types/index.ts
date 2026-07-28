export type ProjectCategory = "websites" | "mobile" | "ui-design" | "desktop";

export interface ProjectLinks {
  live?: string;
  github?: string;
  apk?: string;
  liveBackend?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  /** Extra category tabs this project should also appear under, beyond its primary category. */
  additionalCategories?: ProjectCategory[];
  image: string;
  /** Extra screenshots shown as a gallery in the details modal (image is always shown first). */
  gallery?: string[];
  technologies: string[];
  description: string;
  features: string[];
  links: ProjectLinks;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  items?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
