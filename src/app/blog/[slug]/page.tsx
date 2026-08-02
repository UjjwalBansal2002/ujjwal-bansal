import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS_DATA, PERSONAL_INFO } from "@/data/portfolioData";
import { generateBlogPostSchema } from "@/utils/jsonLd";
import { ArrowLeft, Clock, Calendar, User, Tag, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — Ujjwal Bansal"
    };
  }

  return {
    title: `${post.title} — Ujjwal Bansal`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${PERSONAL_INFO.siteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [PERSONAL_INFO.name]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = generateBlogPostSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-[#050816] text-slate-100 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Back Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blog Posts</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 font-bold">
                {post.category}
              </span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-mono tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-mono font-bold text-xs text-white">
                  UB
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-white font-mono">{PERSONAL_INFO.name}</p>
                <p className="text-[10px] text-slate-400 font-mono">{PERSONAL_INFO.title}</p>
              </div>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed font-sans bg-slate-900/40 p-8 rounded-3xl border border-slate-800/80">
            <div className="whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Tags Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
