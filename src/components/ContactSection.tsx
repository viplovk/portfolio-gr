import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Send, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', topic: 'Software & Web Development' });

  const contactEmail = PERSONAL_INFO.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setEmailCopied(true);
    sound.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ccff00', '#00f0ff', '#ffffff', '#ffd700']
      });
    } catch {
      // Ignore
    }
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    sound.playSuccess();
    try {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#ffffff', '#00f0ff']
      });
    } catch {
      // Ignore
    }
  };

  const socials = [
    { label: 'GITHUB', href: PERSONAL_INFO.githubUrl, icon: <Github className="w-4 h-4" /> },
    { label: 'LINKEDIN', href: PERSONAL_INFO.linkedinUrl, icon: <Linkedin className="w-4 h-4" /> },
    { label: 'TWITTER / X', href: PERSONAL_INFO.twitterUrl, icon: <Twitter className="w-4 h-4" /> },
    { label: 'INSTAGRAM', href: PERSONAL_INFO.instagramUrl, icon: <Instagram className="w-4 h-4" /> }
  ];

  return (
    <section id="contact" className="py-24 border-t border-zinc-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase tracking-wider mb-2">
              <span>[06] GET IN TOUCH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
              <span className="text-zinc-500">OPPORTUNITIES &amp; COLLABORATIONS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              LET'S CONNECT &amp; BUILD
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ccff00]" />
            </span>
            <span className="text-zinc-300">OPEN FOR INTERNSHIPS, PROJECTS &amp; TECH COLLABS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Big Email CTA & Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed">
                Looking for a passionate Computer Science student and creative developer based in Delhi / Greater Noida? Let's talk code, projects, or internships.
              </p>

              {/* Giant Email Copy Button */}
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-700/80 shadow-2xl space-y-4 group">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  <span>DIRECT ELECTRONIC MAIL</span>
                  <span className="text-[#ccff00] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> DELHI / GREATER NOIDA
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight group-hover:text-[#ccff00] transition-colors">
                    {contactEmail}
                  </span>

                  <button
                    onClick={handleCopyEmail}
                    className={`px-5 py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 flex-shrink-0 ${
                      emailCopied
                        ? 'bg-[#ccff00] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                    }`}
                    data-cursor="COPY"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>EMAIL COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Network Directory */}
            <div className="space-y-3 font-mono text-xs">
              <div className="text-zinc-500 uppercase tracking-wider">VERIFIED SOCIAL PROFILES</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick(800)}
                    className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 hover:text-[#ccff00] text-zinc-300 transition-colors flex items-center justify-between group"
                    data-cursor="LINK"
                  >
                    <div className="flex items-center gap-2">
                      {social.icon}
                      <span className="text-[11px] font-medium">{social.label}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#ccff00] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Project Inquiry Form */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
            <h3 className="font-display font-bold text-xl text-white mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#ccff00]" />
              SEND DIRECT MESSAGE
            </h3>
            <p className="font-mono text-xs text-zinc-400 mb-6">
              Reach out directly to Viplov. I'll get back to you promptly.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-lg bg-[#ccff00]/10 border border-[#ccff00] text-center space-y-3 font-mono"
              >
                <Sparkles className="w-8 h-8 text-[#ccff00] mx-auto animate-bounce" />
                <h4 className="text-white font-bold text-base">MESSAGE RECEIVED!</h4>
                <p className="text-xs text-zinc-300 font-light">
                  Thank you for reaching out, {formData.name || 'Friend'}. I will reply to {formData.email} soon.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#ccff00] underline mt-2 hover:text-white"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="text-zinc-400 block mb-1 uppercase text-[11px]">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1 uppercase text-[11px]">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00]"
                  />
                </div>

                <div>
                  <label className="text-zinc-400 block mb-1 uppercase text-[11px]">MESSAGE OR PROJECT DETAILS</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share your opportunity, query, or project idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#ccff00] text-black font-bold uppercase tracking-wider hover:bg-[#b8e600] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                  data-cursor="SEND"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND TRANSMISSION</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
