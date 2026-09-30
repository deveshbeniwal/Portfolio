import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Gamepad2, Play, Sparkles, Star } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

export const ProjectsSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filters = [
        { id: 'all', label: `All Titles (${PROJECTS.length})` },
        { id: 'multiplayer', label: 'Multiplayer & Netcode' },
        { id: 'sports', label: 'Action & Physics' },
        { id: 'arvr', label: 'AR & Hardware' },
        { id: 'casual', label: 'Mobile & Casual' },
    ];

    const filteredProjects = PROJECTS.filter((proj) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'multiplayer')
            return (
                proj.category === 'multiplayer' ||
                ['anarchy-warzone', 'teenpatti-hangout', 'headball-soccer', 'ludo-samrat', 'fourplay-chess'].includes(proj.id)
            );
        if (activeFilter === 'sports')
            return (
                proj.category === 'sports' ||
                ['pistol-duel-3d', 'khokho-world-cup', 'anarchy-warzone', 'headball-soccer', 'fourplay-chess'].includes(proj.id)
            );
        if (activeFilter === 'arvr')
            return (
                proj.category === 'arvr' ||
                ['duckhunt-ar-hardware', 'augmented-reality-labs', 'arduino-unity-hardware'].includes(proj.id)
            );
        if (activeFilter === 'casual')
            return (
                proj.category === 'casual' ||
                ['akiro-circle-game', 'ludo-samrat', 'surf-sharks', 'khokho-world-cup', 'pistol-duel-3d'].includes(proj.id)
            );
        return true;
    });

    const handleOpenProject = (project: Project) => {
        soundFx.playCoin();
        setSelectedProject(project);
    };

    return (
        <section id="projects" className="relative py-16 sm:py-24 border-t-2 border-sky-100 dark:border-slate-800 bg-gradient-to-b from-transparent via-sky-50/50 dark:via-slate-900/50 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300 text-xs font-game font-bold uppercase tracking-wider mb-2">
                        <Gamepad2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>STAGE 4: SHIPPED COMMERCIAL TITLES</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-black font-game text-slate-800 dark:text-white tracking-tight">
                        Shipped Games & Arcade Showcase
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 font-sans leading-relaxed">
                        From vehicle and helicopter physics in Anarchy Warzone to the official KhoKho 3D sports simulation, live WebRTC video card tables, and Leap Motion hardware games.
                    </p>
                </motion.div>

                {/* Filter Bar */}
                <div className="flex items-center gap-2 mb-8 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border-2 border-sky-200 dark:border-slate-800 overflow-x-auto shadow-sm">
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => {
                                soundFx.playClick();
                                setActiveFilter(f.id);
                            }}
                            className={`px-4 py-2 text-xs font-game font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap cursor-pointer ${activeFilter === f.id
                                    ? 'btn-game-blue shadow-sm'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-sky-50 dark:hover:bg-slate-800'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="group rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 overflow-hidden flex flex-col justify-between shadow-md shadow-slate-200/50 dark:shadow-black/40 hover:shadow-xl transition-all duration-300"
                        >
                            <div>
                                {/* Image Preview with Game Badges */}
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                    {/* Badges Overlay */}
                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-game">
                                        <span className="px-2.5 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-sky-800 dark:text-sky-300 font-bold border border-sky-200 dark:border-slate-700 shadow-sm">
                                            {project.genre}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-xl bg-amber-400 text-amber-950 font-bold shadow-sm flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-current" />
                                            <span>{project.metrics[0].value}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="text-xl sm:text-2xl font-black font-game text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-game font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/70 px-2 py-0.5 rounded-md border border-amber-300 dark:border-amber-700">
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-6 pt-0">
                                <button
                                    onClick={() => handleOpenProject(project)}
                                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-game font-bold tracking-wider uppercase rounded-2xl btn-game-yellow cursor-pointer"
                                >
                                    <Play className="w-3.5 h-3.5 fill-current text-amber-950" />
                                    <span>INSPECT ARCHITECTURE & NETCODE</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Deep Dive Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};
