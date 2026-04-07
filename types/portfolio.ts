import type { LucideIcon } from 'lucide-react';

export type SkillCategoryKey = 'frontend' | 'state' | 'performance' | 'tools';

export interface ProjectPreview {
  eyebrow: string;
  headline: string;
  subtext: string;
  accent: string;
  glow: string;
  chips: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  live: string;
  code: string;
  featured: boolean;
  metrics: string[];
  preview: ProjectPreview;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  points: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ContactItem {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
}
