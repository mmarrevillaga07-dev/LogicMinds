import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LogicMinds Technologies | Enterprise PWA Ecosystem",
  description: "Ultra-lightweight installable PWA software for Task-Management, DevOps, and Data Security.",
  manifest: "/manifest.json", // Add this line right here!
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-brand-dark text-slate-100 antialiased selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center items-center px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
