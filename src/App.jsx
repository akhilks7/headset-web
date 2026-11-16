import React from 'react';
import { useImageSequence } from './hooks/useImageSequence';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollAnimation from './components/ScrollAnimation';
import ProductDetails from './components/ProductDetails';
import DesignSection from './components/DesignSection';
import FinalSection from './components/FinalSection';

export default function App() {
  const { progress, isLoaded, isCriticalReady, imagesRef } = useImageSequence();

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Preload Overlay Loading Screen */}
      <LoadingScreen
        progress={progress}
        isReady={isCriticalReady || isLoaded}
      />

      {/* Persistent Glass Navigation */}
      <Navbar />

      {/* Main Experience Layout */}
      <main className="relative w-full">
        {/* SECTION 01: Hero / Product introduction */}
        <HeroSection />

        {/* SECTION 02: Interactive 300-Frame Scroll Experience */}
        <ScrollAnimation
          imagesRef={imagesRef}
          isCriticalReady={isCriticalReady}
          isLoaded={isLoaded}
        />

        {/* SECTION 03: Product fittings and details */}
        <ProductDetails />

        {/* SECTION 04: Design philosophy */}
        <DesignSection />

        {/* SECTION 05: Final product showcase & minimal footer */}
        <FinalSection />
      </main>
    </div>
  );
}
