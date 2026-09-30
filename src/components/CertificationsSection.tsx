import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, TESTIMONIALS } from '../data/portfolioData';
import { Certification } from '../types/portfolio';
import {
    Award,
    ShieldCheck,
    Trophy,
    ExternalLink,
    Eye,
    Linkedin,
    CheckCircle2,
    Quote,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { soundFx } from '../utils/audioFx';
import { CertificateModal } from './CertificateModal';

export const CertificationsSection: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    // Horizontal Fisheye 5-Card Carousel State
    const [testimonialIndex, setTestimonialIndex] = useState<number>(0);
    const [isTestimonialPaused, setIsTestimonialPaused] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(() =>
        typeof window !== 'undefined' ? window.innerWidth < 640 : false
    );
    const testimonialTimerRef = useRef<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNextTestimonial = () => {
        soundFx.playClick();
        setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrevTestimonial = () => {
        soundFx.playClick();
        setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const handleSelectTestimonial = (index: number) => {
        soundFx.playClick();
        setTestimonialIndex(index);
    };

    // Auto-scroll every 6 seconds, pauses on hover
    useEffect(() => {
        if (isTestimonialPaused) return;

        testimonialTimerRef.current = window.setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);

        return () => {
            if (testimonialTimerRef.current) clearInterval(testimonialTimerRef.current);
        };
    }, [isTestimonialPaused, testimonialIndex]);

    // Helper to compute circular offset for 5 cards: returns -2, -1, 0, 1, 2
    const getCardOffset = (idx: number, current: number, total: number) => {
        let diff = (idx - current) % total;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    };

    const getBadgeIcon = (type: string) => {
        switch (type) {
            case 'expert':
                return <ShieldCheck className="w-5 h-5 text-blue-600" />;
            case 'award':
                return <Trophy className="w-5 h-5 text-amber-500" />;
            default:
                return <Award className="w-5 h-5 text-blue-600" />;
        }
    };

    const handleOpenCert = (cert: Certification) => {
        soundFx.playCoin();
        setSelectedCert(cert);
    };

    return (
        <section id="certifications" className="relative py-16 sm:py-24 border-t-2 border-sky-100 dark:border-slate-800 bg-[#f8fafc]/90 dark:bg-[#090d16]/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-300 text-xs font-game font-bold uppercase tracking-wider mb-2">
                        <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>STAGE 5: TROPHY HALL &amp; ACCREDITED LICENSES</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black font-game text-slate-800 dark:text-white tracking-tight">
                        Certifications &amp; Industry Honors
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 font-sans leading-relaxed">
                        Verified credentials including the Unity Certified Professional: Programmer and Data Structures &amp; Design Patterns for Game Developers. Click either credential to inspect the authentic document.
                    </p>
                </motion.div>

                {/* Certifications Grid - Clean 2-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 mb-16">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            onClick={() => handleOpenCert(cert)}
                            className="group p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-md shadow-slate-200/50 dark:shadow-black/40 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-xl hover:shadow-amber-950/5 transition-all cursor-pointer flex flex-col justify-between space-y-4"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/80 group-hover:scale-110 transition-transform">
                                        {getBadgeIcon(cert.badgeType)}
                                    </div>
                                    <span className="font-game text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700 px-2.5 py-1 rounded-full">
                                        {cert.year}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
                                    {cert.title}
                                </h3>
                                <div className="text-xs font-semibold text-blue-700 dark:text-sky-400 mt-0.5 font-sans">
                                    {cert.issuer}
                                </div>

                                <div className="mt-2 text-[11px] font-mono-code text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-100 dark:border-slate-700 inline-block">
                                    ID: {cert.credentialId}
                                </div>

                                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-sans font-normal">
                                    {cert.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {cert.keySkills.map((s) => (
                                        <span
                                            key={s}
                                            className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-sans text-[10px] font-medium"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-game font-bold">
                                    <span className="flex items-center gap-1">
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>INSPECT CERTIFICATE</span>
                                    </span>
                                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ========================================================
            HORIZONTAL 3D FISHEYE TESTIMONIAL CAROUSEL (5 CARDS)
            Center highlighted card with curving, smaller side cards
            ======================================================== */}
                <div
                    className="border-t-2 border-slate-200/80 dark:border-slate-800 pt-14"
                    onMouseEnter={() => setIsTestimonialPaused(true)}
                    onMouseLeave={() => setIsTestimonialPaused(false)}
                >
                    {/* Header & LinkedIn View Button */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="text-xs font-game font-bold text-blue-700 dark:text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Linkedin className="w-4 h-4 text-blue-600 dark:text-sky-400 fill-current" />
                                <span>LINKEDIN PEER RECOMMENDATIONS &amp; ENDORSEMENTS</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-800 dark:text-white tracking-tight mt-1">
                                Colleagues &amp; Leads Who Recommended Me on LinkedIn
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                                Written recommendations and professional endorsements by technical directors and senior team members from previous studios.
                            </p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/devesh-beniwal-ba4460143/details/recommendations/"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => soundFx.playClick()}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5] text-white hover:bg-[#005f93] text-xs font-game font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                        >
                            <Linkedin className="w-4 h-4 fill-current text-white" />
                            <span>View On LinkedIn Profile</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* 3D Horizontal Fisheye Carousel Viewport */}
                    <div className="relative py-4">
                        <div
                            className="relative h-[530px] sm:h-[450px] flex items-center justify-center overflow-hidden"
                            style={{
                                perspective: '1300px',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {TESTIMONIALS.map((t, idx) => {
                                const offset = getCardOffset(idx, testimonialIndex, TESTIMONIALS.length);
                                const isCenter = offset === 0;

                                // Horizontal Fisheye Position & Curve calculations
                                let xPercent = 0;
                                let scale = 1;
                                let rotateY = 0;
                                let zIndex = 30;
                                let opacity = 1;
                                let filterBlur = 'blur(0px)';

                                if (isMobile) {
                                    // Mobile fisheye: keeps background cards clearly visible on left and right
                                    if (offset === 0) {
                                        xPercent = 0;
                                        scale = 1;
                                        rotateY = 0;
                                        zIndex = 30;
                                        opacity = 1;
                                        filterBlur = 'blur(0px)';
                                    } else if (offset === -1) {
                                        xPercent = -68;
                                        scale = 0.83;
                                        rotateY = 20;
                                        zIndex = 20;
                                        opacity = 0.65;
                                        filterBlur = 'blur(0.5px)';
                                    } else if (offset === 1) {
                                        xPercent = 68;
                                        scale = 0.83;
                                        rotateY = -20;
                                        zIndex = 20;
                                        opacity = 0.65;
                                        filterBlur = 'blur(0.5px)';
                                    } else if (offset === -2) {
                                        xPercent = -122;
                                        scale = 0.68;
                                        rotateY = 32;
                                        zIndex = 10;
                                        opacity = 0.25;
                                        filterBlur = 'blur(1.2px)';
                                    } else if (offset === 2) {
                                        xPercent = 122;
                                        scale = 0.68;
                                        rotateY = -32;
                                        zIndex = 10;
                                        opacity = 0.25;
                                        filterBlur = 'blur(1.2px)';
                                    } else {
                                        // Any extra cards beyond ±2 (offsets ±3, ±4...) stay smoothly hidden offstage
                                        xPercent = offset < 0 ? -160 : 160;
                                        scale = 0.55;
                                        rotateY = offset < 0 ? 40 : -40;
                                        zIndex = 0;
                                        opacity = 0;
                                        filterBlur = 'blur(4px)';
                                    }
                                } else {
                                    if (offset === 0) {
                                        xPercent = 0;
                                        scale = 1;
                                        rotateY = 0;
                                        zIndex = 30;
                                        opacity = 1;
                                        filterBlur = 'blur(0px)';
                                    } else if (offset === -1) {
                                        xPercent = -58;
                                        scale = 0.83;
                                        rotateY = 22; // Faces inward towards center
                                        zIndex = 20;
                                        opacity = 0.72;
                                        filterBlur = 'blur(0.5px)';
                                    } else if (offset === 1) {
                                        xPercent = 58;
                                        scale = 0.83;
                                        rotateY = -22; // Faces inward towards center
                                        zIndex = 20;
                                        opacity = 0.72;
                                        filterBlur = 'blur(0.5px)';
                                    } else if (offset === -2) {
                                        xPercent = -105;
                                        scale = 0.68;
                                        rotateY = 36;
                                        zIndex = 10;
                                        opacity = 0.35;
                                        filterBlur = 'blur(1.2px)';
                                    } else if (offset === 2) {
                                        xPercent = 105;
                                        scale = 0.68;
                                        rotateY = -36;
                                        zIndex = 10;
                                        opacity = 0.35;
                                        filterBlur = 'blur(1.2px)';
                                    } else {
                                        // Any extra cards beyond ±2 (offsets ±3, ±4...) stay smoothly hidden offstage
                                        xPercent = offset < 0 ? -150 : 150;
                                        scale = 0.55;
                                        rotateY = offset < 0 ? 45 : -45;
                                        zIndex = 0;
                                        opacity = 0;
                                        filterBlur = 'blur(4px)';
                                    }
                                }

                                return (
                                    <motion.div
                                        key={t.id || idx}
                                        onClick={() => {
                                            if (!isCenter && Math.abs(offset) <= 2) handleSelectTestimonial(idx);
                                        }}
                                        animate={{
                                            x: `${xPercent}%`,
                                            scale: scale,
                                            rotateY: rotateY,
                                            opacity: opacity,
                                            zIndex: zIndex,
                                            filter: filterBlur,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 24,
                                        }}
                                        className={`absolute w-[82%] xs:w-[84%] sm:w-full max-w-[540px] rounded-3xl bg-white dark:bg-slate-900 border-2 transition-all overflow-hidden ${Math.abs(offset) > 2 ? 'pointer-events-none' : ''
                                            } ${isCenter
                                                ? 'p-4 sm:p-7 border-sky-400 dark:border-sky-500 shadow-2xl shadow-sky-950/15 dark:shadow-black/60 ring-2 ring-sky-200/50 dark:ring-sky-900/50 cursor-default'
                                                : 'p-3.5 sm:p-6 border-slate-200/90 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/40 cursor-pointer hover:opacity-85 hover:border-sky-300 dark:hover:border-sky-500'
                                            }`}
                                        style={{
                                            transformOrigin: 'center center',
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        {/* LinkedIn Top Gradient Accent Bar */}
                                        <div
                                            className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${isCenter
                                                    ? 'from-sky-400 via-[#0077b5] to-blue-600'
                                                    : 'from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700'
                                                }`}
                                        />

                                        {/* Decorative Background Quote Symbol */}
                                        <Quote className="absolute right-4 sm:right-6 top-6 sm:top-8 w-16 h-16 sm:w-24 sm:h-24 text-slate-100 dark:text-slate-800/80 -rotate-12 pointer-events-none -z-0 opacity-80" />

                                        <div className="relative z-10">
                                            {/* LinkedIn Member Header: Photo, Name, Role, and Action */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-3">
                                                    {/* Clickable Profile Photo from LinkedIn */}
                                                    <a
                                                        href={t.linkedInUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            soundFx.playCoin();
                                                        }}
                                                        className="relative group shrink-0"
                                                        title={`View ${t.name} on LinkedIn`}
                                                    >
                                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#0077b5] ring-2 sm:ring-4 ring-blue-50 shadow-md group-hover:scale-105 transition-transform bg-gradient-to-tr from-[#0077b5] to-[#0A66C2] flex items-center justify-center text-white font-game font-bold text-base sm:text-lg">
                                                            {t.profilePicture ? (
                                                                <img
                                                                    src={t.profilePicture}
                                                                    alt={t.name}
                                                                    referrerPolicy="no-referrer"
                                                                    className="w-full h-full object-cover"
                                                                    onError={(e) => {
                                                                        const target = e.target as HTMLElement;
                                                                        target.style.display = 'none';
                                                                    }}
                                                                />
                                                            ) : null}
                                                            <span className="select-none tracking-wider">
                                                                {t.avatarInitials}
                                                            </span>
                                                        </div>
                                                        {/* Floating LinkedIn Badge */}
                                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0077b5] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold font-sans shadow-2xs border border-white">
                                                            in
                                                        </div>
                                                    </a>

                                                    <div className="min-w-0">
                                                        {/* Clickable Name (Redirects to LinkedIn) */}
                                                        <a
                                                            href={t.linkedInUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                soundFx.playCoin();
                                                            }}
                                                            className="text-base sm:text-xl font-bold text-slate-900 dark:text-white font-sans hover:text-[#0077b5] dark:hover:text-sky-400 transition-colors flex items-center gap-1.5 group truncate"
                                                        >
                                                            <span className="truncate">{t.name}</span>
                                                            <ExternalLink className="w-3.5 h-3.5 text-[#0077b5] dark:text-sky-400 opacity-75 group-hover:opacity-100 transition-opacity shrink-0" />
                                                        </a>
                                                        <div className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-sky-400 font-sans truncate">
                                                            {t.role}
                                                        </div>
                                                        <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans truncate">
                                                            {t.studio}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-[10px] sm:text-xs font-sans font-semibold">
                                                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400" />
                                                        <span>Verified</span>
                                                    </span>

                                                    {/* Direct LinkedIn Profile Redirect Button */}
                                                    <a
                                                        href={t.linkedInUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            soundFx.playCoin();
                                                        }}
                                                        className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-[#0077b5] hover:bg-[#005f93] text-white text-[10px] sm:text-xs font-game font-bold tracking-wide transition-all shadow-xs cursor-pointer"
                                                    >
                                                        <span className="font-sans font-bold">in</span>
                                                        <span>View Profile</span>
                                                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Relationship Context */}
                                            <div className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-800/90 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl border border-slate-100 dark:border-slate-700 my-2.5 sm:my-3.5">
                                                &ldquo;{t.relationship}&rdquo;
                                            </div>

                                            {/* LinkedIn Recommendation Comment */}
                                            <div className="relative pl-5 sm:pl-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans py-0.5 sm:py-1 line-clamp-4 xs:line-clamp-5 sm:line-clamp-none">
                                                <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 absolute left-0 top-1 -scale-x-100 opacity-60" />
                                                <p className="font-normal">&ldquo;{t.quote}&rdquo;</p>
                                            </div>
                                        </div>

                                        {/* Footer: Date & Counter (No Endorsed Strengths) */}
                                        <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-sans">
                                            <span className="text-[10px] sm:text-[11px] font-mono-code text-slate-400 dark:text-slate-400">
                                                {t.date}
                                            </span>

                                            <span className="text-xs font-game font-bold text-slate-400 dark:text-slate-400">
                                                [{idx + 1} / {TESTIMONIALS.length}]
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Left and Right Carousel Arrow Buttons */}
                            <button
                                onClick={handlePrevTestimonial}
                                className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-xs border-2 border-slate-200 dark:border-slate-700 hover:border-amber-400 text-slate-700 dark:text-slate-200 hover:text-amber-800 shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 z-40"
                                title="Previous Recommendation"
                            >
                                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                            <button
                                onClick={handleNextTestimonial}
                                className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-xs border-2 border-slate-200 dark:border-slate-700 hover:border-amber-400 text-slate-700 dark:text-slate-200 hover:text-amber-800 shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 z-40"
                                title="Next Recommendation"
                            >
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>

                        {/* Pagination Dots Indicator */}
                        <div className="flex items-center justify-center gap-2 mt-5">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelectTestimonial(idx)}
                                    className={`h-2.5 rounded-full transition-all cursor-pointer ${testimonialIndex === idx ? 'w-8 bg-[#0077b5]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                        }`}
                                    title={`View recommendation ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Official Certificate Document Modal */}
            <CertificateModal
                cert={selectedCert}
                onClose={() => setSelectedCert(null)}
            />
        </section>
    );
};
