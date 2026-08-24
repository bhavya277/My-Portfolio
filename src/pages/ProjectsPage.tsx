import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Github, ExternalLink, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'ALL',
    'AI/ML',
    'NLP',
    'WEB',
    'DATA SCIENCE',
    'CYBERSECURITY',
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'ALL' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="ENGINEERING PORTFOLIO"
        title="Projects & Case Studies"
        description="Comprehensive technical showcases detailing problem formulation, system architectures, explicit personal contributions, and empirical results."
      />

      {/* Controls Bar: Category Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors font-mono"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant={project.featured ? 'highlight' : 'interactive'}
              className="p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="primary" size="sm">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="accent" size="sm">
                      <Sparkles className="w-3 h-3 mr-1" /> Flagship
                    </Badge>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-primary-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                {/* Role / Team Metadata */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                  <span>Role: {project.role}</span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 mt-6 border-t border-border-dark flex items-center justify-between">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs font-semibold text-primary-400 hover:text-primary-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2 text-slate-400">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 hover:text-white rounded hover:bg-slate-800 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 hover:text-white rounded hover:bg-slate-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-slate-800 rounded-xl">
          <p className="text-sm font-mono text-slate-400">No projects match the selected criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-primary-400 hover:underline font-mono"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
