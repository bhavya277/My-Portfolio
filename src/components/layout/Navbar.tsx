import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Search, FileText, UserCheck } from 'lucide-react';
import { profileData } from '../../data/profile';
import { cn } from '../../lib/utils';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenRecruiterView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenRecruiterView,
}) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsMoreOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const primaryNavItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Technical Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ];

  const moreNavItems = [
    { label: 'Achievements', path: '/achievements' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Education', path: '/education' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isMoreActive = moreNavItems.some((item) => location.pathname.startsWith(item.path));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-200',
        isScrolled
          ? 'bg-background-dark/85 backdrop-blur-md border-b border-border-dark py-3 shadow-md shadow-black/10'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-primary-400 font-mono font-bold text-sm group-hover:border-primary-500/80 transition-colors">
            BM
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight leading-tight group-hover:text-primary-400 transition-colors">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 leading-tight">
              Data Science &bull; AI/ML
            </span>
          </div>
        </Link>

        {/* Desktop Primary Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {primaryNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
                isActive(item.path)
                  ? 'text-white bg-slate-800/80 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* More ▾ Dropdown */}
          <div className="relative" ref={moreDropdownRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={cn(
                'flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
                isMoreActive
                  ? 'text-white bg-slate-800/80 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              )}
            >
              <span>More</span>
              <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', isMoreOpen && 'rotate-180')} />
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background-card border border-border-dark rounded-xl shadow-xl py-1 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                {moreNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'block px-4 py-2 text-xs transition-colors',
                      isActive(item.path)
                        ? 'text-primary-400 bg-slate-800/80 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Recruiter View Trigger */}
          <button
            onClick={onOpenRecruiterView}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/50 transition-colors"
            title="Open 30-Second Recruiter Summary"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Recruiter View</span>
          </button>

          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Search / Command Palette (Cmd+K)"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Resume CTA (Highlighted) */}
          <Link
            to="/resume"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary-600 hover:bg-primary-500 shadow-sm transition-all active:translate-y-px"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background-card border-b border-border-dark px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-border-dark">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRecruiterView();
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50"
            >
              <UserCheck className="w-3.5 h-3.5" /> Recruiter View
            </button>
            <Link
              to="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold text-white bg-primary-600"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-1 pt-1">
            {primaryNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-3 py-2 rounded-lg text-xs font-medium',
                  isActive(item.path)
                    ? 'text-primary-400 bg-slate-800/90 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-border-dark">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-3">
              More Sections
            </span>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {moreNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs',
                    isActive(item.path)
                      ? 'text-primary-400 bg-slate-800/90 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
