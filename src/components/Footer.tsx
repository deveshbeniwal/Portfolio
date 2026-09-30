import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

interface FooterProps {
  onOpenResumeModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    soundFx.playCoin();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Character', href: '#character' },
    { label: 'Skills', href: '#skills' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Shipped Games', href: '#projects' },
    { label: 'Certificates', href: '#certifications' },
    { label: 'Recruit', href: '#hire' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t-2 border-sky-200 dark:border-slate-800 bg-white dark:bg-[#070b14] py-12 text-slate-500 dark:text-slate-400 text-xs font-sans relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-game text-xl shadow-md">
              🎮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-slate-900 dark:text-white text-base">
                  {DEVELOPER_INFO.name}
                </span>
                <span className="text-amber-500 font-bold">★★★★★</span>
              </div>
              <div className="text-[11px] text-blue-600 dark:text-sky-400 font-game font-bold uppercase">
                {DEVELOPER_INFO.title}
              </div>
            </div>
          </div>

          {/* Section Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-game font-bold uppercase tracking-wider text-xs text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => soundFx.playClick()}
                className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all font-game font-bold text-xs uppercase tracking-wider cursor-pointer border border-slate-300 dark:border-slate-700 shadow-2xs hover:scale-105 active:scale-95"
              title="Scroll to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-700 dark:text-slate-200" />
            </button>
          </div>
        </div>

        {/* Footer Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {DEVELOPER_INFO.name}. Full-Stack Senior Unity Developer &amp; Game Architect.
          </div>
          <div className="font-semibold text-slate-700 dark:text-slate-300">
            Jaipur &amp; Bengaluru, India · Open to Remote Worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};
