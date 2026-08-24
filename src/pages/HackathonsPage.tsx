import React from 'react';
import { hackathonsData } from '../data/hackathons';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Award, Github, CheckCircle2, Lightbulb, AlertCircle } from 'lucide-react';

export const HackathonsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="RAPID PROTOTYPING & SPRINT BUILDING"
        title="Hackathon Experience"
        description="Focused on end-to-end engineering under tight sprint constraints, transforming ambiguous real-world problems into functioning software prototypes."
      />

      <div className="space-y-8">
        {hackathonsData.map((hack) => (
          <Card key={hack.id} variant="default" className="p-6 md:p-8 space-y-6">
            {/* Top metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-dark">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="accent" size="sm">
                    {hack.date}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    Organizer: {hack.organizer}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {hack.projectName}
                </h3>
                <span className="text-xs font-mono text-primary-400">
                  {hack.name}
                </span>
              </div>

              {/* Outcome Badge */}
              <div className="shrink-0">
                <Badge variant="success" size="md">
                  <Award className="w-3.5 h-3.5 mr-1" />
                  {hack.outcome}
                </Badge>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                <h4 className="font-mono font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Problem Statement
                </h4>
                <p className="leading-relaxed text-slate-400">{hack.problemStatement}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                <h4 className="font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" /> Solution Built
                </h4>
                <p className="leading-relaxed text-slate-400">{hack.solution}</p>
              </div>
            </div>

            {/* Role & Takeaways */}
            <div className="space-y-3">
              <div className="text-xs text-slate-300">
                <span className="font-mono text-slate-400 font-semibold">My Role:</span>{' '}
                <span>{hack.myRole}</span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Engineering Learnings & Takeaways
                </h4>
                {hack.learnings.map((lrn, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{lrn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Tech Stack & Links */}
            <div className="pt-4 border-t border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {hack.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {hack.repoUrl && (
                <a
                  href={hack.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Hackathon Repo</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
