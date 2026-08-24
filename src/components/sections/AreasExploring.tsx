import React from 'react';
import { Brain, Database, Code, Shield } from 'lucide-react';
import { areasExploring } from '../../data/skills';
import { AreaExploring } from '../../types';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const AreasExploring: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('data') || title.toLowerCase().includes('analytics')) {
      return <Database className="w-5 h-5 text-amber-400" />;
    }
    if (title.toLowerCase().includes('software') || title.toLowerCase().includes('full-stack')) {
      return <Code className="w-5 h-5 text-primary-400" />;
    }
    if (title.toLowerCase().includes('security') || title.toLowerCase().includes('web3')) {
      return <Shield className="w-5 h-5 text-emerald-400" />;
    }
    return <Brain className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section className="py-16 md:py-24 border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="COHERENT TECHNICAL DIRECTION"
          title="Areas I'm Exploring"
          description="Connecting software engineering rigor with empirical data science and intelligent systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areasExploring.map((area: AreaExploring, idx: number) => (
            <Card key={idx} variant="default" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getIcon(area.title)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {area.title}
                  </h3>
                  <span className="text-[10px] font-mono text-primary-400">
                    {area.status}
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-dark">
                {area.technologies.map((tech: string, tIdx: number) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
