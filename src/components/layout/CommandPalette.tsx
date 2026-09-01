import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Code2, Briefcase, GraduationCap, Award, Mail, Sparkles } from 'lucide-react';
import { useDynamicProjects } from '../../hooks/useDynamicProjects';

interface CommandPaletteProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenRecruiterView: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onOpen,
  onClose,
  onOpenRecruiterView,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { projects } = useDynamicProjects();

  // Static navigation routes
  const staticNav = [
    { label: 'Projects & Case Studies', path: '/projects', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Technical Skills Matrix', path: '/skills', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'About & Background', path: '/about', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Certifications', path: '/certifications', icon: <Award className="w-4 h-4" /> },
    { label: 'Education & Curriculum', path: '/education', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Resume (View & Download)', path: '/resume', icon: <FileText className="w-4 h-4" /> },
    { label: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const filteredNav = staticNav.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  // Consolidated items list for keyboard navigation
  type PaletteItem = 
    | { type: 'action'; label: string; action: () => void }
    | { type: 'nav'; label: string; path: string; icon: React.ReactNode }
    | { type: 'project'; label: string; path: string; category: string };

  const allItems: PaletteItem[] = [
    { type: 'action', label: 'Open Recruiter View (30-Sec Summary)', action: () => { onClose(); onOpenRecruiterView(); } },
    ...filteredNav.map((n) => ({ type: 'nav' as const, label: n.label, path: n.path, icon: n.icon })),
    ...filteredProjects.map((p) => ({ type: 'project' as const, label: p.title.split('—')[0], path: `/projects/${p.id}`, category: p.category })),
  ];

  useEffect(() => {
    setSelectedIndex(0);
    itemRefs.current = [];
  }, [query, isOpen]);

  // Auto-scroll the active highlighted item into view when navigating via arrow keys
  useEffect(() => {
    if (isOpen && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [selectedIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
          onOpen();
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (allItems.length > 0 ? (prev + 1) % allItems.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (allItems.length > 0 ? (prev - 1 + allItems.length) % allItems.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allItems[selectedIndex]) {
          const item = allItems[selectedIndex];
          if (item.type === 'action') {
            item.action();
          } else {
            navigate(item.path);
            onClose();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpen, onClose, allItems, selectedIndex, navigate]);

  if (!isOpen) return null;

  const handleSelectRoute = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
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
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-sm scroll-smooth">
          {/* Quick Actions */}
          <div className="px-2 py-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            Quick Actions
          </div>
          <button
            ref={(el) => { itemRefs.current[0] = el; }}
            onClick={() => {
              onClose();
              onOpenRecruiterView();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
              selectedIndex === 0 ? 'bg-primary-600/20 text-white border border-primary-500/30' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-medium">Open Recruiter View (30-Sec Summary)</span>
            </div>
            <span className="text-[11px] font-mono text-primary-400">Action</span>
          </button>

          {/* Navigation */}
          {filteredNav.length > 0 && (
            <>
              <div className="px-2 pt-3 pb-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Pages & Sections
              </div>
              {filteredNav.map((item, idx) => {
                const itemIndex = 1 + idx;
                return (
                  <button
                    key={idx}
                    ref={(el) => { itemRefs.current[itemIndex] = el; }}
                    onClick={() => handleSelectRoute(item.path)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedIndex === itemIndex ? 'bg-primary-600/20 text-white border border-primary-500/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-slate-400">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <>
              <div className="px-2 pt-3 pb-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Projects & Case Studies
              </div>
              {filteredProjects.map((proj, pIdx) => {
                const itemIndex = 1 + filteredNav.length + pIdx;
                return (
                  <button
                    key={proj.id}
                    ref={(el) => { itemRefs.current[itemIndex] = el; }}
                    onClick={() => handleSelectRoute(`/projects/${proj.id}`)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedIndex === itemIndex ? 'bg-primary-600/20 text-white border border-primary-500/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Code2 className="w-4 h-4 text-primary-400 shrink-0" />
                      <span className="truncate">{proj.title.split('—')[0]}</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 shrink-0 ml-2">
                      {proj.category}
                    </span>
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border-dark bg-slate-950/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Use ↑ ↓ to navigate &bull; ↵ to select</span>
          <span>Bhavya Modi</span>
        </div>
      </div>
    </div>
  );
};
