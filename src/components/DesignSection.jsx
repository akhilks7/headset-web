import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Feather, Waves } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Waves,
    title: 'Acoustic Architecture',
    text: 'Internal chambers contoured precisely to eliminate destructive reflections, delivering pristine soundstage depth.',
  },
  {
    icon: Feather,
    title: 'Weightless Equilibrium',
    text: 'Carefully calculated mass distribution across the crown headband eliminates focal pressure for all-day comfort.',
  },
  {
    icon: Compass,
    title: 'Intuitive Spatiality',
    text: 'Every switch and physical control is positioned within natural reach, keeping interaction effortless and instinctual.',
  },
];

export default function DesignSection() {
  return (
    <section
      id="design-philosophy"
      className="relative w-full py-32 px-6 sm:px-12 bg-gradient-to-b from-[#08090D] via-[#111319] to-[#08090D] overflow-hidden"
    >
      {/* Cinematic Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B8C5D9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-[0.2em] text-[#B8C5D9] uppercase mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8C5D9]" />
            <span>Design Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Every Curve Has a Purpose.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-[#A5A7B0] font-normal leading-relaxed"
          >
            Thoughtfully shaped. Carefully assembled. Designed to make every listening moment feel effortless.
          </motion.p>
        </div>

        {/* Large Cinematic Hero Showcase */}
        <div className="relative my-16 rounded-3xl bg-[#08090D]/60 border border-white/10 overflow-hidden p-6 sm:p-12 flex flex-col lg:flex-row items-center gap-12 backdrop-blur-xl shadow-2xl">
          {/* Large Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex justify-center relative group"
          >
            <img
              src="/assets/frames/frame_060.jpg"
              alt="SONIQ Headset Sculptural Silhouette"
              className="w-full max-w-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] filter contrast-[1.04] group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-radial-hero opacity-50 pointer-events-none" />
          </motion.div>

          {/* Editorial Narrative */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#B8C5D9] uppercase">
                The Anatomy of Stillness
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Engineered for Silence. Calibrated for Nuance.
              </h3>
              <p className="text-sm sm:text-base text-[#A5A7B0] leading-relaxed">
                By uniting acoustic enclosure engineering with minimal industrial form, SONIQ eliminates every non-essential artifact. What remains is a pure translation of sound — unfiltered, uncolored, and completely immersive.
              </p>
            </div>

            {/* Principles List */}
            <div className="grid grid-cols-1 gap-6 pt-4 border-t border-white/10">
              {PRINCIPLES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-[#B8C5D9]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A5A7B0] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
