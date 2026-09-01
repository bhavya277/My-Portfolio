import { useMemo } from 'react';
import { skillsData } from '../data/skills';
import { SkillItem, SkillLevel } from '../types';
import { useDynamicProjects } from './useDynamicProjects';
import { useGitHubData } from './useGitHubData';

/**
 * Normalizes skill names for fuzzy matching against project tags and topics
 */
const normalizeText = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};

/**
 * Custom Hook: useDynamicSkills
 * Dynamically correlates all skills with live & curated projects, automatically discovering
 * new skill proficiencies from GitHub repositories and ensuring all proof-of-work links
 * stay synchronized with zero manual editing required.
 */
export const useDynamicSkills = () => {
  const { projects, isLoading: isProjectsLoading } = useDynamicProjects();
  const gitHubStats = useGitHubData('bhavya277');

  const dynamicSkills = useMemo(() => {
    // Clone baseline skills
    const skills: SkillItem[] = skillsData.map((s) => ({
      ...s,
      proofOfWorkProjectIds: [...(s.proofOfWorkProjectIds || [])],
      topics: [...(s.topics || [])],
    }));

    // Build map of skill names to index for rapid matching
    const skillNameMap = new Map<string, SkillItem>();
    skills.forEach((skill) => {
      skillNameMap.set(normalizeText(skill.name), skill);
      // Also map individual parts (e.g. 'Pandas', 'NumPy', 'Polars')
      const tokens = skill.name.split(/[,/&+\s]+/);
      tokens.forEach((token) => {
        if (token.length > 2) {
          skillNameMap.set(normalizeText(token), skill);
        }
      });
    });

    // 1. Synchronize Proof-of-Work from all current projects (Curated + Live GitHub)
    projects.forEach((proj) => {
      const projSearchText = [
        proj.title,
        proj.category,
        ...proj.tags,
        ...(proj.architecture?.components?.map((c) => `${c.name} ${c.tech}`) || []),
      ].join(' ').toLowerCase();

      skills.forEach((skill) => {
        const skillTokens = [
          skill.name.toLowerCase(),
          ...(skill.topics || []).map((t) => t.toLowerCase()),
        ];

        const matchesProject = skillTokens.some((token) => {
          const norm = normalizeText(token);
          if (norm.length <= 2) return false;
          return (
            proj.tags.some((tag) => normalizeText(tag) === norm || normalizeText(tag).includes(norm)) ||
            normalizeText(proj.title).includes(norm) ||
            projSearchText.includes(token)
          );
        });

        if (matchesProject && !skill.proofOfWorkProjectIds?.includes(proj.id)) {
          skill.proofOfWorkProjectIds = [...(skill.proofOfWorkProjectIds || []), proj.id];
        }
      });
    });

    // 2. Discover any new languages or prominent GitHub topics not yet present
    const liveRepos = gitHubStats.topRepos || [];
    liveRepos.forEach((repo) => {
      if (repo.language) {
        const normLang = normalizeText(repo.language);
        if (!skillNameMap.has(normLang)) {
          const newSkill: SkillItem = {
            name: repo.language,
            category: 'Languages',
            level: 'working-with',
            proofOfWorkProjectIds: [repo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')],
            topics: ['GitHub Discovered Language', 'Live Repository Codebase', `${repo.name} Implementation`],
          };
          skills.push(newSkill);
          skillNameMap.set(normLang, newSkill);
        }
      }

      // Check topics
      (repo.topics || []).forEach((topic) => {
        const normTopic = normalizeText(topic);
        if (normTopic.length > 3 && !skillNameMap.has(normTopic)) {
          const formattedTopic = topic
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

          const newSkill: SkillItem = {
            name: formattedTopic,
            category: 'AI & Machine Learning',
            level: 'exploring',
            proofOfWorkProjectIds: [repo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')],
            topics: ['Open-Source Implementation', 'GitHub Repository Ecosystem'],
          };
          skills.push(newSkill);
          skillNameMap.set(normTopic, newSkill);
        }
      });
    });

    return skills;
  }, [projects, gitHubStats.topRepos]);

  const levelCounts = useMemo(() => {
    const counts: Record<SkillLevel | 'ALL', number> = {
      ALL: dynamicSkills.length,
      core: 0,
      'working-with': 0,
      exploring: 0,
    };

    dynamicSkills.forEach((skill) => {
      if (counts[skill.level] !== undefined) {
        counts[skill.level]++;
      }
    });

    return counts;
  }, [dynamicSkills]);

  return {
    skills: dynamicSkills,
    levelCounts,
    isLoading: isProjectsLoading || gitHubStats.isLoading,
  };
};
