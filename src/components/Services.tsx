"use client";

import { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/portfolioData";
import { Smartphone, Layout, Cpu, Zap, Flame, Play, ArrowRight, CheckCircle2, X, Send } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, any> = {
    Smartphone: Smartphone,
    Layout: Layout,
    Cpu: Cpu,
    Zap: Zap,
    Flame: Flame,
    Play: Play
  };

  return (
    <section id="services" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Specialized Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
            High-Impact Android Engineering Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Consulting, architecture audits, and end-to-end mobile app development tailored for startups and high-growth tech companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const Icon = iconMap[service.icon] || Smartphone;

            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-cyan-400 font-mono">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Deliverables:</p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 text-xs font-mono font-bold text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all shadow-md"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Request Drawer Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                Engineering Service Request
              </span>
              <h3 className="text-2xl font-bold text-white font-mono">
                {selectedService.title}
              </h3>
              <p className="text-xs text-slate-400">{selectedService.tagline}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thank you! Ujjwal will contact you regarding "${selectedService.title}" within 24 hours.`);
                setSelectedService(null);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Project Details / Requirements</label>
                <textarea
                  rows={4}
                  required
                  placeholder={`Describe your app requirements, target timeline, or architectural needs for ${selectedService.title}...`}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
              >
                <Send className="w-4 h-4" />
                Submit Consultation Inquiry
              </button>
            </form>

          </div>
        </div>
      )}
    </section>
  );
}
