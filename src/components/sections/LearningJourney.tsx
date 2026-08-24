import React from 'react';
import { learningJourney } from '../../data/skills';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border-dark bg-background-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="ENGINEERING TRAJECTORY"
          title="Learning Journey"
          description="An authentic milestone timeline reflecting foundational mastery transitioning into empirical AI/ML and production engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {learningJourney.map((step, idx) => (
            <Card key={idx} variant="default" className="p-5 flex flex-col justify-between relative overflow-hidden">
              {/* Year indicator */}
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-dark">
                  <span className="text-xs font-mono font-bold text-primary-400 bg-primary-950/60 px-2 py-0.5 rounded border border-primary-800/60">
                    {step.year}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Step {idx + 1}/4</span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border-dark space-y-1.5">
                {step.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{m}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
