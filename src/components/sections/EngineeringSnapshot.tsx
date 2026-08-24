import React from 'react';
import { Code, Brain, Layout, Wrench } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const EngineeringSnapshot: React.FC = () => {
  const snapshotData = [
    {
      category: 'Languages',
      icon: <Code className="w-4 h-4 text-primary-400" />,
      items: ['Python', 'C / C++', 'TypeScript / JS', 'SQL'],
    },
    {
      category: 'AI & Data Science',
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
      items: ['Machine Learning', 'Deep Learning', 'NLP & Transformers', 'Scikit-learn', 'Pandas'],
    },
    {
      category: 'Development',
      icon: <Layout className="w-4 h-4 text-emerald-400" />,
      items: ['React / Next.js', 'Node.js / Express', 'PostgreSQL', 'RESTful APIs', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Systems',
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      items: ['Git & GitHub', 'Linux CLI', 'FastAPI', 'Docker Basics', 'Cybersecurity Labs'],
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="QUICK EVALUATION"
          title="Engineering Snapshot"
          description="A concise technical overview designed for quick assessment by engineering leads and recruiters."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {snapshotData.map((block, idx) => (
            <Card key={idx} variant="default" className="p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-dark">
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                  {block.icon}
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {block.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {block.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 font-mono"
                  >
                    {skill}
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
