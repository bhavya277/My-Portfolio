import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Machine Learning Specialization / Coursework',
    issuer: 'Coursera / DeepLearning.AI',
    issueDate: '2024 – 2025',
    credentialId: '[VERIFIABLE CREDENTIAL ID]',
    verificationUrl: 'https://coursera.org',
    skills: ['Supervised Learning', 'Neural Networks', 'Decision Trees', 'Gradient Descent', 'Model Evaluation'],
  },
  {
    id: 'cert-2',
    title: 'Python for Data Science & Machine Learning',
    issuer: 'Industry Recognized Platform / Udemy',
    issueDate: '2024',
    credentialId: '[VERIFIABLE CREDENTIAL ID]',
    verificationUrl: 'https://udemy.com',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Data Preprocessing'],
  },
  {
    id: 'cert-3',
    title: 'Cybersecurity Fundamentals & Network Defense',
    issuer: 'Cisco Networking Academy / TryHackMe',
    issueDate: '2025',
    credentialId: '[VERIFIABLE CREDENTIAL ID]',
    verificationUrl: 'https://tryhackme.com',
    skills: ['Network Protocols', 'Vulnerability Analysis', 'Security Best Practices', 'Cryptography'],
  },
  {
    id: 'cert-4',
    title: 'PostgreSQL Database Administration & SQL Mastery',
    issuer: 'Technical Certification Provider',
    issueDate: '2024',
    credentialId: '[VERIFIABLE CREDENTIAL ID]',
    verificationUrl: 'https://example.com',
    skills: ['Relational Schema Design', 'Complex Joins', 'Query Optimization', 'Indexes'],
  },
];
