import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Sliders,
  Disc,
  Radio,
  Zap,
  Mic,
  ArrowUpRight,
} from 'lucide-react';

const FITTINGS_DATA = [
  {
    id: 'ear-cushions',
    number: '01',
    category: 'Materials & Comfort',
    title: 'Memory Foam Ear Cushions',
    description:
      'Contoured, high-density memory foam wrapped in supple leatherette for fatigue-free listening sessions.',
    image: '/assets/frames/frame_120.jpg',
    icon: Layers,
    badge: 'Plush Seal',
  },
  {
    id: 'headband',
    number: '02',
    category: 'Kinematic Fit',
    title: 'Adjustable Headband',
    description:
      'Precision brushed aluminum slider mechanism with calibrated notched adjustments and breathable mesh padding.',
    image: '/assets/frames/frame_180.jpg',
    icon: Sliders,
    badge: 'Adaptive Tension',
  },
  {
    id: 'earcup-design',
    number: '03',
    category: 'Acoustic Architecture',
    title: 'Ergonomic Ear Cup Design',
    description:
      'Multi-axis pivot structure that naturally matches the cranial contour to ensure optimal acoustic isolation.',
    image: '/assets/frames/frame_060.jpg',
    icon: Disc,
    badge: 'Dual-Axis Pivot',
  },
  {
    id: 'controls',
    number: '04',
    category: 'Tactile Interface',
    title: 'Physical Control Buttons',
    description:
      'Tactile toggle switch and responsive buttons for intuitive volume, playback, and power control without looking.',
    image: '/assets/frames/frame_240.jpg',
    icon: Radio,
    badge: 'Instant Feedback',
  },
  {
    id: 'connectivity',
    number: '05',
    category: 'Power & Audio',
    title: 'Charging & Connectivity Ports',
    description:
      'Dedicated high-speed USB-C charging interface coupled with an auxiliary 3.5mm analog audio input.',
    image: '/assets/frames/frame_240.jpg',
    icon: Zap,
    badge: 'USB-C & 3.5mm',
  },
  {
    id: 'microphone',
    number: '06',
    category: 'Voice Capture',
    title: 'Built-in Microphone',
    description:
      'Acoustically tuned micro-perforated microphone ports engineered to capture clear voice communication.',
    image: '/assets/frames/frame_245.jpg',
    icon: Mic,
    badge: 'Clear Voice',
  },
];

export default function ProductDetails() {
  return (
    <section
      id="fittings-and-details"
      className="relative w-full py-28 px-6 sm:px-12 bg-[#08090D] overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#B8C5D9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#B8C5D9] block mb-3">
              Section 03 // Precision Anatomy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafted Components. <br />
              Zero Compromise.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A5A7B0] max-w-md font-normal leading-relaxed">
            Every material, joint, and surface is meticulously selected and refined to deliver seamless tactile and auditory luxury.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FITTINGS_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl bg-[#111319]/80 border border-white/10 hover:border-[#B8C5D9]/40 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Image Container with subtle zoom on hover */}
                <div className="relative w-full h-56 sm:h-64 bg-[#08090D] overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-transparent to-transparent opacity-60" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#B8C5D9]">
                    <Icon className="w-3.5 h-3.5 text-[#B8C5D9]" />
                    <span>{item.badge}</span>
                  </div>

                  <span className="absolute top-4 right-4 z-10 font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-[#A5A7B0] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#B8C5D9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A5A7B0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-medium text-[#A5A7B0] group-hover:text-white transition-colors">
                    <span>Inspect specification</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8C5D9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
