import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-primary-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-400">
          // INITIATE CONVERSATION
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Let's Build Something Meaningful.
        </h2>

        <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Interested in collaborating on an AI/ML system, discussing an engineering challenge, or evaluating me for an internship opportunity?
        </p>

        {/* Primary Direct Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a href={profileData.socials.email}>
            <Button size="md" variant="primary" icon={<Mail className="w-4 h-4" />}>
              Email Bhavya
            </Button>
          </a>

          <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer">
            <Button size="md" variant="secondary" icon={<Linkedin className="w-4 h-4 text-primary-400" />}>
              LinkedIn Profile
            </Button>
          </a>

          <a href={profileData.socials.github} target="_blank" rel="noreferrer">
            <Button size="md" variant="secondary" icon={<Github className="w-4 h-4" />}>
              GitHub Repos
            </Button>
          </a>

          <Link to="/contact">
            <Button size="md" variant="outline" icon={<Send className="w-4 h-4" />} iconPosition="right">
              Use Contact Form
            </Button>
          </Link>
        </div>

        {/* Copy Email Chip */}
        <div className="pt-2 flex items-center justify-center">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Email copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>{profileData.email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
