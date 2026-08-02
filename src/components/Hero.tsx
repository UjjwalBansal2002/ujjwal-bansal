"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import PhoneCanvas from "./PhoneCanvas";
import { FileDown, Sparkles, FolderGit2, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import confetti from "canvas-confetti";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const roles = PERSONAL_INFO.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === targetRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(targetRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenResumeModal();
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Typography & Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 backdrop-blur-md shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Senior Roles & Mobile Architecture Consulting</span>
            </div>

            {/* Main Title Heading */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-mono text-slate-400 tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-mono leading-none">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Ujjwal Bansal
                </span>
              </h1>
              
              {/* Dynamic Auto-Typing Roles */}
              <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-4xl font-bold text-gradient-cyan font-mono">
                  {displayText}
                </span>
                <span className="w-1 h-8 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Narrative Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Senior Android Developer with <span className="text-cyan-400 font-semibold">6+ years of experience</span> crafting high-performance mobile apps used by millions. Specialist in <span className="text-purple-400 font-semibold">Jetpack Compose</span>, <span className="text-blue-400 font-semibold">Clean Architecture</span>, and <span className="text-emerald-400 font-semibold">Kotlin Coroutines & Flow</span>.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              
              {/* Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </button>

              {/* View Projects Button */}
              <Link
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:border-cyan-500/50 hover:text-white transition-all shadow-lg"
              >
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                View Projects
              </Link>

              {/* Hire Me Button */}
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-purple-950/40 border border-purple-500/40 rounded-xl hover:bg-purple-900/50 hover:text-white transition-all shadow-lg"
              >
                <Send className="w-4 h-4 text-purple-400" />
                Hire Me
              </Link>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 text-slate-400 border-t border-slate-800/80 max-w-md mx-auto lg:mx-0">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Phone Interactive Display */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
