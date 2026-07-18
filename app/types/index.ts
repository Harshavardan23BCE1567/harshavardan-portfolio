export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  architecture: string[];
  impact: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  category: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  type: "work" | "education" | "certification" | "course";
}

export interface Skill {
  name: string;
  category: "ai-ml" | "cloud" | "backend" | "frontend" | "edge-iot" | "languages" | "tools";
  level?: number;
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}
