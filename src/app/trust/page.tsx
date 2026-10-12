"use client";
import { useState } from "react";
import DemoModal from "@/components/DemoModal";

export default function TrustPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  // 1. Maintain a state track hook to monitor which accordion card is currently expanded
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const complianceItems = [
    {
      title: "Continuous Third-Party Penetration Testing",
      desc: "Our systems undergo rigorous, automated, and manual network infrastructure threat parsing schedules executed by certified independent security engineers quarterly."
    },
    {
      title: "Data Processing Agreement (DPA) Architecture",
      desc: "LogicMinds enforces absolute privacy compliance metrics conforming strictly to international GDPR and SOC2 frameworks, ensuring zero unauthorized leak trails."
    },
    {
      title: "99.99% Core Synchronization SLA Guarantee",
      desc: "Our local-first client edge architecture guarantees high-velocity dataset synchronization cycles backed by contractually reinforced service level uptime parameters."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-16 space-y-16">
      <div className="max-w-xl text-left">
        <div className="inline-flex items-center space-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-brand-accent">
          <span>Security Compliance // Trust Architecture</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4">
          Enterprise Security, <br />Verified Runtimes.
        </h1>
        <p className="text-sm md:text-base text-slate-400 mt-3 leading-relaxed">
          LogicMinds operates on an isolated infrastructure philosophy. We actively verify our underlying architecture with constant system threat parsing grids to give your enterprise data absolute coverage.
        </p>
      </div>

      {/* 2. Interactive Accordion Expanders Box Layout Grid */}
      <div className="border-t border-slate-900 pt-6 space-y-4 max-w-4xl mx-auto">
        {complianceItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="rounded-xl border border-slate-800/60 bg-slate-900/10 transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 flex justify-between items-center text-left text-sm font-semibold text-white hover:bg-slate-900/40 outline-none transition cursor-pointer"
              >
                <span>{item.title}</span>
                <span className="text-brand-accent font-mono text-base transition-transform duration-200">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              
              {/* Collapsible Content Area Box */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-left text-xs text-slate-400 leading-relaxed border-t border-slate-900/40 animate-fadeIn">
                  {item.desc}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Request Compliance Box */}
      <div className="max-w-3xl mx-auto rounded-2xl border border-slate-800/60 bg-slate-900/20 p-8 text-center space-y-4">
        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
          Need direct access to our cryptographic threat assessments, full penetration logs, or custom system security parameters?
        </p>
        <div>
          <button 
            onClick={() => setIsDemoOpen(true)}
            className="rounded-lg bg-slate-950 border border-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition cursor-pointer"
          >
            Request Full Compliance Packet
          </button>
        </div>
      </div>

      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        selectedSolution="LogicMinds Full Security Compliance Packet"
      />
    </div>
  );
}
