import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Trophy, CheckCircle2, Sparkles, Terminal, Code2, Play, Volume2 } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'interactive'>('overview');
  const [interactiveCounter, setInteractiveCounter] = useState(0);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      sound.playWhoosh();
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick(600);
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          className="relative w-full max-w-5xl bg-[#0e0e12] border border-zinc-700/80 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                CASE STUDY &bull; {project.id.toUpperCase()}
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px]">
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick(500);
                  onClose();
                }}
                className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                aria-label="Close modal"
                data-cursor="CLOSE"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            {/* Title & Subtitle */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                {project.awards.map((award) => (
                  <span
                    key={award}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[11px]"
                  >
                    <Trophy className="w-3 h-3 text-amber-400" />
                    {award}
                  </span>
                ))}
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-zinc-400 text-lg font-light">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px]">CLIENT</span>
                <span className="text-zinc-200 font-medium">{project.client}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">ROLE</span>
                <span className="text-zinc-200 font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">YEAR</span>
                <span className="text-zinc-200 font-medium">{project.year}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">PREVIEW TYPE</span>
                <span className="text-[#ccff00] font-medium uppercase">{project.previewType}</span>
              </div>
            </div>

            {/* Main Preview Banner */}
            <div className="relative rounded-lg overflow-hidden border border-zinc-800 aspect-video group bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 justify-between">
                <div className="font-mono text-xs text-zinc-300">
                  <span>LIVE EXPERIENCE SIMULATION</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick(1100)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#ccff00] text-black font-mono text-xs font-bold hover:bg-[#b8e600] transition-colors"
                  >
                    <span>LAUNCH PROJECT</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick(900)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-zinc-900 border border-zinc-700 text-white font-mono text-xs hover:border-zinc-500 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Tabs for Deep-Dive */}
            <div className="border-b border-zinc-800 flex gap-4 font-mono text-xs">
              {(['overview', 'tech', 'interactive'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    sound.playClick(800);
                  }}
                  className={`pb-3 font-medium uppercase tracking-wider transition-colors relative ${
                    activeTab === tab
                      ? 'text-[#ccff00]'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tab === 'overview' && '01. OVERVIEW & IMPACT'}
                  {tab === 'tech' && '02. ARCHITECTURE & STACK'}
                  {tab === 'interactive' && '03. INTERACTIVE LAB'}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeModalTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ccff00]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed">
                  <p className="text-base sm:text-lg text-zinc-200">{project.longDescription}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Key Highlights &amp; Milestones
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.metrics && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-3 bg-zinc-900/30 rounded border border-zinc-800/80">
                        <div className="font-mono text-[10px] text-zinc-500 uppercase">{m.label}</div>
                        <div className="font-display font-bold text-xl text-white mt-1">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 2: Tech & Stack */}
            {activeTab === 'tech' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Core Technical Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 font-mono text-xs flex items-center gap-1.5"
                      >
                        <Code2 className="w-3.5 h-3.5 text-[#ccff00]" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-400 space-y-2">
                  <div className="text-[#ccff00] font-semibold">// Architectural Choreography Notes</div>
                  <p>
                    &bull; ScrollTrigger synced with Lenis smooth-scroll requestAnimationFrame ticker.
                  </p>
                  <p>
                    &bull; Dynamic viewport calculation using ResizeObserver to ensure zero layout shift.
                  </p>
                  <p>
                    &bull; Custom GLSL fragment shaders handling chromatic aberration and lens distortion passes.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Interactive Lab */}
            {activeTab === 'interactive' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 p-6 rounded-lg bg-zinc-950 border border-zinc-800"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs text-[#ccff00] uppercase tracking-wider">
                    Kinetic Physics Playground
                  </h4>
                  <span className="font-mono text-xs text-zinc-500">
                    Interactions: {interactiveCounter}
                  </span>
                </div>

                <div className="h-40 border border-dashed border-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden bg-zinc-900/50">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setInteractiveCounter((c) => c + 1);
                      sound.playClick(600 + (interactiveCounter % 8) * 100);
                    }}
                    className="cursor-pointer px-6 py-3 rounded-full bg-[#ccff00] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                    data-cursor="TRIGGER"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>TRIGGER AUDIO-VISUAL PULSE</span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
