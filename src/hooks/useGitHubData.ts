import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
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
    id: 1,
    name: 'globetrotter',
    description: 'Full-stack AI-assisted travel discovery & itinerary planning platform with interactive geospatial maps and PostgreSQL storage.',
    html_url: 'https://github.com/modibhavya/globetrotter',
    stargazers_count: 14,
    forks_count: 3,
    language: 'TypeScript',
    updated_at: '2026-07-15T10:00:00Z',
    topics: ['react', 'typescript', 'postgresql', 'generative-ai', 'nodejs'],
  },
  {
    id: 2,
    name: 'nlp-sentiment-pipeline',
    description: 'Comparative NLP text sentiment pipeline: TF-IDF + Classical ML vs DistilBERT Transformer fine-tuning with FastAPI serving.',
    html_url: 'https://github.com/modibhavya/nlp-sentiment-pipeline',
    stargazers_count: 8,
    forks_count: 2,
    language: 'Python',
    updated_at: '2026-06-20T14:30:00Z',
    topics: ['nlp', 'transformers', 'pytorch', 'fastapi', 'scikit-learn'],
  },
  {
    id: 3,
    name: 'network-threat-detector',
    description: 'Anomaly-based network intrusion detection system evaluating random forest & decision tree classifiers on flow packets.',
    html_url: 'https://github.com/modibhavya/network-threat-detector',
    stargazers_count: 6,
    forks_count: 1,
    language: 'Python',
    updated_at: '2026-05-10T09:15:00Z',
    topics: ['cybersecurity', 'random-forest', 'network-security', 'eda'],
  },
  {
    id: 4,
    name: 'data-insight-framework',
    description: 'Automated exploratory data analysis platform generating statistical distributions, correlation heatmaps, and outlier reports.',
    html_url: 'https://github.com/modibhavya/data-insight-framework',
    stargazers_count: 5,
    forks_count: 1,
    language: 'Python',
    updated_at: '2026-04-18T16:00:00Z',
    topics: ['data-science', 'pandas', 'streamlit', 'visualization'],
  },
];

const FALLBACK_LANGUAGES = [
  { name: 'Python', percentage: 52, color: '#3572A5' },
  { name: 'TypeScript', percentage: 28, color: '#3178C6' },
  { name: 'JavaScript', percentage: 12, color: '#F7DF1E' },
  { name: 'C++', percentage: 8, color: '#F34B7D' },
];

export const useGitHubData = (username: string = 'modibhavya'): GitHubProfileStats => {
  const [data, setData] = useState<GitHubProfileStats>({
    public_repos: 18,
    followers: 12,
    following: 15,
    topRepos: FALLBACK_REPOS,
    languages: FALLBACK_LANGUAGES,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    let isMounted = true;
    const fetchGitHub = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user');
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();

        if (isMounted && Array.isArray(reposData) && reposData.length > 0) {
          const formattedRepos: GitHubRepo[] = reposData.slice(0, 4).map((r: any) => ({
            id: r.id,
            name: r.name,
            description: r.description || 'Repository dedicated to software & AI/ML engineering.',
            html_url: r.html_url,
            stargazers_count: r.stargazers_count || 0,
            forks_count: r.forks_count || 0,
            language: r.language || 'Code',
            updated_at: r.updated_at,
            topics: r.topics || [],
          }));

          setData({
            public_repos: userData.public_repos || 18,
            followers: userData.followers || 12,
            following: userData.following || 15,
            topRepos: formattedRepos.length > 0 ? formattedRepos : FALLBACK_REPOS,
            languages: FALLBACK_LANGUAGES,
            isLoading: false,
            isError: false,
          });
        }
      } catch (err) {
        if (isMounted) {
          // Graceful fallback
          setData({
            public_repos: 18,
            followers: 12,
            following: 15,
            topRepos: FALLBACK_REPOS,
            languages: FALLBACK_LANGUAGES,
            isLoading: false,
            isError: true, // Marked as error but populated with fallback
          });
        }
      }
    };

    fetchGitHub();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return data;
};
