import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Github, Brain, Globe, Shield, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';

export const ProofOfWork: React.FC = () => {
  const proofItems = [
    {
      domain: 'AI & Market Intelligence',
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
      evidence: 'Real-time commodity price intelligence, LLM price forecasting with IBM watsonx.ai, and buyer-farmer match workflows.',
      projectTitle: 'Krishi Bazaar — Agricultural Linkage Platform',
      projectUrl: '/projects/krishi-bazar',
      githubUrl: 'https://github.com/bhavya277/Krishi-Bazar',
      deliverables: ['IBM Granite LLM integration via watsonx.ai', 'Real-time APMC mandi price telemetry', 'React + Express architecture'],
    },
    {
      domain: 'Full-Stack Web Engineering',
      icon: <Globe className="w-4 h-4 text-primary-400" />,
      evidence: 'Relational database modeling with Prisma ORM, drag-and-drop daily schedules, and secure token authentication.',
      projectTitle: 'GlobeTrotter — Multi-City Travel Planner',
      projectUrl: '/projects/globetrotter',
      githubUrl: 'https://github.com/bhavya277/GlobeTrotter',
      deliverables: ['Relational schema with Prisma SQLite/Postgres', 'Bcrypt auth & SHA-256 password resets', 'Real-time expense telemetry calculation'],
    },
    {
      domain: 'Data Science & Anomaly Detection',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      evidence: 'Tabular preprocessing, time-series expenditure forecasting using Prophet, and Isolation Forest anomaly detection.',
      projectTitle: 'FinOps Dashboard — Cloud Cost Analysis',
      projectUrl: '/projects/finops',
      githubUrl: 'https://github.com/bhavya277/FinOps',
      deliverables: ['Prophet time-series cloud cost projection', 'Isolation Forest multi-dimensional anomaly detection', 'Flask backend + React 19 dashboard'],
    },
    {
      domain: 'Blockchain & Cryptography',
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
      evidence: 'EVM smart contracts on Ethereum, OCR document authentication, and AES-256 cryptographic PII protection.',
      projectTitle: 'SecureVote — Decentralized Voting System',
      projectUrl: '/projects/secure-vote',
      githubUrl: 'https://github.com/bhavya277/blockchain-based-Voting-System',
      deliverables: ['Solidity voting contracts with Hardhat & OpenZeppelin', 'FastAPI OCR identity verification backend', 'Zero-gas voter interaction model'],
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-border-dark bg-background-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="EVIDENCE-FIRST METHODOLOGY"
          title="Proof of Work"
          description="Technical claims backed by verifiable engineering implementations. Every major domain links to concrete source code and case studies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proofItems.map((item, idx) => (
            <Card key={idx} variant="default" className="p-6 flex flex-col justify-between">
              <div>
                {/* Domain Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-dark">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {item.domain}
                    </h3>
                  </div>
                  <Badge variant="success" size="sm">
                    Verified Work
                  </Badge>
                </div>

                {/* Evidence description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.evidence}
                </p>

                {/* Direct Project Evidence Box */}
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-4">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Primary Artifact
                  </div>
                  <h4 className="text-sm font-semibold text-primary-300">
                    {item.projectTitle}
                  </h4>

                  <div className="mt-2 space-y-1">
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-border-dark flex items-center justify-between">
                <Link
                  to={item.projectUrl}
                  className="text-xs font-semibold text-primary-400 hover:text-primary-300 flex items-center gap-1"
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
