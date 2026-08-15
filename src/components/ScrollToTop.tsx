"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch {
      window.scrollTo(0, 0);
    }
    if (document.documentElement) {
      try {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        document.documentElement.scrollTop = 0;
      }
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-2xl bg-slate-900/90 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-400 hover:text-slate-950 hover:border-emerald-400 backdrop-blur-md shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer flex items-center justify-center group animate-fadeIn"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
