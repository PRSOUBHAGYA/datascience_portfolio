
export interface Project {
  id: string;
  title: string;
  channelName: string;
  views: string;
  uploadedAt: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string; // Direct link to MP4 or similar
  description: string;
  techStack: string[];
  category: 'GenAI & LLMs' | 'Computer Vision' | 'Data Visualization' | 'NLP' | 'Data Engineering';
  githubUrl: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  text: string;
  timestamp: string;
  likes: number;
  isAiResponse?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  icon?: string;
}

export enum ViewMode {
  Desktop,
  Mobile
}
