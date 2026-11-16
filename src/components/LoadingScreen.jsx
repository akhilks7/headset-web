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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-slate-900 px-6"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-slate-200/40 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
            {/* Animated Logo / Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-sm">
                <Headphones className="w-8 h-8 text-slate-800" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-2xl bg-slate-400/20 blur-md -z-10"
              />
            </motion.div>

            {/* Brand Title */}
            <h1 className="text-3xl font-bold tracking-[0.25em] text-slate-950 mb-1">
              SONIQ
            </h1>
            <p className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-8 font-medium">
              Sound. Without Limits.
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-100 border border-slate-200/80 h-[4px] rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Progress Percentage & Info */}
            <div className="w-full flex justify-between items-center text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-700 animate-pulse" />
                <span>Loading 300 Master Frames...</span>
              </span>
              <span className="text-slate-900 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
