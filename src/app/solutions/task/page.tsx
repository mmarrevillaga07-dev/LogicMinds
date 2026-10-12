"use client";
import { useState } from "react";
// Import the shared DemoModal component
import DemoModal from "@/components/DemoModal";

export default function TaskPage() {
  // Central state to handle the popup visibility status
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  // NEW: State to hold the arrays of clients pulled from IndexedDB
  const [deployedClients, setDeployedClients] = useState<Array<Record<string, any>>>([]);

  // NEW: Function to read all records from the local computer hardware
  const loadClientsFromDB = () => {
    const request = indexedDB.open("LogicMindsDB", 1);

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      // Guard configuration check to ensure the object store exists
      if (!db.objectStoreNames.contains("deployedClients")) return;

      const transaction = db.transaction("deployedClients", "readonly");
      const store = transaction.objectStore("deployedClients");
      const getAllRequest = store.getAll(); // Fetch every row

      getAllRequest.onsuccess = () => {
        // Sort newest deployments to the top of the tracker feed
        const sortedData = getAllRequest.result.reverse();
        setDeployedClients(sortedData);
      };
    };
  };

  // NEW: Function to open IndexedDB and save data locally on the machine
  const saveToIndexedDB = (taskData: Record<string, any>) => {
    const request = indexedDB.open("LogicMindsDB", 1);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("deployedClients")) {
        db.createObjectStore("deployedClients", { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const transaction = db.transaction("deployedClients", "readwrite");
      const store = transaction.objectStore("deployedClients");

      store.add({
        timestamp: new Date().toISOString(),
        status: "Deployed",
        ...taskData
      });

      console.log("Success: Task client synchronized to IndexedDB!");
      loadClientsFromDB();
    };

    request.onerror = (event: any) => {
      console.error("IndexedDB error:", event.target.error);
    };
  };

  const features = [
    { title: "Local-First Persistence", desc: "Saves workflows instantly inside the browser sandbox using IndexedDB. Never lose execution data during sudden connection drops." },
    { title: "Conflict-Free Sync (CRDT)", desc: "Maintains absolute data consistency across all global distributed endpoints without requiring a heavy constant server lock." },
    { title: "Multi-Threaded Rendering", desc: "Leverages Web Workers to handle heavy scheduling logic calculations safely away from the browser UI thread for lag-free typing." }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-16 space-y-16">
      {/* 1. Feature Product Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-brand-accent">
            <span>Product Line // LogicMinds Task</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            High-Velocity <br />
            <span className="text-brand-accent">Workflow Optimization.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            LogicMinds Task is an installable, ultra-lightweight client-side machine engineered for fast-paced organizational execution. Process thousands of team roadmaps with near-zero network lag.
          </p>
          <div className="flex gap-4">
            {/* Added onClick trigger to open the modal frame */}
            <button 
              onClick={() => setIsDemoOpen(true)}
              className="rounded-lg bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 transition cursor-pointer"
            >
              Deploy Task Client
            </button>
          </div>
        </div>

                  {/* 2. Visual Simulation: Interactive Project Timeline Grid */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-2xl space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs font-mono text-slate-300">Live Client Workspace Tracker</span>
              </div>
              <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                Offline-Ready Sync
              </span>
            </div>

            {/* Dynamic Local IndexedDB Data Output Loop Container */}
            {deployedClients.length === 0 ? (
              <p className="text-[11px] text-slate-500 italic py-2 text-center">
                No active workspace configurations deployed on this device hardware layout yet.
              </p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {deployedClients.map((client) => (
                  <div key={client.id} className="p-3 rounded-lg bg-[#0b0f19] border border-slate-800 flex items-center justify-between text-xs transition-all hover:border-slate-700">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white">
                        {client.company || "Independent Workspace Instance"}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {client.name} • {client.email}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                        {client.status}
                      </span>
                      <span className="text-[9px] text-slate-500 font-mono">
                        {new Date(client.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      {/* 3. Deep-Tech Feature Matrix */}
      <div className="space-y-6 pt-8 border-t border-slate-900">
        <h3 className="text-xl font-bold text-white text-left">Under the Hood Architecture</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/20 text-left space-y-2">
              <h4 className="font-semibold text-white text-base">{feature.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Render the modal frame passing context tracking props */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        selectedSolution="LogicMinds Task Suite"
        onDeploySuccess={saveToIndexedDB}
        companyLabel="Task Details"
      />
    </div>
  );
}
