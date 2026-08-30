export type ProjectCategory = 'all' | 'awards' | '3d-webgl' | 'ecommerce' | 'agency' | 'experimental';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  category: ProjectCategory[];
  description: string;
  longDescription: string;
  highlights: string[];
  stack: string[];
  awards: string[];
  liveUrl: string;
  githubUrl?: string;
  previewType: 'webgl' | 'interactive' | 'visual';
  accentColor: string;
  image: string;
  galleryImages: string[];
  metrics?: { label: string; value: string }[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  count: string;
  year: string;
  highlight: string;
  category: string;
  iconName: string;
}

export interface TimelineItem {
  year: string;
  period: string;
  role: string;
  company: string;
  description: string;
  milestones: string[];
  technologies: string[];
}

export interface StackCategory {
  category: string;
  skills: {
    name: string;
    level: number;
    description: string;
    category: 'core' | 'animation' | '3d' | 'tooling';
  }[];
}
