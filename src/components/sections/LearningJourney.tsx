import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { learningJourneyStages } from '../../data/learningJourney';
import { projectsData } from '../../data/projects';
import { LearningStageItem } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  ExternalLink, 
  Compass, 
  Sparkles,
  Layers,
  Brain,
  Cpu,
  Rocket,
  Briefcase
} from 'lucide-react';

const stageIcons: Record<string, React.ReactNode> = {
  foundations: <Terminal className="w-4 h-4" />,
  building: <Layers className="w-4 h-4" />,
  intelligence: <Brain className="w-4 h-4" />,
  exploring: <Cpu className="w-4 h-4" />,
  next: <Rocket className="w-4 h-4" />,
};

export const LearningJourney: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('foundations');

  const activeStage = useMemo<LearningStageItem>(() => {
    return (
      learningJourneyStages.find((s) => s.id === activeStageId) ||
      learningJourneyStages[0]
    );
  }, [activeStageId]);

  const activeProjects = useMemo(() => {
    return projectsData.filter((p) =>
      activeStage.relatedProjectIds.includes(p.id)
    );
  }, [activeStage]);

  return (
    <section className="py-16 md:py-24 border-b border-border-dark bg-background-dark/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="ENGINEERING TRAJECTORY"
          title="Technical Growth Journey"
          description="Progressing from foundational computer science and relational design to scalable full-stack engineering, applied machine learning, and intelligent systems."
        />

        {/* Narrative Concept Statement */}
        <div className="mb-12 p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3.5 max-w-4xl mx-auto">
          <Compass className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
            <span className="text-white font-semibold">Core Philosophy:</span> "My journey has been less about collecting technologies and more about progressively turning concepts into verifiable, production-ready systems."
          </p>
        </div>

        {/* DESKTOP VIEW: Connected Step Nodes & Interactive Panel */}
        <div className="hidden lg:block">
          {/* Horizontal Stepper */}
          <div className="relative mb-10">
            {/* Background connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

            <div className="relative z-10 grid grid-cols-5 gap-3">
              {learningJourneyStages.map((stage) => {
                const isSelected = stage.id === activeStageId;
                const icon = stageIcons[stage.id];

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`group text-left p-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      isSelected
                        ? 'bg-slate-900 border-emerald-500/80 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/40'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {stage.number}
                      </span>
                      <span
                        className={`transition-colors ${
                          isSelected
                            ? 'text-emerald-400'
                            : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      >
                        {icon}
                      </span>
                    </div>

                    <h3
                      className={`text-sm font-bold tracking-tight mb-1 transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                      {stage.badge}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Details (Progressive Disclosure) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Card variant="default" className="p-6 md:p-8 border-border-dark bg-slate-900/90 shadow-2xl">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Narrative & Focus Areas */}
                  <div className="col-span-7 space-y-6">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded">
                          STAGE {activeStage.number} &bull; {activeStage.badge.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {activeStage.title}
                      </h3>
                      <p className="text-sm font-mono text-slate-300 mt-1">
                        {activeStage.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeStage.narrative}
                    </p>

                    {/* Focus Topics */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        Key Competencies & Focus Areas
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {activeStage.topics.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-start gap-2 text-xs text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeStage.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Connected Proof of Work / Real Projects */}
                  <div className="col-span-5 bg-slate-950/80 rounded-xl p-5 border border-slate-800/80 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          Connected Proof of Work
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {activeProjects.length > 0 ? `${activeProjects.length} Real Projects` : 'Future Goals'}
                      </span>
                    </div>

                    {activeProjects.length > 0 ? (
                      <div className="space-y-3">
                        {activeProjects.map((proj) => (
                          <Link
                            key={proj.id}
                            to={`/projects/${proj.id}`}
                            className="group block p-3.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/90 transition-all shadow-sm"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <Badge variant="primary" size="sm">
                                {proj.category}
                              </Badge>
                              <span className="text-[11px] font-mono text-slate-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors">
                                View Case Study <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>

                            <h5 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1 mb-1">
                              {proj.title.split('—')[0]}
                            </h5>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {proj.tagline}
                            </p>

                            <div className="flex flex-wrap gap-1 mt-2.5">
                              {proj.tags.slice(0, 3).map((t, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800/80"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      /* Stage 05 Target Direction Card */
                      <div className="space-y-4 py-2">
                        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2.5">
                          <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold">
                            <Briefcase className="w-4 h-4" />
                            Target Roles & Focus
                          </div>
                          <p className="leading-relaxed">
                            {activeStage.targetDirection}
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                          <Link
                            to="/projects"
                            className="inline-flex items-center justify-between px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                          >
                            <span>Explore All 8 Verified Projects</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/resume"
                            className="inline-flex items-center justify-between px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                          >
                            <span>Review Technical Resume</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MOBILE VIEW: Vertical Connected Roadmap */}
        <div className="lg:hidden space-y-6">
          <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
            {learningJourneyStages.map((stage) => {
              const icon = stageIcons[stage.id];
              const relatedProjs = projectsData.filter((p) =>
                stage.relatedProjectIds.includes(p.id)
              );

              return (
                <div key={stage.id} className="relative">
                  {/* Node Circle */}
                  <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-400 shadow-md">
                    {stage.number}
                  </div>

                  <Card variant="default" className="p-5 border-border-dark bg-slate-900/80">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="primary" size="sm">
                        {stage.badge}
                      </Badge>
                      <span className="text-slate-400">{icon}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-300 mb-3">
                      {stage.tagline}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {stage.shortDescription}
                    </p>

                    {/* Topics */}
                    <div className="space-y-1.5 mb-4">
                      {stage.topics.map((topic, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {stage.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Related Projects */}
                    {relatedProjs.length > 0 ? (
                      <div className="pt-3 border-t border-slate-800 space-y-2">
                        <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                          Proof of Work
                        </div>
                        {relatedProjs.map((proj) => (
                          <Link
                            key={proj.id}
                            to={`/projects/${proj.id}`}
                            className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                          >
                            <span className="font-medium truncate mr-2">
                              {proj.title.split('—')[0]}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="pt-3 border-t border-slate-800">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300"
                        >
                          <span>Get in Touch for Opportunities</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
