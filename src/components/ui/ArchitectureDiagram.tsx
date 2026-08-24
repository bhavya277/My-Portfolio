import React from 'react';
import { ProjectArchitecture } from '../../types';
import { Layers, ArrowRight, Database, Cpu, Layout, Server } from 'lucide-react';

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ architecture }) => {
  const getIcon = (index: number) => {
    switch (index % 4) {
      case 0:
        return <Layout className="w-4 h-4 text-primary-400" />;
      case 1:
        return <Server className="w-4 h-4 text-cyan-400" />;
      case 2:
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
        <Layers className="w-4 h-4 text-primary-400" />
        <span>System Architecture & Component Overview</span>
      </div>

      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
        {architecture.summary}
      </p>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {architecture.components.map((comp, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-background-card border border-border-dark flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-md bg-slate-800">
                  {getIcon(idx)}
                </div>
                <h4 className="text-sm font-semibold text-white">{comp.name}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                {comp.description}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-primary-300/90">
                {comp.tech}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Data Flow */}
      {architecture.dataFlow && architecture.dataFlow.length > 0 && (
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Execution / Data Flow
          </h5>
          <div className="space-y-2">
            {architecture.dataFlow.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <ArrowRight className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
