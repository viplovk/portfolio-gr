import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleMatrix?: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose, onToggleMatrix }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="text-zinc-300 space-y-1">
          <div className="text-[#ccff00] font-bold">
            VIPLOV CLI TERMINAL &bull; v1.0.0 (Delhi / Greater Noida, India)
          </div>
          <div className="text-zinc-400">
            Type <span className="text-[#ccff00] font-bold">help</span> to view available commands. Press <kbd className="bg-zinc-800 px-1 rounded text-white text-[10px]">ESC</kbd> or <kbd className="bg-zinc-800 px-1 rounded text-white text-[10px]">~</kbd> to close.
          </div>
        </div>
      ),
      timestamp: 'SYSTEM'
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    sound.playClick(900);
    setHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const now = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-[#ccff00] font-bold">AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><span className="text-[#ccff00]">projects</span> - List featured applications & repos</div>
              <div><span className="text-[#ccff00]">education</span> - View college, SGPA & schools</div>
              <div><span className="text-[#ccff00]">awards</span> - Certifications & GeeksforGeeks badges</div>
              <div><span className="text-[#ccff00]">stack</span> - Languages & frameworks</div>
              <div><span className="text-[#ccff00]">bio</span> - Summary of Viplov</div>
              <div><span className="text-[#ccff00]">contact</span> - Direct email & location</div>
              <div><span className="text-[#ccff00]">socials</span> - GitHub, LinkedIn, X, Instagram</div>
              <div><span className="text-[#ccff00]">repo</span> - Open source GitHub repository link</div>
              <div><span className="text-[#ccff00]">clone</span> - Copy git clone command</div>
              <div><span className="text-[#ccff00]">sound</span> - Toggle audio synthesizer effects</div>
              <div><span className="text-[#ccff00]">matrix</span> - Trigger visual matrix stream</div>
              <div><span className="text-[#ccff00]">easter-egg</span> - Trigger celebratory confetti</div>
              <div><span className="text-[#ccff00]">clear</span> - Clear terminal screen</div>
              <div><span className="text-[#ccff00]">exit</span> - Close terminal drawer</div>
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-[#ccff00] font-bold">VIPLOV'S PROJECTS &amp; REPOSITORIES:</div>
            <div>&bull; [01] Walkable (viplovk/walkable) - Interactive web-based app deployed on Vercel</div>
            <div>&bull; [02] Spiderman BND (viplovk/spidermanBND) - Frontend experiment on Vercel</div>
            <div>&bull; [03] Calcx - Algorithmic calculator utility repository & parser</div>
            <div>&bull; [04] Personal Pixel Portfolio - Custom pixel-themed portfolio with Tailwind CSS</div>
            <div>&bull; [05] AI E-Commerce Store - Modern web store with smart search</div>
            <div>&bull; [06] DSA & Algorithm Suite - Data Structures & Algorithms solutions</div>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-[#ccff00] font-bold">ACADEMIC BACKGROUND:</div>
            <div>&bull; <span className="text-white font-semibold">B.Tech CSE</span> - IEC College of Engineering & Technology (7.95 SGPA in 1st Sem)</div>
            <div>&bull; <span className="text-white font-semibold">Class 12 / Science</span> - Bharti Public School, Delhi (2025)</div>
            <div>&bull; <span className="text-white font-semibold">Class 10</span> - Bharti Public School, Delhi (2022)</div>
            <div>&bull; <span className="text-white font-semibold">Prep Coaching</span> - Vidhyapeeth Preet Vihar</div>
          </div>
        );
        break;

      case 'awards':
      case 'certifications':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-amber-400 font-bold">CERTIFICATIONS &amp; HONORS:</div>
            <div>🎓 7.95 SGPA - 1st Semester Distinction in B.Tech CSE</div>
            <div>⚡ GeeksforGeeks - Data Science Workshop Certificate</div>
            <div>🚀 GeeksforGeeks - Tech Career Boost Program</div>
            <div>⭐ High School Science Stream Graduate (Bharti Public School)</div>
          </div>
        );
        break;

      case 'stack':
      case 'skills':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-[#00f0ff] font-bold">TECHNICAL SKILLS &amp; TOOLS:</div>
            <div>&bull; Languages: Python, JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL</div>
            <div>&bull; Frameworks & Styling: React, Tailwind CSS, Vite, Motion</div>
            <div>&bull; Computer Science: Data Structures & Algorithms, OOP, Database Systems</div>
            <div>&bull; Design & Deployment: Figma (UI/UX), Vercel, Git, GitHub</div>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-white font-bold">VIPLOV (Born May 18, 2007 &bull; Age 19)</div>
            <p className="text-zinc-400">
              Computer Science and Engineering undergraduate student at IEC College of Engineering & Technology (7.95 SGPA), based in Delhi / Greater Noida, India. Passionate about frontend engineering, algorithms, and interactive applications.
            </p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-[#ccff00] font-bold">CONTACT INFORMATION:</div>
            <div>&bull; Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white underline">{PERSONAL_INFO.email}</a></div>
            <div>&bull; Location: Delhi / Greater Noida, India</div>
          </div>
        );
        break;

      case 'socials':
        output = (
          <div className="space-y-1 text-zinc-300">
            <div className="text-[#ccff00] font-bold">SOCIAL &amp; DEV PROFILES:</div>
            <div>&bull; GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.githubUrl}</a></div>
            <div>&bull; LinkedIn: <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.linkedinUrl}</a></div>
            <div>&bull; Twitter/X: <a href={PERSONAL_INFO.twitterUrl} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.twitterUrl}</a></div>
            <div>&bull; Instagram: <a href={PERSONAL_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.instagramUrl}</a></div>
          </div>
        );
        break;

      case 'repo':
      case 'github':
        output = (
          <div className="text-zinc-300">
            GitHub Profile:{' '}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccff00] underline"
            >
              {PERSONAL_INFO.githubUrl}
            </a>
          </div>
        );
        break;

      case 'clone':
        navigator.clipboard.writeText('git clone https://github.com/viplovk/walkable.git');
        sound.playSuccess();
        output = (
          <div className="text-[#ccff00]">
            ✓ Copied to clipboard: git clone https://github.com/viplovk/walkable.git
          </div>
        );
        break;

      case 'sound':
        const muted = sound.toggleMute();
        output = (
          <div className="text-zinc-300">
            Audio Synthesizer state:{' '}
            <span className={!muted ? 'text-[#ccff00] font-bold' : 'text-red-400 font-bold'}>
              {!muted ? 'ENABLED (SFX ON)' : 'MUTED'}
            </span>
          </div>
        );
        break;

      case 'matrix':
        if (onToggleMatrix) onToggleMatrix();
        output = <div className="text-[#ccff00]">Matrix stream overlay toggled.</div>;
        break;

      case 'easter-egg':
        sound.playSuccess();
        try {
          confetti({ particleCount: 70, spread: 90, origin: { y: 0.5 } });
        } catch {}
        output = (
          <div className="text-purple-400 font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>★ EASTER EGG UNLOCKED! Welcome to Viplov's interactive portfolio! ★</span>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <div className="text-red-400">
            Command not recognized: <span className="text-white">"{cmdStr}"</span>. Type{' '}
            <span className="text-[#ccff00] font-bold">help</span> for available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmdStr,
        output,
        timestamp: now
      }
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(history[history.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6 flex justify-center pointer-events-auto"
      >
        <div className="w-full max-w-4xl bg-[#09090c]/98 border border-zinc-700/90 rounded-xl shadow-2xl overflow-hidden font-mono text-xs flex flex-col max-h-[60vh] backdrop-blur-xl">
          {/* Terminal Window Header */}
          <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-zinc-400 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-bold text-zinc-200 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>viplov@delhi: ~/portfolio</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] text-zinc-500 hidden sm:inline">TYPE 'help' FOR CMDS</span>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Body Logs */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                  <span className="text-[#ccff00] font-bold">➜</span>
                  <span className="text-zinc-400">~</span>
                  <span className="text-white font-semibold">{log.command}</span>
                </div>
                <div className="pl-4">{log.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Line */}
          <div className="px-4 py-3 bg-black/60 border-t border-zinc-800/80 flex items-center gap-2">
            <span className="text-[#ccff00] font-bold text-sm">➜</span>
            <span className="text-zinc-400 text-xs">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. help, projects, education, stack, socials)..."
              className="w-full bg-transparent text-white font-mono text-xs focus:outline-none placeholder-zinc-600"
            />
            <button
              onClick={() => {
                handleCommand(input);
                setInput('');
              }}
              className="p-1 text-zinc-500 hover:text-[#ccff00]"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
