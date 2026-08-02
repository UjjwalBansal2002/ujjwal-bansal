"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { CheckCircle2, Cpu, Zap, Shield, Sparkles, Layers } from "lucide-react";

export default function About() {
  const corePillars = [
    {
      title: "Clean Architecture & Modularization",
      description: "Decoupled feature-by-layer structures with strict domain models ensuring 100% unit testability and fast Gradle build caching.",
      icon: Layers,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Jetpack Compose & 120 FPS UI",
      description: "Zero-XML layouts with custom Canvas graphics, physics spring animations, and state stability optimization.",
      icon: Zap,
      color: "from-cyan-400 to-purple-500"
    },
    {
      title: "Performance & Cold Launch Profiling",
      description: "Elimination of memory leaks via LeakCanary, Baseline Profiles for ART Ahead-Of-Time compilation, and zero dropped scroll frames.",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Offline-First Resiliency",
      description: "Robust data sync engines leveraging Room SQLite persistence, Coroutine Mutex locking, and Ktor/Retrofit interceptors.",
      icon: Shield,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const techBadges = [
    "Kotlin", "Java", "Jetpack Compose", "Coroutines & Flow", "Hilt / Dagger 2",
    "Room Database", "Firebase Suite", "REST APIs & Ktor", "Retrofit", "MVVM & MVI",
    "Material Design 3", "WorkManager", "Paging 3", "CameraX & ML Kit", "Unit & UI Testing"
  ];

  return (
    <section id="about" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
            Architecting Resilient Mobile Experiences
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Building software that feels like magic on the outside and runs like clockwork under the hood.
          </p>
        </div>

        {/* Narrative & Profile Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              I am <strong className="text-white font-mono">{PERSONAL_INFO.name}</strong>, a Senior Android Developer & App Architect with over <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.experienceYears} of hands-on experience</span> engineering mission-critical mobile software.
            </p>
            <p className="leading-relaxed">
              My engineering philosophy revolves around <strong>Clean Code</strong>, <strong>Robust Architecture</strong>, and <strong>Relentless Performance Optimization</strong>. Whether it&apos;s eliminating micro-stutters during heavy list scrolling, implementing hardware-backed biometric encryption for FinTech apps, or modularizing legacy Android apps, I focus on delivering enterprise-grade quality.
            </p>
            <p className="leading-relaxed">
              I believe that a truly great mobile application isn&apos;t just visually stunning — it must be memory-efficient, responsive under poor network conditions, and maintainable for engineering teams as the codebase grows to hundreds of thousands of lines.
            </p>

            {/* Badges Grid */}
            <div className="pt-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Core Expertise & Frameworks:</h4>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-2xl" />
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-mono font-bold text-2xl text-cyan-400">
                    UB
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.title}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs font-mono border-t border-slate-800">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Language:</span>
                  <span className="text-emerald-400 font-bold">Kotlin 100%</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">UI Toolkit:</span>
                  <span className="text-cyan-400 font-bold">Jetpack Compose</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Architecture:</span>
                  <span className="text-purple-400 font-bold">Clean Arch + MVI</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Location / Status:</span>
                  <span className="text-white font-bold">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900/90 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-0.5 mb-4 group-hover:scale-105 transition-transform`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white font-mono mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
