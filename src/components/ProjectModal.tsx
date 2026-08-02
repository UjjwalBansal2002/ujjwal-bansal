"use client";

import { Project } from "@/data/portfolioData";
import { X, Play, ExternalLink, Zap, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-y-auto my-8 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-2 inline-block">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="space-y-6 text-slate-300">
          
          {/* Tagline */}
          <p className="text-lg font-medium text-cyan-300 font-sans">
            {project.tagline}
          </p>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">Overview</h4>
            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
          </div>

          {/* Architecture Badge */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-purple-400 shrink-0" />
            <div>
              <p className="text-xs font-mono text-slate-400">Architecture Pattern:</p>
              <p className="text-sm font-bold font-mono text-purple-300">{project.architecture}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-sans p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges Solved */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>Engineering Challenge Solved</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Performance Benchmarks & Metrics */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">Performance Metrics</h4>
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((m, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Case Study */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">Case Study Insights</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800">
              {project.caseStudy}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                Google Play Store
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-white transition-all"
              >
                <FaGithub className="w-4 h-4" />
                View GitHub Code
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
