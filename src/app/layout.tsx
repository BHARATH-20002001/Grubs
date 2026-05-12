import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grubs",
  description: "A multipage website built with Next.js, Tailwind CSS, and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <header className="p-6 bg-slate-900 text-white shadow-md">
          <nav className="flex justify-between items-center max-w-5xl mx-auto">
            <Link href="/" className="text-2xl font-bold tracking-tighter">Grubs</Link>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-slate-300 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow flex flex-col w-full max-w-5xl mx-auto p-6">{children}</main>
        <footer className="p-6 bg-slate-900 text-slate-400 text-center text-sm">
          &copy; {new Date().getFullYear()} Grubs. All rights reserved.
        </footer>
      </body>
    </html>
  );
}