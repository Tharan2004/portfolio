import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden">
              <img
                src={portfolioData.personal.profilePic}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-light">
            {portfolioData.personal.title}
          </p>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button href={portfolioData.personal.resume} variant="outline" size="lg" icon={Download}>
              Download Resume
            </Button>
            <Button href={`mailto:${portfolioData.personal.email}`} variant="secondary" size="lg" icon={Mail}>
              Get In Touch
            </Button>
          </div>

          <button
            onClick={scrollToProjects}
            className="animate-bounce text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};