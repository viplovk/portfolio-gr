import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Github, Sparkles, Terminal, Code2, Layers, Cpu, Award, GraduationCap, MapPin } from 'lucide-react';
import { HERO_METRICS, PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenTerminal: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onExploreWork }) => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  const heroHeadline = "VIPLOV";
  const heroSubline = "CSE & CREATIVE DEV";

  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background kinetic ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#ccff00]/10 via-[#00f0ff]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Status & Accreditation Strip */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-800/80 font-mono text-xs text-zinc-400"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ccff00]" />
            </span>
            <span className="text-zinc-200 tracking-wider font-medium">
              B.TECH COMPUTER SCIENCE &bull; 19 Y/O (BORN MAY 18, 2007)
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#ccff00]" />
              DELHI / GREATER NOIDA, INDIA
            </span>
            <span className="hidden sm:inline-block text-zinc-700">/</span>
            <span className="hidden sm:flex items-center gap-1 text-[#ccff00]">
              <GraduationCap className="w-3.5 h-3.5" />
              7.95 SGPA (1ST SEM)
            </span>
          </div>
        </motion.div>

        {/* Main Giant Kinetic Title */}
        <div className="py-12 md:py-16">
          <div className="space-y-1 select-none">
            {/* Row 1: VIPLOV */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-5xl sm:text-7xl md:text-9xl lg:text-[9.5rem] leading-none tracking-tighter text-white flex flex-wrap"
              >
                {heroHeadline.split('').map((char, index) => (
                  <span
                    key={index}
                    onMouseEnter={() => {
                      setHoveredLetter(index);
                      sound.playHover(300 + index * 50);
                    }}
                    onMouseLeave={() => setHoveredLetter(null)}
                    className={`inline-block transition-transform duration-200 ${
                      char === ' ' ? 'w-4 md:w-8' : ''
                    } hover:text-[#ccff00] hover:-translate-y-2 cursor-pointer`}
                    data-cursor="VIPLOV"
                  >
                    {char}
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Row 2: & CSE & CREATIVE DEV with stylized badge */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-none tracking-tighter text-zinc-400 flex flex-wrap items-center gap-3 sm:gap-6"
              >
                <span className="text-zinc-600 font-mono font-light text-xl sm:text-4xl">&amp;</span>
                <div className="flex flex-wrap">
                  {heroSubline.split('').map((char, index) => (
                    <span
                      key={index}
                      onMouseEnter={() => {
                        sound.playHover(500 + index * 30);
                      }}
                      className={`inline-block transition-transform duration-200 ${
                        char === ' ' ? 'w-3 md:w-6' : ''
                      } hover:text-white hover:-translate-y-2 cursor-pointer`}
                      data-cursor="ENGINEER"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Philosophy Statement & Action Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 mt-6 border-t border-zinc-800/60">
            {/* Left description column */}
            <div className="lg:col-span-7 space-y-4">
              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
                Computer Science &amp; Engineering undergraduate at IEC College of Engineering &amp; Technology.
                Passionate about Data Structures &amp; Algorithms, modern front-end web engineering, Python problem-solving,
                and interactive digital experiences.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-2">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  PYTHON &bull; JAVASCRIPT &bull; TAILWIND CSS
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  DATA STRUCTURES &bull; SQL &bull; FIGMA
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  VERCEL &bull; GITHUB (viplovk) &bull; SHOPIFY
                </span>
              </div>
            </div>

            {/* Right CTA Action Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#work"
                  onClick={() => {
                    sound.playClick(1000);
                    onExploreWork();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-[#ccff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#b8e600] transition-all shadow-[0_0_25px_rgba(204,255,0,0.25)] group"
                  data-cursor="PROJECTS"
                >
                  <span>EXPLORE MY PROJECTS</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick(800)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 font-mono text-xs uppercase tracking-wider hover:border-zinc-500 hover:text-white transition-all group"
                  data-cursor="GITHUB"
                >
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  <span>GITHUB @viplovk</span>
                </a>
              </div>

              {/* Developer Terminal Hint */}
              <button
                onClick={() => {
                  sound.playClick(900);
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 font-mono text-xs transition-all group"
                data-cursor="CLI"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px]">~</kbd> to launch Interactive Terminal</span>
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">&gt; viplov@delhi: ~</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Ticker Metrics Bar */}
        <div className="pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {HERO_METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                onMouseEnter={() => sound.playHover(400 + idx * 60)}
                className="p-3.5 rounded bg-zinc-900/40 border border-zinc-800/80 hover:border-[#ccff00]/40 transition-colors group"
              >
                <div className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase group-hover:text-zinc-400">
                  {metric.label}
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-tight mt-1 group-hover:text-[#ccff00] transition-colors truncate">
                  {metric.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
