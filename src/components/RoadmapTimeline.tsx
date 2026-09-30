import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CAREER_ROADMAP } from '../data/portfolioData';
import { Calendar, MapPin, Star, Flag, RotateCw, CornerDownLeft, Rocket, Check } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

// Exact index-based stage metadata for all 5 career milestones (1, 2, 3, 4, 5)
// With concise, fully-visible short descriptions tailored to fit cleanly without ellipsis
const STAGE_METADATA = [
  {
    stageNumber: 1,
    bossTag: 'CURRENT MISSION',
    icon: '🏆',
    shortDescription:
      'Multiplayer netcode (Photon Fusion v2), vehicle physics with +30% boost, and real-time WebRTC calling.',
    quickMetric: '+30% Physics · -20% Draw Calls',
    colorTheme: {
      border: 'border-amber-400',
      bgLight: 'bg-amber-50/80',
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
      accentText: 'text-amber-800',
      glow: 'shadow-amber-400/25',
    },
    xpPoints: '+25K XP',
  },
  {
    stageNumber: 2,
    bossTag: 'QUEST CLEARED',
    icon: '🌐',
    shortDescription:
      'Core architecture in Colyseus, scalable Node.js backend with MongoDB, and Unity WebGL JavaScript bridges.',
    quickMetric: 'Colyseus Node.js · WebGL Bridge',
    colorTheme: {
      border: 'border-blue-400',
      bgLight: 'bg-blue-50/80',
      badge: 'bg-blue-100 text-blue-900 border-blue-300',
      accentText: 'text-blue-800',
      glow: 'shadow-blue-400/25',
    },
    xpPoints: '+20K XP',
  },
  {
    stageNumber: 3,
    bossTag: 'FEDERATION TITLE',
    icon: '⚽',
    shortDescription:
      'Real-time multiplayer with Socket.IO & Colyseus, complete Firebase live-ops suite, and WebXR prototypes.',
    quickMetric: 'Firebase Suite · WebXR Systems',
    colorTheme: {
      border: 'border-emerald-400',
      bgLight: 'bg-emerald-50/80',
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      accentText: 'text-emerald-800',
      glow: 'shadow-emerald-400/25',
    },
    xpPoints: '+18K XP',
  },
  {
    stageNumber: 4,
    bossTag: 'TOP 1% RANK',
    icon: '⭐',
    shortDescription:
      'Shipped 5+ commercial Photon PUN titles, driving the studio to Top 1% Unity Org recognition on Freelancer.',
    quickMetric: 'Top 1% Unity Org · 5+ Titles',
    colorTheme: {
      border: 'border-purple-400',
      bgLight: 'bg-purple-50/80',
      badge: 'bg-purple-100 text-purple-900 border-purple-300',
      accentText: 'text-purple-800',
      glow: 'shadow-purple-400/25',
    },
    xpPoints: '+15K XP',
  },
  {
    stageNumber: 5,
    bossTag: 'ORIGIN STORY',
    icon: '🎮',
    shortDescription:
      'Pitched and built original mobile game prototypes with physics simulations, animation controllers, and clean C#.',
    quickMetric: 'Original Prototypes · Clean C#',
    colorTheme: {
      border: 'border-sky-400',
      bgLight: 'bg-sky-50/80',
      badge: 'bg-sky-100 text-sky-900 border-sky-300',
      accentText: 'text-sky-800',
      glow: 'shadow-sky-400/25',
    },
    xpPoints: '+10K XP',
  },
];

export const RoadmapTimeline: React.FC = () => {
  // Track which cards are flipped (front vs back)
  const [flippedMap, setFlippedMap] = useState<Record<number, boolean>>({});
  const [activeStageHighlight, setActiveStageHighlight] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    soundFx.playCoin();
    setFlippedMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const flipAllFront = () => {
    soundFx.playClick();
    setFlippedMap({});
  };

  const flipAllBack = () => {
    soundFx.playCoin();
    const allFlipped: Record<number, boolean> = {};
    CAREER_ROADMAP.forEach((_, idx) => {
      allFlipped[idx] = true;
    });
    setFlippedMap(allFlipped);
  };

  return (
    <section id="roadmap" className="relative py-14 sm:py-20 border-t-2 border-sky-100 dark:border-slate-800 bg-[#f8fafc]/95 dark:bg-[#090d16]/95 overflow-hidden">
      {/* Background Playful Floating Glow Orbs */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 bg-amber-200/35 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-1/4 -left-16 w-80 h-80 bg-sky-200/35 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-300 text-xs font-game font-bold uppercase tracking-wider mb-2">
              <Flag className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>STAGE 3: 8-YEAR QUEST CAMPAIGN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-game text-slate-800 dark:text-white tracking-tight">
              Career Journey Flash Cards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 font-sans leading-relaxed">
              Interactive 3D Vertical Flash Cards. <strong className="text-blue-700 dark:text-sky-400 font-semibold">Click any card to rotate</strong> to view full work profession summary, verified achievements, and tech arsenal.
            </p>
          </div>

          {/* Quick Controls to Flip All */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={flipAllFront}
              className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-500 text-slate-700 dark:text-slate-300 text-xs font-game font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs hover:bg-sky-50 dark:hover:bg-slate-700"
            >
              Front Overview
            </button>
            <button
              onClick={flipAllBack}
              className="px-3.5 py-1.5 rounded-xl btn-game-yellow text-xs font-game font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
            >
              Flip All Dossiers ↻
            </button>
          </div>
        </motion.div>

        {/* Dynamic Horizontal Campaign Progress Road: Explicitly 1, 2, 3, 4, 5 */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-3xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-sky-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-game font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
              <Rocket className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>8-YEAR PRODUCTION ROADMAP (PRESENT ➜ 2018)</span>
            </div>
            <span className="text-[11px] font-game font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100% COMPLETE QUESTLINE</span>
            </span>
          </div>

          {/* Horizontal Stepper Connector */}
          <div className="relative flex items-center justify-between gap-2">
            {/* Background Connector Line */}
            <div className="absolute top-1/2 left-6 right-6 h-1.5 -translate-y-1/2 bg-gradient-to-r from-amber-400 via-blue-400 to-sky-300 rounded-full -z-0" />

            {/* Glowing moving runner */}
            <motion.div
              animate={{
                x: ['0%', '100%'],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-6 w-16 h-2 -translate-y-1/2 bg-white rounded-full blur-xs shadow-md shadow-amber-300 -z-0 pointer-events-none"
            />

            {/* 5 Checkpoints on the Roadmap Bar: Clean 1, 2, 3, 4, 5 */}
            {CAREER_ROADMAP.map((milestone, idx) => {
              const stage = STAGE_METADATA[idx] || STAGE_METADATA[0];
              const stageNum = idx + 1; // 1, 2, 3, 4, 5
              const isHovered = activeStageHighlight === idx;

              return (
                <div
                  key={milestone.year}
                  onMouseEnter={() => setActiveStageHighlight(idx)}
                  onMouseLeave={() => setActiveStageHighlight(null)}
                  onClick={() => toggleFlip(idx)}
                  className="relative z-10 flex flex-col items-center cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white border-2 ${
                      isHovered ? 'border-amber-400 ring-4 ring-amber-100' : stage.colorTheme.border
                    } shadow-md flex items-center justify-center transition-all`}
                  >
                    <span className="text-sm sm:text-base font-black font-game text-slate-800">
                      {stageNum}
                    </span>
                  </motion.div>
                  <div className="mt-1 text-center hidden sm:block">
                    <div className="text-[10px] font-game font-bold text-slate-700 leading-tight">
                      {stage.icon} {milestone.year.split('–')[0].trim()}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            VERTICAL FLASH CARDS GRID (COMPACT & FULLY VISIBLE DESCRIPTIONS)
            No "..." truncation on descriptions; clean, comfortable fit
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CAREER_ROADMAP.map((milestone, index) => {
            const isFlipped = !!flippedMap[index];
            const stage = STAGE_METADATA[index] || STAGE_METADATA[0];
            const stageNum = index + 1; // 1, 2, 3, 4, 5

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="perspective-1200 w-full"
              >
                {/* 3D Rotating Card Container with Balanced Height (420px to 440px) */}
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, type: 'spring', stiffness: 180, damping: 22 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative w-full h-[420px] sm:h-[440px] cursor-pointer select-none group"
                  onClick={() => toggleFlip(index)}
                >
                  {/* FRONT OF VERTICAL FLASH CARD */}
                  <div
                    className={`w-full h-full p-4 sm:p-5 rounded-3xl border-2 ${stage.colorTheme.border} bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between backface-hidden ${
                      isFlipped ? 'pointer-events-none opacity-0 invisible absolute inset-0' : 'relative opacity-100 visible'
                    }`}
                  >
                    <div>
                      {/* Top Level Banner with Single Number 1, 2, 3, 4, 5 */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-game font-black uppercase tracking-wider border flex items-center gap-1 ${stage.colorTheme.badge}`}>
                          <span>{stage.icon}</span>
                          <span>{stageNum}</span>
                        </span>

                        <span className="text-[10px] font-game font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 px-2 py-0.5 rounded-md">
                          {stage.xpPoints}
                        </span>
                      </div>

                      {/* 3-Star Rating */}
                      <div className="flex items-center gap-1 pt-2 pb-0.5 text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                        <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                        <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                        <span className="text-[9px] font-game font-bold text-slate-400 dark:text-slate-500 ml-1">
                          {stage.bossTag}
                        </span>
                      </div>

                      {/* 1. ROLE */}
                      <h3 className="text-base sm:text-lg font-black font-game text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-tight mt-1">
                        {milestone.role}
                      </h3>

                      {/* 2. ORGANISATION NAME */}
                      <div className="text-xs font-bold font-display text-blue-700 dark:text-sky-400 mt-0.5">
                        {milestone.company}
                      </div>

                      {/* 3. PERIOD OF TIME */}
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-900 dark:text-amber-300 text-[10px] font-game font-bold mt-1.5">
                        <Calendar className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>{milestone.year}</span>
                      </div>

                      {/* SHORT DESCRIPTION - Fully visible with no truncation or ellipsis */}
                      <div className="mt-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        <p className="text-[11px] leading-snug font-sans font-normal">
                          {stage.shortDescription}
                        </p>
                      </div>

                      {/* Location & Quick Metric */}
                      <div className="flex items-center justify-between gap-1 pt-2 text-[10px] text-slate-600 dark:text-slate-400 font-sans">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-blue-500 dark:text-sky-400 shrink-0" />
                          <span>{milestone.location}</span>
                        </span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold font-game">
                          {stage.quickMetric}
                        </span>
                      </div>

                      {/* Tech Badges Preview */}
                      <div className="flex flex-wrap gap-1 pt-2">
                        {milestone.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 rounded text-[9px] font-sans font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                        {milestone.technologies.length > 3 && (
                          <span className="px-1 py-0.5 rounded text-[9px] font-sans font-bold text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/60">
                            +{milestone.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Prompt: Click to Flip */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-sky-50 dark:bg-slate-800 group-hover:bg-blue-600 text-blue-700 dark:text-sky-300 group-hover:text-white border border-sky-200 dark:border-slate-700 group-hover:border-blue-600 text-xs font-game font-bold uppercase tracking-wider transition-all">
                        <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        <span>FLIP TO DOSSIER ↻</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK OF VERTICAL FLASH CARD */}
                  <div
                    className={`w-full h-full p-4 sm:p-5 rounded-3xl border-2 ${stage.colorTheme.border} bg-white dark:bg-slate-900 shadow-xl rotate-y-180 flex flex-col justify-between backface-hidden ${
                      isFlipped ? 'relative opacity-100 visible' : 'pointer-events-none opacity-0 invisible absolute inset-0'
                    }`}
                  >
                    {/* Back Header Banner with Single Number */}
                    <div className="pb-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between gap-1">
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-[10px] font-game font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-700">
                          {stageNum} · DOSSIER
                        </span>
                        <span className="text-[10px] font-game font-bold text-amber-700 dark:text-amber-400">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold font-display text-slate-900 dark:text-white mt-0.5">
                        {milestone.role}
                      </h4>
                      <div className="text-[10px] text-blue-700 dark:text-sky-400 font-semibold">
                        {milestone.company}
                      </div>
                    </div>

                    {/* Scrollable Back Content Area */}
                    <div className="flex-1 overflow-y-auto space-y-2 py-1.5 pr-1 my-1">
                      {/* Detailed Description */}
                      <div>
                        <div className="text-[9px] font-game font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-0.5">
                          WORK PROFESSION SUMMARY:
                        </div>
                        <p className="text-[10px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans bg-sky-50/70 dark:bg-slate-800/80 p-2 rounded-xl border border-sky-100 dark:border-slate-700">
                          {milestone.summary}
                        </p>
                      </div>

                      {/* Key Production Achievements */}
                      <div>
                        <div className="text-[9px] font-game font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                          <span>KEY DELIVERIES:</span>
                        </div>
                        <div className="space-y-1">
                          {milestone.keyAchievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-1 text-[10px] text-slate-700 dark:text-slate-300 leading-snug font-sans">
                              <span className="w-3 h-3 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-[7px] shrink-0 mt-0.5">
                                ✓
                              </span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Engine Arsenal Technologies */}
                      <div>
                        <div className="text-[9px] font-game font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                          TECH ARSENAL:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {milestone.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded text-[9px] font-sans font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Flip Back Button */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-amber-50 dark:bg-slate-800 hover:bg-amber-500 dark:hover:bg-amber-600 text-amber-800 dark:text-amber-300 hover:text-white border border-amber-200 dark:border-slate-700 hover:border-amber-500 text-xs font-game font-bold uppercase tracking-wider transition-all">
                        <CornerDownLeft className="w-3 h-3" />
                        <span>FLIP BACK ↩</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
