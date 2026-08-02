"use client";

import { PROBLEMS_SOLVED_DATA } from "@/data/portfolioData";
import { Smartphone, ShieldAlert, Bug, Lock, BarChart3, CheckSquare, Sparkles, Terminal, Code, Cpu } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  ShieldAlert,
  Bug,
  Lock,
  BarChart3,
  CheckSquare
};

export default function EngineeringHighlights() {
  return (
    <section id="highlights" className="py-24 border-t border-slate-800/80 relative z-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Problems I Solve
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world mobile engineering challenges resolved through clean Kotlin architecture, lifecycle safety, and production-ready integrations.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_SOLVED_DATA.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Code;

            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/40 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 relative z-10">
                  <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.impact}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
