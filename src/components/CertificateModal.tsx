import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Certification } from '../types/portfolio';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    if (cert) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [cert]);

  // Support ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  const certificateImgSrc =
      cert.certificateImage || '../assets/images/unity_certified_certificate_1790692183325.jpg';

  const modalContent = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundFx.playClick();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[96vh] flex flex-col bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-500/70 rounded-3xl shadow-2xl dark:shadow-black/70 overflow-hidden text-slate-800 dark:text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Top Header - Compact & Crisp */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-amber-200 dark:border-slate-800 bg-amber-50 dark:bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-amber-200 dark:bg-amber-950/70 text-amber-900 dark:text-amber-400 border border-amber-300 dark:border-amber-800/80">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold font-game tracking-tight text-slate-900 dark:text-white leading-tight">
                {cert.title}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                {cert.issuer} · Conferred to Devesh Beniwal ({cert.year})
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-red-500 dark:hover:bg-red-600 hover:text-white dark:hover:text-white text-slate-700 dark:text-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold font-sans shadow-xs"
            title="Close Certificate Modal"
          >
            <X className="w-5 h-5" />
            <span className="pr-1 text-xs hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Certificate Image - Fits to size without scrolling */}
        <div className="flex-1 min-h-0 p-3 sm:p-5 flex items-center justify-center bg-slate-900/5 dark:bg-slate-950/40">
          <div className="relative w-full h-full max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center rounded-2xl overflow-hidden border-2 border-amber-200 dark:border-slate-700/80 shadow-md bg-white dark:bg-slate-950">
            <img
              src={certificateImgSrc}
              alt={`${cert.title} Official Certificate`}
              className="w-full h-full max-h-[68vh] sm:max-h-[72vh] object-contain rounded-xl select-none"
            />
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
              Competencies:
            </span>
            {cert.keySkills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-sans font-semibold px-2 py-0.5 rounded-lg bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-800 dark:text-sky-300"
              >
                ✓ {skill}
              </span>
            ))}
          </div>

          <a
            href={cert.verifiedUrl || 'https://certification.unity.com'}
            target="_blank"
            rel="noreferrer"
            onClick={() => soundFx.playLevelUp()}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl btn-game-blue text-white font-game text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm ml-auto"
          >
            <span>Verify on Official Registry</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
