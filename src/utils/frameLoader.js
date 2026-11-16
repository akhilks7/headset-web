/**
 * SONIQ Frame Sequence Loader Utility
 * Efficiently loads and caches 300 sequential frames for canvas playback.
 */

export const TOTAL_FRAMES = 300;

export const getFrameUrl = (index) => {
  const paddedIndex = String(index).padStart(3, '0');
  return `/assets/frames/frame_${paddedIndex}.jpg`;
};

/**
 * Preloads all 300 frames with priority batches and progress reporting.
 * - Stage 1: Load critical initial frames (1-10) to make canvas immediately operational.
 * - Stage 2: Load the remaining frames concurrently in controlled batches.
 */
export const preloadFrames = ({
  totalFrames = TOTAL_FRAMES,
  onProgress = () => {},
  onCriticalReady = () => {},
}) => {
  return new Promise((resolve) => {
    const images = new Array(totalFrames);
    let loadedCount = 0;
    let criticalReported = false;

    const checkCritical = () => {
      if (!criticalReported && loadedCount >= Math.min(10, totalFrames)) {
        criticalReported = true;
        onCriticalReady(images);
      }
    };

    const loadSingleImage = (frameNumber) => {
      return new Promise((res) => {
        const img = new Image();
        const url = getFrameUrl(frameNumber);

        img.onload = () => {
          images[frameNumber - 1] = img;
          loadedCount++;
          const percent = Math.round((loadedCount / totalFrames) * 100);
          onProgress(loadedCount, totalFrames, percent);
          checkCritical();
          res(img);
        };

        img.onerror = () => {
          console.warn(`[FrameLoader] Failed to load frame ${frameNumber} from ${url}`);
          // Fallback to empty image or previously loaded frame to prevent null pointer
          images[frameNumber - 1] = null;
          loadedCount++;
          const percent = Math.round((loadedCount / totalFrames) * 100);
          onProgress(loadedCount, totalFrames, percent);
          res(null);
        };

        img.src = url;
      });
    };

    // Load initial 10 frames first for quick first paint
    const criticalPromises = [];
    for (let i = 1; i <= Math.min(10, totalFrames); i++) {
      criticalPromises.push(loadSingleImage(i));
    }

    Promise.all(criticalPromises).then(() => {
      // Then load remaining frames in chunks to prevent network saturation
      const remainingIndices = [];
      for (let i = 11; i <= totalFrames; i++) {
        remainingIndices.push(i);
      }

      // Concurrency batch size
      const BATCH_SIZE = 12;
      let currentIdx = 0;

      const loadNextBatch = () => {
        if (currentIdx >= remainingIndices.length) {
          resolve(images);
          return;
        }

        const batch = remainingIndices.slice(currentIdx, currentIdx + BATCH_SIZE);
        currentIdx += BATCH_SIZE;

        Promise.all(batch.map((num) => loadSingleImage(num))).then(() => {
          loadNextBatch();
        });
      };

      loadNextBatch();
    });
  });
};
