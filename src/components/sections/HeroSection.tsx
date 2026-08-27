import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border-dark overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 10-15s Recruiter Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.recruiterSnapshot.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">{profileData.name}</span>.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 font-mono">
                {profileData.title} &bull; {profileData.subtitle}
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {profileData.bioHeadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link to="/projects">
                <Button size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  View Projects
                </Button>
              </Link>
              <a href="/resume.pdf" download="Bhavya-Modi-Resume.pdf">
                <Button size="md" variant="secondary" icon={<Download className="w-4 h-4" />}>
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Secondary Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>Connect:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={profileData.socials.email}
                className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>

          {/* Right Column: Clean Interactive Engineering Terminal Widget */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-background-card border border-border-dark shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-slate-900 border-b border-border-dark flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2 font-mono">bhavya-modi: ~</span>
                </div>
                <Badge variant="outline" size="sm">zsh</Badge>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3.5 bg-slate-950/70 text-slate-300">
                <div>
                  <span className="text-emerald-400">$</span> <span className="text-slate-100">cat profile.json</span>
                </div>
                
                <div className="space-y-1.5 pl-2 border-l border-slate-800 text-[11px] leading-relaxed">
                  <div>
                    <span className="text-primary-400">"candidate"</span>: <span className="text-amber-300">"{profileData.name}"</span>,
                  </div>
                  <div>
                    <span className="text-primary-400">"degree"</span>: <span className="text-amber-300">"B.Tech Information Technology"</span>,
                  </div>
                  <div>
                    <span className="text-primary-400">"expected_graduation"</span>: <span className="text-cyan-300">2028</span>,
                  </div>
                  <div>
                    <span className="text-primary-400">"primary_domains"</span>: [
                    <div className="pl-4 text-emerald-300">
                      "AI / Machine Learning",<br />
                      "NLP & Transformers",<br />
                      "Full-Stack Web Systems",<br />
                      "Cybersecurity"<br />
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-primary-400">"seeking"</span>: <span className="text-amber-300">"Opportunities / High-impact roles"</span>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-emerald-400">$</span> <span className="text-slate-100">git status</span>
                  <div className="text-[11px] text-slate-400 mt-1 pl-2 border-l border-slate-800">
                    On branch <span className="text-primary-400">main</span> &bull; 0 uncommitted changes.<br />
                    Ready for technical evaluation.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
