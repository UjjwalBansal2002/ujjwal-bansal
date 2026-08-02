"use client";

import { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { FolderGit2, Play, ExternalLink, Sparkles, ChevronRight, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Jetpack Compose",
    "FinTech",
    "E-Commerce",
    "AI & System",
    "Open Source",
    "Health & Fitness"
  ];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
            Production Android Showcase (20+ Apps)
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore 20+ Android apps, libraries, and mobile system architectures engineered by Ujjwal Bansal.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-purple-500/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              {/* Project Mock Image */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-cyan-400 font-bold">
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-[10px] font-mono text-slate-950 font-extrabold flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3 fill-slate-950" />
                      FLAGSHIP
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Performance Badge Summary */}
                {project.metrics.length > 0 && (
                  <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1 pt-1">
                    <Zap className="w-3 h-3" />
                    <span>{project.metrics[0]}</span>
                  </div>
                )}

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1 text-xs font-bold font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 text-emerald-400 hover:bg-slate-700 transition-colors"
                        title="Google Play Store"
                      >
                        <Play className="w-3.5 h-3.5 fill-emerald-400" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
