"use client";
import { useState } from "react";
import Link from "next/link";
// 1. Import your standalone DemoModal component
import DemoModal from "./DemoModal"; 

const products = [
  {
    id: "task",
    title: "LogicMinds Task",
    tagline: "High-Velocity Workflow Engine",
    desc: "A completely client-side, local-first enterprise task machine. Process thousands of team timeline nodes or Kanban cards instantly with zero latency.",
    specs: ["~1.4MB Bundle Footprint", "Offline Sync Syncing", "Multi-thread Execution"]
  },
  {
    id: "devops",
    title: "LogicMinds DevOps",
    tagline: "Continuous Headless Workspace Upkeep",
    desc: "Automate website diagnostic tracking logs and server telemetry directly from the viewport. Runs isolated background service workers to capture performance metrics.",
    specs: ["Zero Server Overhead", "Deterministic Cache Models", "Real-Time Hook Metrics"]
  },
  {
    id: "shield",
    title: "LogicMinds Shield",
    tagline: "Zero-Knowledge Endpoint Encryption",
    desc: "Ensure complete privacy isolation for corporate files. Shield routes all data paths through localized cryptographic runtimes before asserting external uploads.",
    specs: ["AES-GCM-256 Runtime", "Client-side Key Assembly", "SOC2 System Audit Ready"]
  }
];

export default function ProductHub() {
  const [activeTab, setActiveTab] = useState("task");
  // 2. Keep this simple hook to toggle the modal on/off
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const activeProduct = products.find((p) => p.id === activeTab)!;

  return (
    <section className="w-full max-w-7xl mx-auto py-12 md:py-16 border-t border-slate-900 mt-8 relative">
      <div className="max-w-xl text-left mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Our Deep Tech Solution Suites
        </h2>
        <p className="text-sm md:text-base text-slate-400 mt-2">
          Select a platform suite below to preview how our ultra-lightweight client-side PWAs maximize runtime execution.
        </p>
      </div>

      {/* Interactive Tab Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setActiveTab(product.id)}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activeTab === product.id
                ? "bg-slate-900/60 border-brand-accent shadow-md shadow-sky-500/5 text-white"
                : "bg-slate-900/10 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200"
            }`}
          >
            <div className="font-semibold text-base">{product.title}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">{product.tagline}</div>
          </button>
        ))}
      </div>

      {/* Dynamic Render Showcase Area */}
      <div className="bg-slate-900/20 border border-slate-800/60 rounded-xl p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center min-h-[300px]">
        <div className="space-y-6 text-left">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-2 py-0.5 rounded">
              Feature Specification
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">{activeProduct.title}</h3>
          </div>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed">{activeProduct.desc}</p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {activeProduct.specs.map((spec, i) => (
              <span key={i} className="inline-flex items-center rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-xs font-mono text-slate-300">
                {spec}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setIsDemoOpen(true)}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-md shadow-blue-600/10 active:scale-95 cursor-pointer"
            >
              Request Enterprise Demo
            </button>
            <Link
              href={`/solutions/${activeProduct.id}`}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-900 hover:text-white transition-all active:scale-95 text-center inline-block"
            >
              Read System Specifications
            </Link>
          </div>
        </div>

        {/* Abstract Simulated Client Preview */}
        <div className="w-full bg-[#0a0f1d] border border-slate-800/80 rounded-xl p-6 aspect-video flex flex-col justify-center items-center text-center">
          <div className="w-8 h-8 rounded-full border border-slate-800 border-t-brand-accent animate-spin mb-3" />
          <p className="font-mono text-xs text-slate-500">
            {"// Initializing telemetry client stream for " + activeProduct.id + ".config"}
          </p>
        </div>
      </div>

      {/* 3. Clean, isolated component call passing the state triggers down */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        selectedSolution={activeProduct.title}
      />
    </section>
  );
}
