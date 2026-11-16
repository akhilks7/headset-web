import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Sparkles } from 'lucide-react';

export default function LoadingScreen({ progress, isReady, onStart }) {
  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090D] text-white px-6"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#B8C5D9]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Animated Logo / Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                <Headphones className="w-8 h-8 text-[#B8C5D9]" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl bg-[#B8C5D9]/20 blur-md -z-10"
              />
            </motion.div>

            {/* Brand Title */}
            <h1 className="text-3xl font-bold tracking-[0.25em] text-white mb-1">
              SONIQ
            </h1>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A5A7B0] mb-8 font-medium">
              Sound. Without Limits.
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/10 h-[3px] rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-white/40 via-[#B8C5D9] to-white"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Progress Percentage & Info */}
            <div className="w-full flex justify-between items-center text-xs text-[#A5A7B0] font-mono">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#B8C5D9] animate-pulse" />
                <span>Loading 300 Master Frames...</span>
              </span>
              <span className="text-white font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
