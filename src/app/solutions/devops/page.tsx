"use client";
import { useState } from "react";
import DemoModal from "@/components/DemoModal";

export default function DevOpsPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-16 space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-brand-accent">
            <span>Product Line // LogicMinds DevOps</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Autonomous <br />
            <span className="text-brand-accent">Workspace Upkeep.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            LogicMinds DevOps registers low-impact service workers directly to your network client layer. Monitor edge telemetry logs, maintain uptime assets, and audit build states seamlessly.
          </p>
          <div className="flex gap-4">
            {/* Connected active button action trigger hook here */}
            <button 
              onClick={() => setIsDemoOpen(true)}
              className="rounded-lg bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition cursor-pointer"
            >
              Initialize DevOps Cluster
            </button>
          </div>
        </div>

        {/* Active Background Worker Telemetry Terminal simulation */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-2xl space-y-4 text-left">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-mono text-slate-300">Active Background Worker Array</span>
            </div>
            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">POLLING ACTIVE</span>
          </div>
          <div className="bg-[#0b0f19] border border-slate-800/80 rounded-xl p-4 font-mono text-[10px] text-slate-400 space-y-2 aspect-video overflow-y-auto">
            <p className="text-slate-500">{"[14:32:01] REGISTERING BACKGROUND SERVICE WORKER..."}</p>
            <p className="text-emerald-400">{"[14:32:02] WORKER VERIFIED (ID: SW-CRON-V4) - STATUS: LISTENING"}</p>
            <p className="text-sky-400">{"[14:32:15] PUSHING SYSTEM TELEMETRY TO LOCAL STORAGE (OK)"}</p>
            <p className="text-slate-500">{"[14:34:02] RUNNING AUTOMATED HEALTH CYCLE... CACHE STABLE (0B DIFF)"}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-8 border-t border-slate-900 text-left">
        <h3 className="text-xl font-bold text-white">System Telemetry Control Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 space-y-2">
            <h4 className="font-semibold text-white text-base">Deterministic Caching</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Isolate web bundle structures entirely within local client caches for immediate telemetry availability metrics.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 space-y-2">
            <h4 className="font-semibold text-white text-base">Real-Time Hook Monitors</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Intercept data transition checkpoints natively inside client runtimes with custom network telemetry hooks.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 space-y-2">
            <h4 className="font-semibold text-white text-base">Zero Build Overhead</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Run automated layout audits cleanly across separate multi-threaded workers without lagging client viewport operations.</p>
          </div>
        </div>
      </div>

      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        selectedSolution="LogicMinds DevOps Infrastructure"
      />
    </div>
  );
}
