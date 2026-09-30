import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Check, Smartphone, Globe, Play } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        if (project) {
            const originalBodyOverflow = document.body.style.overflow;
            const originalHtmlOverflow = document.documentElement.style.overflow;
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalBodyOverflow;
                document.documentElement.style.overflow = originalHtmlOverflow;
            };
        }
    }, [project]);

    if (!project) return null;

    // Determine working links for store redirection
    const hasPlaystore = !!project.playstoreUrl;
    const hasAppstore = !!project.appstoreUrl;
    const hasDemo = !!project.demoUrl;
    const hasSteam = !!project.steamUrl;

    const modalContent = (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    soundFx.playClick();
                    onClose();
                }
            }}
        >
            <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border-2 border-sky-300 dark:border-sky-500/70 rounded-3xl shadow-2xl dark:shadow-black/70 my-auto overflow-hidden text-slate-800 dark:text-slate-100 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 dark:bg-slate-950 text-white border-b border-slate-800 shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-game font-bold text-sky-400 uppercase tracking-wide">
                            SYSTEM ARCHITECTURE DOSSIER
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs text-amber-300 font-mono-code font-bold">{project.year}</span>
                    </div>

                    <button
                        onClick={() => {
                            soundFx.playClick();
                            onClose();
                        }}
                        className="p-1.5 sm:px-2.5 sm:py-1.5 bg-white/10 hover:bg-red-500 text-white rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold font-sans shadow-xs"
                        title="Close Dossier"
                    >
                        <X className="w-4 h-4 text-white" />
                        <span className="hidden sm:inline">Close</span>
                    </button>
                </div>

                {/* Scrollable Modal Content (Images, Metrics, Overview, Highlights) */}
                <div className="overflow-y-auto flex-1 font-sans">
                    {/* Header Image */}
                    <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                        {/* Title Overlay */}
                        <div className="absolute bottom-4 left-6 right-6">
                            <div className="flex items-center gap-2 text-xs font-game font-bold text-amber-300 mb-1">
                                <span>{project.genre}</span>
                                <span>·</span>
                                <span className="text-white font-bold">{project.role}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black font-game text-white tracking-wide">
                                {project.title}
                            </h3>
                        </div>
                    </div>

                    {/* Modal Content Body */}
                    <div className="p-6 sm:p-7 space-y-5">
                        {/* Key Metrics Strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {project.metrics.map((m) => (
                                <div key={m.label} className="p-3 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-800/60 rounded-2xl">
                                    <div className="text-base sm:text-lg font-black font-game text-amber-800 dark:text-amber-300">
                                        {m.value}
                                    </div>
                                    <div className="text-[10px] text-slate-600 dark:text-slate-400 font-game uppercase font-bold">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Detailed Overview */}
                        <div>
                            <h4 className="text-xs font-game font-bold text-blue-700 dark:text-sky-400 mb-1.5 uppercase tracking-wider">
                                PROJECT OVERVIEW &amp; PRODUCTION ROLE
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-normal">
                                {project.fullOverview || project.description}
                            </p>
                        </div>

                        {/* Architecture Highlights */}
                        <div>
                            <h4 className="text-xs font-game font-bold text-blue-700 dark:text-sky-400 mb-2 uppercase tracking-wider">
                                ARCHITECTURAL HIGHLIGHTS &amp; SYSTEMS DELIVERED
                            </h4>
                            <div className="space-y-2">
                                {project.architectureHighlights.map((hl, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-sans">
                                        <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                                            ✓
                                        </span>
                                        <span>{hl}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Platforms & Tech Arsenal Tags */}
                        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs space-y-2">
                            <div className="text-[11px] font-game font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                                TECHNOLOGIES DEPLOYED:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-sans font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Additional Project Links (for multi-link projects like AR & Arduino) */}
                        {project.additionalLinks && project.additionalLinks.length > 0 && (
                            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                                <h4 className="text-xs font-game font-bold text-blue-700 dark:text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span>Interactive Demos &amp; Hardware Showcase Links</span>
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {project.additionalLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => soundFx.playCoin()}
                                            className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-sky-50 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 hover:border-sky-400 text-xs font-game font-bold text-slate-800 dark:text-slate-200 hover:text-sky-800 flex items-center justify-between transition-all group shadow-2xs cursor-pointer"
                                        >
                                            <span className="truncate">{link.label}</span>
                                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-600 shrink-0 ml-1.5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* ========================================================
            MODAL BOTTOM FOOTER (IN THE LAST / AT THE CORNER):
            Redirection buttons located at the corner/last
            ======================================================== */}
                <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-slate-900 dark:bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                    {/* Left Info: Platform Badge */}
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-sans self-start sm:self-auto">
                        <span className="text-slate-400 font-normal">Target Platforms:</span>
                        <span className="text-amber-300 font-bold font-game">{project.platforms.join(' · ')}</span>
                    </div>

                    {/* Right Corner / Last: Store & Redirection Buttons */}
                    <div className="flex flex-wrap items-center justify-end gap-2 w-full sm:w-auto ml-auto">
                        {hasPlaystore && (
                            <a
                                href={project.playstoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-green text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <Smartphone className="w-3.5 h-3.5" />
                                <span>Play Store</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {hasAppstore && (
                            <a
                                href={project.appstoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-blue text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <Globe className="w-3.5 h-3.5" />
                                <span>App Store</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {hasSteam && (
                            <a
                                href={project.steamUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-yellow text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <span>Steam</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {project.websiteUrl && (
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-blue text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <Globe className="w-3.5 h-3.5" />
                                <span>Website</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {project.videoUrl && (
                            <a
                                href={project.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-yellow text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <Play className="w-3.5 h-3.5" />
                                <span>Video Demo</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {hasDemo && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-yellow text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <span>Live Showcase</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}

                        {/* Fallback button if no specific URLs */}
                        {!hasPlaystore && !hasAppstore && !hasSteam && !hasDemo && !project.websiteUrl && !project.videoUrl && (!project.additionalLinks || project.additionalLinks.length === 0) && (
                            <a
                                href="https://play.google.com/store/apps"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => soundFx.playCoin()}
                                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl btn-game-green text-xs font-game font-bold tracking-wide shadow-xs"
                            >
                                <Smartphone className="w-3.5 h-3.5" />
                                <span>Open Store</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};
