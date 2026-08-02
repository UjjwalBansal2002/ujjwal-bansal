"use client";

import { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { FolderGit2, ExternalLink, BookOpen, Layers, CheckCircle2, ArrowRight, Code2, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Android Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world native Android applications engineered with Kotlin, XML layouts, MVVM architecture, encrypted payloads, and third-party integrations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md text-[10px] font-mono font-bold text-emerald-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Tag */}
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-purple-300 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{project.architecture}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 text-[10px] font-mono text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List (Top 3) */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Key Highlights:</p>
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons (Only display button if corresponding URL exists) */}
              <div className="p-6 pt-0 space-y-2">
                <div className="flex gap-2">
                  {/* Case Study Modal Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-xl font-mono text-xs font-bold text-white bg-slate-950 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Case Study</span>
                  </button>

                  {/* GitHub Repo Button (Only rendered if URL provided) */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl font-mono text-xs font-bold text-slate-300 bg-slate-950 border border-slate-800 hover:text-white hover:border-purple-500/40 transition-all flex items-center justify-center gap-1.5"
                      title="View GitHub Repository"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {/* Live Application Button (Only rendered if URL provided) */}
                  {(project.playStoreUrl || project.liveUrl) && (
                    <a
                      href={project.playStoreUrl || project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-1.5"
                      title="Live Demo / Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
