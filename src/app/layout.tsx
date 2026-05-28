import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const formaDjr = localFont({
  src: "./fonts/FormaDJRDisplay-Medium-Testing.woff2",
  variable: "--font-forma-djr",
  weight: "500",
  display: "swap",
});

const avantGarde = localFont({
  src: [
    {
      path: "./fonts/ITC-Avant-Garde-Gothic-Std-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ITC-Avant-Garde-Gothic-Std-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avant-garde",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grubs",
  description: "A multipage website built with Next.js, Tailwind CSS, and GSAP",
  icons: {
    icon: "/gruds-favicon.svg",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${formaDjr.variable} ${avantGarde.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-slate-900 font-sans">
        <Header />
        <main className="flex-grow flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
