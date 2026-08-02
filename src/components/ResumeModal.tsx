"use client";

import { PERSONAL_INFO, TIMELINE_DATA, PROJECTS_DATA } from "@/data/portfolioData";
import { X, Printer, FileDown, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto my-6 space-y-6">
        
        {/* Modal Controls */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors shadow-md"
            >
              <Printer className="w-4 h-4" />
              Print / Save as PDF
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Resume Document */}
        <div id="printable-resume" className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6 font-sans text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white font-mono">{PERSONAL_INFO.name}</h1>
            <p className="text-base font-bold text-cyan-400 font-mono">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono pt-2">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.phone}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">Executive Summary</h3>
            <p className="text-xs leading-relaxed text-slate-300">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Core Technical Competencies */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">Core Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Kotlin & Java (6+ Yrs)</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Jetpack Compose (4+ Yrs)</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Clean Architecture & MVI</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Coroutines & Flow</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Hilt & Dagger 2</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Room DB & SQLite</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Ktor & Retrofit</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● Baseline Profiles & ART</span>
              <span className="p-2 bg-slate-900 rounded border border-slate-800">● CI/CD & Play Console</span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">Professional Experience</h3>
            {TIMELINE_DATA.filter((t) => t.type === "Experience").map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-bold text-white font-mono">{exp.title} — <span className="text-purple-400">{exp.companyOrOrg}</span></h4>
                  <span className="text-xs font-mono text-cyan-400">{exp.year}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">{exp.description}</p>
                <div className="space-y-1 pl-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Flagship Projects */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">Flagship Android Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS_DATA.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <p className="font-bold text-white font-mono">{p.title}</p>
                  <p className="text-slate-400">{p.tagline}</p>
                  <p className="text-[10px] text-cyan-400 font-mono">Tech: {p.techStack.slice(0, 3).join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-1">Education</h3>
            {TIMELINE_DATA.filter((t) => t.type === "Education").map((edu, idx) => (
              <div key={idx} className="flex justify-between text-xs">
                <div>
                  <p className="font-bold text-white font-mono">{edu.title}</p>
                  <p className="text-slate-400">{edu.companyOrOrg}</p>
                </div>
                <span className="font-mono text-cyan-400">{edu.year}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
