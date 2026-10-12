"use client";
import { useState, useEffect } from "react";

interface HeroProps {
  onRequestDemo: () => void;
  onExploreProducts: () => void;
}

export default function Hero({ onRequestDemo, onExploreProducts }: HeroProps) {
  // 1. Create states to capture and hold the browser's native install prompt
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the browser from automatically showing its own prompt
      e.preventDefault();
      // Store the event so we can trigger it with our button click later
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  // 2. Handle the action when clicking the white button
  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // If the browser doesn't support PWA installation or it's already installed, show an informational alert
      alert("LogicMinds Suite installation framework initialized! To run this web application as a standalone desktop app, look for the 'Install App' icon located directly inside your browser address bar.");
      return;
    }
    
    // Show the browser's installation prompt dialogue box
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt choice
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the LogicMinds PWA install banner");
    }
    
    // Reset our hook state since the prompt can only be fired once
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-left">
        <div className="inline-flex items-center space-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-brand-accent">
          <span>Now Live: Version 4.0 Core Architecture</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Enterprise Infrastructure. <br />
          <span className="text-brand-accent">Zero Overhead.</span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed">
          LogicMinds Technologies engineers high-performance, lightweight installable PWAs that redefine Task Management, Dev infrastructure telemetry, and zero-knowledge data isolation.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button 
            onClick={onRequestDemo}
            className="rounded-xl bg-brand-accent px-6 py-3 font-semibold text-white hover:bg-sky-500 transition shadow-lg shadow-sky-500/20 cursor-pointer"
          >
            Request Enterprise Demo
          </button>
          <button 
            onClick={onExploreProducts}
            className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition cursor-pointer"
          >
            Explore Products
          </button>
        </div>
      </div>
      
      {/* PWA App Client Mock Window */}
      <div className="relative w-full rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="rounded bg-slate-800 px-3 py-0.5 text-[10px] text-slate-500 font-mono">
            logicminds.app/install
          </div>
        </div>
        <div className="aspect-video rounded-lg bg-[#0b0f19] border border-slate-800/80 flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="h-12 w-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold text-xl tracking-tighter">
            LM
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Install LogicMinds Suite</h3>
            <p className="text-xs text-slate-500 mt-1">Lightweight desktop application client (2.4 MB)</p>
          </div>
          
          {/* 3. Connect the install action event to this white button */}
          <button 
            onClick={handleInstallClick}
            className="rounded-lg bg-white text-brand-dark px-4 py-1.5 text-xs font-bold hover:bg-slate-200 transition shadow-sm cursor-pointer"
          >
            {isInstallable ? "Click to Install App" : "Click to Open & Install"}
          </button>
        </div>
      </div>
    </section>
  );
}
