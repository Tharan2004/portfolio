import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on recently. Each one represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <Card key={project.id} hover className="overflow-hidden group">
              <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {project.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    href={project.demo}
                    variant="outline"
                    size="sm"
                    icon={ExternalLink}
                  >
                    Demo
                  </Button>
                  <Button
                    href={project.github}
                    variant="secondary"
                    size="sm"
                    icon={Github}
                  >
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};