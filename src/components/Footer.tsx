"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Mail, Rss, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03050f] border-t border-slate-800/80 pt-16 pb-12 z-20 overflow-hidden">
      
      {/* Top Animated Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-bold text-[#f3f4f6] font-mono">
                  UB
                </div>
              </div>
              <span className="font-bold text-lg text-white font-mono">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Senior Android Developer & Mobile App Architect building high-scale, resilient mobile applications with Jetpack Compose, Kotlin, and Clean Architecture.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <Link
                href="/feed.xml"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                title="RSS Feed"
              >
                <Rss className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sitemap Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-3">
              <p className="text-slate-200 font-bold uppercase tracking-wider">Navigation</p>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#about" className="hover:text-cyan-400">About Me</Link></li>
                <li><Link href="#tech-stack" className="hover:text-cyan-400">Tech Stack</Link></li>
                <li><Link href="#projects" className="hover:text-cyan-400">Projects (20+)</Link></li>
                <li><Link href="#timeline" className="hover:text-cyan-400">Timeline</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-slate-200 font-bold uppercase tracking-wider">Resources</p>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#services" className="hover:text-cyan-400">Services</Link></li>
                <li><Link href="#open-source" className="hover:text-cyan-400">Open Source</Link></li>
                <li><Link href="/blog" className="hover:text-cyan-400">SEO Blog</Link></li>
                <li><Link href="#contact" className="hover:text-cyan-400">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Quick Contact & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500 transition-all shadow-md"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
            <div className="text-xs font-mono text-slate-500 md:text-right space-y-1">
              <p>Designed with Apple + Linear aesthetic</p>
              <p className="text-cyan-400">100% Core Web Vitals Optimized</p>
            </div>
          </div>

        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-slate-500 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Ujjwal Bansal. All rights reserved.</p>
          <p>Engineered with Next.js 15, TypeScript & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
