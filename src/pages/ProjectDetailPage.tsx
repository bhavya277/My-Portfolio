import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Award,
  BookOpen,
  UserCheck,
  Layers,
  Cpu,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Case Study Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">
          The requested project case study could not be located.
        </p>
        <Link to="/projects">
          <Button variant="primary" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to All Projects
          </Button>
        </Link>
      </div>
    );
  }

  // Calculate intelligent relevance score based on shared category and technology tags
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .map((p) => {
      let score = 0;
      if (p.category === project.category) score += 3;
      const sharedTags = p.tags.filter((t) => project.tags.includes(t));
      score += sharedTags.length;
      return { project: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((item) => item.project);

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Back Navigation */}
      <div className="mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Projects
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="space-y-4 pb-8 border-b border-border-dark">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary" size="md">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="accent" size="md">
              Flagship Project
            </Badge>
          )}
          <span className="text-xs font-mono text-slate-400">
            Role: {project.role}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          {project.tagline}
        </p>

        {/* Links & Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Button size="sm" variant="secondary" icon={<Github className="w-4 h-4" />}>
                View Source Code
              </Button>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button size="sm" variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                  Live Deployment
                </Button>
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 10-Part Case Study Body */}
      <div className="py-10 space-y-12 text-sm text-slate-300">
        
        {/* 1. Problem & 2. Why */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Problem Statement & Justification</span>
          </h2>
          <Card variant="default" className="p-5 space-y-3">
            <div>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                The Problem
              </h3>
              <p className="leading-relaxed">{project.problem}</p>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Why It Matters
              </h3>
              <p className="leading-relaxed">{project.why}</p>
            </div>
          </Card>
        </section>

        {/* 3. Solution */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
            <span>Solution & Engineering Overview</span>
          </h2>
          <Card variant="default" className="p-5">
            <p className="leading-relaxed">{project.solution}</p>
          </Card>
        </section>

        {/* 4. System Architecture */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary-400" />
            <span>System Architecture</span>
          </h2>
          <ArchitectureDiagram architecture={project.architecture} />
        </section>

        {/* 5. My Personal Contribution (Explicit & Transparent) */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>My Contribution (Personal Scope)</span>
          </h2>
          <Card variant="highlight" className="p-5">
            <div className="space-y-2.5">
              {project.myContribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* 6. Technical Challenges & 7. Engineering Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenges */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-rose-400" />
              <span>Technical Challenges</span>
            </h2>
            <div className="space-y-3">
              {project.technicalChallenges.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-semibold text-rose-300">Challenge: {item.challenge}</h4>
                  <p className="text-xs text-slate-400"><strong>Resolution:</strong> {item.resolution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Decisions */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Engineering Decisions</span>
            </h2>
            <div className="space-y-3">
              {project.engineeringDecisions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-semibold text-amber-300">{item.decision}</h4>
                  <p className="text-xs text-slate-400"><strong>Rationale:</strong> {item.rationale}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 8. Empirical Results & 9. Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Results */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Verified Results & Metrics</span>
            </h2>
            <Card variant="default" className="p-4 space-y-2">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </Card>
          </section>

          {/* Learnings */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Key Learnings</span>
            </h2>
            <Card variant="default" className="p-4 space-y-2">
              {project.learnings.map((lrn, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="text-cyan-400 font-mono font-bold">&bull;</span>
                  <span>{lrn}</span>
                </div>
              ))}
            </Card>
          </section>
        </div>

        {/* Related Projects */}
        <section className="pt-6 border-t border-border-dark space-y-4">
          <h2 className="text-base font-bold text-white">Related Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  to={`/projects/${relProject.id}`}
                  className="p-4 rounded-xl bg-background-card border border-border-dark hover:border-border-darkHover hover:bg-background-cardHover transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="primary" size="sm">
                      {relProject.category}
                    </Badge>
                    <span className="text-[10px] font-mono text-primary-400 group-hover:translate-x-0.5 transition-transform">
                      View Case Study &rarr;
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-primary-300 transition-colors">
                    {relProject.title.split('—')[0]}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {relProject.tagline}
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* Bottom Case Study Navigation */}
        <div className="pt-6 border-t border-border-dark flex items-center justify-between">
          <Link to="/projects">
            <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              All Projects
            </Button>
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="sm" icon={<Github className="w-4 h-4" />}>
              Inspect Repository
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
};
