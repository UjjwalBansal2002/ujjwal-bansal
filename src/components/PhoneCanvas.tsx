"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, ShieldCheck, Zap, Smartphone } from "lucide-react";

export default function PhoneCanvas() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / rect.height) * 16,
      y: (x / rect.width) * 16
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[380px] h-[520px] sm:h-[580px] mx-auto perspective-1000 flex items-center justify-center cursor-pointer select-none"
    >
      {/* Floating Badges */}
      <div className="absolute -top-4 -left-6 z-30 animate-float bg-slate-900/90 border border-slate-700/80 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
          K
        </div>
        <div>
          <p className="text-xs font-bold text-white">Kotlin 100%</p>
          <p className="text-[10px] text-slate-400">Coroutines & Flow</p>
        </div>
      </div>

      <div className="absolute top-1/3 -right-8 z-30 animate-float bg-slate-900/90 border border-cyan-500/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2" style={{ animationDelay: "1.5s" }}>
        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
          <Zap className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Jetpack Compose</p>
          <p className="text-[10px] text-cyan-400 font-mono">120 FPS Rendering</p>
        </div>
      </div>

      <div className="absolute -bottom-6 left-4 z-30 animate-float bg-slate-900/90 border border-purple-500/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2" style={{ animationDelay: "3s" }}>
        <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">Clean Architecture</p>
          <p className="text-[10px] text-slate-400">MVI & Multi-Module</p>
        </div>
      </div>

      {/* 3D Smartphone Container */}
      <div
        className="w-full h-full relative rounded-[44px] p-3 bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-950 border-2 border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(59,130,246,0.3)] transition-transform duration-200 ease-out flex flex-col justify-between overflow-hidden"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Phone Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center gap-2 border border-slate-800">
          <div className="w-3 h-3 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-blue-900" />
        </div>

        {/* Screen Content Mockup: PayPulse Android App */}
        <div className="w-full h-full bg-[#070b1e] rounded-[36px] overflow-hidden pt-10 px-4 pb-4 flex flex-col justify-between border border-slate-800/80 relative">
          
          {/* App Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xs">
                P
              </div>
              <div>
                <p className="text-xs font-bold text-white">PayPulse Wallet</p>
                <p className="text-[9px] text-emerald-400 font-mono">● LIVE KOTLIN MVI</p>
              </div>
            </div>
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>

          {/* Account Balance Card */}
          <div className="my-3 p-4 rounded-2xl bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-slate-900 border border-blue-500/30 text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl" />
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Total Balance</p>
            <h4 className="text-2xl font-bold font-mono text-cyan-300 mt-1">$128,450.90</h4>
            <div className="flex items-center justify-between mt-3 text-[10px]">
              <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">+18.4% this month</span>
              <span className="text-slate-400 font-mono">**** 9482</span>
            </div>
          </div>

          {/* Real-time Crypto & Stocks Chart Preview */}
          <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
            <div className="flex justify-between items-center text-[10px] mb-2 font-mono">
              <span className="text-slate-300">Jetpack Compose Canvas Chart</span>
              <span className="text-emerald-400 font-bold">120 FPS</span>
            </div>
            <svg className="w-full h-16 text-cyan-400" viewBox="0 0 100 40">
              <path
                d="M 0 30 Q 15 10 30 25 T 60 15 T 90 5 L 100 8 L 100 40 L 0 40 Z"
                fill="rgba(56, 189, 248, 0.15)"
              />
              <path
                d="M 0 30 Q 15 10 30 25 T 60 15 T 90 5 L 100 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="p-2 rounded-xl bg-slate-800/80 text-center border border-slate-700/60">
              <p className="text-[10px] text-slate-300 font-medium">Send</p>
            </div>
            <div className="p-2 rounded-xl bg-blue-600/80 text-center border border-blue-500">
              <p className="text-[10px] text-white font-medium">Scan QR</p>
            </div>
            <div className="p-2 rounded-xl bg-slate-800/80 text-center border border-slate-700/60">
              <p className="text-[10px] text-slate-300 font-medium">Receive</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-1.5">
            <p className="text-[9px] text-slate-400 font-mono uppercase">Recent Transactions</p>
            <div className="p-2 bg-slate-900/60 rounded-xl flex justify-between items-center text-[10px] border border-slate-800">
              <span className="text-slate-200">Google Play Revenue</span>
              <span className="text-emerald-400 font-mono font-bold">+$4,250.00</span>
            </div>
            <div className="p-2 bg-slate-900/60 rounded-xl flex justify-between items-center text-[10px] border border-slate-800">
              <span className="text-slate-200">Firebase Cloud Server</span>
              <span className="text-slate-400 font-mono">-$120.00</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
