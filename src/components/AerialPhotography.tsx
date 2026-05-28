"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AerialPhotography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aerial-text",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".aerial-item",
        { opacity: 0, x: -20 },
        {
          scrollTrigger: { trigger: ".aerial-list", start: "top 80%" },
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8 },
        {
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const helpList = [
    "Reconnaissance",
    "Site Safety Inspection",
    "Gas Detection",
    "Pipeline Inspections",
    "Well Site Inspections",
    "Power Line Inspections",
    "Roof Inspections",
    "Aerial Inspections",
    "Real-Time Data",
    "Light Pole Install and Maintenance",
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F7EDE8] py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-0 grid grid-cols-1 lg:grid-cols-2 relative z-30 gap-y-12 lg:gap-x-24">
        
        {/* Heading */}
        <div className="w-full lg:col-start-1 lg:col-end-2 lg:row-start-1 order-1 lg:order-none">
          <h2 className="aerial-text font-forma text-5xl md:text-7xl text-[#5D45A5] font-medium mb-10 tracking-tight leading-[1.1]">
            Aerial Photography/<br />Videography
          </h2>
        </div>

        {/* Right Side: Image container reference from About.tsx */}
        <div
          ref={imgRef}
          className="w-full flex justify-center items-center relative mt-8 lg:mt-24 lg:sticky lg:top-[50vh] lg:-translate-y-1/2 lg:self-start lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-span-2 order-2 lg:order-none"
        >
          {/* Light Green Background SVG/Image */}
          <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center scale-120 translate-x-[0%] md:translate-x-[28%]">
            <img
              src="/Aerial-Photography-bg-bg.svg"
              alt=""
              aria-hidden="true"
              className="w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[640px] lg:h-[640px] object-contain opacity-80"
            />
          </div>

          {/* Floating Image */}
          <img
            src="/aerial-float-img.png"
            alt=""
            className="absolute top-4 left-[15%] w-20 h-20 md:w-25 md:h-25 lg:w-50 lg:h-50 z-10 object-contain"
          />

          {/* Masked Image Container */}
          <div
            className="relative z-20 w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[680px] lg:h-[680px] overflow-hidden translate-x-[0%] md:translate-x-[10%]"
            style={{
              maskImage: "url('/photography-mask.png')",
              WebkitMaskImage: "url('/photography-mask.png')",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          >
            <img
              src="/about-bg-bg.png"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <img
              src="/aerial-photography-main.png"
              alt="Aerial Photography"
              className="relative z-10 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text and List */}
        <div ref={textRef} className="w-full flex flex-col items-start text-left lg:col-start-1 lg:col-end-2 lg:row-start-2 order-3 lg:order-none">
          <p className="aerial-text font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed mb-10 max-w-[580px]">
            Our drones are ideal for aerial photography and videography. Aerial data and mapping provide insights for better decision-making and planning, improving efficiency and resource management. Regular inspections and real-time data help prevent accidents, leaks, and hazards, ensuring the safety of people and property.
          </p>

          <h3 className="aerial-text font-forma text-3xl md:text-4xl lg:text-5xl text-[#5D45A5] font-medium mb-8">
            Here is how we can help:
          </h3>

          <ul className="aerial-list space-y-4 mb-12">
            {helpList.map((item, index) => (
              <li
                key={index}
                className="aerial-item flex items-center gap-3 font-avant text-lg md:text-xl text-[#5D45A5]"
              >
                <span className="w-1.5 h-1.5 bg-[#5D45A5] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="aerial-text font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed max-w-[580px]">
            Grubs also provides orthomosaics. Orthomosaics are images that have been stitched together to provide a complete map of an area. These detailed images are valuable for project monitoring and site security in construction, contributing to public safety and helping businesses and homeowners visualize and manage their properties more effectively.
          </p>
        </div>

      </div>
    </section>
  );
}
