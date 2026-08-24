import React from 'react';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';
import { profileData } from '../../data/profile';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const GitHubOverview: React.FC = () => {
  const { topRepos, languages, isError } = useGitHubData('bhavya277');

  return (
    <section className="py-16 md:py-24 border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeader
            label="OPEN SOURCE REPOSITORIES"
            title="GitHub Activity & Codebase"
            description="Curated repositories illustrating code architecture, commit history, and open-source contributions."
            className="mb-0"
          />
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-lg hover:border-slate-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/bhavya277</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Languages Bar */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
            <span className="font-semibold uppercase tracking-wider">Language Distribution across Repositories</span>
            <span>{isError ? 'Static Snapshot' : 'Live Sync'}</span>
          </div>

          <div className="h-2 w-full rounded-full bg-slate-800 flex overflow-hidden gap-0.5">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percentage}%`}
                className="h-full first:rounded-l-full last:rounded-r-full"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-3">
            {languages.map((lang, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span>{lang.name}</span>
                <span className="text-slate-400">({lang.percentage}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topRepos.map((repo) => (
            <Card
              key={repo.id}
              variant="interactive"
              className="p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white hover:text-primary-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Code2 className="w-4 h-4 text-primary-400 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </a>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {repo.language}
                  </span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {repo.topics.slice(0, 3).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-primary-300/80 border border-slate-800"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border-dark flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400/80" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-400 hover:text-primary-300 flex items-center gap-1"
                >
                  <span>View Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
