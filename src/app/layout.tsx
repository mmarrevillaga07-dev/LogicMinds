import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LogicMinds Technologies | Enterprise Infrastructure",
  description: "High-performance, lightweight installable PWAs redefining Task Management, Dev infrastructure telemetry, and zero-knowledge data isolation.",
  
  // 🌐 Open Graph / Facebook / LinkedIn
  openGraph: {
    title: "LogicMinds Technologies | Enterprise Infrastructure",
    description: "High-performance, lightweight installable PWAs redefining Task Management, Dev infrastructure telemetry, and zero-knowledge data isolation.",
    url: "https://mmarrevillaga07-dev.github.io/LogicMinds", // ⚠️ Update this to your GitHub Pages URL
    siteName: "LogicMinds",
    images: [
      {
        url: "og-image.png", // ⚠️ We will create this image next!
        width: 1200,
        height: 630,
        alt: "LogicMinds Enterprise Infrastructure Platform Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "LogicMinds Technologies | Enterprise Infrastructure",
    description: "High-performance, lightweight installable PWAs redefining Task Management.",
    images: ["https://github.ioog-image.png"],
  },
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
