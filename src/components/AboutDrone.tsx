"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutDrone() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".drone-about-header",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ".drone-about-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".drone-about-para",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: ".drone-about-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".drone-services-title",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ".drone-services-title", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".drone-service-item",
        { opacity: 0, y: 20 },
        {
          scrollTrigger: { trigger: ".drone-services-list", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const droneServices = [
    "Thermal Inspections",
    "Search and Rescue",
    "Multispectral Crop Health inspection",
    "Mapping Photogrammetry",
    "Lidar Mapping 3D",
    "Volume Measurements for Dirt, Gravel, and Pits",
    "Drainage",
    "Spraying and Seeding",
    "Cattle Inspections",
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#F7EDE8] relative overflow-hidden">
      {/* Top Section - Text */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-0 pt-20 pb-20 md:pb-24">
        <h2 className="drone-about-header font-forma text-5xl md:text-7xl text-[#5D45A5] font-medium mb-12 tracking-tight">
          Drones
        </h2>
        
        <div className="space-y-8 max-w-[900px]">
          <p className="drone-about-para font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
            Why use drones? We think the better question is why not use drones! Our drones offer you the latest technology. They can access dangerous or hard-to-reach areas without putting human lives at risk, making inspections and search and rescue efforts safer. They also reduce the need for expensive equipment, human resources, and time-consuming processes.
          </p>
          <p className="drone-about-para font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
            Drones are trusted by a variety of organizations to deliver results. Both police and firefighters use them to survey challenging situations. Now, we're bringing this high-powered solution to the public—making it easier for you to monitor land, buildings, and unfolding situations from above. Handling a job below the surface? One of our underwater drones can help!
          </p>
          <p className="drone-about-para font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
            At Grubs, thermal drones are our speciality. Thermal drones can identify temperature differences, which enables us to detect issues like water leaks, heat loss, and electrical problems in homes and buildings. We even use our thermal drones to help find missing people, pets, and livestock. Our expert drone services are available in Alberta, as well as in British Columbia and Saskatchewan.
          </p>
        </div>
      </div>

      {/* Bottom Section - Purple Services List */}
      <div className="w-full bg-[#5D45A5] py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h3 className="drone-services-title font-forma text-4xl md:text-6xl text-white font-medium mb-16 leading-tight max-w-4xl mx-auto">
            Our services can help make managing property easy:
          </h3>
          
          <div className="drone-services-list flex flex-col items-center gap-6 md:gap-8 font-avant text-lg md:text-2xl text-white">
            {droneServices.map((service, index) => (
              <div
                key={index}
                className="drone-service-item flex items-center justify-center gap-3"
              >
                <span className="w-1.5 h-1.5 bg-white flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
