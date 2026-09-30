import React from 'react';
import { createPortal } from 'react-dom';
import { DEVELOPER_INFO, CAREER_ROADMAP, CERTIFICATIONS } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, CheckCircle, FileText, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audioFx';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  const handleDownloadATS = () => {
    soundFx.playCoin();
    const resumeText = `
DEVESH BENIWAL
${DEVELOPER_INFO.title}
${DEVELOPER_INFO.location} | Email: ${DEVELOPER_INFO.email} | Phone: ${DEVELOPER_INFO.phone}
Portfolio: ${DEVELOPER_INFO.portfolioUrl} | LinkedIn: ${DEVELOPER_INFO.linkedin}
8+ Years Production Game Development Experience | B.Tech Computer Science (Honours)

PROFESSIONAL SUMMARY
${DEVELOPER_INFO.summary}

CORE TECHNICAL COMPETENCIES
- Languages: C#, JavaScript, TypeScript, Node.js
- Engine & Runtimes: Unity 3D / 2D (URP/HDRP), WebGL, Android, iOS, PC Standalone
- Multiplayer & Netcode: Photon Fusion (v1 & v2), Photon PUN, Colyseus, Socket.IO, WebSockets, WebRTC, Vivox
- Backend & Cloud: Node.js, Express.js, MongoDB, Firebase Suite (Firestore, Auth, Storage, Messaging), Ubuntu Cloud
- Hardware & Spatial: Leap Motion Hand Tracking, Microsoft Kinect, Arduino Sensors, ARFoundation (ARCore/ARKit)
- Optimization: 30% Physics Optimization, 20% Draw Calls Reduction, Memory Profiler, Frame Debugger

EXPERIENCE
${CAREER_ROADMAP.map(
  (m) => `
${m.role} - ${m.company} (${m.year})
Location: ${m.location}
${m.summary}
Key Achievements:
${m.keyAchievements.map((a) => `- ${a}`).join('\n')}
`
).join('\n')}

CERTIFICATIONS & HONORS
${CERTIFICATIONS.map((c) => `- ${c.title} (${c.issuer}, ${c.year})`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Devesh_Beniwal_Senior_Unity_Developer_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

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
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border-2 border-sky-300 dark:border-sky-500/70 rounded-3xl shadow-2xl dark:shadow-black/70 my-auto overflow-hidden text-slate-800 dark:text-slate-100 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sky-100 dark:border-slate-800 bg-sky-50/70 dark:bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-blue-600 dark:text-sky-400" />
            <span className="text-xs font-game font-bold text-slate-800 dark:text-white uppercase tracking-wider">
              DEVESH_BENIWAL_RESUME_2026.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-game font-bold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownloadATS}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-game font-bold uppercase rounded-xl btn-game-yellow cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-amber-950" />
              <span>Download ATS File</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 space-y-7 font-sans">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 className="text-3xl font-black font-game text-slate-900 dark:text-white tracking-tight">
              {DEVELOPER_INFO.name}
            </h2>
            <div className="text-sm font-bold text-blue-600 dark:text-sky-400 font-display mt-0.5">
              {DEVELOPER_INFO.title}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-sans mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                {DEVELOPER_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                {DEVELOPER_INFO.email}
              </span>
              <span>·</span>
              <span className="text-amber-800 dark:text-amber-400 font-bold font-game">
                8+ Years Continuous Production Experience
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-game text-blue-700 dark:text-sky-400 font-bold mb-2 uppercase tracking-wider">
              Executive Profile
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-normal">
              {DEVELOPER_INFO.summary}
            </p>
          </div>

          {/* Core Technical Matrix */}
          <div>
            <h3 className="text-xs font-game text-blue-700 dark:text-sky-400 font-bold mb-3 uppercase tracking-wider">
              Technical Skill Matrix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white mb-1 font-display">Architecture & C# Engine Core</div>
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  C# OOP, Decoupled Game Design Patterns, Unity 2022/6, State Machines, Object Pooling, Clean Architecture
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white mb-1 font-display">Multiplayer Netcode & WebRTC</div>
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Photon Fusion (v1 & v2), Photon PUN, Colyseus, Socket.IO, WebSockets, WebRTC Live Video Calling, Vivox
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white mb-1 font-display">Backend, Cloud & WebGL</div>
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Node.js, Express, MongoDB, Firebase Suite (Firestore, Auth, Storage, Crashlytics), Ubuntu Cloud, WebGL JS Bridge
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700">
                <div className="font-bold text-slate-900 dark:text-white mb-1 font-display">Optimization, AR/VR & Hardware</div>
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  30% Physics Optimization, 20% Draw Calls Cut, ARFoundation, Leap Motion Hand Tracking, Kinect, Arduino
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-game text-blue-700 dark:text-sky-400 font-bold mb-4 uppercase tracking-wider">
              Production Experience (8 Years)
            </h3>
            <div className="space-y-5">
              {CAREER_ROADMAP.map((m) => (
                <div key={m.year} className="space-y-1.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
                      {m.role} <span className="text-blue-600 dark:text-sky-400 font-medium">@ {m.company}</span>
                    </div>
                    <div className="text-xs font-game text-amber-800 dark:text-amber-400 font-bold">{m.year}</div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">{m.summary}</p>
                  <ul className="space-y-1.5 pl-1 pt-1">
                    {m.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications */}
          <div>
            <h3 className="text-xs font-game text-blue-700 dark:text-sky-400 font-bold mb-3 uppercase tracking-wider">
              Verified Certifications & Accolades
            </h3>
            <div className="space-y-2">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between text-xs p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-sans"
                >
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{c.title}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {c.issuer}</span>
                  </div>
                  <span className="font-game text-amber-700 dark:text-amber-400 font-bold">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
