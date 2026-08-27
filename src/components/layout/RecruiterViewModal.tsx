import React, { useEffect } from 'react';
import { X, Download, Mail, Github, Linkedin, Briefcase, GraduationCap, Code2, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { Badge } from '../ui/Badge';
import { Link } from 'react-router-dom';

interface RecruiterViewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterViewModal: React.FC<RecruiterViewModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const topProjects = projectsData.filter((p) =>
    profileData.recruiterSnapshot.topProjectIds.includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-background-card border border-border-dark rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-border-dark pb-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="success" size="sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
              {profileData.recruiterSnapshot.status}
            </Badge>
            <span className="text-xs font-mono text-slate-400">Recruiter Quick-View</span>
          </div>

          <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
          <p className="text-sm text-primary-400 font-mono mt-0.5">
            {profileData.title} &bull; Expected Grad: {profileData.recruiterSnapshot.graduationYear}
          </p>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            {profileData.shortBio}
          </p>
        </div>

        {/* Target Roles */}
        <div className="py-4 border-b border-border-dark">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            <Briefcase className="w-3.5 h-3.5 text-primary-400" />
            Target Internship Roles
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.recruiterSnapshot.targetRoles.map((role, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-200"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="py-4 border-b border-border-dark">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            Primary Technical Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {profileData.recruiterSnapshot.coreSkills.map((skill, idx) => (
              <Badge key={idx} variant="primary" size="sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Flagship Projects */}
        <div className="py-4 border-b border-border-dark">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Verified Flagship Projects
            </div>
            <Link
              to="/projects"
              onClick={onClose}
              className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1"
            >
              View All Projects <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-2.5">
            {topProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white">{proj.title.split('—')[0]}</h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-primary-300">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{proj.tagline}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <Link
                    to={`/projects/${proj.id}`}
                    onClick={onClose}
                    className="text-xs text-primary-400 hover:text-primary-300 font-medium px-2 py-1 rounded bg-primary-950/40 border border-primary-900/60"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action Footer */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={profileData.resumeUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download Resume (PDF)
            </a>
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contact Bhavya
            </Link>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.email}
              className="p-1.5 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
