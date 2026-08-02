"use client";

import Link from "next/link";
import { BLOG_POSTS_DATA, BlogPost } from "@/data/portfolioData";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 border-t border-slate-800/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Android Engineering Blog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
              Technical Insights & Deep Dives
            </h2>
            <p className="text-slate-400 text-base">
              Articles on Modern Android Development, Jetpack Compose performance, and Clean Architecture.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-cyan-400 hover:border-cyan-500 hover:text-cyan-300 transition-all self-start md:self-auto"
          >
            <span>Explore All Blog Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post: BlogPost) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
