"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const droneRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        bgRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
      );

      gsap.to(droneRef.current, {
        y: 18,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        droneRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1.2, ease: "back.out(1.2)", delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // No overflow-hidden on section — lets the bg SVG breathe freely
    <section
      ref={containerRef}
      className="relative w-full pt-12 pb-48"
      style={{ backgroundColor: "#5740C0" }}
    >
      {/* Banner background SVG — anchored right so it never crops on the left */}
      <div
        className="absolute bottom-[210px] md:bottom-auto md:top-0 left-0 md:left-auto right-0 w-[90%] md:w-[55%] md:h-full z-0 pointer-events-none flex justify-center md:block"
      >
        <img
          src="/banner-bg-bg.svg"
          alt=""
          aria-hidden="true"
          className="w-full md:w-[80%] h-auto md:h-full object-contain object-bottom md:object-right-top"
        />
      </div>

      <div className="max-w-[1240px] mx-auto w-full px-[20px] md:px-0 flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* ── Left Side: Text ── */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col items-start text-left text-white mb-16 md:mb-0 px-0 relative z-10">
          <h1 className="hero-text font-forma text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-6">
            Grubs <br />
            Electric Ltd.
          </h1>
          <p className="hero-text font-avant text-lg md:text-xl font-bold mb-10 tracking-wide">
            Your reliable 24hr service team!
          </p>

          <button className="hero-text font-avant font-bold bg-[#73C04A] hover:bg-[#62A83D] transition-colors text-white py-4 px-8 flex items-center gap-3 rounded-sm shadow-lg text-lg">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </button>
        </div>

        {/* ── Right Side: Masked photo + Drone ── */}
        <div className="md:w-1/2 relative z-10 flex justify-center items-center mb-12 md:mb-0">

          {/* Landscape photo clipped by the blob mask */}
          <div
            ref={bgRef}
            className="relative z-0 w-[330px] h-[330px] lg:w-[480px] lg:h-[480px] overflow-hidden"
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
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Drone overlaid in front */}
          <div className="absolute z-10 pointer-events-none w-[100%] max-w-[300px] lg:max-w-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-0 md:left-0 md:-translate-x-[70px] md:-translate-y-[50px]">
            <img
              ref={droneRef}
              src="/homepage-drone-img.png"
              alt="Drone"
              className="w-full drop-shadow-2xl object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      {/* S-curve wave — overflow-hidden only here, not on the whole section */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[130px] lg:h-[200px]"
        >
          <path
            d="M0,100 C360,-120 1080,320 1440,85 L1440,200 L0,200 Z"
            fill="#f0ece4"
          />
        </svg>
      </div>
    </section>
  );
}