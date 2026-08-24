export type ProjectCategory = 'ALL' | 'AI/ML' | 'DATA SCIENCE' | 'WEB' | 'GENAI' | 'NLP' | 'CYBERSECURITY';

export interface ProjectArchitecture {
  summary: string;
  components: {
    name: string;
    description: string;
    tech: string;
  }[];
  dataFlow?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured?: boolean;
  role: string;
  duration?: string;
  teamSize?: string;
  githubUrl: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  tags: string[];
  coverImage?: string;
  
  // 10-Part Case Study Schema
  problem: string;
  why: string;
  solution: string;
  architecture: ProjectArchitecture;
  myContribution: string[];
  technicalChallenges: {
    challenge: string;
    resolution: string;
  }[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
  }[];
  results: string[];
  learnings: string[];
}

export type SkillLevel = 'core' | 'working-with' | 'exploring';

export interface SkillItem {
  name: string;
  category: string;
  level: SkillLevel;
  proofOfWorkProjectIds?: string[];
  topics?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface AreaExploring {
  title: string;
  description: string;
  status: string;
  technologies: string[];
}

export interface LearningMilestone {
  year: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  location?: string;
  period: string;
  type: 'Internship' | 'Technical Club' | 'Team Project' | 'Leadership' | 'Open Source';
  description?: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
}

export interface HackathonItem {
  id: string;
  name: string;
  organizer: string;
  date: string;
  projectName: string;
  problemStatement: string;
  solution: string;
  myRole: string;
  techStack: string[];
  outcome: string;
  demoUrl?: string;
  repoUrl?: string;
  learnings: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Hackathons' | 'Competitions' | 'Academic' | 'Milestones';
  description: string;
  evidenceLink?: string;
  highlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
}

export interface EducationItem {
  id?: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  status?: string;
  grade?: string;
  coursework: string[];
  focusAreas: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  bioHeadline: string;
  shortBio: string;
  location: string;
  email: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
  currently: {
    building: string;
    learning: string;
    exploring: string;
    lookingFor: string;
  };
  recruiterSnapshot: {
    status: string;
    graduationYear: string;
    targetRoles: string[];
    topProjectIds: string[];
    coreSkills: string[];
  };
}

export interface LabExperiment {
  id: string;
  title: string;
  category: 'NLP / Tokenizer' | 'Neural Nets' | 'Cybersecurity' | 'Data Visualization';
  status: 'live' | 'coming-soon';
  description: string;
  technicalConcept: string;
  interactiveType: 'tokenizer-sim' | 'activation-sim' | 'security-header-checker' | 'custom';
}
