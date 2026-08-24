import React from 'react';
import { Hammer, BookOpen, Compass, Search } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Card } from '../ui/Card';

export const CurrentlyWidget: React.FC = () => {
  const items = [
    {
      label: 'Building',
      value: profileData.currently.building,
      icon: <Hammer className="w-4 h-4 text-primary-400" />,
    },
    {
      label: 'Learning',
      value: profileData.currently.learning,
      icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
    },
    {
      label: 'Exploring',
      value: profileData.currently.exploring,
      icon: <Compass className="w-4 h-4 text-emerald-400" />,
    },
    {
      label: 'Looking For',
      value: profileData.currently.lookingFor,
      icon: <Search className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <section className="py-12 border-b border-border-dark bg-background-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-400">
            // CURRENT FOCUS & STATUS
          </span>
          <span className="h-px flex-1 bg-border-dark" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Card key={idx} variant="interactive" className="p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.value}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
