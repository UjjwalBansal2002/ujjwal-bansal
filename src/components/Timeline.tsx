"use client";

import { TIMELINE_DATA } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Professional background as an Android Developer at AppSquadz Software Pvt. Ltd., Noida, along with academic degree qualifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {TIMELINE_DATA.map((item, idx) => {
            const isExperience = item.type === "Experience";

            return (
              <div
                key={idx}
                className="relative pl-8 sm:pl-10 border-l-2 border-slate-800 group hover:border-emerald-500/60 transition-colors"
              >
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[17px] top-0 p-2 rounded-full bg-slate-950 border-2 border-slate-800 text-emerald-400 group-hover:border-emerald-500 group-hover:bg-emerald-950/40 transition-all">
                  {isExperience ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                  )}
                </div>

                {/* Timeline Card Content */}
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4 group-hover:border-slate-700 transition-all">
                  
                  {/* Card Header Info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-wider">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-purple-400 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        {item.companyOrOrg}
                      </p>
                    </div>

                    <div className="text-right space-y-1">
                      <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.year}</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-500 flex items-center justify-end gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Contributions & Achievements Bullet Points */}
                  {item.achievements.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {isExperience ? "Key Responsibilities & Contributions:" : "Highlights:"}
                      </p>
                      <div className="space-y-1.5">
                        {item.achievements.map((achieve, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{achieve}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Used Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {item.techUsed.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-[10px] font-mono text-slate-300 border border-slate-800"
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
