import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioFx';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  onOpenResumeModal: () => void;
  coins?: number;
  onAddCoin?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResumeModal }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    soundFx.enabled = !audioEnabled;
    setAudioEnabled(!audioEnabled);
    if (!audioEnabled) {
      soundFx.playCoin();
    }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Point 1: Perfectly Aligned Name & "Online Ready for quests" */}
        <a
          href="#character"
          onClick={() => soundFx.playCoin()}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0 text-left"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-500 border border-white/50 shadow-xs flex items-center justify-center text-white text-lg group-hover:scale-105 transition-transform shrink-0">
            🎮
          </div>
          <div className="flex flex-col justify-center items-start text-left leading-none">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-base font-bold font-sans text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-none whitespace-nowrap">
                {DEVELOPER_INFO.name}
              </span>
              <span className="inline-block px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 text-[10px] font-game font-bold tracking-wider leading-none shrink-0">
                LVL 8
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 font-sans leading-none mt-1 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0 inline-block"></span>
              <span className="leading-none">Online · Ready for quests</span>
            </div>
          </div>
        </a>

        {/* Point 2: All Tab Button Texts in 1 Single Line, Perfectly Aligned */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800 transition-all font-sans whitespace-nowrap flex-nowrap shrink-0 inline-flex items-center justify-center leading-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Point 3: Right Side Actions - Theme Switch, Audio & Resume Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Theme Switch Button (Light / Dark Mode) */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer flex items-center justify-center"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            title={audioEnabled ? 'Mute Game SFX' : 'Unmute Game SFX'}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-blue-600 dark:text-sky-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Download Resume Button */}
          <button
            onClick={() => {
              soundFx.playCoin();
              onOpenResumeModal();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-yellow font-game text-xs font-bold tracking-wider uppercase cursor-pointer whitespace-nowrap shrink-0 shadow-2xs leading-none"
          >
            <FileDown className="w-4 h-4 text-amber-950 shrink-0" />
            <span className="whitespace-nowrap">RESUME (PDF)</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-slate-900/98 border-b-2 border-sky-200 dark:border-slate-800 px-4 py-4 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl bg-sky-50 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors text-center whitespace-nowrap block"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                soundFx.playCoin();
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-game-yellow font-game text-xs font-bold uppercase"
            >
              <FileDown className="w-4 h-4 text-amber-950" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

