import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, User, Code2, Briefcase, Award, GraduationCap, FileText, Mail, Terminal } from 'lucide-react';
import { projectsData } from '../../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterView: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenRecruiterView,
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const staticNav = [
    { label: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'About Bhavya', path: '/about', icon: <User className="w-4 h-4" /> },
    { label: 'Projects & Case Studies', path: '/projects', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Technical Skills Matrix', path: '/skills', icon: <Terminal className="w-4 h-4" /> },
    { label: 'Experience & Timeline', path: '/experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Hackathons', path: '/hackathons', icon: <Award className="w-4 h-4" /> },
    { label: 'Achievements', path: '/achievements', icon: <Award className="w-4 h-4" /> },
    { label: 'Certifications', path: '/certifications', icon: <Award className="w-4 h-4" /> },
    { label: 'Education & Curriculum', path: '/education', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Resume (View & Download)', path: '/resume', icon: <FileText className="w-4 h-4" /> },
    { label: 'Interactive AI Lab', path: '/lab', icon: <Terminal className="w-4 h-4" /> },
    { label: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const filteredNav = staticNav.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectRoute = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-background-card border border-border-dark rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-border-dark gap-3">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, page name, or search project..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-sm">
          {/* Quick Actions */}
          <div className="px-2 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Quick Actions
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenRecruiterView();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-medium">Open Recruiter View (30-Sec Summary)</span>
            </div>
            <span className="text-[11px] font-mono text-primary-400">Action</span>
          </button>

          {/* Navigation */}
          <div className="px-2 pt-3 pb-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Pages & Sections
          </div>
          {filteredNav.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectRoute(item.path)}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span className="text-slate-400">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <>
              <div className="px-2 pt-3 pb-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Projects & Case Studies
              </div>
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => handleSelectRoute(`/projects/${proj.id}`)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <Code2 className="w-4 h-4 text-primary-400 shrink-0" />
                    <span className="truncate">{proj.title.split('—')[0]}</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 shrink-0 ml-2">
                    {proj.category}
                  </span>
                </button>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border-dark bg-slate-950/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Navigate with arrows or click</span>
          <span>Bhavya Modi Portfolio</span>
        </div>
      </div>
    </div>
  );
};
