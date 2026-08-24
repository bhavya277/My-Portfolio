import React from 'react';
import { certificationsData } from '../data/certifications';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="TECHNICAL CREDENTIALS"
        title="Certifications & Coursework"
        description="Structured coursework and technical certifications completed in Machine Learning, Python, PostgreSQL, and Cybersecurity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert) => (
          <Card key={cert.id} variant="default" className="p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="primary" size="sm">
                  {cert.issuer}
                </Badge>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {cert.issueDate}
                </span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight mb-2">
                {cert.title}
              </h3>

              {cert.credentialId && (
                <div className="text-[11px] font-mono text-slate-400 mb-4">
                  Credential ID:{' '}
                  <span className="text-slate-300">{cert.credentialId}</span>
                </div>
              )}

              <div className="space-y-1.5 mb-4">
                <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Skills & Concepts Covered
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border-dark flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Certified
              </span>

              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-primary-400 hover:text-primary-300"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
