"use client";

import { TIMELINE_DATA, TimelineItem } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Award, GitBranch, MapPin, CheckCircle2 } from "lucide-react";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A chronological timeline of engineering leadership, impactful Android projects, and academic achievements.
          </p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative max-w-4xl mx-auto space-y-12">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 pointer-events-none opacity-40" />

          {TIMELINE_DATA.map((item: TimelineItem, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                
                {/* Timeline Center Node Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30">
                  {item.type === "Education" ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : item.type === "Award" ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>

                {/* Timeline Content Card */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-3">
                  
                  {/* Badge & Year */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono font-bold text-cyan-400">
                      {item.year}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {item.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-mono font-medium">
                      {item.companyOrOrg}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Achievements Bullet points */}
                  <div className="space-y-1.5 pt-2">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-[11px] font-sans text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Used Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {item.techUsed.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
