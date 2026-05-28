"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutElectrical() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".electrical-header",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ".electrical-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".electrical-text",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: ".electrical-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".electrical-bullet",
        { opacity: 0, y: 20 },
        {
          scrollTrigger: { trigger: ".electrical-list", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".electrical-badge",
        { opacity: 0, scale: 0.8, rotation: -15 },
        {
          scrollTrigger: { trigger: ".electrical-badge", start: "top 85%" },
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".electrical-images-container",
        { opacity: 0, y: 60 },
        {
          scrollTrigger: { trigger: ".electrical-images-container", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const bullets = [
    "Full-service residential, commercial, and industrial electrical solutions delivered by highly qualified, certified technicians.",
    "Comprehensive design, installation, maintenance, and diagnostics of electrical infrastructure tailored for modern facilities.",
    "State-of-the-art industrial automation, PLC programming, control panel assembly, and large-scale power distribution systems.",
    "Reliable emergency troubleshooting and repairs available 24/7 to ensure minimal downtime and maximum safety for your operations."
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F7EDE8] py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-0 relative z-30">
        
        {/* Top Header & Paragraphs section */}
        <div className="relative mb-16">
          <div className="w-full lg:max-w-[850px]">
            <h2 className="electrical-header font-forma text-5xl md:text-7xl text-[#5D45A5] font-medium mb-8 tracking-tight">
              Electrical Services
            </h2>
            <div className="space-y-6">
              <p className="electrical-text font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
                The complex is made simple with Grubs' all-round electrical expertise. We're here to provide you with solutions for even your most difficult problems. Our licensed and insured technicians possess the skill and experience to address any electrical requirement, large or small.
              </p>
              <p className="electrical-text font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
                From simple home wiring upgrades to massive industrial automated systems, Grubs provides dependable, future-proof services. We take pride in delivering efficient and compliant work, maintaining the highest safety standards to keep your power flowing smoothly.
              </p>
            </div>
          </div>
          
          {/* 24hr Badge */}
          <div className="electrical-badge mt-10 lg:mt-0 lg:absolute lg:top-[200px] lg:right-0 z-40 flex justify-center">
            <img
              src="/24-service.png"
              alt="24hr Service"
              className="w-32 h-32 md:w-44 md:h-44 lg:w-[220px] lg:h-[220px] object-contain"
            />
          </div>
        </div>

        {/* Bullet List Section */}
        <div className="mb-20">
          <h3 className="electrical-text font-forma text-3xl md:text-5xl text-[#5D45A5] font-medium mb-8 leading-tight max-w-4xl">
            Why choose Grubs for your electrical systems?
          </h3>
          <ul className="electrical-list space-y-6 max-w-[850px]">
            {bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="electrical-bullet flex items-start gap-4 font-avant text-base md:text-lg text-[#5D45A5] leading-relaxed"
              >
                <span className="w-1.5 h-1.5 bg-[#5D45A5] mt-2.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Overlapping Masked Images layout */}
        <div className="electrical-images-container relative w-full flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 md:mt-70 pb-12">
          
          {/* Left: Industrial masked image + lavender shape behind */}
          <div className="relative w-[360px] h-[360px] md:w-[500px] md:h-[500px] flex-shrink-0 flex items-center justify-center">
            
            {/* Lavender tint background shape */}
            <div
              className="absolute z-0 w-[380px] h-[380px] md:w-[600px] md:h-[600px] bg-[#D3C9EE]"
              style={{
                maskImage: "url('/thermal-bg-bg.svg')",
                WebkitMaskImage: "url('/thermal-bg-bg.svg')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                transform: "translate(-10%, -3%) scale(1.08)",
              }}
            />

            {/* Left masked image */}
            <div
              className="relative z-10 w-full h-full overflow-hidden md:-mr-30"
              style={{
                maskImage: "url('/thermal-mask-1.png')",
                WebkitMaskImage: "url('/thermal-mask-1.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            >
              <img
                src="/service-industrial.png"
                alt="Industrial Electrical Automation"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Right: Emergency masked image */}
          <div className="relative w-[240px] h-[240px] md:w-[330px] md:h-[330px] flex-shrink-0 md:-mt-110 md:-ml-32">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                maskImage: "url('/thermal-mask-2.png')",
                WebkitMaskImage: "url('/thermal-mask-2.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            >
              <img
                src="/service-emergency.png"
                alt="Emergency Electrical Support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
