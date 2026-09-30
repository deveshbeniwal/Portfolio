import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, MapPin, Clock, ExternalLink, Radio, MessageCircle, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const handleCopyEmail = () => {
    soundFx.playCoin();
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    soundFx.playCoin();
    navigator.clipboard.writeText(DEVELOPER_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const whatsappUrl = `https://wa.me/918854832762?text=${encodeURIComponent(
    'Hi Devesh, I saw your portfolio and would like to connect regarding game engineering opportunities.'
  )}`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 border-t-2 border-sky-100 dark:border-slate-800 bg-gradient-to-b from-transparent via-blue-50/20 dark:via-slate-900/40 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border-amber-300 dark:border-amber-700/60 shadow-xl shadow-amber-950/5 dark:shadow-black/50 space-y-8"
        >
          {/* Header - Matching Section 6 Rhythm */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-700 text-blue-900 dark:text-blue-300 text-xs font-game font-bold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 animate-pulse" />
              <span>STAGE 7: COMMS TAVERN &amp; SAFE-HOUSE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-game text-slate-800 dark:text-white tracking-tight">
              Let&apos;s Build Great Games
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal max-w-3xl">
              Available to discuss Senior Unity roles, multiplayer netcode architecture, physics optimization, and custom game tech. Reach out directly for fast response.
            </p>
          </div>

          {/* Primary Action: Direct WhatsApp Chat Dispatch */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-[#25D366] to-teal-500 text-white shadow-md shadow-emerald-500/15">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-game font-bold uppercase tracking-wider text-emerald-100 flex items-center gap-1 justify-center sm:justify-start">
                  <Sparkles className="w-3 h-3 text-emerald-200" />
                  <span>DIRECT CHAT</span>
                </div>
                <div className="text-sm sm:text-base font-bold font-game tracking-tight mt-0.5">
                  Quick WhatsApp Sync
                </div>
                <div className="text-[11px] sm:text-xs text-white/90 font-sans">
                  Available for recruiter queries &amp; calls (+91 88548 32762)
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playCoin()}
              className="px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-game text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* 3-Column Direct Channels Grid - Perfectly matching Section 6's 3-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Email Channel */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border-2 border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-xl transition-colors cursor-pointer border border-slate-200 dark:border-slate-600 shadow-2xs"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div>
                <div className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">DIRECT EMAIL</div>
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white font-mono-code hover:text-blue-600 dark:hover:text-sky-400 transition-colors block truncate mt-0.5"
                  title={DEVELOPER_INFO.email}
                >
                  {DEVELOPER_INFO.email}
                </a>
                <div className="text-xs text-amber-800 dark:text-amber-400 font-game font-bold mt-1">Reply SLA: &lt; 12 Hours</div>
              </div>
            </div>

            {/* Direct Call Channel */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border-2 border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-500 hover:text-emerald-800 dark:text-slate-400 dark:hover:text-emerald-300 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-xl transition-colors cursor-pointer border border-slate-200 dark:border-slate-600 shadow-2xs"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div>
                <div className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">DIRECT CALL</div>
                <a
                  href={`tel:${DEVELOPER_INFO.phone}`}
                  className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white font-mono-code hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors block mt-0.5"
                >
                  {DEVELOPER_INFO.phone}
                </a>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-game font-bold mt-1">Status: Open for Calls</div>
              </div>
            </div>

            {/* LinkedIn Network Channel */}
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border-2 border-slate-200/80 dark:border-slate-700 hover:border-blue-300 dark:hover:border-sky-500 hover:bg-blue-50/40 dark:hover:bg-slate-800 transition-all shadow-xs flex flex-col justify-between space-y-3 group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center font-sans font-bold shadow-2xs">
                  in
                </div>
                <div className="p-2 text-blue-600 dark:text-sky-400 bg-white dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-slate-600 rounded-xl transition-colors border border-blue-200 dark:border-slate-600 shadow-2xs">
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <div>
                <div className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">LINKEDIN NETWORK</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white font-display mt-0.5 group-hover:text-blue-700 dark:group-hover:text-sky-400 transition-colors">
                  Devesh Beniwal
                </div>
                <div className="text-xs text-blue-700 dark:text-sky-400 font-game font-bold mt-1">Verified Endorsements</div>
              </div>
            </a>
          </div>

          {/* Bottom Presence Bar - Matching Section 6 Bottom Rhythm */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-slate-600 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500 dark:text-sky-400 shrink-0" />
                <span><strong className="text-slate-800 dark:text-slate-200">Base:</strong> Bengaluru &amp; Jaipur, India (Remote Worldwide)</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <span><strong className="text-slate-800 dark:text-slate-200">Active Hours:</strong> IST (UTC+5:30) · Flexible US/EU sync</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playCoin()}
              className="text-xs font-game font-bold text-emerald-700 hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300 tracking-wide uppercase flex items-center gap-1 hover:underline ml-auto"
            >
              <span>Instant WhatsApp ping</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
