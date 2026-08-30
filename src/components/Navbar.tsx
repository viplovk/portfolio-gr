import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Grid, Radio, Trophy, Github, Menu, X, Sparkles, GraduationCap } from 'lucide-react';
import { sound } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onToggleTerminal: () => void;
  wireframeMode: boolean;
  onToggleWireframe: () => void;
  isTerminalOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleTerminal,
  wireframeMode,
  onToggleWireframe,
  isTerminalOpen
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isAmbientOn, setIsAmbientOn] = useState(false);
  const [delhiTime, setDelhiTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Live Delhi / IST Time clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
        setDelhiTime(timeString);
      } catch {
        const now = new Date();
        setDelhiTime(now.toTimeString().substring(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick(900);
  };

  const handleAmbientToggle = () => {
    const playing = sound.toggleAmbient();
    setIsAmbientOn(playing);
    sound.playClick(playing ? 600 : 400);
  };

  const navLinks = [
    { label: 'WORK', href: '#work', index: '01' },
    { label: 'ABOUT & EDU', href: '#about', index: '02' },
    { label: 'CERTIFICATIONS', href: '#awards', index: '03' },
    { label: 'LAB & STACK', href: '#lab', index: '04' },
    { label: 'OPEN SOURCE', href: '#opensource', index: '05' },
    { label: 'CONTACT', href: '#contact', index: '06' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#09090b]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & CSE badge */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={() => sound.playClick(1000)}
            className="group flex flex-col focus:outline-none"
            data-cursor="VIPLOV"
          >
            <span className="font-display font-black tracking-tight text-lg sm:text-xl text-white flex items-center gap-2">
              VIPLOV
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
              B.Tech CSE &bull; Creative Developer
            </span>
          </a>

          {/* Academic distinction badge */}
          <a
            href="#about"
            onClick={() => sound.playClick(1100)}
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-[11px] font-mono hover:bg-[#ccff00]/20 transition-colors"
            title="IEC College of Engineering & Technology - 7.95 SGPA"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#ccff00]" />
            <span>7.95 SGPA &bull; IEC COLLEGE</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playClick(750)}
              onMouseEnter={() => sound.playHover(500)}
              className="text-zinc-400 hover:text-white transition-colors py-1 group flex items-center gap-1"
            >
              <span className="text-zinc-600 group-hover:text-[#ccff00] transition-colors text-[10px]">
                {link.index}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Controls & Status Toolbar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Delhi / IST Live Time Readout */}
          <div className="hidden sm:flex flex-col items-end px-3 py-1 bg-zinc-900/60 rounded border border-zinc-800 text-[11px] font-mono text-zinc-300">
            <span className="text-[9px] text-zinc-500 tracking-wider">DELHI / IST</span>
            <span className="text-[#ccff00] font-semibold">{delhiTime || '14:30:00'}</span>
          </div>

          {/* Wireframe Grid Mode Toggle */}
          <button
            id="nav-wireframe-toggle"
            onClick={() => {
              onToggleWireframe();
              sound.playClick(650);
            }}
            title="Toggle Grid / Wireframe overlay"
            className={`p-2 rounded border transition-all ${
              wireframeMode
                ? 'bg-[#ccff00]/15 border-[#ccff00] text-[#ccff00]'
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
            data-cursor="GRID"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>

          {/* Audio Synthesizer FX Toggle */}
          <button
            id="nav-sound-toggle"
            onClick={handleSoundToggle}
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            className={`p-2 rounded border transition-all ${
              !isMuted
                ? 'bg-zinc-900/80 border-zinc-800 text-[#ccff00]'
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-500'
            }`}
            data-cursor="SOUND"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Ambient Drone Oscillator Toggle */}
          <button
            id="nav-ambient-toggle"
            onClick={handleAmbientToggle}
            title={isAmbientOn ? 'Stop Ambient Drone' : 'Start Ambient Synth Drone'}
            className={`hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded border text-[11px] font-mono transition-all ${
              isAmbientOn
                ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]'
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
            data-cursor="SYNTH"
          >
            <Radio className={`w-3 h-3 ${isAmbientOn ? 'animate-pulse' : ''}`} />
            <span>{isAmbientOn ? 'DRONE ON' : 'DRONE'}</span>
          </button>

          {/* Retro Terminal Drawer Launcher */}
          <button
            id="nav-terminal-toggle"
            onClick={() => {
              onToggleTerminal();
              sound.playClick(900);
            }}
            title="Open Interactive Developer Terminal"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded border text-[11px] font-mono font-medium transition-all ${
              isTerminalOpen
                ? 'bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
            }`}
            data-cursor="CLI"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CLI [~]</span>
          </button>

          {/* GitHub Profile Button */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick(850)}
            className="p-2 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="View viplovk on GitHub"
            data-cursor="GITHUB"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              sound.playClick(700);
            }}
            className="lg:hidden p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 border-b border-zinc-800 px-6 py-6 mt-3 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono">
            <span className="text-zinc-400">STATUS</span>
            <span className="text-[#ccff00] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              OPEN FOR INTERNSHIPS &amp; COLLABS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  sound.playClick(750);
                }}
                className="p-3 bg-zinc-900/70 border border-zinc-800/80 rounded hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-colors"
              >
                <div className="text-zinc-500 text-[10px]">{link.index}</div>
                <div className="font-semibold">{link.label}</div>
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>DELHI TIME: {delhiTime}</span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccff00] hover:underline flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> github.com/viplovk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
