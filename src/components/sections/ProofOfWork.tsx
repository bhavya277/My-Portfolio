import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Github, Brain, Globe, Shield, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';

export const ProofOfWork: React.FC = () => {
  const proofItems = [
    {
      domain: 'AI & Machine Learning',
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
      evidence: 'Supervised classification pipelines, statistical feature selection, cross-validation, and metric benchmarking.',
      projectTitle: 'NLP Sentiment & Classification Pipeline',
      projectUrl: '/projects/nlp-sentiment-analyzer',
      githubUrl: 'https://github.com/modibhavya/nlp-sentiment-pipeline',
      deliverables: ['TF-IDF + SVM baseline vs DistilBERT Transformer', 'Quantized CPU inference <35ms', 'FastAPI microservice'],
    },
    {
      domain: 'Full-Stack Web Systems',
      icon: <Globe className="w-4 h-4 text-primary-400" />,
      evidence: 'End-to-end full-stack architectures, relational data modeling in PostgreSQL, authentication, and REST APIs.',
      projectTitle: 'GlobeTrotter — AI Travel Platform',
      projectUrl: '/projects/globetrotter',
      githubUrl: 'https://github.com/modibhavya/globetrotter',
      deliverables: ['Relational schema with Prisma ORM', 'Structured LLM prompt JSON validation', 'JWT auth & responsive UI'],
    },
    {
      domain: 'Cybersecurity Defense',
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
      evidence: 'Network flow analysis, behavioral anomaly classification, and secure cryptography implementation.',
      projectTitle: 'Network Threat & Intrusion Detector',
      projectUrl: '/projects/secure-threat-detector',
      githubUrl: 'https://github.com/modibhavya/network-threat-detector',
      deliverables: ['Random Forest packet classification (96.8% Acc)', 'Multicollinearity reduction', 'Terminal threat scoring CLI'],
    },
    {
      domain: 'Data Science & EDA',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      evidence: 'Vectorized tabular processing, automated distribution profiling, and bivariate hypothesis testing.',
      projectTitle: 'Statistical Data Analytics Framework',
      projectUrl: '/projects/data-insight-dashboard',
      githubUrl: 'https://github.com/modibhavya/data-insight-framework',
      deliverables: ['Automated missing-value & outlier detection', 'Plotly interactive visualizations', 'Streamlit analytics UI'],
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
