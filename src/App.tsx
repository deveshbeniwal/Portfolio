import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ResumeHireSection } from './components/ResumeHireSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PlayfulGame3DBackground } from './components/PlayfulGame3DBackground';
import { ZipperLoadingScreen } from './components/ZipperLoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [coins, setCoins] = useState<number>(1250);

  const handleAddCoin = () => {
    setCoins((prev) => prev + 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] via-[#f0fdf4] to-[#fefce8] dark:from-[#090d16] dark:via-[#0c1222] dark:to-[#070b14] text-slate-800 dark:text-slate-100 relative selection:bg-amber-300 selection:text-slate-900 font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* Animated Unzipping Loading Screen on Initial Load (plays for >= 2 seconds) */}
      {isLoading && (
        <ZipperLoadingScreen
          minDurationMs={2200}
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* Immersive Bright 3D Game World with Floating Islands, Sun, Clouds, Collectible Coins */}
      <PlayfulGame3DBackground onCollectCoin={handleAddCoin} />

      {/* Top Game Navigation HUD Bar (Coins removed from top bar) */}
      <Navigation
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Game Stages & Quests */}
      <main className="relative z-10">
        {/* Stage 1: Character Select & Hero with Integrated 10-15s Recruiter Fast Scan */}
        <HeroSection
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onAddCoin={handleAddCoin}
        />

        {/* Stage 2: Technical Skill Tree */}
        <SkillsSection />

        {/* Stage 3: 8-Year Career Quest Roadmap */}
        <RoadmapTimeline />

        {/* Stage 4: Shipped Commercial Titles & Arcade Showcase */}
        <ProjectsSection />

        {/* Stage 5: Trophy Hall & Verified Certifications */}
        <CertificationsSection />

        {/* Stage 6: Quest Board & Talent Dispatch Hub */}
        <ResumeHireSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Stage 7: Comms Tavern & Direct Transmitter */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* In-Browser Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
