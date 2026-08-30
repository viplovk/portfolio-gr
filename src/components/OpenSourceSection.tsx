import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Copy, Check, Star, GitFork, BookOpen, ExternalLink, Sparkles, Terminal, Code2, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

export const OpenSourceSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const cloneCommand = 'git clone https://github.com/viplovk/walkable.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    sound.playSuccess();
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#ccff00', '#ffffff', '#00f0ff']
      });
    } catch {
      // Confetti fallback
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const repos = [
    {
      name: 'viplovk/walkable',
      url: 'https://github.com/viplovk/walkable',
      desc: 'Interactive web-based application deployed on Vercel.',
      tag: 'Vercel / JavaScript'
    },
    {
      name: 'viplovk/spidermanBND',
      url: 'https://github.com/viplovk/spidermanBND',
      desc: 'Front-end development experiment configured for Vercel deployment.',
      tag: 'Front-End / CSS3'
    },
    {
      name: 'calcx',
      url: 'https://github.com/viplovk',
      desc: 'Algorithmic calculator utility and parser engine.',
      tag: 'Algorithms / Python'
    },
    {
      name: 'pixel-portfolio',
      url: 'https://github.com/viplovk',
      desc: 'Custom pixel-themed interactive portfolio built with Tailwind CSS.',
      tag: 'Tailwind CSS / JS'
    }
  ];

  return (
    <section id="opensource" className="py-24 border-t border-zinc-800 relative z-10 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2">
              <span>[05] OPEN SOURCE &amp; REPOSITORIES</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
              <span className="text-zinc-500">GITHUB: @viplovk</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              GITHUB REPOSITORIES
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Public repositories and open source projects authored by Viplov, covering interactive web apps, algorithms, and experiments.
          </p>
        </div>

        {/* GitHub Repository Showcase Card */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Repo Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-700/80 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-black border border-zinc-800 text-[#ccff00]">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg text-white hover:text-[#ccff00] transition-colors">
                      <a
                        href="https://github.com/viplovk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                        data-cursor="GITHUB"
                      >
                        <span>viplovk / walkable &amp; repositories</span>
                        <ExternalLink className="w-4 h-4 text-zinc-500" />
                      </a>
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">Public profile &bull; Computer Science &amp; Engineering</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/viplovk"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick(900)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>Follow on GitHub</span>
                  </a>
                </div>
              </div>

              {/* Repos list preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick(750)}
                    className="p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800 hover:border-[#ccff00]/50 hover:bg-zinc-900 transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-semibold group-hover:text-[#ccff00] transition-colors">{repo.name}</span>
                      <span className="text-[10px] text-[#ccff00] px-1.5 py-0.5 rounded bg-[#ccff00]/10 border border-[#ccff00]/20">{repo.tag}</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-light mt-1.5 leading-snug">{repo.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Interactive Clone Command Box */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between text-zinc-400 text-[11px]">
                <span>CLONE WALKABLE REPOSITORY</span>
                <span className="text-[#ccff00]">HTTPS</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-lg bg-black border border-zinc-800 text-zinc-300 group">
                <div className="flex items-center gap-2 overflow-x-auto select-all">
                  <span className="text-zinc-600 font-bold">$</span>
                  <span className="text-white font-mono text-xs whitespace-nowrap">
                    {cloneCommand}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className={`ml-3 px-3 py-1.5 rounded text-xs font-mono font-medium transition-all flex items-center gap-1.5 flex-shrink-0 ${
                    copied
                      ? 'bg-[#ccff00] text-black font-bold'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                  }`}
                  data-cursor="COPY"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Repo Breakdown Info */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="text-[#ccff00] font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-zinc-800">
                DEVELOPER PROFILE SNAPSHOT
              </div>
              <div className="space-y-2 text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Developer:</span>
                  <span className="text-white">Viplov</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">GitHub ID:</span>
                  <span className="text-white">@viplovk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">College:</span>
                  <span className="text-white">IEC College (CSE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Deployments:</span>
                  <span className="text-[#ccff00]">Vercel Edge</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-white">Delhi / Greater Noida</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="text-zinc-400 font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-zinc-800 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>DEV PIPELINE</span>
              </div>
              <div className="p-3 bg-black rounded border border-zinc-850 space-y-1 text-[11px] text-zinc-400">
                <p><span className="text-[#ccff00] font-bold">1.</span> git clone &amp;&amp; npm install</p>
                <p><span className="text-[#ccff00] font-bold">2.</span> npm run dev</p>
                <p><span className="text-[#ccff00] font-bold">3.</span> vercel --prod</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
