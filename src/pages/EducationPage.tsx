import React from 'react';
import { educationData } from '../data/education';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="ACADEMIC BACKGROUND"
        title="Education & Core Curriculum"
        description="Formal computer science and information technology foundations supporting applied engineering."
      />

      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <Card key={idx} variant={idx === 0 ? 'highlight' : 'default'} className="p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-border-dark">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {edu.status && (
                    <Badge variant="primary" size="sm">
                      {edu.status}
                    </Badge>
                  )}
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {edu.degree} — {edu.field}
                </h3>
                <div className="text-xs font-mono text-primary-400 flex items-center gap-2 mt-0.5">
                  <span>{edu.institution}</span>
                  {edu.location && (
                    <>
                      <span>&bull;</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {edu.grade && (
                <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  Academic Standing: <strong className="text-primary-300">{edu.grade}</strong>
                </div>
              )}
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-primary-400" />
                Relevant Technical Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-xs px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Academic Specialization & Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {edu.focusAreas.map((area, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
