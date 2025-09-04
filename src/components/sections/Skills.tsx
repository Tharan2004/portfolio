import React from 'react';
import { Code, Server, PenTool as Tool } from 'lucide-react';
import { Card } from '../ui/Card';
import { portfolioData } from '../../data/portfolio';
import { FaLaptopCode } from "react-icons/fa";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: portfolioData.skills.frontend,
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: portfolioData.skills.backend,
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Tool,
      skills: portfolioData.skills.tools,
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Programming Languages',
      icon: FaLaptopCode,
      skills: portfolioData.skills.languages,
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-8 text-center">
              <div className={`inline-flex p-4 rounded-2xl ${category.color} mb-6`}>
                <category.icon size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="p-8 mt-12">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
            Key Strengths
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Responsive Design',
              'Strong Foundations in Programming',
              'Eager Learner with a Growth Mindset',
              'Performance Optimization',
              'Testing & QA',
              'Agile Methodology',
              'Team Leadership',
              'Problem Solving'
            ].map((strength) => (
              <div key={strength} className="text-center">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="w-3 h-3 bg-slate-600 dark:bg-slate-400 rounded-full"></span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};