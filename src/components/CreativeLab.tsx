import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sliders, Cpu, Activity, Play, RefreshCw, Layers, ShieldCheck, Zap } from 'lucide-react';
import { STACK_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface CreativeLabProps {
  onColorChange?: (color: string) => void;
}

export const CreativeLab: React.FC<CreativeLabProps> = ({ onColorChange }) => {
  const [waveSpeed, setWaveSpeed] = useState(2);
  const [particleDensity, setParticleDensity] = useState(30);
  const [activePalette, setActivePalette] = useState('#ccff00');
  const [interactiveMode, setInteractiveMode] = useState<'wave' | 'particles' | 'matrix'>('wave');
  const [fps, setFps] = useState(60);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const palettes = [
    { name: 'ACID LIME', color: '#ccff00' },
    { name: 'CYBER CYAN', color: '#00f0ff' },
    { name: 'NEON AMBER', color: '#ffaa00' },
    { name: 'MAGENTA GLOW', color: '#ff0055' },
    { name: 'PURE WHITE', color: '#ffffff' }
  ];

  // Interactive sandbox canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let lastFrameTime = performance.now();
    let frameCount = 0;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    const height = (canvas.height = 240);

    // Particle nodes for lab
    const particles = Array.from({ length: particleDensity }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (waveSpeed * 0.8),
      vy: (Math.random() - 0.5) * (waveSpeed * 0.8),
      size: Math.random() * 3 + 1
    }));

    const render = (now: number) => {
      time += 0.02 * waveSpeed;
      frameCount++;
      if (now - lastFrameTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFrameTime = now;
      }

      ctx.fillStyle = 'rgba(10, 10, 14, 0.25)';
      ctx.fillRect(0, 0, width, height);

      if (interactiveMode === 'wave') {
        // Kinetic Sine Waves
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.strokeStyle = activePalette;
          ctx.globalAlpha = 0.25 + i * 0.2;
          ctx.lineWidth = 1.5;

          for (let x = 0; x < width; x += 4) {
            const y =
              height / 2 +
              Math.sin(x * 0.015 + time + i * 0.8) * (25 + i * 8) +
              Math.cos(x * 0.008 - time * 0.5) * 15;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (interactiveMode === 'particles') {
        // Particle web
        ctx.fillStyle = activePalette;
        ctx.strokeStyle = activePalette;

        particles.forEach((p, idx) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.globalAlpha = 0.8;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p2.x - p.x;
            const dy = p2.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 70) {
              ctx.beginPath();
              ctx.globalAlpha = (1 - dist / 70) * 0.3;
              ctx.lineWidth = 0.7;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      } else if (interactiveMode === 'matrix') {
        // ASCII / Matrix Column stream
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.fillStyle = activePalette;
        ctx.globalAlpha = 0.8;
        for (let col = 0; col < width; col += 20) {
          const char = String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96));
          const y = (Math.sin(col * 0.05 + time * 2) * height + height) % height;
          ctx.fillText(char, col, y);
        }
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [waveSpeed, particleDensity, activePalette, interactiveMode]);

  return (
    <section id="lab" className="py-24 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2">
              <span>[04] LAB &amp; TECHNICAL ARCHITECTURE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
              <span className="text-zinc-500">REAL-TIME SANDBOX</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              THE KINETIC ENGINE
            </h2>
          </div>

          <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
            Test and tweak the live procedural shaders, particle dynamics, and audio frequency
            parameters that power modern creative web flagships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Interactive Playground Controls */}
          <div className="lg:col-span-5 space-y-6 p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2 font-mono text-xs text-white font-semibold uppercase">
                  <Sliders className="w-4 h-4 text-[#ccff00]" />
                  <span>SHADER &amp; PHYSICS CONTROLS</span>
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  STATUS: <strong className="text-[#ccff00]">{fps} FPS</strong>
                </span>
              </div>

              {/* Mode Selectors */}
              <div className="space-y-2">
                <label className="font-mono text-[11px] text-zinc-400 uppercase">
                  VISUALIZER MODE
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {(['wave', 'particles', 'matrix'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setInteractiveMode(mode);
                        sound.playClick(700);
                      }}
                      className={`py-2 px-2 rounded uppercase text-center transition-all ${
                        interactiveMode === mode
                          ? 'bg-[#ccff00] text-black font-bold'
                          : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                      data-cursor="MODE"
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Neon Palette Selector */}
              <div className="space-y-2">
                <label className="font-mono text-[11px] text-zinc-400 uppercase">
                  ACTIVE NEON PALETTE
                </label>
                <div className="flex items-center gap-2">
                  {palettes.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => {
                        setActivePalette(p.color);
                        if (onColorChange) onColorChange(p.color);
                        sound.playClick(850);
                      }}
                      title={p.name}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        activePalette === p.color ? 'scale-110 border-white ring-2 ring-white/20' : 'border-zinc-700'
                      }`}
                      style={{ backgroundColor: p.color }}
                      data-cursor={p.name}
                    />
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-zinc-400 text-[11px] mb-1">
                    <span>VELOCITY / SPEED</span>
                    <span className="text-white">{waveSpeed}x</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.5"
                    value={waveSpeed}
                    onChange={(e) => setWaveSpeed(parseFloat(e.target.value))}
                    className="w-full accent-[#ccff00] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 text-[11px] mb-1">
                    <span>NODE DENSITY</span>
                    <span className="text-white">{particleDensity}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={particleDensity}
                    onChange={(e) => setParticleDensity(parseInt(e.target.value))}
                    className="w-full accent-[#ccff00] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Test Audio Trigger */}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={() => sound.playSuccess()}
                className="w-full py-2.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-mono text-xs transition-colors flex items-center justify-center gap-2"
                data-cursor="TEST SFX"
              >
                <Zap className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>TEST AUDIO SYNTHESIZER FANFARE</span>
              </button>
            </div>
          </div>

          {/* Sandbox Live Canvas & Tech Radar */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Canvas Monitor */}
            <div className="rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden relative shadow-2xl">
              <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                  <span>RENDER ENGINE: 2D/WEBGL DUAL CANVAS</span>
                </div>
                <span>MODE: {interactiveMode.toUpperCase()}</span>
              </div>
              <div className="p-2">
                <canvas ref={canvasRef} className="w-full rounded h-[220px]" />
              </div>
            </div>

            {/* Stack Category Meters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STACK_CATEGORIES.map((cat) => (
                <div
                  key={cat.category}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3 font-mono text-xs"
                >
                  <div className="text-[#ccff00] font-bold text-[11px] uppercase tracking-wider pb-1 border-b border-zinc-800">
                    {cat.category}
                  </div>
                  <div className="space-y-2">
                    {cat.skills.slice(0, 3).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-[11px] text-zinc-300">
                          <span>{skill.name}</span>
                          <span className="text-zinc-500">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                          <div
                            className="h-full bg-[#ccff00] rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
