"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Printer, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#050816] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Controls Bar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-xl hover:text-white hover:border-emerald-500/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-mono text-slate-950 bg-emerald-400 rounded-xl hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Resume Container */}
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        <div
          id="printable-resume"
          className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 font-sans text-slate-200"
        >
          {/* Header */}
          <div className="border-b border-slate-800 pb-4 text-center sm:text-left resume-section">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
              Android Developer
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-300 font-mono pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                {PERSONAL_INFO.phoneFormatted}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-400"
              >
                <FaLinkedin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                linkedin.com/in/ujjwalbansal1810
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-emerald-400"
              >
                <FaGithub className="w-3.5 h-3.5 text-white print:text-black" />
                github.com/UjjwalBansal2002
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section space-y-1.5">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
              <li>
                Android Developer with hands-on experience developing and maintaining production Android applications using Kotlin, XML, and MVVM architecture.
              </li>
              <li>
                Experienced in REST API integration, Firebase Analytics, Meta SDK integration, payment workflows, reusable UI development, and third-party SDK integration.
              </li>
              <li>
                Strong expertise in debugging production issues, optimizing application performance, refactoring large codebases, and building scalable modular applications.
              </li>
              <li>
                Passionate about writing clean, maintainable, and production-ready Android applications following modern development practices.
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="resume-section space-y-2">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Experience
            </h3>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">
                    Android Developer
                  </h4>
                  <p className="text-xs text-purple-400 font-semibold print:text-black">
                    AppSquadz Software Pvt. Ltd., Noida
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 print:border-none print:p-0 print:text-black">
                  November 2025 – Present
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-[13px] text-slate-300 leading-relaxed pt-1">
                <li>
                  Developed and maintained production Android applications using Kotlin, XML, MVVM Architecture, and Data Binding.
                </li>
                <li>
                  Built scalable multi-role applications supporting Vendor, Employee, and Third-Party users.
                </li>
                <li>
                  Integrated REST APIs for authentication, wallets, subscriptions, matchmaking, transactions, and dynamic content.
                </li>
                <li>
                  Integrated Firebase Analytics and Meta SDK for app activation, registrations, purchases, and custom event tracking.
                </li>
                <li>
                  Developed reusable UI components including RecyclerViews, BottomSheets, dynamic forms, and custom dialogs.
                </li>
                <li>
                  Diagnosed and resolved production issues including crashes, Gradle build failures, manifest conflicts, and Play Store release issues.
                </li>
                <li>
                  Integrated third-party SDKs including Firebase, Meta SDK, Google Maps, Digio, Glide, and Image Cropper.
                </li>
                <li>
                  Collaborated with backend teams and used Git for version control in Agile development.
                </li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="resume-section space-y-2">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Key Projects
            </h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-xs font-bold text-white font-mono">
                  Enterprise Multi-role Application
                </h4>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-300 leading-relaxed">
                  <li>
                    Developed Vendor, Employee, and Third-Party modules using modular architecture and reusable components.
                  </li>
                  <li>
                    Implemented authentication, dynamic forms, searchable BottomSheets, and secure API integrations.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white font-mono">
                  Astrology Platform
                </h4>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-300 leading-relaxed">
                  <li>
                    Developed features including matchmaking, wallet, subscriptions, profile management, transaction history, and birth analysis.
                  </li>
                  <li>
                    Integrated Firebase Analytics and Meta SDK events for user engagement and purchase tracking.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="resume-section space-y-1.5">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Technical Skills
            </h3>
            <div className="text-xs text-slate-300 space-y-1 leading-relaxed">
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">Languages:</strong> Kotlin, Java
              </p>
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">Android:</strong> Android SDK, XML, Activities, Fragments, RecyclerView, Material Components
              </p>
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">Architecture:</strong> MVVM, Repository Pattern, Data Binding, View Binding, Modular Architecture
              </p>
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">Networking:</strong> REST APIs, Retrofit, JSON Parsing, Gson, OkHttp
              </p>
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">Firebase:</strong> Firebase Analytics, DebugView, Event Tracking
              </p>
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">SDK Integration:</strong> Meta SDK, Google Maps, Digio, Glide, Android Image Cropper, PDF Viewer
              </p>
              <p>
                <strong className="text-emerald-300 font-mono print:text-black">Tools:</strong> Android Studio, Git, GitHub, Gradle, ADB, Postman
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section space-y-1.5">
            <h3 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-1">
              Education
            </h3>
            <div className="space-y-1 text-xs text-slate-300">
              <div className="flex justify-between items-baseline">
                <span>
                  <strong className="text-white print:text-black">MCA</strong> – ABES Engineering College
                </span>
                <span className="font-mono text-emerald-400 print:text-black">2023 – 2025</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span>
                  <strong className="text-white print:text-black">B.Sc.</strong> – CCS University
                </span>
                <span className="font-mono text-emerald-400 print:text-black">2020 – 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
