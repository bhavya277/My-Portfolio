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
      description: 'Prioritizing data structures, algorithms, relational database principles, and mathematical intuition before reaching for high-level abstractions.',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
    },
    {
      title: 'Projects Over Tutorials',
      description: 'Tutorials show the happy path. Real engineering happens when you run into unexpected dependency conflicts, rate limits, and memory constraints.',
      icon: <Code className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Build For Real Utility',
      description: 'Whether it is an agricultural market platform like Krishi Bazaar, a full-stack platform like GlobeTrotter, or a cloud cost analytics suite like FinOps, the objective is measurable utility.',
      icon: <Brain className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="BACKGROUND & MINDSET"
        title="About Bhavya Modi"
        description="B.Tech Information Technology student specializing in Data Science & Analytics, with a strong interest in building intelligent and impactful technology."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 space-y-6 text-sm text-slate-300 leading-relaxed">
          <Card variant="default" className="p-6 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              Engineering Foundations & Direction
            </h3>
            <p>
              I am a B.Tech Information Technology student specializing in Data Science & Analytics. My journey is centered around developing solid software engineering practices, exploring applied machine learning models, and building full-stack web platforms.
            </p>
            <p>
              I focus on bridging the gap between data analytics and practical software systems: creating full-stack architectures (React, TypeScript, Express, FastAPI), data analysis and anomaly detection workflows (Pandas, Prophet, Scikit-learn), and integrating generative AI models (IBM watsonx.ai) for domain-specific applications.
            </p>
            <p>
              I believe in learning by building real, verifiable projects. Every project in my portfolio is backed by actual code, hands-on debugging, and transparent documentation.
            </p>
          </Card>

          <Card variant="default" className="p-6 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              Core Technical Focus Areas
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Full-Stack Web Systems:</strong> Architecting responsive web applications with TypeScript, React, Express, FastAPI, and relational databases (PostgreSQL, SQLite, MySQL).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Data Science & Analytics:</strong> Developing exploratory data analysis pipelines, time-series forecasting models, and anomaly detection systems (FinOps).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Intelligent & Decentralized Systems:</strong> Building agentic market intelligence solutions (Krishi Bazaar / IBM watsonx.ai) and smart contract voting systems (SecureVote / Solidity).</span>
              </div>
            </div>
          </Card>

          <div className="pt-2 flex items-center gap-4">
            <Link to="/projects">
              <Button size="sm" variant="primary">
                Explore Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </div>
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
                <span className="text-slate-400">Field:</span>
                <span>B.Tech IT (Data Science & Analytics)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Location:</span>
                <span>{profileData.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400">{profileData.recruiterSnapshot.status}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">GitHub:</span>
                <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-primary-400 hover:underline">
                  bhavya277
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
