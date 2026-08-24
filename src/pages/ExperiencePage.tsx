import React from 'react';
import { experienceData } from '../data/experience';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="EXPERIENCE & ROLES"
        title="Experience & Technical Timeline"
        description="Chronological record of technical club leadership, academic capstone development, and collaborative engineering projects."
      />

      <div className="relative border-l border-border-dark ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
        {experienceData.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-500 group-hover:bg-primary-500 transition-colors" />

            <Card variant="default" className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-border-dark">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="primary" size="sm">
                      {item.type}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.period}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-xs font-mono text-primary-400 flex items-center gap-2 mt-0.5">
                    <span>{item.organization}</span>
                    <span>&bull;</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 mb-4">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Deliverables
                </h4>
                {item.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-3 border-t border-border-dark flex flex-wrap gap-1.5">
                {item.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
