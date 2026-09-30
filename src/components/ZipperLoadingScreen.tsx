import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { soundFx } from '../utils/audioFx';
import { Sparkles, Award } from 'lucide-react';

interface ZipperLoadingScreenProps {
  onComplete?: () => void;
  minDurationMs?: number; // default at least 2000ms
}

export const ZipperLoadingScreen: React.FC<ZipperLoadingScreenProps> = ({
  onComplete,
  minDurationMs = 2100,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
  const [isUnzipping, setIsUnzipping] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const loadingStages = [
    'Initializing Unity Engine & C# Architecture...',
    'Loading Shaders, 3D Assets & Physics...',
    'Calibrating Photon Fusion Netcode...',
    'Mounting Interactive Stage Experiences...',
    'Unzipping Developer Portfolio...',
  ];

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 25; // 40 updates per second

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / minDurationMs) * 100));
      setProgress(currentProgress);

      const stageIndex = Math.min(
        loadingStages.length - 1,
        Math.floor((currentProgress / 100) * loadingStages.length)
      );
      setLoadingTextIndex(stageIndex);

      if (elapsed >= minDurationMs) {
        clearInterval(timer);
        setProgress(100);
        // Play level up chime and trigger dynamic cloth unzip
        soundFx.playLevelUp();
        setIsUnzipping(true);

        // Allow cloth opening animation to finish before unmounting
        setTimeout(() => {
          setIsFinished(true);
          onComplete?.();
        }, 1100);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDurationMs, onComplete]);

  // Generate alternating zipper teeth
  const numberOfTeeth = 36;
  const teethArray = Array.from({ length: numberOfTeeth }, (_, i) => i);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[999999] overflow-hidden select-none pointer-events-auto"
        style={{ perspective: '1500px' }}
      >
        {/* =========================================================
            LEFT CLOTH PANEL (Tilted outward like an unzipping jacket)
            ========================================================= */}
        <motion.div
          initial={{ x: 0, rotateZ: 0, rotateY: 0, skewY: 0 }}
          animate={
            isUnzipping
              ? {
                  x: '-88%',
                  rotateZ: -26,
                  rotateY: 34,
                  skewY: -6,
                  transition: { duration: 1.05, ease: [0.77, 0, 0.175, 1] },
                }
              : { x: 0, rotateZ: 0, rotateY: 0, skewY: 0 }
          }
          style={{ transformOrigin: 'bottom left' }}
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#dbeafe] border-r-2 border-dashed border-amber-400/80 flex items-center justify-end overflow-hidden shadow-2xl z-20"
        >
          {/* Soft Fabric Dot Pattern */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:18px_18px]" />

          {/* Left Decorative Tailored Seams */}
          <div className="absolute top-0 bottom-0 right-7 w-[1px] bg-sky-200" />
          <div className="absolute top-0 bottom-0 right-9 w-[1px] border-r border-dashed border-amber-300/60" />

          {/* TOP-LEFT CORNER: Developer Identity */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 sm:gap-3 z-10 pr-2 sm:pr-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white border-2 border-sky-300 shadow-md flex items-center justify-center text-blue-600 font-game font-bold text-xs sm:text-base shrink-0">
              DB
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-game font-bold text-slate-800 tracking-wide truncate">
                DEVESH BENIWAL
              </div>
              <div className="text-[9px] sm:text-[10px] text-blue-700 font-game tracking-wider uppercase truncate">
                Senior Unity Dev
              </div>
            </div>
          </div>

          {/* BOTTOM-LEFT CORNER: Initializing Status & Current Stage Text */}
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 max-w-[calc(100%-2rem)] sm:max-w-xs space-y-1 sm:space-y-1.5 z-10 pr-2 sm:pr-4">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-game font-bold text-slate-800">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 animate-spin shrink-0" style={{ animationDuration: '3s' }} />
              <span className="tracking-wide text-amber-900 truncate">INITIALIZING...</span>
            </div>
            <div className="text-[9px] sm:text-[11px] font-mono-code text-slate-600 truncate bg-white/90 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg border border-sky-200/80 shadow-2xs backdrop-blur-xs max-w-full">
              {loadingStages[loadingTextIndex]}
            </div>
          </div>

          {/* Left Zipper Teeth (Polished Gold/Brass) */}
          <div className="relative h-full flex flex-col justify-around py-2 pr-0.5 z-10">
            {teethArray.map((i) => (
              <div
                key={`left-tooth-${i}`}
                className="w-3.5 sm:w-4.5 h-2 rounded-l-md bg-gradient-to-r from-amber-400 via-amber-200 to-amber-300 shadow-sm border-t border-b border-l border-amber-500 my-1"
              />
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            RIGHT CLOTH PANEL (Tilted outward like an unzipping jacket)
            ========================================================= */}
        <motion.div
          initial={{ x: 0, rotateZ: 0, rotateY: 0, skewY: 0 }}
          animate={
            isUnzipping
              ? {
                  x: '88%',
                  rotateZ: 26,
                  rotateY: -34,
                  skewY: 6,
                  transition: { duration: 1.05, ease: [0.77, 0, 0.175, 1] },
                }
              : { x: 0, rotateZ: 0, rotateY: 0, skewY: 0 }
          }
          style={{ transformOrigin: 'bottom right' }}
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-[#ffffff] via-[#fefce8] to-[#f0fdf4] border-l-2 border-dashed border-amber-400/80 flex items-center justify-start overflow-hidden shadow-2xl z-20"
        >
          {/* Soft Fabric Dot Pattern */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:18px_18px]" />

          {/* Right Decorative Tailored Seams */}
          <div className="absolute top-0 bottom-0 left-7 w-[1px] bg-amber-200" />
          <div className="absolute top-0 bottom-0 left-9 w-[1px] border-l border-dashed border-amber-300/60" />

          {/* TOP-RIGHT CORNER: Verified Accreditation Badge */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 border border-amber-300 text-[9px] sm:text-[11px] font-game text-amber-900 font-bold uppercase tracking-wider shadow-sm z-10 pl-2 sm:pl-4">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
            <span className="hidden xs:inline">Unity Certified: Pro</span>
            <span className="xs:hidden">Certified Pro</span>
          </div>

          {/* BOTTOM-RIGHT CORNER: Corner Progress Bar & Percentage */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col items-end max-w-[calc(100%-2rem)] sm:max-w-xs space-y-1 sm:space-y-1.5 z-10 pl-2 sm:pl-4">
            <div className="flex items-center justify-between w-28 xs:w-36 sm:w-56 text-[10px] sm:text-xs font-game font-bold text-slate-800">
              <span className="text-amber-800 text-[9px] sm:text-[11px] uppercase tracking-wider">LOADING</span>
              <span className="font-mono-code text-blue-700 text-xs sm:text-sm font-black">{progress}%</span>
            </div>

            {/* Corner Progress Track */}
            <div className="w-28 xs:w-36 sm:w-56 h-2 sm:h-2.5 rounded-full bg-white border border-amber-300 shadow-inner overflow-hidden p-0.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400 shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="text-[8px] sm:text-[10px] font-mono-code text-slate-500 uppercase tracking-wider text-right">
              UNITY 6
            </div>
          </div>

          {/* Right Zipper Teeth (Offset slightly for interlocking zipper appearance) */}
          <div className="relative h-full flex flex-col justify-around py-2 pl-0.5 mt-2.5 z-10">
            {teethArray.map((i) => (
              <div
                key={`right-tooth-${i}`}
                className="w-3.5 sm:w-4.5 h-2 rounded-r-md bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 shadow-sm border-t border-b border-r border-amber-500 my-1"
              />
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            CENTER METALLIC ZIPPER SLIDER & PULL TAB
            (Accelerates smoothly from top to bottom)
            ========================================================= */}
        <motion.div
          initial={{ y: 0 }}
          animate={isUnzipping ? { y: '115vh' } : { y: 0 }}
          transition={{ duration: 0.95, ease: [0.85, 0, 0.15, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center"
        >
          {/* Metallic Gold Zipper Body Slider */}
          <div className="relative w-10 sm:w-12 h-14 sm:h-16 rounded-xl bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 border-2 border-amber-300 shadow-2xl shadow-amber-500/50 flex flex-col items-center justify-center">
            {/* Center metallic channel */}
            <div className="w-2.5 h-7 rounded bg-amber-800/40 border border-amber-200/60 shadow-inner" />

            {/* Sparkle indicator */}
            <Sparkles className="w-3 h-3 text-white absolute top-1.5 animate-pulse" />
          </div>

          {/* Hanging Zipper Pull Tab */}
          <motion.div
            animate={isUnzipping ? { rotate: [0, -18, 18, -12, 0] } : {}}
            transition={{ duration: 0.9 }}
            className="w-6 sm:w-7 h-12 sm:h-14 -mt-1 rounded-b-xl bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 border-2 border-amber-300 shadow-xl flex flex-col items-center justify-end pb-2"
          >
            <div className="w-3 h-5 rounded-full bg-amber-950/30 border border-amber-200 shadow-inner" />
          </motion.div>
        </motion.div>

        {/* Soft Golden/Sky Sunlight Beam when unzipping */}
        {isUnzipping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.4, 2] }}
            transition={{ duration: 1.0 }}
            className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/50 via-sky-200/30 to-transparent pointer-events-none"
          />
        )}
      </div>
    </AnimatePresence>
  );
};
