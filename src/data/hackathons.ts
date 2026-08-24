import { HackathonItem } from '../types';

export const hackathonsData: HackathonItem[] = [
  {
    id: 'smart-india-internal-2025',
    name: 'Internal University Hackathon 2025',
    organizer: 'Institute Innovation Cell',
    date: '2025',
    projectName: 'AI-Powered Smart Citizen Assistance Portal',
    problemStatement: 'Public civic grievance reporting systems suffer from slow manual classification and lack of automated priority routing for emergency issues.',
    solution: 'Engineered an automated grievance triage pipeline using NLP to extract complaint categories, assign urgency scores, and route tickets to municipal departments via an interactive dashboard.',
    myRole: 'ML Model Development & Backend API Integration',
    techStack: ['Python', 'FastAPI', 'Scikit-learn', 'NLP', 'React', 'PostgreSQL'],
    outcome: 'Finalist / Top 5 Team in Institutional Round',
    repoUrl: 'https://github.com/bhavya277/smart-grievance-ai',
    learnings: [
      'Rapid prototype development under a strict 36-hour sprint timeframe.',
      'Translating ambiguous problem statements into discrete ML classification tasks.',
      'Building robust fallback mechanisms when live API services experience latency.',
    ],
  },
  {
    id: 'tech-sprint-2024',
    name: 'Annual Departmental CodeSprint 2024',
    organizer: 'Department of Information Technology',
    date: '2024',
    projectName: 'Secure DataVault — Zero-Knowledge File Locker',
    problemStatement: 'Insecure cloud file sharing often exposes unencrypted file metadata and lacks granular access expiration.',
    solution: 'Constructed a lightweight web application that encrypts files client-side using AES-GCM before transmitting ciphertext to backend storage, with time-limited signed download links.',
    myRole: 'Frontend & Client-Side Encryption Logic',
    techStack: ['React', 'Web Crypto API', 'Node.js', 'Express', 'Tailwind CSS'],
    outcome: '2nd Place — Best Security Implementation',
    repoUrl: 'https://github.com/bhavya277/secure-datavault',
    learnings: [
      'Practical implementation of Web Crypto API (SubtleCrypto) in modern browsers.',
      'Managing encrypted binary blobs and secure key derivation functions (PBKDF2).',
    ],
  },
];
