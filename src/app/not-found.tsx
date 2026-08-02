import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mx-auto flex items-center justify-center font-mono font-bold text-2xl">
          404
        </div>
        <h1 className="text-3xl font-bold font-mono">Page Not Found</h1>
        <p className="text-xs text-slate-400 font-sans leading-relaxed">
          The page or route you are looking for has been moved, deleted, or does not exist in Ujjwal Bansal&apos;s portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-mono text-xs font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Portfolio Home
        </Link>
      </div>
    </div>
  );
}
