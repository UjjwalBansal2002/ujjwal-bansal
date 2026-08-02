import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS_DATA, PERSONAL_INFO } from "@/data/portfolioData";
import { BookOpen, Clock, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Android Engineering Blog — Ujjwal Bansal",
  description: "Technical articles, Jetpack Compose tutorials, Clean Architecture deep-dives, and performance optimization guides by Senior Android Developer Ujjwal Bansal.",
  keywords: ["Android Blog", "Jetpack Compose Tutorial", "Kotlin Flow", "Clean Architecture Android", "Android Performance"],
  openGraph: {
    title: "Android Engineering Blog — Ujjwal Bansal",
    description: "Technical articles, Jetpack Compose tutorials, and Clean Architecture deep-dives by Ujjwal Bansal.",
    url: `${PERSONAL_INFO.siteUrl}/blog`,
    type: "website"
  }
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Home</span>
        </Link>

        {/* Page Header */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-mono tracking-tight">
            Android Architecture & Engineering Blog
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            In-depth guides on Modern Android Development (MAD), Jetpack Compose performance, Kotlin Coroutines, and Clean Architecture.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 font-bold">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
