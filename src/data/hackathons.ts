import { HackathonItem } from '../types';

export const hackathonsData: HackathonItem[] = [
  {
    id: 'ibm-hackathon-2026',
    name: 'IBM Hackathon — Challenge 13: Economic Development',
    organizer: 'IBM Cloud / IBM watsonx.ai',
    date: '2026',
    projectName: 'Krishi Bazaar – AI-Powered Agricultural Market Linkage',
    problemStatement: 'Farmers experience information asymmetry and price drops during harvest due to fragmented APMC mandi price dissemination and lack of predictive market intelligence.',
    solution: 'Engineered an AI-powered agricultural web application utilizing IBM Granite LLM on watsonx.ai to forecast commodity prices, connect farmers directly with buyers, and advise on optimal sales timing.',
    myRole: 'Full-Stack & AI Integration Developer [NEEDS TEAM CONFIRMATION]',
    techStack: ['React', 'TypeScript', 'Express.js', 'IBM watsonx.ai', 'IBM Granite LLM', 'Tailwind CSS', 'Recharts'],
    outcome: 'Hackathon Submission / Project Prototype [NEEDS CONFIRMATION]',
    repoUrl: 'https://github.com/bhavya277/Krishi-Bazar',
    learnings: [
      'Integrating IBM Cloud watsonx.ai SDKs and IBM Granite foundation models.',
      'Designing agentic AI workflows and MCP servers for domain-specific market analysis.',
      'Developing responsive data dashboards with real-time charting under hackathon timelines.',
    ],
  },
];
