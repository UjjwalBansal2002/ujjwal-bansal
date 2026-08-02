"use client";

import { useState } from "react";
import { TESTIMONIALS_DATA, Testimonial } from "@/data/portfolioData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeItem: Testimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Client & Team Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
            What Engineering Leaders Say
          </h2>
        </div>

        {/* Testimonial Slider Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl space-y-8">
          
          <Quote className="w-12 h-12 text-cyan-500/20 absolute top-8 right-8" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            {[...Array(activeItem.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Testimonial Quote Text */}
          <p className="text-base sm:text-xl text-slate-200 font-sans leading-relaxed italic">
            &ldquo;{activeItem.text}&rdquo;
          </p>

          {/* Author Details */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <img
                src={activeItem.avatar}
                alt={activeItem.name}
                className="w-14 h-14 rounded-2xl object-cover border border-slate-700 shadow-md"
              />
              <div>
                <h4 className="text-base font-bold text-white font-mono">{activeItem.name}</h4>
                <p className="text-xs text-cyan-400 font-mono">{activeItem.role} at {activeItem.company}</p>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
