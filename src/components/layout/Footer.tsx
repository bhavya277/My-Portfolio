import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-dark bg-background-dark/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border-dark">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-primary-400 font-mono font-bold text-xs">
                BM
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {profileData.bioHeadline}
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.email}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Projects & Case Studies</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white transition-colors">Skills Matrix</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/hackathons" className="hover:text-white transition-colors">Hackathons</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Core Specialization
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Machine Learning & NLP</li>
              <li>Generative AI Pipelines</li>
              <li>Full-Stack Web Systems</li>
              <li>Cybersecurity Defense</li>
              <li>Data Science & EDA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Built with React &bull; TypeScript &bull; Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
