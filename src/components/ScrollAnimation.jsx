import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TOTAL_FRAMES } from '../utils/frameLoader';

gsap.registerPlugin(ScrollTrigger);

const STORY_CHAPTERS = [
  {
    start: 1,
    end: 60,
    headline: 'Designed to Stand Apart',
    description: 'A refined silhouette meets precision craftsmanship.',
    badge: 'Overview',
    highlight: 'Acoustic Ergonomics',
  },
  {
    start: 61,
    end: 120,
    headline: 'Comfort in Every Detail',
    description: 'Soft, ergonomic ear cushions engineered for extended listening.',
    badge: 'Acoustic Architecture',
    highlight: 'Memory Foam Cushions',
  },
  {
    start: 121,
    end: 180,
    headline: 'The Perfect Fit',
    description: 'An adjustable headband designed to adapt naturally.',
    badge: 'Kinetic Engineering',
    highlight: 'Micro-Step Slider',
  },
  {
    start: 181,
    end: 240,
    headline: 'Every Detail Matters',
    description: 'Precision controls and carefully engineered components.',
    badge: 'Tactile Precision',
    highlight: 'Machined Controls',
  },
  {
    start: 241,
    end: 300,
    headline: 'Experience Pure Design',
    description: 'A complete expression of modern audio engineering.',
    badge: 'Masterwork',
    highlight: 'Symmetrical Hero Form',
  },
];

export default function ScrollAnimation({ imagesRef, isCriticalReady, isLoaded }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(1);

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [currentFrameNum, setCurrentFrameNum] = useState(1);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Click on the progress bar to scrub to a percentage
  const handleScrubClick = (e) => {
    const trigger = ScrollTrigger.getById('main-sequence-trigger');
    if (!trigger) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const scrollPos = trigger.start + ratio * (trigger.end - trigger.start);
    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
  };

  // Render a specific frame onto the canvas with pixel ratio & aspect-fit
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    // Use current frame or fallback to closest available loaded frame
    let img = images[frameIndex - 1];
    if (!img || !img.complete) {
      // Find closest loaded frame
      for (let offset = 1; offset < 30; offset++) {
        const prev = images[frameIndex - 1 - offset];
        if (prev && prev.complete) {
          img = prev;
          break;
        }
        const next = images[frameIndex - 1 + offset];
        if (next && next.complete) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgW = img.naturalWidth || 1920;
    const imgH = img.naturalHeight || 1080;
    const imgRatio = imgW / imgH;
    const canvasRatio = cw / ch;

    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider: fit to height
      drawH = ch;
      drawW = ch * imgRatio;
      drawX = (cw - drawW) / 2;
      drawY = 0;
    } else {
      // Canvas is taller: fit to width
      drawW = cw;
      drawH = cw / imgRatio;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    }

    ctx.drawImage(
      img,
      drawX * dpr,
      drawY * dpr,
      drawW * dpr,
      drawH * dpr
    );
  }, [imagesRef]);

  // Scroll smoothly to a specific chapter
  const scrollToChapter = (idx) => {
    const trigger = ScrollTrigger.getById('main-sequence-trigger');
    if (trigger) {
      const chapter = STORY_CHAPTERS[idx];
      const targetProgress = (chapter.start + 15) / TOTAL_FRAMES;
      const scrollPos = trigger.start + targetProgress * (trigger.end - trigger.start);
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    }
  };
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for smooth 60fps
    const rect = container.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Window resize listener
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Initial draw once critical frames are ready
  useEffect(() => {
    if (isCriticalReady || isLoaded) {
      resizeCanvas();
      renderFrame(1);
    }
  }, [isCriticalReady, isLoaded, resizeCanvas, renderFrame]);

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationFrameId = null;

    const trigger = ScrollTrigger.create({
      id: 'main-sequence-trigger',
      trigger: section,
      start: 'top top',
      end: '+=3800',
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        setScrollPercentage(Math.round(progress * 100));

        const targetFrame = Math.min(
          TOTAL_FRAMES,
          Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
        );

        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          setCurrentFrameNum(targetFrame);

          // Determine active chapter
          const chapterIdx = STORY_CHAPTERS.findIndex(
            (c) => targetFrame >= c.start && targetFrame <= c.end
          );
          if (chapterIdx !== -1) {
            setActiveChapterIndex(chapterIdx);
          }

          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
          animationFrameId = requestAnimationFrame(() => {
            renderFrame(targetFrame);
          });
        }
      },
    });

    // Refresh ScrollTrigger after DOM settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      renderFrame(currentFrameRef.current);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      trigger.kill();
    };
  }, [renderFrame]);

  return (
    <section
      id="interactive-experience"
      ref={sectionRef}
      className="relative w-full h-screen bg-slate-50/60 overflow-hidden select-none flex flex-col justify-between"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Experience Header Bar */}
      <div className="relative z-20 w-full px-6 sm:px-12 pt-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-slate-500 font-semibold">
            Interactive 360° Sequence
          </span>
        </div>

        {/* Chapter Indicator Dots with Click-to-Jump */}
        <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
          {STORY_CHAPTERS.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => scrollToChapter(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer relative group ${
                idx === activeChapterIndex
                  ? 'w-10 bg-slate-900 shadow-[0_0_12px_rgba(15,23,42,0.3)]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-500'
              }`}
              title={`Jump to ${chap.badge}: ${chap.headline}`}
            >
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
                {chap.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Frame Counter HUD */}
        <div className="text-[11px] font-mono tracking-wider text-slate-500 bg-white/90 border border-slate-200/90 px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
          FRAME <span className="text-slate-950 font-bold">{String(currentFrameNum).padStart(3, '0')}</span> / {TOTAL_FRAMES}
        </div>
      </div>

      {/* Main Canvas Container (75% - 85% Viewport) */}
      <div
        ref={containerRef}
        className="relative z-10 w-full flex-1 max-w-6xl mx-auto px-4 flex items-center justify-center my-auto min-h-0"
        style={{ height: '78vh' }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain filter contrast-[1.02] drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        />

        {/* Dynamic Storytelling Text Overlays */}
        <div className="absolute inset-x-6 sm:inset-x-12 bottom-6 sm:bottom-10 pointer-events-none flex flex-col items-center justify-end text-center">
          {STORY_CHAPTERS.map((chapter, idx) => {
            const isActive = idx === activeChapterIndex;
            return (
              <div
                key={idx}
                className={`transition-all duration-700 ease-out flex flex-col items-center max-w-xl mx-auto ${
                  isActive
                    ? 'opacity-100 translate-y-0 relative pointer-events-auto'
                    : 'opacity-0 translate-y-4 absolute pointer-events-none'
                }`}
              >
                {/* Chapter Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-slate-200/90 text-[11px] font-mono tracking-[0.2em] text-slate-700 uppercase mb-3 backdrop-blur-md shadow-md">
                  <span className="font-semibold">{chapter.badge}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-900 font-medium">{chapter.highlight}</span>
                </div>

                {/* Chapter Headline */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-2 leading-tight">
                  {chapter.headline}
                </h2>

                {/* Chapter Description */}
                <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
                  {chapter.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Timeline & Scroll Progress Scrub */}
      <div className="relative z-20 w-full px-6 sm:px-12 pb-6 flex flex-col items-center">
        <div
          onClick={handleScrubClick}
          className="w-full max-w-md bg-slate-200 h-2 rounded-full overflow-hidden relative mb-2 cursor-pointer group pointer-events-auto border border-slate-300/40"
          title="Click to jump to scroll position"
        >
          <div
            className="h-full bg-gradient-to-r from-slate-600 via-slate-900 to-slate-700 transition-all duration-75 ease-out group-hover:brightness-125"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
        <div className="w-full max-w-md flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>01 INTRO</span>
          <span className="text-slate-900 font-semibold">CLICK OR SCROLL TO ROTATE</span>
          <span>05 FINALE</span>
        </div>
      </div>
    </section>
  );
}
