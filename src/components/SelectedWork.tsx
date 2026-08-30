import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Trophy, Sparkles, Code2, Eye, Play, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/audio';

export const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'ALL WORKS [06]', value: 'all' },
    { label: 'FEATURED & LIVE [04]', value: 'awards' },
    { label: 'EXPERIMENTAL & DSA [03]', value: 'experimental' },
    { label: 'E-COMMERCE & STORE [01]', value: 'ecommerce' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="work" className="py-24 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2">
              <span>[01] SELECTED WORKS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
              <span className="text-zinc-500">2015 — 2025</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              CRAFTED EXPERIENCES
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            A curated index of high-impact web productions, interactive WebGL experiments,
            and award-winning digital flagships.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                sound.playClick(850);
              }}
              onMouseEnter={() => sound.playHover(450)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-[#ccff00] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
              data-cursor="FILTER"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseEnter={() => {
                  setHoveredCardId(project.id);
                  sound.playHover(350 + idx * 40);
                }}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Top Card Bar */}
                <div className="flex items-center justify-between gap-2 pb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 font-bold">#{String(idx + 1).padStart(2, '0')}</span>
                    <span className="text-zinc-300 uppercase tracking-wider">{project.client}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.awards.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[10px]">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        {project.awards[0]}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 text-[10px]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Visual Preview Banner */}
                <div
                  onClick={() => {
                    setSelectedProject(project);
                    sound.playClick(900);
                  }}
                  className="relative rounded-lg overflow-hidden border border-zinc-800 aspect-[16/10] bg-zinc-950 cursor-pointer my-3 group/img"
                  data-cursor="CASE STUDY"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="font-mono text-xs text-[#ccff00] font-bold flex items-center gap-1.5">
                      <Eye className="w-4 h-4" /> EXPLORE DETAILED CASE STUDY
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        onClick={() => {
                          setSelectedProject(project);
                          sound.playClick(900);
                        }}
                        className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#ccff00] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 font-mono text-xs">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        sound.playClick(900);
                      }}
                      className="text-zinc-300 hover:text-white flex items-center gap-1 group/btn"
                    >
                      <span className="underline underline-offset-4 decoration-zinc-700 group-hover/btn:decoration-[#ccff00]">
                        VIEW ARCHITECTURE
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00]" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sound.playClick(800)}
                          className="p-1.5 rounded bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                          title="View source code"
                          data-cursor="GITHUB"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick(1000)}
                        className="px-3 py-1.5 rounded bg-zinc-800/80 hover:bg-[#ccff00] hover:text-black text-zinc-300 font-medium transition-colors flex items-center gap-1"
                        data-cursor="LIVE"
                      >
                        <span>LIVE</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
