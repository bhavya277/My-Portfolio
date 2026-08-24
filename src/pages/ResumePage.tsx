import React from 'react';
import { Button } from '../components/ui/Button';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { Download, Printer, Github, Linkedin } from 'lucide-react';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border-dark print:hidden">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-400">
            // CURRICULUM VITAE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Resume & Technical Profile
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            icon={<Printer className="w-4 h-4" />}
            onClick={handlePrint}
          >
            Print / Save PDF
          </Button>
          <a href={profileData.resumeUrl} download>
            <Button
              size="sm"
              variant="primary"
              icon={<Download className="w-4 h-4" />}
            >
              Download PDF
            </Button>
          </a>
        </div>
      </div>

      {/* Printable / Structured Resume Container */}
      <div className="mt-8 p-6 sm:p-10 rounded-2xl bg-background-card border border-border-dark shadow-2xl text-slate-200 print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        
        {/* Resume Header */}
        <div className="border-b border-border-dark pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight print:text-black">
              {profileData.name}
            </h2>
            <p className="text-sm font-mono text-primary-400 font-semibold mt-1 print:text-blue-700">
              {profileData.title} &bull; {profileData.subtitle}
            </p>
            <p className="text-xs text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-3 font-mono print:text-slate-600">
              <span>{profileData.location}</span>
              <span>&bull;</span>
              <span>{profileData.email}</span>
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-3 text-xs font-mono print:text-slate-700">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="py-5 border-b border-border-dark">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 mb-2 print:text-blue-800">
            Professional Summary
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed print:text-slate-800">
            {profileData.shortBio}
          </p>
        </div>

        {/* Education */}
        <div className="py-5 border-b border-border-dark space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            Education
          </h3>
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs gap-1">
              <div>
                <strong className="text-white text-sm print:text-black">{edu.degree} in {edu.field}</strong>
                <div className="text-slate-400 print:text-slate-700 font-mono">{edu.institution}, {edu.location}</div>
                <div className="text-[11px] text-slate-400 mt-1 print:text-slate-600">
                  Coursework: {edu.coursework.slice(0, 5).join(' • ')}
                </div>
              </div>
              <div className="text-slate-400 font-mono text-right shrink-0 print:text-slate-600">
                {edu.period}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Matrix */}
        <div className="py-5 border-b border-border-dark space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div>
              <span className="font-semibold text-white print:text-black">Languages:</span>{' '}
              <span className="text-slate-300 font-mono print:text-slate-700">Python, C/C++, TypeScript, JavaScript, SQL</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-black">AI / Machine Learning:</span>{' '}
              <span className="text-slate-300 font-mono print:text-slate-700">Scikit-learn, PyTorch basics, NLP, Transformers, Pandas</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-black">Development:</span>{' '}
              <span className="text-slate-300 font-mono print:text-slate-700">React, Node.js, Express, PostgreSQL, REST APIs</span>
            </div>
            <div>
              <span className="font-semibold text-white print:text-black">Tools & Systems:</span>{' '}
              <span className="text-slate-300 font-mono print:text-slate-700">Git, GitHub, Docker basics, Linux CLI, FastAPI</span>
            </div>
          </div>
        </div>

        {/* Selected Projects */}
        <div className="py-5 border-b border-border-dark space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            Key Projects & Implementations
          </h3>

          {projectsData.slice(0, 3).map((proj) => (
            <div key={proj.id} className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <strong className="text-white text-sm print:text-black">{proj.title.split('—')[0]}</strong>
                <span className="font-mono text-slate-400 print:text-slate-600">{proj.tags.slice(0, 3).join(' • ')}</span>
              </div>
              <p className="text-slate-300 print:text-slate-800">{proj.tagline}</p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-400 pl-1 print:text-slate-700">
                {proj.myContribution.slice(0, 2).map((item, cIdx) => (
                  <li key={cIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience & Leadership */}
        <div className="pt-5 space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            Experience & Technical Leadership
          </h3>

          {experienceData.slice(0, 2).map((exp) => (
            <div key={exp.id} className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <strong className="text-white text-sm print:text-black">{exp.role}</strong>
                <span className="font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
              </div>
              <div className="text-primary-300 print:text-blue-700 font-mono">{exp.organization}</div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-400 pl-1 print:text-slate-700">
                {exp.responsibilities.slice(0, 2).map((r, rIdx) => (
                  <li key={rIdx}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
