"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="flex flex-col flex-grow py-12" ref={containerRef}>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">About Us</h1>
      <p className="text-lg text-slate-600 mb-4">
        Grubs is a project created to demonstrate the power of modern web technologies.
      </p>
      <p className="text-lg text-slate-600 mb-4">
        By leveraging the Next.js App Router, we easily navigate between multiple pages without a full page reload. Tailwind CSS provides rapid styling capabilities directly in our markup.
      </p>
      <p className="text-lg text-slate-600">
        Finally, GSAP allows us to add complex, high-performance animations to bring our interfaces to life.
      </p>
    </div>
  );
}