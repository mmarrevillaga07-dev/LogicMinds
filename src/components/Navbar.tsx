import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-brand-dark/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-90 transition flex items-center">
          LogicMinds.<sup className="text-[10px] font-semibold text-[#38bdf8] select-none relative -top-1 ml-0.5">TM</sup>
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <Link href="/solutions/task" className="hover:text-white transition">
            LogicMinds Task
          </Link>
          <Link href="/solutions/devops" className="hover:text-white transition">
            DevOps
          </Link>
          <Link href="/solutions/shield" className="hover:text-white transition">
            Shield
          </Link>
          <Link href="/trust" className="hover:text-white transition">
            Trust & Security
          </Link>
        </nav>

        {/* Wrapped in a Link component to trigger navigation */}
        <Link href="/contact" className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 transition shadow-sm">
          Contact Sales
        </Link>
      </div>
    </header>
  );
}
