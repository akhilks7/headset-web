import { useState, useEffect, useRef } from 'react';
import { preloadFrames, TOTAL_FRAMES } from '../utils/frameLoader';

export function useImageSequence() {
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCriticalReady, setIsCriticalReady] = useState(false);
  const imagesRef = useRef([]);

  useEffect(() => {
    let isMounted = true;

    preloadFrames({
      totalFrames: TOTAL_FRAMES,
      onProgress: (count, total, percent) => {
        if (!isMounted) return;
        setLoadedCount(count);
        setProgress(percent);
      },
      onCriticalReady: (images) => {
        if (!isMounted) return;
        imagesRef.current = images;
        setIsCriticalReady(true);
      },
    }).then((allImages) => {
      if (!isMounted) return;
      imagesRef.current = allImages;
      setIsLoaded(true);
      setProgress(100);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    progress,
    loadedCount,
    totalFrames: TOTAL_FRAMES,
    isLoaded,
    isCriticalReady,
    imagesRef,
  };
}
