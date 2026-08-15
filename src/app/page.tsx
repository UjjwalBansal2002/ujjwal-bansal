"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import EngineeringHighlights from "@/components/EngineeringHighlights";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ResumeModal from "@/components/ResumeModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050816] text-[#f3f4f6]">
      {/* Top Navbar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* About Section */}
      <About />

      {/* Technical Skills Section */}
      <TechStack />

      {/* Engineering Highlights / Problems I Solve */}
      <EngineeringHighlights />

      {/* Featured Projects Showcase */}
      <Projects />

      {/* Experience & Education Timeline */}
      <Timeline />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Command Palette Overlay (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTop />
    </main>
  );
}
