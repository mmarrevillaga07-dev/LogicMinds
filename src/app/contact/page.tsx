"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 1. Hook up controlled states to capture each form field
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    goal: "Deploy LogicMinds Task Engine",
    parameters: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 2. Wrap payloads inside a strict flat string array for Netlify v5 stability
    const submissionBody = new URLSearchParams({
      "form-name": "enterprise-portal-consultation",
      email: formData.email,
      company: formData.company,
      goal: formData.goal,
      parameters: formData.parameters
    }).toString();

    try {
      // 3. Dispatch data straight to your twin-underscore HTML blueprint routing asset
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submissionBody,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Portal link down. Please verify network access parameters.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* 1. Left Side: Direct Contact Information Copy */}
      <div className="space-y-6 text-left">
        <div className="inline-flex items-center space-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-brand-accent">
          <span>Enterprise Portal // Request Consultation</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Partner With <br />
          <span className="text-brand-accent">LogicMinds.</span>
        </h1>
        <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-lg">
          Connect directly with our corporate infrastructure team. We help Fortune 500 businesses design custom localized service workers, custom local data parameters, and cross-platform PWA systems.
        </p>

        {/* Technical Features Summary Checklist */}
        <div className="space-y-3 pt-2 font-mono text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="text-brand-accent font-bold">✓</span>
            <span>Custom Deployment Service Level Agreements (SLAs)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-brand-accent font-bold">✓</span>
            <span>Dedicated Implementation Engineering Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-brand-accent font-bold">✓</span>
            <span>Custom Cryptographic Vault Configurations</span>
          </div>
        </div>
      </div>

      {/* 2. Right Side: Interactive Lead Form Container */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 shadow-2xl text-left backdrop-blur-sm">
        {!submitted ? (
          <form 
            name="enterprise-portal-consultation"
            method="POST"
            action="/__forms.html"
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Corporate Email</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com" 
                  className="w-full bg-[#0b0f19] border border-slate-800 focus:border-brand-accent rounded-lg p-2.5 text-xs text-white outline-none transition" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Company Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Enterprise Inc." 
                  className="w-full bg-[#0b0f19] border border-slate-800 focus:border-brand-accent rounded-lg p-2.5 text-xs text-white outline-none transition" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Core Architecture Goal</label>
              <select 
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full bg-[#0b0f19] border border-slate-800 focus:border-brand-accent rounded-lg p-2.5 text-xs text-slate-400 outline-none transition"
              >
                <option>Deploy LogicMinds Task Engine</option>
                <option>Implement Continuous DevOps Telemetry</option>
                <option>Configure LogicMinds Shield Cryptography</option>
                <option>Full Unified Enterprise Suite Bundle</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Additional Project Parameters</label>
              <textarea 
                rows={3} 
                value={formData.parameters}
                onChange={(e) => setFormData({ ...formData, parameters: e.target.value })}
                placeholder="Tell us about your system scale requirements..." 
                className="w-full bg-[#0b0f19] border border-slate-800 focus:border-brand-accent rounded-lg p-2.5 text-xs text-white outline-none transition resize-none" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-xl bg-brand-accent py-3 font-semibold text-sm text-white hover:bg-sky-500 transition shadow-lg shadow-sky-500/10 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Processing Transmission..." : "Submit Request"}
            </button>
          </form>
        ) : (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl">
              ✓
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Transmission Successful</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Your enterprise data parameter ticket has been logged. An engineering account executive will connect with you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
