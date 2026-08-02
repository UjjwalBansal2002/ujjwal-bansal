"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Download, Mail, Sparkles, Smartphone, Code2, Layers, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Dynamic Background Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/20 via-purple-600/15 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headlines, Availability & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availabilityStatus}</span>
            </div>

            {/* Main Greeting & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                Hi, I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Ujjwal Bansal
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold font-mono text-purple-400 flex items-center gap-2">
                <Smartphone className="w-7 h-7 text-emerald-400 inline" />
                Native Android Developer
              </h2>
            </div>

            {/* Impact Value Statement */}
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              {PERSONAL_INFO.headline}
            </p>

            {/* Current Position Tag */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-xl flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Current Professional Role</p>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {PERSONAL_INFO.currentRole}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              {/* Button 1: View My Projects */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: Download Resume */}
              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 border border-purple-500/40 hover:bg-slate-800 hover:border-purple-400 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Button 4: View GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-slate-300 bg-slate-950 border border-slate-800 hover:text-white hover:border-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4 text-white" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Quick Links / Socials */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>

          </div>

          {/* Right Side: Android Interactive Mockup & Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Glow Accent behind phone */}
              <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-emerald-500 to-purple-600 opacity-40 blur-xl animate-pulse-slow pointer-events-none" />

              {/* Mobile Device Mockup Frame */}
              <div className="relative rounded-[38px] bg-slate-950 border-4 border-slate-800 p-4 shadow-2xl space-y-4">
                
                {/* Top Phone Notch / Camera Bar */}
                <div className="flex justify-between items-center px-4 pt-1">
                  <span className="text-[10px] font-mono text-slate-400">Android Studio</span>
                  <div className="w-16 h-3 bg-slate-900 rounded-full flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Kotlin</span>
                </div>

                {/* Simulated Android App UI Screen */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 font-mono">
                  
                  {/* App Header Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white">MainActivity.kt</p>
                        <p className="text-[9px] text-slate-400">com.ujjwal.android</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      MVVM
                    </span>
                  </div>

                  {/* Code Snippet / Architecture Card */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[10px] space-y-1.5 text-slate-300">
                    <p className="text-purple-400 font-bold">class MainActivity : AppCompatActivity() &#123;</p>
                    <p className="pl-3 text-cyan-300">override fun onCreate() &#123;</p>
                    <p className="pl-6 text-slate-300">binding = ActivityMainBinding.inflate(layoutInflater)</p>
                    <p className="pl-6 text-emerald-400">setupViewModel()</p>
                    <p className="pl-6 text-emerald-400">observeApiResponse()</p>
                    <p className="pl-3 text-cyan-300">&#125;</p>
                    <p className="text-purple-400 font-bold">&#125;</p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] space-y-1">
                      <div className="text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Encrypted REST</span>
                      </div>
                      <p className="text-[9px] text-slate-400">AES-CBC Payloads</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] space-y-1">
                      <div className="text-purple-400 flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        <span>Reusable UI</span>
                      </div>
                      <p className="text-[9px] text-slate-400">Custom Views & XML</p>
                    </div>
                  </div>

                  {/* Bottom Log Indicator */}
                  <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[9px] text-emerald-300 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Build Successful: 0 Errors • Production Ready</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
