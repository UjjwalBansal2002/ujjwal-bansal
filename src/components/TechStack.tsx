"use client";

import { SKILL_GROUPS } from "@/data/portfolioData";
import { Smartphone, Layers, Network, Activity, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Layers,
  Network,
  Activity,
  Wrench
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Categorized Android technologies, architectural practices, SDKs, and engineering tools utilized in production applications.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => {
            const GroupIcon = ICON_MAP[group.iconName] || Smartphone;

            return (
              <div
                key={groupIdx}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-6 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400">
                      <GroupIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills Badges */}
                  <div className="pt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all flex items-center gap-1.5 ${
                          skill.highlight
                            ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300 font-semibold"
                            : "bg-slate-950/90 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        {skill.highlight && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 flex justify-between items-center">
                  <span>{group.skills.length} Competencies</span>
                  <span className="text-emerald-400 font-semibold">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
