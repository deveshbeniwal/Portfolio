import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_INFO, DEVELOPER_AVATAR, CERTIFICATIONS } from '../data/portfolioData';
import { FileDown, MapPin, Star, Trophy, Linkedin, Phone, Mail, Zap, Play, Award, ShieldCheck, CheckCircle2, ExternalLink, Eye } from 'lucide-react';
import { soundFx } from '../utils/audioFx';
import { CertificateModal } from './CertificateModal';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
  onAddCoin?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal, onAddCoin }) => {
  const [comboCount, setComboCount] = useState<number>(1);
  const [showUnityCertModal, setShowUnityCertModal] = useState<boolean>(false);

  const handleHeroClick = () => {
    soundFx.playCoin();
    onAddCoin?.();
    setComboCount((prev) => prev + 1);

    if (comboCount % 3 === 0) {
      soundFx.playLevelUp();
    }
  };

  return (
    <section id="character" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Main Character Hero Card - Stretched Horizontally with Clean Frosted Glass */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {/* Subtle Glow Background Ring */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Stretched Character Info Card with Clean Frosted White / Dark Blur */}
          <div className="w-full p-5 sm:p-7 lg:p-8 rounded-3xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-2 border-white/90 dark:border-slate-800 shadow-xl shadow-sky-950/5 dark:shadow-black/40 text-center space-y-4 relative overflow-hidden">
            {/* Top Stage Tag - Sleek, space-saving Unity Certified Professional badge */}
            <div className="flex items-center justify-center sm:justify-start pb-2 border-b border-slate-200/50 dark:border-slate-800">
              <button
                onClick={() => {
                  soundFx.playCoin();
                  setShowUnityCertModal(true);
                }}
                className="px-3 py-1 rounded-full bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/60 dark:hover:bg-amber-900/70 text-amber-900 dark:text-amber-300 text-[11px] font-game font-bold tracking-wide uppercase border border-amber-300 dark:border-amber-700/70 flex items-center gap-1.5 shadow-2xs cursor-pointer transition-colors"
                title="Click to view verified Unity certification"
              >
                <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>UNITY CERTIFIED PROFESSIONAL: PROGRAMMER</span>
                <ExternalLink className="w-3 h-3 text-amber-800 dark:text-amber-300" />
              </button>
            </div>

            {/* Avatar & Character Header with Visible Unity Certification Showcase */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pt-1 w-full">
              {/* Left: Avatar + Title & Details */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 flex-1 text-center sm:text-left">
                {/* Interactive Character Avatar */}
                <div
                  onClick={handleHeroClick}
                  className="relative group cursor-pointer shrink-0"
                  title="Click me to trigger power up sound!"
                >
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl p-1 bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 shadow-md shadow-sky-400/30 group-hover:scale-105 transition-transform">
                    <img
                      src={DEVELOPER_AVATAR}
                      alt={DEVELOPER_INFO.name}
                      className="w-full h-full rounded-[22px] object-cover border-2 border-white/80 dark:border-slate-700"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-xl bg-amber-400 border border-amber-500 text-amber-950 font-game text-xs font-bold shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>LVL 8</span>
                  </div>
                </div>

                {/* Title & Experience */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-game font-bold text-sky-700 dark:text-sky-400 tracking-wider uppercase">
                      FULL-STACK SENIOR UNITY DEVELOPER
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-game font-bold border border-emerald-300 dark:border-emerald-700">
                      VERIFIED EXPERT
                    </span>
                  </div>
                  
                  {/* Name rendered with Light Typography */}
                  <h1 className="text-4xl sm:text-6xl font-light font-display text-slate-900 dark:text-white tracking-tight leading-none">
                    {DEVELOPER_INFO.name}
                  </h1>
                  
                  {/* Experience rendered with Light Typography */}
                  <div className="text-base sm:text-xl font-light font-sans text-slate-700 dark:text-slate-300 tracking-wide">
                    8+ Years Continuous Production Experience &amp; Game Architecture
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-xs text-slate-600 dark:text-slate-400 font-sans font-light">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 dark:text-sky-400" />
                      <span>Bengaluru &amp; Jaipur, India (Remote Worldwide)</span>
                    </span>
                    <span>·</span>
                    <span className="text-amber-800 dark:text-amber-300 font-medium">B.Tech Computer Science (Honours)</span>
                  </div>
                </div>
              </div>

              {/* Right: Direct Visible Unity Certification Card - Recruiter Credibility Anchor */}
              <div
                onClick={() => {
                  soundFx.playCoin();
                  setShowUnityCertModal(true);
                }}
                className="w-full sm:w-auto lg:w-72 shrink-0 p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-amber-100/50 dark:from-slate-800 dark:via-slate-850 dark:to-amber-950/30 border-2 border-amber-300 dark:border-amber-700/60 shadow-md shadow-amber-950/5 dark:shadow-black/30 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-xl transition-all cursor-pointer group text-left relative overflow-hidden"
                title="Click to inspect official Unity Certification"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 rounded-lg bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-game font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                      OFFICIAL CERTIFICATE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-700">
                    VERIFIED
                  </span>
                </div>

                {/* Actual Certificate Document Image Preview */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-amber-200 dark:border-slate-700 bg-slate-900 shadow-inner group-hover:scale-[1.02] transition-transform">
                  <img
                    src={CERTIFICATIONS[0]?.certificateImage}
                    alt="Unity Certified Professional: Programmer Certificate"
                    className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[11px] font-game font-bold text-white flex items-center gap-1">
                      <Eye className="w-3 h-3 text-amber-300" />
                      <span>Inspect Credential</span>
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-game font-bold text-slate-900 dark:text-white text-[11px] leading-tight">
                      Unity Certified Professional: Programmer
                    </div>
                    <div className="text-[10px] font-mono-code text-slate-500 dark:text-slate-400">
                      Unity Technologies
                    </div>
                  </div>
                  <span className="font-game text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-700">
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* 10-Second Executive Credibility Overview (Optimized for instant recruiter absorption) */}
            <div className="max-w-4xl mx-auto text-left sm:text-center space-y-3 pt-2">
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-light">
                <strong className="text-slate-900 dark:text-white font-semibold">Unity Certified Professional: Programmer</strong> with <strong className="text-slate-900 dark:text-white font-semibold">8+ continuous production years</strong> and <strong className="text-slate-900 dark:text-white font-semibold">30+ shipped commercial titles</strong> across mobile, PC, WebGL, and AR/VR. Proven technical mastery in <strong className="text-blue-700 dark:text-sky-400 font-medium">Photon Fusion v1/v2 &amp; Colyseus multiplayer netcode</strong>, achieving a validated <strong className="text-emerald-700 dark:text-emerald-400 font-medium">+30% physics performance increase</strong> and <strong className="text-emerald-700 dark:text-emerald-400 font-medium">-20% draw calls reduction</strong>. Experienced in spatial hardware integration (Leap Motion, Kinect, Arduino) and full-stack game cloud architectures (Node.js, Express, MongoDB, Firebase).
              </p>

              {/* 4 Instant Credibility Fast-Scan Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-300 text-xs font-semibold font-sans">
                  <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Unity Certified Professional: Programmer</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-sky-900 dark:text-sky-300 text-xs font-semibold font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>30+ Commercial Shipped Games · 8+ Yrs</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-300 text-xs font-semibold font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>+30% Physics Boost · -20% Draw Calls</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-900 dark:text-indigo-300 text-xs font-semibold font-sans">
                  <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Photon Fusion v2, Colyseus &amp; WebRTC</span>
                </span>
              </div>
            </div>

            {/* Channel Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <a
                href={DEVELOPER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 text-xs font-semibold font-sans transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`tel:${DEVELOPER_INFO.phone}`}
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold font-sans transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{DEVELOPER_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-xs font-semibold font-sans transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>{DEVELOPER_INFO.email}</span>
              </a>
            </div>

            {/* Quick Action CTA Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href={DEVELOPER_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playCoin()}
                className="px-6 py-3 rounded-2xl btn-game-yellow font-game text-sm font-bold tracking-wider uppercase cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-amber-950" />
                <span>DOWNLOAD RESUME (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-950" />
              </a>

              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="px-6 py-3 rounded-2xl btn-game-blue font-game text-sm font-bold tracking-wider uppercase cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>EXPLORE SHIPPED GAMES</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 10-15 SECOND RECRUITER FAST SCAN HUD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="w-full p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-2 border-white/90 dark:border-slate-800 shadow-lg shadow-sky-950/5 dark:shadow-black/30 space-y-6"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800">
            <div>
              <div className="text-xs font-game font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                ⚡ 10-SECOND RECRUITER FAST SCAN
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-sans text-slate-800 dark:text-white tracking-tight mt-0.5">
                Core Production Powers &amp; Performance Proof
              </h2>
            </div>

            <div className="flex items-center gap-2 font-game text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-300">
                ✓ 8+ YEARS IN PRODUCTION
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300">
                ✓ 30+ COMMERCIAL SHIPPED
              </span>
            </div>
          </div>

          {/* 4 Power-Up Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Power 1 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-2 hover:border-sky-300 dark:hover:border-sky-500 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-game font-bold text-xs uppercase">
                <span className="text-base">⚡</span>
                <span>ENGINE ARCHITECTURE</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-sans">8 Years C# Production</div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 font-sans font-light">
                <li>• C# .NET, Decoupled Game Patterns</li>
                <li>• <strong className="text-emerald-700 dark:text-emerald-400 font-medium">+30% Physics Optimization</strong></li>
                <li>• <strong className="text-emerald-700 dark:text-emerald-400 font-medium">-20% Draw Calls Cut</strong></li>
              </ul>
            </div>

            {/* Power 2 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-2 hover:border-sky-300 dark:hover:border-sky-500 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-game font-bold text-xs uppercase">
                <span className="text-base">🌐</span>
                <span>MULTIPLAYER NETCODE</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-sans">Photon &amp; Colyseus</div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 font-sans font-light">
                <li>• Photon Fusion v1 &amp; v2 Migration</li>
                <li>• Colyseus Server-Authoritative Rooms</li>
                <li>• Live WebRTC Video &amp; Vivox Voice</li>
              </ul>
            </div>

            {/* Power 3 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-2 hover:border-sky-300 dark:hover:border-sky-500 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-game font-bold text-xs uppercase">
                <span className="text-base">🔮</span>
                <span>AR/VR &amp; HARDWARE</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-sans">Spatial &amp; Microcontrollers</div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 font-sans font-light">
                <li>• Leap Motion Hand Gesture Tracking</li>
                <li>• Arduino Sensors, Microsoft Kinect</li>
                <li>• ARFoundation (ARCore &amp; ARKit), VR</li>
              </ul>
            </div>

            {/* Power 4 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 space-y-2 hover:border-sky-300 dark:hover:border-sky-500 transition-colors shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-game font-bold text-xs uppercase">
                <span className="text-base">☁️</span>
                <span>FULL-STACK &amp; CLOUD OPS</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-sans">Node.js &amp; Firebase</div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 font-sans font-light">
                <li>• Node.js, Express, TypeScript, MongoDB</li>
                <li>• Firestore, Auth, Analytics, Crashlytics</li>
                <li>• Unity WebGL &amp; JavaScript Bridge</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Direct Unity Certificate Inspection Modal */}
        {showUnityCertModal && (
          <CertificateModal
            cert={CERTIFICATIONS[0]}
            onClose={() => setShowUnityCertModal(false)}
          />
        )}
      </div>
    </section>
  );
};
