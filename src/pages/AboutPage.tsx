import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { profileData } from '../data/profile';
import { CheckCircle2, Code, Brain, Terminal, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: 'Learn → Build → Break → Improve',
      description: 'Understanding is solidified not through passive video watching, but by shipping code, debugging real edge-cases, and refining system boundaries.',
      icon: <Terminal className="w-4 h-4 text-primary-400" />,
    },
    {
      title: 'Fundamentals Before Frameworks',
      description: 'Prioritizing data structures, algorithms, network protocols, and mathematical intuition before reaching for high-level abstractions.',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: 'Projects Over Tutorials',
      description: 'Tutorials show the happy path. Real engineering happens when you run into unexpected dependency conflicts, rate limits, and memory constraints.',
      icon: <Code className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Build For Real Utility',
      description: 'Whether it is a full-stack platform like GlobeTrotter or a security threat classifier, the objective is measurable utility and clean design.',
      icon: <Brain className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="BACKGROUND & MINDSET"
        title="About Bhavya Modi"
        description="Pre-final year Information Technology undergraduate focused on applied machine learning, robust software systems, and data-driven problem solving."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6 text-sm text-slate-300 leading-relaxed">
          <Card variant="default" className="p-6 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              Engineering Foundations & Focus
            </h3>
            <p>
              I am an Information Technology student currently in my pre-final year of B.Tech. My technical journey began with core computer science principles—data structures, algorithms in C++, and relational database design.
            </p>
            <p>
              As I developed a solid foundation, I transitioned into empirical computing and artificial intelligence: studying how statistical machine learning models, natural language processing pipelines, and deep neural architectures can solve non-trivial software challenges.
            </p>
            <p>
              Rather than viewing AI as a disconnected black box, I approach it from a full-stack software engineering perspective: ensuring models are clean, reproducible, wrapped in fast APIs, and connected to dependable user experiences.
            </p>
          </Card>

          <Card variant="default" className="p-6 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              What I Enjoy Building
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Applied ML & NLP Pipelines:</strong> Benchmark classical models against modern transformers to balance inference speed and predictive accuracy.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Full-Stack Applications:</strong> Building responsive web frontends (React/TypeScript) backed by typed backend APIs and PostgreSQL (e.g., GlobeTrotter).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Cybersecurity & Defense Tools:</strong> Investigating packet flows, behavioral anomalies, and defense-in-depth web architectures.</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Engineering Principles & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="highlight" className="p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
              // Core Engineering Principles
            </h3>

            <div className="space-y-4">
              {principles.map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    {p.icon}
                    <h4 className="text-xs font-bold text-slate-100">{p.title}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="default" className="p-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Fast Facts
            </h3>
            <div className="space-y-2 text-xs text-slate-300 font-mono">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Major:</span>
                <span>B.Tech Information Technology</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Class Year:</span>
                <span>Pre-Final Year (2026/27)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Location:</span>
                <span>{profileData.location}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Availability:</span>
                <span className="text-emerald-400 font-bold">Summer / Fall 2026 Internships</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border-dark flex items-center gap-3">
              <Link to="/projects" className="w-full">
                <Button size="sm" variant="primary" className="w-full">
                  Explore Projects
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
