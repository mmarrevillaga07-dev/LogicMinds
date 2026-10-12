"use client";

import React, { useState } from 'react';
import { X, Send, CheckCircle, Building, Mail, User } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSolution?: string;
  onDeploySuccess?: (taskData: Record<string, any>) => void; // New prop configuration
  nameLabel?: string;
  companyLabel?: string;
}

export default function DemoModal({ isOpen, onClose, selectedSolution = "General Enterprise", onDeploySuccess, nameLabel = "Full Name", companyLabel = "Organization" }: DemoModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Strict URLSearchParams formatting for Netlify Next.js v5 Runtime stability
    const submissionBody = new URLSearchParams({
      "form-name": "enterprise-demo-requests",
      name: formData.name,
      email: formData.email,
      company: formData.company,
      solution: selectedSolution
    }).toString();

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submissionBody,
      });

    // NEW: Run the local synchronization to save the visitor request onto the computer hard drive
    onDeploySuccess?.({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        solution: selectedSolution
      });
         
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Pipeline initialization failed. Please check network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-800 bg-[#0a0f1d] p-6 shadow-2xl text-slate-100">
        
        <button 
          onClick={handleReset}
          className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Request Enterprise Demo
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Deploying workspace layout for <span className="text-sky-400 font-medium">{selectedSolution}</span>.
              </p>
            </div>

            <form 
              name="enterprise-demo-requests" 
              method="POST" 
              action="/__forms.html"
              onSubmit={handleSubmit} 
              className="space-y-4 text-left"
            >
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Corporate Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  {companyLabel}
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder={companyLabel === "Organization" ? "LogicMinds Int." : "e.g., Audit Cryptographic Paths"}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-500 focus:outline-none disabled:opacity-50 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <span>Initialize Demo Pipeline</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-4 rounded-full bg-emerald-950 p-3 text-emerald-400 border border-emerald-800">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-white">Pipeline Scheduled</h3>
            <p className="mt-2 text-xs text-slate-400 max-w-xs">
              Thank you. An engineering representative will reach out via email shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-900 transition-colors cursor-pointer"
            >
              Return to Panel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
