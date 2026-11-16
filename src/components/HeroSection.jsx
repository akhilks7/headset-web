import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToInteractive = () => {
    const el = document.getElementById('interactive-experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDetails = () => {
    const el = document.getElementById('fittings-and-details');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 pt-28 pb-12 overflow-hidden bg-[#08090D]"
    >
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#B8C5D9]/15 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-hero pointer-events-none" />

      {/* Top Tagline & Title */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-[0.2em] text-[#B8C5D9] uppercase mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B8C5D9]" />
          <span>Flagship Acoustic Series</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]"
        >
          Sound. Without Limits.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#A5A7B0] max-w-2xl font-normal leading-relaxed mb-8"
        >
          Precision engineering. Immersive sound. Designed around you.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={scrollToInteractive}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-white text-[#08090D] hover:bg-[#B8C5D9] transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-[#B8C5D9]/25 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore the Headset</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToDetails}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 hover:border-white/20 active:scale-95 cursor-pointer"
          >
            <span>Discover the Details</span>
          </button>
        </motion.div>
      </div>

      {/* Prominent Headset Hero Center Piece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-3xl my-6 flex justify-center items-center pointer-events-none select-none"
      >
        <div className="relative group w-full flex justify-center">
          <img
            src="/assets/frames/frame_001.jpg"
            alt="SONIQ Headset Hero Presentation"
            className="w-full max-w-[580px] sm:max-w-[700px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
          />
          {/* Subtle floating glow behind center image */}
          <div className="absolute inset-x-12 bottom-6 h-28 bg-[#B8C5D9]/10 rounded-full blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer pt-4 group"
        onClick={scrollToInteractive}
      >
        <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A5A7B0] group-hover:text-white transition-colors">
          Scroll to explore 360° motion
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#B8C5D9] group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
