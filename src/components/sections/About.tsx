import React from 'react';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Background
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {portfolioData.personal.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm passionate about creating digital experiences that make a difference. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or mentoring aspiring developers in the community.
              </p>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Quick Info
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="ml-2 text-slate-700 dark:text-slate-300">{portfolioData.personal.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Email:</span>
                  <span className="ml-2 text-slate-700 dark:text-slate-300">{portfolioData.personal.email}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Phone:</span>
                  <span className="ml-2 text-slate-700 dark:text-slate-300">{portfolioData.personal.phone}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Experience */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                    {edu.school} • {edu.period}
                  </p>
                  {edu.description && (
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
