"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ThermalDrones() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".thermal-header",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ".thermal-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".thermal-text",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: ".thermal-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".thermal-bullet",
        { opacity: 0, y: 20 },
        {
          scrollTrigger: { trigger: ".thermal-list", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".thermal-badge",
        { opacity: 0, scale: 0.8, rotation: -15 },
        {
          scrollTrigger: { trigger: ".thermal-badge", start: "top 85%" },
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".thermal-images-container",
        { opacity: 0, y: 60 },
        {
          scrollTrigger: { trigger: ".thermal-images-container", start: "top 85%" },
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
    "Not a second is wasted when you use drones for search and rescue. They can spring into action right away. This rapid deployment is critical for locating missing people and animals.",
    "Drones provide an aerial view, and are capable of searching dangerous areas with no risk to searchers. This enables rescuers to explore dense forests, remote terrain, or disaster-stricken zones.",
    "We use thermal drones that can detect heat signatures. They are incredibly useful for locating people, pets, or livestock in low light conditions or at night.",
    "In rural areas, drones can help locate lost or injured livestock. Farmers and ranchers can use drones to check on the well-being of their animals, ensuring their safety and health.",
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
            <h2 className="thermal-header font-forma text-5xl md:text-7xl text-[#5D45A5] font-medium mb-8 tracking-tight">
              Thermal Drones
            </h2>
            <div className="space-y-6">
              <p className="thermal-text font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
                We know how scary it is to have a loved one missing. That's why we use our drones for licensed and insured search and rescue missions. Grubs employs the latest in thermal drone technology to quickly and accurately pick up on heat changes in the environment. Using the information you provide, we can work quickly to accurately identify what we're looking for when we find it.
              </p>
              <p className="thermal-text font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
                Thermal drones can fly to extraordinary heights and survey areas that would otherwise be too difficult or dangerous to search. Our drones make locating lost people, pets, and even livestock simple. Grubs has conducted multiple successful missions solo and in conjunction with other organizations.
              </p>
            </div>
          </div>
          
          {/* 24hr Badge: absolute on lg (laptop/desktop), relative/flex on mobile/tablet */}
          <div className="thermal-badge mt-10 lg:mt-0 lg:absolute lg:top-[200px] lg:right-0 z-40 flex justify-center">
            <img
              src="/24-service.png"
              alt="24hr Service"
              className="w-32 h-32 md:w-44 md:h-44 lg:w-[220px] lg:h-[220px] object-contain"
            />
          </div>
        </div>

        {/* Bullet List Section */}
        <div className="mb-20">
          <h3 className="thermal-text font-forma text-3xl md:text-5xl text-[#5D45A5] font-medium mb-8 leading-tight max-w-4xl">
            Why should you choose a thermal drone for your search and rescue mission?
          </h3>
          <ul className="thermal-list space-y-6 max-w-[850px]">
            {bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="thermal-bullet flex items-start gap-4 font-avant text-base md:text-lg text-[#5D45A5] leading-relaxed"
              >
                <span className="w-1.5 h-1.5 bg-[#5D45A5] mt-2.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Overlapping Masked Images layout */}
        <div className="thermal-images-container relative w-full flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 md:mt-70 pb-12">
          
          {/* Left: Rescue Drone masked image + lavender shape behind + color circles */}
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
                maskPosition: "top right",
                WebkitMaskPosition: "center",
              }}
            >
              <img
                src="/thermak-img-1.png"
                alt="Thermal Rescue Drone"
                className="w-full h-full object-cover"
              />
            </div>

            

          </div>

          {/* Right: Operator masked image */}
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
                WebkitMaskPosition: "center",
              }}
            >
              <img
                src="/thermal-img-2.png"
                alt="Search and Rescue Operator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
