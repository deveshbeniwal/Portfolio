export interface ProjectLink {
    label: string;
    url: string;
    type?: 'playstore' | 'appstore' | 'steam' | 'website' | 'video' | 'demo' | 'linkedin' | 'drive';
}

export interface Project {
    id: string;
    title: string;
    genre: string;
    tagline: string;
    description: string;
    fullOverview: string;
    image: string;
    year: string;
    role: string;
    platforms: string[];
    techStack: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    architectureHighlights: string[];
    codeSnippet?: {
        language: string;
        title: string;
        code: string;
    };
    featured: boolean;
    category?: 'multiplayer' | 'sports' | 'arvr' | 'casual';
    steamUrl?: string;
    playstoreUrl?: string;
    appstoreUrl?: string;
    demoUrl?: string;
    websiteUrl?: string;
    videoUrl?: string;
    additionalLinks?: ProjectLink[];
}

export interface CareerMilestone {
    year: string;
    period: string;
    role: string;
    company: string;
    location: string;
    level: string;
    summary: string;
    keyAchievements: string[];
    technologies: string[];
    metrics: string;
}

export interface SkillCategory {
    id: string;
    name: string;
    description: string;
    skills: {
        name: string;
        level: number; // 1-100
        experienceYears: number;
        highlight: string;
        keywords: string[];
    }[];
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    year: string;
    credentialId: string;
    description: string;
    badgeType: 'expert' | 'speaker' | 'award' | 'cloud';
    verifiedUrl: string;
    keySkills: string[];
    certificateImage?: string;
}
