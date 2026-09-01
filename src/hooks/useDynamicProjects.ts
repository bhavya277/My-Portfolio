import { useMemo } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCaseStudy, ProjectCategory } from '../types';
import { useGitHubData, GitHubRepo } from './useGitHubData';

/**
 * Normalizes a string into a standardized slug ID
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Intelligently classifies a GitHub repository into a portfolio ProjectCategory
 */
export const inferCategory = (repo: GitHubRepo): ProjectCategory => {
  const text = `${repo.name} ${repo.description || ''} ${repo.language || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();

  if (
    text.includes('blockchain') ||
    text.includes('solidity') ||
    text.includes('voting') ||
    text.includes('crypto') ||
    text.includes('cyber') ||
    text.includes('security') ||
    text.includes('aes')
  ) {
    return 'CYBERSECURITY';
  }

  if (
    text.includes('nlp') ||
    text.includes('granite') ||
    text.includes('watsonx') ||
    text.includes('llm') ||
    text.includes('langchain') ||
    text.includes('rag')
  ) {
    return 'NLP';
  }

  if (
    text.includes('ml') ||
    text.includes('model') ||
    text.includes('athlete') ||
    text.includes('catboost') ||
    text.includes('lightgbm') ||
    text.includes('scikit') ||
    text.includes('tensorflow') ||
    text.includes('pytorch') ||
    text.includes('ai') ||
    text.includes('vision') ||
    text.includes('mediapipe')
  ) {
    return 'AI/ML';
  }

  if (
    text.includes('data') ||
    text.includes('finops') ||
    text.includes('prophet') ||
    text.includes('analytics') ||
    text.includes('polars') ||
    text.includes('pandas') ||
    text.includes('time-series')
  ) {
    return 'DATA SCIENCE';
  }

  return 'WEB';
};

/**
 * Transforms a raw GitHub repository into a rich dynamic ProjectCaseStudy
 */
export const synthesizeProjectFromRepo = (repo: GitHubRepo): ProjectCaseStudy => {
  const category = inferCategory(repo);
  const formattedName = repo.name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  
  const tags = Array.from(
    new Set([
      repo.language,
      ...(repo.topics || []).map((t) => t.replace(/-/g, ' ')),
    ].filter(Boolean))
  ) as string[];

  const description = repo.description || `Autonomous engineering repository for ${formattedName}.`;

  return {
    id: slugify(repo.name),
    title: `${formattedName} — GitHub Automated Project`,
    tagline: description,
    category,
    featured: false,
    role: 'Lead Developer & Creator',
    duration: 'Active GitHub Repository',
    teamSize: 'Individual Project',
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || undefined,
    tags: tags.length > 0 ? tags : [repo.language || 'Software Engineering'],

    problem: `Open-source codebase for ${formattedName}. Built to provide structured, modular architecture for ${category.toLowerCase()} applications.`,
    why: 'Demonstrating hands-on algorithmic implementation, clean commit history, and automated code maintenance.',
    solution: description,

    architecture: {
      summary: `Automated repository architecture for ${repo.name}, featuring ${repo.language || 'multi-language'} source code structure, automated dependency configuration, and modular component layers.`,
      components: [
        {
          name: 'Core Application Engine',
          description: `Primary codebase implementation leveraging ${repo.language || 'modern development standards'}.`,
          tech: repo.language || 'Standard Libraries',
        },
        {
          name: 'Repository Ecosystem & Tooling',
          description: `Configured with Git version control, continuous integration, and ${tags.slice(0, 3).join(', ') || 'modern libraries'}.`,
          tech: tags.slice(0, 3).join(', ') || 'GitHub Ecosystem',
        },
      ],
      dataFlow: [
        `1. Codebase tracked on GitHub at ${repo.html_url}`,
        `2. Automated dependency parsing and topic classification (${tags.join(', ')})`,
        `3. Dynamic synchronization into developer portfolio`,
      ],
    },

    myContribution: [
      `Authored and maintained the core repository codebase (${repo.name}).`,
      `Engineered module components and algorithms using ${repo.language || 'modern programming languages'}.`,
      `Managed version control workflows, issue tracking, and repository updates.`,
    ],

    technicalChallenges: [
      {
        challenge: 'Maintaining modular codebase structure and version synchronization.',
        resolution: 'Applied continuous git version discipline and structured directory conventions.',
      },
    ],

    engineeringDecisions: [
      {
        decision: `Selected ${repo.language || 'optimal language stack'} for development.`,
        rationale: 'Ensures optimal runtime performance, broad library ecosystem, and high maintainability.',
      },
    ],

    results: [
      `Published to GitHub with active commits and public accessibility.`,
      `Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count}`,
    ],

    learnings: [
      `Hands-on development experience with ${repo.language || 'modern software patterns'} and dynamic project lifecycle.`,
    ],
  };
};

/**
 * Custom Hook: useDynamicProjects
 * Automatically merges curated project case studies with live GitHub repositories.
 * Any new repository created on GitHub will automatically appear in Projects & Search!
 */
export const useDynamicProjects = () => {
  const gitHubStats = useGitHubData('bhavya277');

  const { allProjects, liveSyncedCount } = useMemo(() => {
    const curatedProjects = [...projectsData];
    const liveRepos = gitHubStats.topRepos || [];

    // Map existing curated project slugs & github URLs for quick lookup
    const curatedSlugMap = new Map<string, ProjectCaseStudy>();
    const curatedUrlMap = new Map<string, ProjectCaseStudy>();

    curatedProjects.forEach((proj) => {
      curatedSlugMap.set(proj.id.toLowerCase(), proj);
      if (proj.githubUrl) {
        curatedUrlMap.set(proj.githubUrl.toLowerCase(), proj);
      }
    });

    let liveSyncedCount = 0;
    const dynamicSynthesizedProjects: ProjectCaseStudy[] = [];

    // Iterate through live GitHub repos
    liveRepos.forEach((repo) => {
      const repoSlug = slugify(repo.name);
      const repoUrl = repo.html_url.toLowerCase();

      // Check if this repo is already represented in curatedProjects
      const matchedCurated = 
        curatedSlugMap.get(repoSlug) || 
        curatedUrlMap.get(repoUrl) ||
        curatedProjects.find((p) => p.githubUrl.toLowerCase().endsWith(`/${repo.name.toLowerCase()}`));

      if (matchedCurated) {
        // Enrich curated project with live GitHub stats
        matchedCurated.githubUrl = repo.html_url;
        if (!matchedCurated.liveUrl && repo.homepage) {
          matchedCurated.liveUrl = repo.homepage;
        }
      } else {
        // Auto-generate project case study for newly discovered repo!
        const synthesized = synthesizeProjectFromRepo(repo);
        dynamicSynthesizedProjects.push(synthesized);
        liveSyncedCount++;
      }
    });

    return {
      allProjects: [...curatedProjects, ...dynamicSynthesizedProjects],
      liveSyncedCount,
    };
  }, [gitHubStats.topRepos]);

  return {
    projects: allProjects,
    isLoading: gitHubStats.isLoading,
    isError: gitHubStats.isError,
    totalCount: allProjects.length,
    liveSyncedCount,
  };
};
