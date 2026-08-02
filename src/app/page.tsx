"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import OpenSource from "@/components/OpenSource";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ResumeModal from "@/components/ResumeModal";

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

      {/* Stats Counter Bar */}
      <StatsCounter />

      {/* About Section */}
      <About />

      {/* Tech Stack Grid */}
      <TechStack />

      {/* Projects Showcase (20+ Apps) */}
      <Projects />

      {/* Timeline Section */}
      <Timeline />

      {/* Services Section */}
      <Services />

      {/* Open Source & GitHub Section */}
      <OpenSource />

      {/* Testimonials Slider */}
      <Testimonials />

      {/* SEO Blog System Preview */}
      <BlogSection />

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
    </main>
  );
}
