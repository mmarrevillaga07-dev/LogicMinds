"use client";
import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import ProductHub from "@/components/ProductHub";
import DemoModal from "@/components/DemoModal";

export default function HomePage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  // 1. Create a reference point for your Product Hub section
  const productHubRef = useRef<HTMLDivElement>(null);

  // 2. Create a smooth scroll function
  const handleScrollToProducts = () => {
    productHubRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center py-6">
      {/* 3. Pass the scroll function down to the Hero component */}
      <Hero 
        onRequestDemo={() => setIsDemoOpen(true)} 
        onExploreProducts={handleScrollToProducts}
      />
      
      {/* 4. Wrap ProductHub in a div with our target anchor reference */}
      <div ref={productHubRef} className="w-full">
        <ProductHub />
      </div>
      
      {/* Core Enterprise Trust Metrics Panel */}
      <section className="w-full max-w-7xl mx-auto border-t border-slate-900 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-slate-900/20 border border-slate-800/50 rounded-2xl p-6 md:p-8">
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-brand-accent">99.99%</div>
            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">Uptime SLA</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-brand-accent">&lt; 3MB</div>
            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">App Footprint</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-brand-accent">100%</div>
            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">Local Encrypted</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold text-brand-accent">Instant</div>
            <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">PWA Deployment</div>
          </div>
        </div>
      </section>

      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        selectedSolution="LogicMinds Enterprise Infrastructure"
      />
            {/* Invisible HTML template block forcing Netlify's crawler backend to mount form pipelines */}

    </div>
  );
}
