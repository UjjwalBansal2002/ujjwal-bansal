"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { Search, X, FolderGit2, User, Send, FileDown } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResumeModal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { title: "Download Resume", action: () => { onClose(); onOpenResumeModal(); }, icon: FileDown },
    { title: "Contact Ujjwal Bansal", href: "#contact", icon: Send },
    { title: "View Featured Projects", href: "#projects", icon: FolderGit2 },
    { title: "Explore Skills & Experience", href: "#about", icon: User }
  ];

  const matchingProjects = PROJECTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[999999] flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden space-y-4 p-4 sm:p-6 text-slate-100">
        
        {/* Search Bar Input */}
        <div className="relative flex items-center border-b border-slate-800 pb-3">
          <Search className="w-5 h-5 text-emerald-400 ml-2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, technologies, or type a command..."
            className="w-full px-3 py-2 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
          
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2">Quick Navigation</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickActions.map((act, idx) => {
                  const Icon = act.icon;
                  if (act.href) {
                    return (
                      <Link
                        key={idx}
                        href={act.href}
                        onClick={onClose}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-emerald-500/50 flex items-center gap-3 text-xs font-mono text-slate-200 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <span>{act.title}</span>
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={act.action}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-emerald-500/50 flex items-center gap-3 text-xs font-mono text-slate-200 transition-colors text-left cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-emerald-400" />
                      <span>{act.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Matching Projects Results */}
          {matchingProjects.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2">Projects ({matchingProjects.length})</p>
              <div className="space-y-1">
                {matchingProjects.map((project) => (
                  <Link
                    key={project.id}
                    href="#projects"
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:bg-slate-800/60 flex justify-between items-center text-xs font-mono text-white transition-colors"
                  >
                    <span>{project.title}</span>
                    <span className="text-[10px] text-emerald-400">{project.category}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">ESC</kbd> to exit</span>
          <span>Command Palette Active</span>
        </div>

      </div>
    </div>
  );
}
