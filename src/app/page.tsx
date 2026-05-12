"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (headingRef.current && textRef.current && boxRef.current) {
      tl.fromTo(headingRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(textRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .fromTo(boxRef.current, { opacity: 0, scale: 0.8, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.2");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-grow py-20">
      <h1 ref={headingRef} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 text-center">
        Welcome to Grubs
      </h1>
      <p ref={textRef} className="text-lg md:text-xl text-slate-600 max-w-2xl text-center mb-12">
        This is a demonstration of a multipage website using Next.js App Router, styled with Tailwind CSS, and animated with GSAP.
      </p>
      
      <div 
        ref={boxRef}
        className="w-48 h-48 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-white font-bold text-xl"
      >
        GSAP Box
      </div>
    </div>
  );
}