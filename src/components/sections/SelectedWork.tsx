import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

export const SelectedWork: React.FC = () => {
  const selectedProjects = projectsData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeader
            label="PROVEN SYSTEMS"
            title="Selected Work"
            description="Flagship engineering projects demonstrating end-to-end full-stack development, applied machine learning, and cybersecurity analysis."
            className="mb-0"
          />
          <Link to="/projects" className="mt-4 md:mt-0">
            <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              View All Projects ({projectsData.length})
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {selectedProjects.map((project) => (
            <Card
              key={project.id}
              variant="interactive"
              className="p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="primary" size="sm">
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                  {project.title.split('—')[0]}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-border-dark flex items-center justify-between">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs font-semibold text-primary-400 hover:text-primary-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2 text-slate-400">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 hover:text-white rounded hover:bg-slate-800 transition-colors"
                    title="GitHub Code"
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
      </div>
    </section>
  );
};
