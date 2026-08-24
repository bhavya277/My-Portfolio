import React from 'react';
import { achievementsData } from '../data/achievements';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="AUTHENTIC RECOGNITION"
        title="Achievements & Milestones"
        description="Verifiable competition results, departmental recognitions, and academic milestones achieved during undergraduate studies."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((item) => (
          <Card
            key={item.id}
            variant={item.highlight ? 'highlight' : 'default'}
            className="p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant={item.highlight ? 'primary' : 'outline'} size="sm">
                  {item.category}
                </Badge>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {item.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight mb-1">
                {item.title}
              </h3>

              <div className="text-xs font-mono text-primary-400 mb-3">
                Issued by: {item.issuer}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-border-dark flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Record
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
