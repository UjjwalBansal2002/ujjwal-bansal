"use client";

import { PERSONAL_INFO, TIMELINE_DATA, PROJECTS_DATA } from "@/data/portfolioData";
import { X, Printer, Mail, Phone, MapPin, Building2, CheckCircle2, GraduationCap, Briefcase, Code2 } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto my-6 space-y-6">
        
        {/* Modal Controls */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono text-slate-950 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-colors shadow-md"
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
        <div id="printable-resume" className="bg-slate-950 p-6 sm:p-10 rounded-2xl border border-slate-800 space-y-6 font-sans text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-base font-bold text-emerald-400 font-mono">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300 font-mono pt-2">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.email}</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.phoneFormatted}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.location}</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400"><FaLinkedin className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn</a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-emerald-400"><FaGithub className="w-3.5 h-3.5 text-white" /> GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">Professional Summary</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{PERSONAL_INFO.summary}</p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-bold">Languages:</span> Kotlin, Java
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-bold">Android:</span> Android SDK, XML, Activities, Fragments, RecyclerView, Material Components
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-bold">Architecture:</span> MVVM, Repository Pattern, Data Binding, View Binding, Modular Architecture
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-bold">Networking:</span> REST APIs, Retrofit, JSON Parsing, Gson, OkHttp
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-bold">Firebase:</span> Firebase Analytics, DebugView, FCM, Crashlytics, Event Tracking
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-bold">SDKs & Tools:</span> Meta SDK, Google Maps, Digio, Glide, Image Cropper, Git, Gradle, ADB
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">Professional Experience</h3>
            {TIMELINE_DATA.filter((t) => t.type === "Experience").map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">{exp.title}</h4>
                    <p className="text-xs text-purple-400 font-semibold">{exp.companyOrOrg}</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">{exp.year}</span>
                </div>
                <div className="space-y-1.5 pl-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">Key Android Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PROJECTS_DATA.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                  <p className="font-bold text-white font-mono">{p.title}</p>
                  <p className="text-slate-400 text-[11px] line-clamp-2">{p.tagline}</p>
                  <p className="text-[10px] text-emerald-400 font-mono">Tech: {p.techStack.slice(0, 4).join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">Education</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TIMELINE_DATA.filter((t) => t.type === "Education").map((edu, idx) => (
                <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-start">
                  <div>
                    <p className="font-bold text-white font-mono">{edu.title}</p>
                    <p className="text-slate-400 text-[11px]">{edu.companyOrOrg}</p>
                  </div>
                  <span className="font-mono text-emerald-400 text-[11px]">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
