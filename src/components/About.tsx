"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { CheckCircle2, Smartphone, Code2, Layers, Cpu, GitBranch, ShieldCheck, Terminal } from "lucide-react";

export default function About() {
  const HIGHLIGHTS = [
    "Convert UI designs into responsive Android layouts",
    "Integrate secure REST APIs & JSON payloads",
    "Build reusable Android components & custom views",
    "Handle encrypted API responses (AES-CBC)",
    "Implement Firebase Analytics & Meta App Events",
    "Debug complex lifecycle & crash issues",
    "Improve application performance & memory consumption",
    "Develop complete multi-role user workflows",
    "Collaborate in Agile teams using Git & GitHub",
    "Maintain stable debug & release builds"
  ];

  const PLATFORMS_EXPERIENCE = [
    { title: "Astrology Applications", desc: "Birth details picker, horoscopes, matchmaking, Panchang & subscriptions" },
    { title: "AI Chat Experiences", desc: "Voice recognition via SpeechRecognizer & ElevenLabs Text-to-Speech" },
    { title: "Multi-Role Vendor Platforms", desc: "Role-based flows for Vendors, Employees, Third-Parties & Customers" },
    { title: "Career Assessment Systems", desc: "Multi-step paginated forms, validation, and AWS S3 document uploads" },
    { title: "Customer Applications", desc: "Dynamic dashboards, glassmorphism UI, ViewPager2 carousels & bottom sheets" },
    { title: "Astrologer Platforms", desc: "Availability toggles, pricing tiers, transaction logs & bank cheque uploads" }
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering resilient, high-performance native Android applications with Kotlin, MVVM architecture, and production-grade integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Core Experience */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-emerald-400" />
                Native Android Developer
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.aboutBio}
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Current Employment</p>
                <p className="text-sm font-semibold text-white">{PERSONAL_INFO.currentRole}</p>
                <p className="text-xs text-slate-400">Working on production Android applications using Kotlin, XML, MVVM, and REST APIs since November 2025.</p>
              </div>

              {/* Core Strengths Grid */}
              <div className="pt-2">
                <h4 className="text-sm font-mono text-slate-300 font-bold uppercase mb-4 tracking-wider">
                  Technical Execution Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Multi-Domain Application Experience */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Real-World App Domains
              </h3>
              <p className="text-xs text-slate-400">
                Experience building production modules across diverse domains and complex user requirements:
              </p>

              <div className="space-y-3">
                {PLATFORMS_EXPERIENCE.map((domain, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-purple-500/30 transition-colors">
                    <p className="text-xs font-bold text-emerald-300">{domain.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{domain.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
