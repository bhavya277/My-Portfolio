import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'tech-club-lead',
    organization: 'University Technical Club / Department Forum',
    role: 'Core Technical Member & AI/ML Coordinator',
    location: 'University Campus',
    period: '2024 – Present',
    type: 'Technical Club',
    description: 'Coordinating student technical workshops, hands-on coding sessions, and mentoring junior peers in Python, Data Structures, and basic Machine Learning concepts.',
    responsibilities: [
      'Organized and delivered 3+ hands-on technical bootcamps on Python for Data Science and Machine Learning basics.',
      'Mentored 40+ junior students in foundational algorithms and Git version control workflows.',
      'Collaborated with fellow core members to organize internal hackathons and coding challenges.',
    ],
    achievements: [
      'Recognized for active contributions to departmental technical initiatives and peer mentoring.',
    ],
    technologies: ['Python', 'Machine Learning', 'Git', 'Data Structures', 'Linux'],
  },
  {
    id: 'academic-project-lead',
    organization: 'Department Capstone Project Team',
    role: 'Lead Developer — Intelligent Systems Project',
    location: 'Academic Lab',
    period: '2025 – 2026',
    type: 'Team Project',
    description: 'Spearheaded the architecture and full-stack implementation of comprehensive student capstone projects combining AI/ML inference with web interfaces.',
    responsibilities: [
      'Led the system architecture design, defining API contracts and database schemas.',
      'Implemented data processing pipelines and integrated ML models into responsive web interfaces.',
      'Conducted peer code reviews and managed sprint tasks on GitHub Projects.',
    ],
    technologies: ['Python', 'Scikit-learn', 'React', 'Node.js', 'PostgreSQL', 'GitHub'],
  },
  {
    id: 'open-source-contributor',
    organization: 'Open Source Community',
    role: 'Contributor & Builder',
    location: 'Remote',
    period: '2024 – Present',
    type: 'Open Source',
    description: 'Active contributor to developer tools, documentation improvements, and open AI/ML experiment repositories.',
    responsibilities: [
      'Created open-source boilerplate templates for ML pipelines and FastAPI endpoints.',
      'Submitted documentation and bug-fix pull requests to student developer repositories.',
    ],
    technologies: ['Python', 'Markdown', 'Git', 'FastAPI'],
  },
];
