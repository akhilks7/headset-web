import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, ArrowRight, ArrowUp } from 'lucide-react';

export default function FinalSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToInteractive = () => {
    const el = document.getElementById('interactive-experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="final-showcase"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 pt-24 pb-8 bg-[#08090D] overflow-hidden"
    >
      {/* Cinematic Spotlight Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-[#B8C5D9]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Presentation Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.25em] uppercase text-[#B8C5D9] mb-4 block"
        >
          Section 05 // The Climax
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Your World. Your Sound.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-[#A5A7B0] max-w-xl font-normal leading-relaxed mb-8"
        >
          Discover a new perspective on personal audio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={scrollToInteractive}
            className="flex items-center gap-3 px-9 py-4 rounded-full text-sm font-semibold tracking-wide bg-white text-[#08090D] hover:bg-[#B8C5D9] transition-all duration-300 shadow-2xl shadow-white/10 hover:shadow-[#B8C5D9]/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Symmetrical Hero Showcase - Frame 300 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl my-10 flex justify-center items-center pointer-events-none select-none"
      >
        <div className="relative w-full flex justify-center">
          <img
            src="/assets/frames/frame_300.jpg"
            alt="SONIQ Headset Symmetrical Hero Finale"
            className="w-full max-w-[520px] sm:max-w-[620px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-x-8 bottom-4 h-24 bg-[#B8C5D9]/15 rounded-full blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Minimalist Premium Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A5A7B0]">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Headphones className="w-4 h-4 text-[#B8C5D9]" />
          </div>
          <span className="font-bold tracking-[0.2em] text-white text-sm">
            SONIQ
          </span>
          <span className="text-white/20">|</span>
          <span>© 2026 SONIQ Audio Technologies Inc. All rights reserved.</span>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-white transition-colors">Overview</a>
          <a href="#interactive-experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#fittings-and-details" className="hover:text-white transition-colors">Anatomy</a>
          <a href="#design-philosophy" className="hover:text-white transition-colors">Philosophy</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#B8C5D9]" />
        </button>
      </footer>
    </section>
  );
}
