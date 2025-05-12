import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  imageUrl?: string;
  tags?: string[];
  dataAiHint?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer?: string;
  icon?: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role:string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Others';
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon?: LucideIcon;
}
