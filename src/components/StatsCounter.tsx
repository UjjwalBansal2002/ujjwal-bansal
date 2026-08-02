"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { Award, Smartphone, Download, Star, GitCommit } from "lucide-react";

export default function StatsCounter() {
  const stats = [
    { label: "Years Experience", value: PERSONAL_INFO.experienceYears, icon: Award, color: "text-cyan-400" },
    { label: "Production Apps", value: PERSONAL_INFO.appsDelivered, icon: Smartphone, color: "text-blue-400" },
    { label: "Total Downloads", value: PERSONAL_INFO.totalDownloads, icon: Download, color: "text-purple-400" },
    { label: "Play Store Avg", value: PERSONAL_INFO.playStoreRating, icon: Star, color: "text-amber-400" },
    { label: "GitHub Commits", value: PERSONAL_INFO.githubCommits, icon: GitCommit, color: "text-emerald-400" }
  ];

  return (
    <section className="py-10 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-center group"
              >
                <div className="flex justify-center mb-2">
                  <div className={`p-2.5 rounded-xl bg-slate-800/80 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
