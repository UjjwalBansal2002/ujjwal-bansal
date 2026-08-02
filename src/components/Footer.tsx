"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Mail, Smartphone, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03050f] border-t border-slate-800/80 pt-16 pb-12 z-20 overflow-hidden">
      
      {/* Top Animated Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-bold text-[#f3f4f6] font-mono">
                  UB
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-white font-mono">{PERSONAL_INFO.name}</span>
                <p className="text-xs text-emerald-400 font-mono">Native Android Developer</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-md">
              Android Developer with hands-on experience building production mobile applications using Kotlin, XML, MVVM Architecture, REST APIs, and Firebase at AppSquadz Software Pvt. Ltd., Noida.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-colors"
                title="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-3 text-xs font-mono space-y-3">
            <p className="text-slate-200 font-bold uppercase tracking-wider">Quick Navigation</p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#about" className="hover:text-emerald-400 transition-colors">About Me</Link></li>
              <li><Link href="#skills" className="hover:text-emerald-400 transition-colors">Technical Skills</Link></li>
              <li><Link href="#highlights" className="hover:text-emerald-400 transition-colors">Problems I Solve</Link></li>
              <li><Link href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</Link></li>
              <li><Link href="#experience" className="hover:text-emerald-400 transition-colors">Experience & Education</Link></li>
              <li><Link href="#contact" className="hover:text-emerald-400 transition-colors">Contact Me</Link></li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-emerald-500 transition-all shadow-md"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-emerald-400" />
            </button>
            <div className="text-xs font-mono text-slate-500 md:text-right space-y-1">
              <p className="text-emerald-400">Production Ready Android Code</p>
              <p>Performance & SEO Optimized</p>
            </div>
          </div>

        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Ujjwal Bansal. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
