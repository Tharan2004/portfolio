import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto">
          {/* Profile Photo */}
          <motion.div className="mb-8" variants={scaleFade}>
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden">
              <img
                src={portfolioData.personal.profilePic}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            variants={fadeInLeft}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-light"
            variants={fadeInRight}
          >
            {portfolioData.personal.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Button onClick={scrollToProjects} size="lg">
                View My Work
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button href={portfolioData.personal.resume} variant="outline" size="lg" icon={Download}>
                Download Resume
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button href={`mailto:${portfolioData.personal.email}`} variant="secondary" size="lg" icon={Mail}>
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Chevron - keep bounce class */}
          <motion.button
            onClick={scrollToProjects}
            className="animate-bounce text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            variants={fadeInUp}
          >
            <ChevronDown size={32} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
