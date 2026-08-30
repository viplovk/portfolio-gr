import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, CheckCircle2, History, Compass, Users, Code, Award, GraduationCap, BookOpen, Laptop, Target } from 'lucide-react';
import { TIMELINE, CLIENT_BRANDS, PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  return (
    <section id="about" className="py-24 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2">
            <span>[02] BACKGROUND &amp; ACADEMICS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
            <span className="text-zinc-500">VIPLOV &bull; DELHI / GREATER NOIDA, INDIA</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
            ENGINEERING &amp; CODING JOURNEY
          </h2>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
          {/* Left Biography column */}
          <div className="lg:col-span-6 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl text-white font-normal leading-snug">
              "Building high-performance software and interactive digital experiences through solid Computer Science fundamentals, algorithmic discipline, and creative UI engineering."
            </p>

            <p>
              I am <strong className="text-white font-semibold">Viplov</strong>, a 19-year-old developer (born May 18, 2007) based in <strong className="text-[#ccff00] font-semibold">Delhi / Greater Noida, India</strong>. Currently pursuing my <strong className="text-white font-semibold">B.Tech in Computer Science and Engineering</strong> at IEC College of Engineering &amp; Technology, where I achieved a standout <strong className="text-[#ccff00] font-semibold">7.95 SGPA</strong> in my first semester.
            </p>

            <p>
              Prior to my engineering degree, I completed my Class 12 Science stream education from <strong className="text-white font-semibold">Bharti Public School, Delhi</strong> in 2025 with intensive coaching at <strong className="text-white font-semibold">Vidhyapeeth Preet Vihar</strong>. My technical skillset spans Data Structures &amp; Algorithms, Python, JavaScript, modern web development, and AI tools integration.
            </p>

            <div className="p-5 rounded-lg bg-zinc-900/60 border border-zinc-800 font-mono text-xs space-y-2 text-zinc-400">
              <div className="text-[#ccff00] font-bold uppercase tracking-wider">
                CORE TECHNICAL FOCUS &amp; PRINCIPLES
              </div>
              <ul className="space-y-1.5 text-zinc-300">
                <li>&bull; <strong className="text-white">Algorithmic Precision:</strong> Clean time &amp; space complexity in Python &amp; JavaScript.</li>
                <li>&bull; <strong className="text-white">Responsive Web Craft:</strong> Modern CSS/Tailwind layouts, fluid animations &amp; Vercel edge deployment.</li>
                <li>&bull; <strong className="text-white">Continuous Growth:</strong> Practical workshops at GeeksforGeeks (Data Science &amp; Career Boost).</li>
              </ul>
            </div>
          </div>

          {/* Right Highlights & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
              <div className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800 space-y-2">
                <GraduationCap className="w-5 h-5 text-[#ccff00]" />
                <div className="text-xs text-zinc-400">ACADEMIC STANDING</div>
                <div className="font-display font-bold text-2xl text-white">7.95 SGPA</div>
                <p className="text-[11px] text-zinc-400 font-sans">
                  B.Tech in Computer Science &amp; Engineering &bull; 1st Semester at IEC College.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800 space-y-2">
                <Code className="w-5 h-5 text-[#00f0ff]" />
                <div className="text-xs text-zinc-400">PROJECTS &amp; REPOS</div>
                <div className="font-display font-bold text-2xl text-white">5+ Projects</div>
                <p className="text-[11px] text-zinc-400 font-sans">
                  Walkable, SpidermanBND, Calcx, Pixel Portfolio, and AI E-Commerce Storefront.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800 space-y-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div className="text-xs text-zinc-400">WORKSHOPS &amp; CERTS</div>
                <div className="font-display font-bold text-2xl text-white">2x GFG Noida</div>
                <p className="text-[11px] text-zinc-400 font-sans">
                  GeeksforGeeks Data Science &amp; Career Boost intensive programs.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-zinc-900/40 border border-zinc-800 space-y-2">
                <Compass className="w-5 h-5 text-purple-400" />
                <div className="text-xs text-zinc-400">LOCATION &amp; BASE</div>
                <div className="font-display font-bold text-2xl text-white">Delhi / NCR</div>
                <p className="text-[11px] text-zinc-400 font-sans">
                  Greater Noida &bull; Open for on-site / remote software engineering opportunities.
                </p>
              </div>
            </div>

            {/* Institutions & Platforms Ticker */}
            <div className="p-5 rounded-lg bg-zinc-900/20 border border-zinc-800/80 space-y-3">
              <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                EDUCATION, INSTITUTES &amp; PLATFORMS
              </div>
              <div className="flex flex-wrap gap-2">
                {CLIENT_BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Career & Academic Timeline */}
        <div className="pt-12 border-t border-zinc-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <History className="w-4 h-4 text-[#ccff00]" />
              CHRONOLOGICAL EDUCATION &amp; MILESTONES (2022 &mdash; 2025)
            </h3>
            <span className="font-mono text-[11px] text-zinc-500">
              Click milestone to inspect
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Timeline Era Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {TIMELINE.map((item, idx) => (
                <button
                  key={item.year}
                  onClick={() => {
                    setActiveTimelineIndex(idx);
                    sound.playClick(650 + idx * 50);
                  }}
                  onMouseEnter={() => sound.playHover(400 + idx * 40)}
                  className={`text-left p-4 rounded-lg border font-mono text-xs transition-all ${
                    activeTimelineIndex === idx
                      ? 'bg-[#ccff00]/10 border-[#ccff00] text-white shadow-[0_0_15px_rgba(204,255,0,0.15)]'
                      : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                  data-cursor="TIMELINE"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">{item.period}</span>
                    {activeTimelineIndex === idx && (
                      <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                    )}
                  </div>
                  <div className="font-bold text-sm text-white mt-1">{item.company}</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">{item.role}</div>
                </button>
              ))}
            </div>

            {/* Active Era Details Showcase */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <span className="font-mono text-xs text-[#ccff00]">
                    {TIMELINE[activeTimelineIndex].period}
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white mt-1">
                    {TIMELINE[activeTimelineIndex].role}
                  </h4>
                  <div className="font-mono text-xs text-zinc-400">
                    {TIMELINE[activeTimelineIndex].company}
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
                {TIMELINE[activeTimelineIndex].description}
              </p>

              <div className="space-y-2">
                <div className="font-mono text-xs text-zinc-400 uppercase">Key Milestones &amp; Outcomes</div>
                <div className="space-y-2">
                  {TIMELINE[activeTimelineIndex].milestones.map((m, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="font-mono text-[10px] text-zinc-500 uppercase mb-2">Technologies &amp; Disciplines</div>
                <div className="flex flex-wrap gap-2">
                  {TIMELINE[activeTimelineIndex].technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
