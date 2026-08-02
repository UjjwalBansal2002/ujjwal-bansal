"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { Star, GitPullRequest, GitCommit, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function OpenSource() {
  const repositories = [
    {
      name: "ComposeMotionKit",
      description: "A production library of 30+ physics-based animations & custom canvas gestures for Jetpack Compose.",
      stars: "2.4k",
      forks: "380",
      language: "Kotlin",
      url: "https://github.com/ujjwalbansal/ComposeMotionKit"
    },
    {
      name: "android-clean-architecture-template",
      description: "Enterprise starter kit with Hilt, Multi-Module Gradle, Jetpack Compose, and pre-configured CI/CD.",
      stars: "1.8k",
      forks: "520",
      language: "Kotlin",
      url: "https://github.com/ujjwalbansal/android-clean-architecture-template"
    },
    {
      name: "KtorInspector",
      description: "Drop-in Ktor HTTP logging interceptor with on-device inspection UI for debugging Android APIs.",
      stars: "900",
      forks: "140",
      language: "Kotlin",
      url: "https://github.com/ujjwalbansal/KtorInspector"
    }
  ];

  const recentCommits = [
    { repo: "ComposeMotionKit", message: "feat(canvas): add spring physics particle emitter modifier", time: "2 hours ago" },
    { repo: "PayPulse-Android", message: "perf(compose): optimize derivedStateOf for transaction list", time: "1 day ago" },
    { repo: "android-clean-architecture", message: "chore(deps): update Kotlin to 2.0.20 & Compose 1.7", time: "3 days ago" }
  ];

  return (
    <section id="open-source" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <FaGithub className="w-3.5 h-3.5" />
            <span>Community & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
            Open Source & GitHub Ecosystem
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Active contributor to the global Android developer community with open-source libraries and templates.
          </p>
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white font-mono">5,100+</p>
            <p className="text-xs text-slate-400">Total GitHub Stars</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <GitPullRequest className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white font-mono">140+</p>
            <p className="text-xs text-slate-400">Merged Pull Requests</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <GitCommit className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white font-mono">500+</p>
            <p className="text-xs text-slate-400">Commits Last Year</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <Code2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-white font-mono">25+</p>
            <p className="text-xs text-slate-400">Public Repositories</p>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {repositories.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-cyan-400 font-mono group-hover:underline">
                    {repo.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-3">
                  <span>★ {repo.stars}</span>
                  <span>⑂ {repo.forks}</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Recent Commits Ticker */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-cyan-400" />
            Live GitHub Commit Stream
          </h4>
          <div className="space-y-2 font-mono text-xs">
            {recentCommits.map((c, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">[{c.repo}]</span>
                  <span className="text-slate-300">{c.message}</span>
                </div>
                <span className="text-slate-500 text-[10px] sm:text-xs mt-1 sm:mt-0">{c.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
