# SONIQ — Premium Scroll-Driven Headset Experience

A cinematic, interactive, scroll-driven product showcase website for the **SONIQ Wireless Headset**, built with React, Vite, Tailwind CSS, GSAP ScrollTrigger, and Framer Motion.

## 🎧 Overview

The core experience transforms **300 sequential master image frames** into an interactive 3D motion graphics sequence driven directly by the user's scroll position.

### Live Architecture & Storytelling Flow

1. **Section 01 – Hero & Product Introduction**
   - Cinematic dark aesthetic (`#08090D`) with ambient radial glow.
   - Brand identity: **SONIQ — Sound. Without Limits.**
   - Smooth entrance animations and smooth-scrolling call-to-actions.

2. **Section 02 – Interactive 300-Frame Scroll Experience**
   - Pinned HTML Canvas sequence occupying 78% of the viewport.
   - High-DPI (`devicePixelRatio`) rendering with aspect-ratio preservation (`1920x1080` contain-fit) to eliminate stretching or blank frames.
   - Smooth GSAP ScrollTrigger scrub (0 to 1 mapping across frames 1 to 300).
   - Frame-synced narrative chapters with zero overlap:
     - **Frames 001–060:** *Designed to Stand Apart* — Refined silhouette meets precision craftsmanship.
     - **Frames 061–120:** *Comfort in Every Detail* — Soft, ergonomic ear cushions for extended listening.
     - **Frames 121–180:** *The Perfect Fit* — Adjustable headband adapting naturally to the cranial contour.
     - **Frames 181–240:** *Every Detail Matters* — Machined physical controls, USB-C, 3.5mm jack, and acoustic mic grille.
     - **Frames 241–300:** *Experience Pure Design* — Symmetrical grand finale hero form.
   - Real-time frame HUD counter (`FRAME XXX / 300`), interactive chapter navigation dots, and click-to-scrub timeline bar.

3. **Section 03 – Product Fittings and Anatomy**
   - 6-card precision grid with high-resolution frame assets:
     - Memory Foam Ear Cushions (`frame_120.jpg`)
     - Adjustable Headband (`frame_180.jpg`)
     - Ergonomic Ear Cup Design (`frame_060.jpg`)
     - Physical Control Buttons (`frame_240.jpg`)
     - Charging & Connectivity Ports (`frame_240.jpg`)
     - Built-in Microphone (`frame_245.jpg`)

4. **Section 04 – Design Philosophy**
   - Headline: *"Every Curve Has a Purpose."*
   - Three engineering pillars: Acoustic Architecture, Weightless Equilibrium, and Intuitive Spatiality.

5. **Section 05 – Final Product Showcase & Footer**
   - Symmetrical front-facing hero presentation (`frame_300.jpg`).
   - Headline: *"Your World. Your Sound."*
   - Minimalist editorial footer with quick links and smooth scroll to top.

---

## ⚡ Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 + Custom glassmorphic utilities
- **Scroll Engine:** GSAP 3 + GSAP ScrollTrigger
- **Interface Transitions:** Framer Motion
- **Icons:** Lucide React

---

## 🚀 Running the Project

```bash
# Start development server
pnpm run dev
# Or with npm:
npm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

The development server runs by default on `http://localhost:5173/`.
