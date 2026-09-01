import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics?: string[];
}

export interface GitHubProfileStats {
  public_repos: number;
  followers: number;
  following: number;
  topRepos: GitHubRepo[];
  languages: { name: string; percentage: number; color: string }[];
  isLoading: boolean;
  isError: boolean;
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1351632263,
    name: 'ML-Model-for-Athletes',
    description: 'Multimodal Athlete Injury Prediction System forecasting 30-day injury risk, onset timing, and recovery duration using 5-modality wearable telemetry and multi-target weighted ensemble.',
    html_url: 'https://github.com/bhavya277/ML-Model-for-Athletes',
    homepage: 'https://athletes-ml-model.vercel.app',
    stargazers_count: 1,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-09-01T08:15:00Z',
    topics: ['machine-learning', 'python', 'polars', 'catboost', 'lightgbm', 'time-series', 'ensemble', 'predictive-modeling'],
  },
  {
    id: 1,
    name: 'Krishi-Bazar',
    description: 'AI-Powered Agricultural Market Linkage Platform with real-time APMC mandi price discovery and IBM watsonx.ai Granite LLM forecasting.',
    html_url: 'https://github.com/bhavya277/Krishi-Bazar',
    stargazers_count: 0,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-08-23T06:00:00Z',
    topics: ['react', 'typescript', 'watsonx-ai', 'express', 'market-intelligence'],
  },
  {
    id: 2,
    name: 'GlobeTrotter',
    description: 'Full-stack multi-city travel planning platform with drag-and-drop itinerary organization and Prisma relational storage.',
    html_url: 'https://github.com/bhavya277/GlobeTrotter',
    stargazers_count: 1,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-08-22T11:00:00Z',
    topics: ['react', 'typescript', 'prisma', 'express', 'sqlite', 'travel'],
  },
  {
    id: 3,
    name: 'FinOps',
    description: 'Cloud financial operations analytics platform combining Prophet time-series cost forecasting and Isolation Forest anomaly detection.',
    html_url: 'https://github.com/bhavya277/FinOps',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: '2026-05-07T16:00:00Z',
    topics: ['python', 'flask', 'prophet', 'scikit-learn', 'react', 'data-science'],
  },
  {
    id: 4,
    name: 'blockchain-based-Voting-System',
    description: 'Decentralized and biometrically-secured voting system combining Ethereum smart contracts, EasyOCR verification, and AES-256 encryption.',
    html_url: 'https://github.com/bhavya277/blockchain-based-Voting-System',
    stargazers_count: 1,
    forks_count: 0,
    language: 'Solidity / TS',
    updated_at: '2026-03-25T03:00:00Z',
    topics: ['solidity', 'ethereum', 'hardhat', 'fastapi', 'easyocr', 'web3'],
  },
  {
    id: 5,
    name: 'HRMS_TH',
    description: 'Human Resource Management System streamlining employee administration, attendance tracking, leave approvals, and PDF payroll.',
    html_url: 'https://github.com/bhavya277/HRMS_TH',
    homepage: 'https://hrmsth.vercel.app',
    stargazers_count: 1,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-04-03T06:00:00Z',
    topics: ['react', 'typescript', 'mongodb', 'express', 'tailwind', 'jspdf'],
  },
  {
    id: 6,
    name: 'AssetFlow',
    description: 'Enterprise asset management platform to track, allocate, maintain, audit, and report on organizational assets.',
    html_url: 'https://github.com/bhavya277/AssetFlow',
    stargazers_count: 1,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2026-07-12T11:00:00Z',
    topics: ['react', 'fastapi', 'typescript', 'python', 'enterprise'],
  },
  {
    id: 7,
    name: 'Particle-tracking',
    description: 'Interactive 3D particle system controlled by real-time webcam hand gesture tracking using MediaPipe and Three.js.',
    html_url: 'https://github.com/bhavya277/Particle-tracking',
    homepage: 'https://particle-tracking.vercel.app',
    stargazers_count: 1,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2026-01-04T06:00:00Z',
    topics: ['threejs', 'mediapipe', 'computervision', 'webgl', 'javascript'],
  },
  {
    id: 8,
    name: 'Expense-Manager',
    description: 'PHP + MySQL web application for personal expense tracking, monthly budgets, and interactive Chart.js analytics.',
    html_url: 'https://github.com/bhavya277/Expense-Manager',
    homepage: 'https://expensemanager27.great-site.net/',
    stargazers_count: 1,
    forks_count: 0,
    language: 'PHP',
    updated_at: '2026-01-03T12:00:00Z',
    topics: ['php', 'mysql', 'docker', 'bootstrap', 'finance'],
  },
];

const FALLBACK_LANGUAGES = [
  { name: 'TypeScript', percentage: 42, color: '#3178C6' },
  { name: 'Python', percentage: 34, color: '#3572A5' },
  { name: 'JavaScript', percentage: 12, color: '#F7DF1E' },
  { name: 'PHP', percentage: 7, color: '#4F5D95' },
  { name: 'Solidity', percentage: 5, color: '#AA6746' },
];

export const useGitHubData = (username: string = 'bhavya277'): GitHubProfileStats => {
  const [data, setData] = useState<GitHubProfileStats>({
    public_repos: 9,
    followers: 1,
    following: 3,
    topRepos: FALLBACK_REPOS,
    languages: FALLBACK_LANGUAGES,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API rate limited or user not found');
        }

        const userData = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        if (isMounted) {
          const nonForked = reposData.filter((r: any) => !r.fork);
          
          // Calculate dynamic language distribution from live repositories
          const langCount: { [key: string]: number } = {};
          nonForked.forEach((repo: any) => {
            if (repo.language) {
              langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
          });
          const totalLangs = Object.values(langCount).reduce((a, b) => a + b, 0);
          const langColors: { [key: string]: string } = {
            TypeScript: '#3178C6',
            Python: '#3572A5',
            JavaScript: '#F7DF1E',
            PHP: '#4F5D95',
            Solidity: '#AA6746',
            HTML: '#E34F26',
            CSS: '#563D7C',
          };
          const calculatedLanguages = totalLangs > 0
            ? Object.entries(langCount)
                .map(([name, count]) => ({
                  name,
                  percentage: Math.round((count / totalLangs) * 100),
                  color: langColors[name] || '#8B949E',
                }))
                .sort((a, b) => b.percentage - a.percentage)
            : FALLBACK_LANGUAGES;

          setData({
            public_repos: userData.public_repos || 8,
            followers: userData.followers || 0,
            following: userData.following || 0,
            topRepos: nonForked.length > 0 ? nonForked : FALLBACK_REPOS,
            languages: calculatedLanguages,
            isLoading: false,
            isError: false,
          });
        }
      } catch (err) {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            isLoading: false,
            isError: true,
          }));
        }
      }
    };

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return data;
};
