import React from 'react';
import { motion } from 'motion/react';
import { FileDown, Eye, CheckCircle2, Clock, Sparkles, ExternalLink, Trophy } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';

interface ResumeHireSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeHireSection: React.FC<ResumeHireSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hire" className="relative py-16 sm:py-24 border-t-2 border-sky-100 dark:border-slate-800 bg-gradient-to-b from-transparent via-amber-50/30 dark:via-slate-900/30 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border-amber-300 dark:border-amber-700/60 shadow-xl shadow-amber-950/5 dark:shadow-black/50 space-y-8"
        >
          {/* Header */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300 text-xs font-game font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>STAGE 6: QUEST BOARD &amp; TALENT DISPATCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-game text-slate-800 dark:text-white tracking-tight">
              Recruit Senior Unity Engineering
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal max-w-3xl">
              Whether you need a <strong className="text-slate-900 dark:text-white font-bold">Staff Game Architect</strong> to establish a reliable multiplayer netcode foundation, optimize physics and frame times for mobile &amp; console release, or build cross-platform VR/AR and WebGL games.
            </p>
          </div>

          {/* Engagement Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 shrink-0 border border-emerald-300 dark:border-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">ENGAGEMENT</div>
                <div className="text-sm font-bold text-slate-800 dark:text-white font-display">Full-Time Staff / Lead</div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-game font-bold mt-0.5">Status: Open to Offers</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 shrink-0 border border-sky-300 dark:border-sky-700">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">LOCATION</div>
                <div className="text-sm font-bold text-slate-800 dark:text-white font-display">Remote Worldwide / India</div>
                <div className="text-xs text-sky-700 dark:text-sky-400 font-game font-bold mt-0.5">Timezone: IST / US / EU</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 shrink-0 border border-amber-300 dark:border-amber-700">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">TRACK RECORD</div>
                <div className="text-sm font-bold text-slate-800 dark:text-white font-display">8+ Years Production</div>
                <div className="text-xs text-amber-800 dark:text-amber-300 font-game font-bold mt-0.5">30+ Shipped Titles</div>
              </div>
            </div>
          </div>

          {/* Action Row: Direct Resume PDF Link & View ATS Resume */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Direct Redirect to Resume PDF */}
              <a
                href={DEVELOPER_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playCoin()}
                className="px-6 py-3.5 rounded-2xl btn-game-yellow font-game text-sm font-bold tracking-wider uppercase cursor-pointer inline-flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                title="Open official Resume PDF in a new tab"
              >
                <FileDown className="w-4 h-4 text-amber-950" />
                <span>Download Resume (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-950" />
              </a>

              {/* View ATS Resume Modal */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResumeModal();
                }}
                className="px-6 py-3.5 rounded-2xl btn-game-blue font-game text-sm font-bold tracking-wider uppercase cursor-pointer inline-flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                title="View full ATS-formatted text resume"
              >
                <Eye className="w-4 h-4" />
                <span>View ATS Resume</span>
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="text-xs font-game font-bold text-blue-700 dark:text-sky-400 hover:text-blue-900 dark:hover:text-sky-300 tracking-wide uppercase flex items-center gap-1 hover:underline"
            >
              <span>Have a question? Contact directly</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
