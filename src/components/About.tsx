"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
        }
      );
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
          opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.3,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full pt-0 lg:pt-0 pb-32 mt-0 md:mt-15"
      style={{ backgroundColor: "#5740C0" }}
    >
      {/* ── S-Curve Top Transition ─────────────────────────────────────────
          Positioned at top:0, then pushed UP by ~100% of its own height
          so it bleeds into the section above (#F7EDE8) with the exact
          S-curve path from the design file.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-20"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 0 1280 305"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
        >
          <path
            d="M839 245C485.5 245 296.5 0 0 91.5C0 200.328 0.000167847 171.198 0.000167847 305H1280V0C1186 136.5 1061.5 245 839 245Z"
            fill="#5740C0"
          />
        </svg>
      </div>

      {/* ── Main Content (unchanged) ───────────────────────────────────── */}
      <div className="max-w-[1240px] mx-auto w-full px-[20px] lg:px-0 flex flex-col md:flex-row items-center justify-between relative z-30 gap-12 lg:gap-20 mt-20">

        {/* Left Side: Image with mask */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative" ref={imgRef}>
          {/* Green Blob */}
          <div
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-28 h-28 md:w-40 md:h-40 bg-[#73C04A] z-0"
            style={{ borderRadius: "64% 36% 27% 73% / 55% 58% 42% 45%" }}
          />
          <div
            className="relative z-10 w-[330px] h-[330px] lg:w-[480px] lg:h-[480px] overflow-hidden"
            style={{
              maskImage: "url('/banner-mask.png')",
              WebkitMaskImage: "url('/banner-mask.png')",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          >
            <img
              src="/homepage-banner-img.png"
              alt="About Grubs Electric"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col items-start text-left text-white mt-12 md:mt-0 px-5 lg:px-0">
          <h2 className="about-text font-forma text-5xl md:text-6xl lg:text-7xl font-medium mb-6">
            About
          </h2>
          <h3 className="about-text font-forma text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
            Conservation at its Core
          </h3>
          <p className="about-text font-avant text-base md:text-lg mb-6 leading-relaxed max-w-xl">
            Grubs is a company you can trust. We provide 24-hour service to the mid-Alberta region including the Edmonton area, Lac La Biche, Boyle, St. Paul, Conklin, Athabasca, Plamondon, Grassland, and Redwater.
          </p>
          <p className="about-text font-avant text-base md:text-lg mb-10 leading-relaxed max-w-xl">
            Conservation is a core value at Grubs. We do our best to provide services that preserve and protect the environment. Professional drones can supply critical information for forestry and hydrology studies. They also facilitate reforestation through aerial seed dispersal. By installing solar panels, we help people use renewable natural resources to power their homes.
          </p>
          <Link href="/about" className="about-text">
            <button className="font-avant font-bold bg-[#73C04A] hover:bg-[#62A83D] transition-colors text-white py-4 px-8 flex items-center justify-center rounded-sm shadow-lg text-lg">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}