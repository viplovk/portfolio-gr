import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, Crown, Zap, Sparkles, Bookmark, Globe, ArrowUpRight, GraduationCap, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AWARDS_LIST } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const AwardsSection: React.FC = () => {
  const [activeAwardId, setActiveAwardId] = useState<string | null>(null);

  const getAwardIcon = (name: string) => {
    switch (name) {
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Award': return <Award className="w-5 h-5 text-yellow-400" />;
      case 'Star': return <Star className="w-5 h-5 text-[#ccff00]" />;
      case 'Crown': return <Crown className="w-5 h-5 text-amber-300" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#00f0ff]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Bookmark': return <Bookmark className="w-5 h-5 text-purple-400" />;
      default: return <GraduationCap className="w-5 h-5 text-[#ccff00]" />;
    }
  };

  const handleAwardClick = (awardId: string) => {
    setActiveAwardId(awardId);
    sound.playSuccess();
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#ccff00', '#ffd700', '#00f0ff', '#ffffff']
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section id="awards" className="py-24 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2">
              <span>[03] CERTIFICATIONS &amp; HONORS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
              <span className="text-zinc-500">ACADEMIC &amp; WORKSHOP DISTINCTIONS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              AWARDS &amp; CERTIFICATIONS
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Verified technical workshops at GeeksforGeeks, undergraduate academic standing in Computer Science, and foundational milestones.
          </p>
        </div>

        {/* Featured Distinction Highlight: 7.95 SGPA & GFG Certification */}
        <div className="my-8 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#ccff00]/10 via-zinc-900 to-zinc-950 border border-[#ccff00]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-4 rounded-xl bg-[#ccff00]/20 border border-[#ccff00]/40 text-[#ccff00] flex-shrink-0">
              <GraduationCap className="w-8 h-8 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] font-semibold uppercase tracking-wider">
                <span>UNDERGRADUATE CSE DISTINCTION</span>
                <span className="text-zinc-500">&bull; 2024 - 2025</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                7.95 SGPA &bull; IEC COLLEGE &amp; 2x GFG WORKSHOPS
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light">
                First Semester Academic Excellence in Computer Science &amp; Engineering alongside completed Data Science &amp; Career Boost Workshops at GeeksforGeeks Noida.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleAwardClick('gfg-ds-workshop')}
            className="px-5 py-3 rounded-lg bg-[#ccff00] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b8e600] transition-colors flex items-center gap-1.5 shadow-[0_0_20px_rgba(204,255,0,0.3)] whitespace-nowrap"
            data-cursor="HONOR"
          >
            <span>VIEW CREDENTIALS</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleAwardClick(award.id)}
              onMouseEnter={() => sound.playHover(400 + idx * 40)}
              className={`p-5 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${
                activeAwardId === award.id
                  ? 'bg-zinc-800/90 border-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.15)]'
                  : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70'
              }`}
              data-cursor="CERT"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                    {getAwardIcon(award.iconName)}
                  </div>
                  <span className="font-mono text-xs text-zinc-500">{award.year}</span>
                </div>

                <div className="pt-4 space-y-1">
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {award.category}
                  </div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#ccff00] transition-colors">
                    {award.title}
                  </h4>
                  <div className="font-display font-bold text-xl text-[#ccff00] py-1">
                    {award.count}
                  </div>
                  <p className="text-xs text-zinc-400 font-light pt-1 leading-relaxed">
                    {award.highlight}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-zinc-800/60 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                <span>{award.organization}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
