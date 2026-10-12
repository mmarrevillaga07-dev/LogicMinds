import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { policy: "privacy" },
    { policy: "terms" },
    { policy: "security" }
  ];
}

const legalDatabase: Record<string, { title: string; subtitle: string; lines: string[] }> = {
  privacy: {
    title: "Privacy Protocol Matrix",
    subtitle: "Classification Standard: Level 4 Protected Data Isolation",
    lines: [
      "LogicMinds Technologies processes data locally utilizing client-side sandboxed IndexedDB engines.",
      "Zero telemetry tracking metadata streams hit external cloud caches without explicitly authorized cryptographic keys.",
      "Data erasure loops execute automatically the moment a tenant terminates their local browser sandbox instance."
    ]
  },
  terms: {
    title: "Terms of Service Agreement",
    subtitle: "Deployment Parameters // Corporate PWA Infrastructure Contracts",
    lines: [
      "By executing the LogicMinds runtime framework, enterprise networks agree to local-first deterministic cache usage rules.",
      "The customer retains complete, uncompromised custody of all localized zero-knowledge cryptographic keys.",
      "Redundant endpoint alignment guarantees data isolation compliance parameters remain fully active under global SLAs."
    ]
  },
  security: {
    title: "Security Matrix Disclosure",
    subtitle: "Encryption Standard: AES-GCM-256 Runtime Parameters",
    lines: [
      "All application memory pathways route data structures through a localized, hardware-isolated client engine.",
      "Independent SOC 2 Type II audit logs, penetrative analysis reports, and compliance details update bi-annually.",
      "Network nodes utilize asynchronous background workers to enforce zero-trust identity checks via native WebAuthn."
    ]
  }
};

interface LegalPageProps {
  params: Promise<{ policy: string }>;
}

export default async function LegalPolicyPage({ params }: LegalPageProps) {
  const resolvedParams = await params;
  const policyKey = resolvedParams.policy.toLowerCase();
  const document = legalDatabase[policyKey];

  if (!document) {
    notFound();
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-16 md:py-24 text-left space-y-8 animate-fadeIn">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-0.5 rounded">
          Corporate Governance Directive
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-2">
          {document.title}
        </h1>
        <p className="font-mono text-xs text-slate-500">{document.subtitle}</p>
      </div>

      <div className="space-y-6 text-sm md:text-base text-slate-400 leading-relaxed font-sans">
        {document.lines.map((paragraph, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-xl border border-slate-800/40 bg-slate-900/10">
            <span className="font-mono text-xs text-brand-accent font-bold mt-0.5">[{index + 1}]</span>
            <p>{paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
