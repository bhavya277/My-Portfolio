import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { SkillLevel, SkillItem } from '../types';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Code2, Layers, Compass, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SkillsPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | SkillLevel>('ALL');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(skillsData[0]);

  const levelConfigs: { level: SkillLevel; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      level: 'core',
      label: 'Core Competencies',
      desc: 'Foundational technologies and principles used daily with high proficiency.',
      icon: <Layers className="w-4 h-4 text-primary-400" />,
    },
    {
      level: 'working-with',
      label: 'Working With',
      desc: 'Active domains applied in coursework, capstone projects, and machine learning pipelines.',
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
    },
    {
      level: 'exploring',
      label: 'Currently Exploring',
      desc: 'Emerging architectures and advanced domains actively being learned and experimented with.',
      icon: <Compass className="w-4 h-4 text-emerald-400" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="TAXONOMY & APPLICATION"
        title="Technical Skills Matrix"
        description="Structured by depth of practical mastery rather than arbitrary percentage bars. Click any skill to inspect specific topics and linked proof-of-work projects."
      />

      {/* Tier Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedLevel('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
            selectedLevel === 'ALL'
              ? 'bg-primary-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Categories ({skillsData.length})
        </button>
        {levelConfigs.map((cfg) => (
          <button
            key={cfg.level}
            onClick={() => setSelectedLevel(cfg.level)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              selectedLevel === cfg.level
                ? 'bg-primary-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cfg.icon}
            <span>{cfg.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Skills Grid */}
        <div className="lg:col-span-7 space-y-6">
          {levelConfigs
            .filter((c) => selectedLevel === 'ALL' || selectedLevel === c.level)
            .map((group) => {
              const skillsInGroup = skillsData.filter((s) => s.level === group.level);
              if (skillsInGroup.length === 0) return null;

              return (
                <div key={group.level} className="space-y-3">
                  <div className="flex items-center gap-2 pb-1 border-b border-border-dark">
                    {group.icon}
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                      {group.label}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      ({skillsInGroup.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skillsInGroup.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() => setActiveSkill(skill)}
                        className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                          activeSkill?.name === skill.name
                            ? 'bg-primary-950/40 border-primary-500 shadow-md shadow-primary-500/10'
                            : 'bg-background-card border-border-dark hover:border-slate-700 hover:bg-slate-850'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-bold text-white">{skill.name}</h4>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {skill.category.split(' ')[0]}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {skill.topics?.slice(0, 3).join(' • ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Right Column: Interactive Detail & Proof-of-Work Inspector */}
        <div className="lg:col-span-5 sticky top-24">
          {activeSkill ? (
            <Card variant="highlight" className="p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border-dark">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary-400">
                    // Skill Deep-Dive
                  </span>
                  <h3 className="text-lg font-bold text-white">{activeSkill.name}</h3>
                </div>
                <Badge
                  variant={
                    activeSkill.level === 'core'
                      ? 'primary'
                      : activeSkill.level === 'working-with'
                      ? 'accent'
                      : 'outline'
                  }
                  size="sm"
                >
                  {activeSkill.level.replace('-', ' ')}
                </Badge>
              </div>

              {/* Topics breakdown */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Sub-topics & Practical Concepts
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeSkill.topics?.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linked Proof of Work */}
              <div className="pt-3 border-t border-border-dark">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Evidence & Project Application
                </h4>
                {activeSkill.proofOfWorkProjectIds && activeSkill.proofOfWorkProjectIds.length > 0 ? (
                  <div className="space-y-2">
                    {activeSkill.proofOfWorkProjectIds.map((projId) => (
                      <Link
                        key={projId}
                        to={`/projects/${projId}`}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-primary-500/50 hover:bg-slate-850 transition-colors text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-primary-400" />
                          <span className="font-semibold text-slate-200 capitalize">
                            {projId.replace(/-/g, ' ')}
                          </span>
                        </div>
                        <span className="text-primary-400 flex items-center gap-1 font-mono text-[11px]">
                          Case Study <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">
                    Demonstrated through coursework algorithms, lab problem sets, and ongoing prototypes.
                  </p>
                )}
              </div>
            </Card>
          ) : (
            <Card variant="flat" className="p-6 text-center text-slate-400 text-xs font-mono">
              Select a skill to inspect its technical breakdown.
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
