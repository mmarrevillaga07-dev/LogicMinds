"use client";
import { useState } from "react";
import DemoModal from "@/components/DemoModal";

export default function ShieldPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-16 space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-brand-accent">
            <span>Product Line // LogicMinds Shield</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Zero-Trust Data <br />
            <span className="text-brand-accent">Privacy Cryptography.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            LogicMinds Shield provides your company with a security parameter layer. Run calculations safely inside a hardware-isolated system environment with decentralization keys.
          </p>
          <div className="flex gap-4">
            {/* Connected active button action trigger hook here */}
            <button 
              onClick={() => setIsDemoOpen(true)}
              className="rounded-lg bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition cursor-pointer"
            >
              Deploy Encryption Vault
            </button>
          </div>
        </div>

        {/* Cryptographic Key Vault Simulation Layout */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-2xl space-y-4 text-left">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">Asymmetric Security Status</span>
            </div>
            <span className="text-[10px] font-mono bg-sky-950 text-sky-400 border border-sky-800 px-2 py-0.5 rounded">VAULT LOCKED</span>
          </div>
          <div className="bg-[#0b0f19] border border-slate-800/80 rounded-xl p-4 font-mono text-[10px] space-y-4 text-left aspect-video">
            <div className="space-y-1">
              <p className="text-slate-500 font-semibold uppercase tracking-wider text-[9px]">Client Cryptographic Key Reference</p>
              <p className="text-slate-300 break-all bg-slate-950/60 p-2 rounded border border-slate-900">0x9F3821E8A4C76D10D25F4B92A13C47E586A8C2D1F</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-500 font-semibold uppercase tracking-wider text-[9px]">AES Encrypted Output Metadata String</p>
              <p className="text-emerald-400 break-all bg-slate-950/60 p-2 rounded border border-slate-900">U2FsdGVkX19vM1A8e2h7FskL9wXzPq2mNn5rVzBtKkY9</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-8 border-t border-slate-900 text-left">
        <h3 className="text-xl font-bold text-white">Under the Hood Security Safeguards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 space-y-2">
            <h4 className="font-semibold text-white text-base">AES-GCM-256 Keyframes</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Assert client files are completely parsed via cryptographically secure asymmetric runtimes before routing data channels outside local layouts.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 space-y-2">
            <h4 className="font-semibold text-white text-base">Client Key Assembly</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Cryptographic configuration tokens generate purely client-side. Zero server visibility profiles protect internal parameters.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 space-y-2">
            <h4 className="font-semibold text-white text-base">SOC2 Audit Ready</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Enforce strict zero-knowledge parameters to safely satisfy heavy third-party system data audit protocols effortlessly.</p>
          </div>
        </div>
      </div>

      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        selectedSolution="LogicMinds Shield Cryptography"
      />
    </div>
  );
}
