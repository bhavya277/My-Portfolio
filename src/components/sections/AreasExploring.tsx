import React from 'react';
import { Brain, Database, Code, Shield } from 'lucide-react';
import { areasExploring } from '../../data/skills';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const AreasExploring: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-primary-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-emerald-400" />;
      default:
        return <Brain className="w-5 h-5 text-primary-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="COHERENT TECHNICAL DIRECTION"
          title="Areas I'm Exploring"
          description="Connecting software engineering rigor with empirical machine learning and cybersecurity defense."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areasExploring.map((area, idx) => (
            <Card key={idx} variant="default" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {getIcon(area.icon)}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {area.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-dark">
                {area.technologies.map((tech, tIdx) => (
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
