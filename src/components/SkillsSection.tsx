import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, ChevronRight, Sparkles, Cpu, Network, Layers, Database, Zap, Box, Radio, Video, Terminal, Wrench } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

export const SkillsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('gamedev');
  const [selectedSkillName, setSelectedSkillName] = useState<string>('Unity Engine & C# Architecture');

  const activeCategory =
    SKILL_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  const categoryIcons: Record<string, string> = {
    gamedev: '🎮',
    multiplayer: '🌐',
    arvr: '👓',
    backend: '☁️',
    production: '🛠️',
  };

  // Specific logo helper for each technology
  const getSkillLogo = (skillName: string) => {
    const lower = skillName.toLowerCase();
    if (lower.includes('unity')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-slate-700">
          <Box className="w-6 h-6 text-sky-400" />
        </div>
      );
    }
    if (lower.includes('c#')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-purple-700 text-white flex items-center justify-center font-bold shadow-xs shrink-0 border border-purple-500">
          <span className="font-mono-code font-black text-sm tracking-tighter">C#</span>
        </div>
      );
    }
    if (lower.includes('photon')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-blue-400">
          <Network className="w-6 h-6 text-blue-100" />
        </div>
      );
    }
    if (lower.includes('colyseus') || lower.includes('socket')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-indigo-400">
          <Radio className="w-6 h-6 text-indigo-100" />
        </div>
      );
    }
    if (lower.includes('webrtc') || lower.includes('video') || lower.includes('voice')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-emerald-400">
          <Video className="w-6 h-6 text-emerald-100" />
        </div>
      );
    }
    if (lower.includes('leap motion') || lower.includes('gesture')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-xs shrink-0 border border-amber-300">
          <span className="text-xl">🖐️</span>
        </div>
      );
    }
    if (lower.includes('kinect') || lower.includes('arduino') || lower.includes('hardware')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-teal-400">
          <Cpu className="w-6 h-6 text-teal-100" />
        </div>
      );
    }
    if (lower.includes('arfoundation') || lower.includes('ar/vr') || lower.includes('vr sdk')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-cyan-400">
          <Layers className="w-6 h-6 text-cyan-100" />
        </div>
      );
    }
    if (lower.includes('node') || lower.includes('express')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-green-700 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-green-500">
          <Terminal className="w-6 h-6 text-green-200" />
        </div>
      );
    }
    if (lower.includes('mongodb') || lower.includes('database')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-emerald-500">
          <Database className="w-6 h-6 text-emerald-100" />
        </div>
      );
    }
    if (lower.includes('firebase')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-amber-400">
          <Zap className="w-6 h-6 text-amber-200" />
        </div>
      );
    }
    if (lower.includes('physics') || lower.includes('profiling') || lower.includes('optimization')) {
      return (
        <div className="w-11 h-11 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-rose-400">
          <Wrench className="w-6 h-6 text-rose-100" />
        </div>
      );
    }

    return (
      <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0 border border-blue-400">
        <Code2 className="w-6 h-6 text-white" />
      </div>
    );
  };

  const selectedSkill =
    activeCategory.skills.find((s) => s.name === selectedSkillName) ||
    activeCategory.skills[0];

  const handleSelectCategory = (id: string) => {
    soundFx.playClick();
    setActiveCategoryId(id);
    const cat = SKILL_CATEGORIES.find((c) => c.id === id);
    if (cat && cat.skills.length > 0) {
      setSelectedSkillName(cat.skills[0].name);
    }
  };

  const handleSelectSkill = (name: string) => {
    soundFx.playCoin();
    setSelectedSkillName(name);
  };

  return (
    <section id="skills" className="relative py-16 sm:py-24 border-t-2 border-sky-100 dark:border-slate-800 bg-gradient-to-b from-transparent via-white/50 dark:via-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-300 text-xs font-game font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>STAGE 2: TECHNICAL SKILL TREE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-game text-slate-800 dark:text-white tracking-tight">
            Game Engineering Skill Tree
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 font-sans leading-relaxed">
            Every technology is backed by verified commercial production delivery, clean decoupled architecture, and multi-platform optimization.
          </p>
        </motion.div>

        {/* Category Tabs - FITS PERFECTLY IN SIZE (NOT SCROLLABLE) */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-sky-200 dark:border-slate-800 mb-8 shadow-xs">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-game font-bold tracking-wider uppercase transition-all cursor-pointer text-center w-full ${
                  isActive
                    ? 'btn-game-blue shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-sky-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{categoryIcons[cat.id]}</span>
                <span className="truncate">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Skills List & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Skills List with Logos (NO PERCENTAGES, PURE VERIFIED EXPERIENCE) */}
          <div className="lg:col-span-7 space-y-3">
            {activeCategory.skills.map((skill) => {
              const isSelected = skill.name === selectedSkillName;
              return (
                <div
                  key={skill.name}
                  onClick={() => handleSelectSkill(skill.name)}
                  className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 dark:border-sky-500 shadow-md shadow-sky-500/10'
                      : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-600 hover:bg-sky-50/40 dark:hover:bg-slate-800/80 shadow-xs'
                  }`}
                >
                  {/* Skill Specific Logo */}
                  {getSkillLogo(skill.name)}

                  {/* Skill Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white font-display">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-game font-bold text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 whitespace-nowrap shrink-0">
                        {skill.experienceYears} Yrs Production
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-2 font-light">
                      {skill.highlight}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {skill.keywords.slice(0, 4).map((kw) => (
                        <span
                          key={kw}
                          className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 self-center transition-transform ${
                      isSelected ? 'rotate-90 text-sky-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Technical Inspector Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-slate-800 p-6 shadow-xl shadow-sky-950/5 dark:shadow-black/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-sky-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-game font-bold text-sky-700 dark:text-sky-400">
                  <Code2 className="w-4 h-4" />
                  <span>PRODUCTION INSPECTOR</span>
                </div>
                <span className="text-[10px] font-game font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 px-2.5 py-0.5 rounded-full">
                  COMMERCIAL PROVEN
                </span>
              </div>

              {selectedSkill && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {getSkillLogo(selectedSkill.name)}
                    <div>
                      <h4 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                        {selectedSkill.name}
                      </h4>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold font-game">Production Experience</span>
                        <span> · </span>
                        <span>{selectedSkill.experienceYears} Years Continuous Production</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700">
                    <div className="text-[10px] font-game font-bold text-sky-800 dark:text-sky-300 mb-1 uppercase tracking-wider">
                      ARCHITECTURAL HIGHLIGHT
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedSkill.highlight}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] font-game font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                      CORE KEYWORDS &amp; ENGINE CONCEPTS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="px-2.5 py-1 rounded-xl text-xs font-sans font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-sky-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-sans">
                    <span className="font-semibold">TARGET PLATFORMS</span>
                    <span className="text-blue-600 dark:text-sky-400 font-bold font-game">Android · iOS · WebGL · PC · VR</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
