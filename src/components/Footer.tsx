import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-900 bg-brand-dark/40 py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} LogicMinds Technologies, Inc. All rights reserved.
        </div>
        <div className="flex space-x-6 font-medium">
          {/* Active Next.js Link Nodes pointing to our new dynamic legal parameters */}
          <Link href="/legal/privacy" className="hover:text-white hover:underline transition">
            Privacy Protocol
          </Link>
          <Link href="/legal/terms" className="hover:text-white hover:underline transition">
            Terms of Service
          </Link>
          <Link href="/legal/security" className="hover:text-white hover:underline transition">
            Security Matrix
          </Link>
        </div>
      </div>
    </footer>
  );
}
  