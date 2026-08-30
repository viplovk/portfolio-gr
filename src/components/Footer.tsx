import React from 'react';
import { ArrowUp, Github, GraduationCap, Heart, Code2, MapPin } from 'lucide-react';
import { sound } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick(900);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#08080a] py-12 relative z-10 font-mono text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="space-y-1">
            <div className="font-display font-black text-white text-lg tracking-tight flex items-center gap-2">
              <span>VIPLOV</span>
              <span className="text-[#ccff00] text-xs font-mono px-2 py-0.5 rounded bg-[#ccff00]/10 border border-[#ccff00]/30">
                7.95 SGPA &bull; CSE
              </span>
            </div>
            <p className="text-zinc-400 text-xs flex items-center gap-2">
              <span>B.Tech Computer Science &amp; Engineering</span>
              <span>&bull;</span>
              <span>IEC College of Engineering &amp; Technology</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 text-[#ccff00]">
                <MapPin className="w-3 h-3" /> Delhi / Greater Noida
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(800)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/viplovk</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00]/50 transition-colors"
              title="Back to top"
              data-cursor="TOP"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Viplov. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Built with React, TypeScript, Tailwind CSS &amp; Motion.</span>
          </div>

          <div className="flex items-center gap-1 text-zinc-400">
            <span>Contact:</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#ccff00] hover:underline"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
