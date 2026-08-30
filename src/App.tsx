import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { CreativeLab } from './components/CreativeLab';
import { OpenSourceSection } from './components/OpenSourceSection';
import { ContactSection } from './components/ContactSection';
import { TerminalDrawer } from './components/TerminalDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [wireframeMode, setWireframeMode] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [accentColor, setAccentColor] = useState('#ccff00');

  // Global hotkey listeners: ~ or ` to toggle developer terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#f4f4f5] bg-noise selection:bg-[#ccff00] selection:text-black">
      {/* Background Interactive Kinetic Canvas */}
      <BackgroundCanvas
        wireframeMode={wireframeMode}
        accentColor={accentColor}
      />

      {/* Magnetic Trailing Custom Cursor */}
      <CustomCursor />

      {/* Top Fixed Header */}
      <Navbar
        onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)}
        wireframeMode={wireframeMode}
        onToggleWireframe={() => setWireframeMode((prev) => !prev)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onExploreWork={() => {
            const el = document.getElementById('work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <SelectedWork />

        <AboutSection />

        <AwardsSection />

        <CreativeLab onColorChange={(color) => setAccentColor(color)} />

        <OpenSourceSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Developer Retro CLI Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleMatrix={() => setWireframeMode((prev) => !prev)}
      />
    </div>
  );
}
