"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Drones",
    description: "Grubs is your eye in the sky. We use the latest in thermal drone technology to help you with aerial missions. From search and rescue to surveying land, we'll give you the bigger picture.",
    image: "/service-drones.png",
    href: "/services/drones",
  },
  {
    title: "Solar Energy",
    description: "Better for the environment and better for your budget, solar panels are a future-proof solution for both homes and businesses.",
    image: "/service-solar.png",
    href: "/services/solar",
  },
  {
    title: "Electrical",
    description: "The complex is made simple with Grubs' all-round electrical expertise. We're here to provide you with solutions for even your most difficult problems.",
    image: "/service-electrical.png",
    href: "/services/electrical",
  },
  {
    title: "Search & Rescue",
    description: "Rugged and reliable Search & Rescue operations using advanced thermal imaging and high-precision aerial support for critical missions.",
    image: "/service-search.png",
    href: "/services/search-and-rescue",
  },
  {
    title: "Industrial Solutions",
    description: "Complete electrical infrastructure and industrial automation services tailored for large-scale production facilities and power grids.",
    image: "/service-industrial.png",
    href: "/services/industrial",
  },
  {
    title: "24/7 Emergency Support",
    description: "Rapid response electrical and technical assistance available around the clock to ensure your operations never stop.",
    image: "/service-emergency.png",
    href: "/services/emergency",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-header",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ".services-header", start: "top 85%" },
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
        }
      );

      gsap.fromTo(".service-card",
        { opacity: 0, y: 60 },
        {
          scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showAll) {
      gsap.fromTo(".service-card:nth-child(n+4)",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [showAll]);

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section ref={containerRef} className="pb-32 bg-[#F7EDE8] relative" id="services">

      <div className="max-w-[1240px] mx-auto px-0 relative z-10">

        <div className="mb-20 text-left relative z-10 px-5">
          <h2 className="services-header font-forma text-5xl md:text-7xl text-[#5D45A5] mb-6 leading-tight">
            Services
          </h2>
          <p className="services-header font-avant text-xl text-slate-600 max-w-2xl leading-relaxed">
            Providing 24-hour service to the mid-Alberta region
          </p>
        </div>

        {/* Grid wrapper — relative so grubs mascot is positioned against it */}
        <div className="relative px-5">

          {/*
            ── Grubs mascot ──
            Desktop: floats above top-right corner of card 3
            Mobile:  floats above top-right corner of card 1
            -translate-y-full lifts it completely above the grid top edge.
          */}
          <img
            src="/gruds-img.svg"
            alt="Gruds mascot"
            aria-hidden="true"
            className="absolute -top-2 right-25 z-20 pointer-events-none w-[70px] md:w-[90px] -translate-y-full"
          />

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {displayedServices.map((service) => (
              <Link
                href={service.href || "#"}
                key={service.title}
                className="service-card group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5D45A5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-10 flex-grow flex flex-col items-center text-center">
                  <h3 className="font-forma text-3xl font-medium text-[#5D45A5] mb-4 group-hover:text-[#73C04A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-avant text-base text-slate-500 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                </div>
                {/* Learn More button pinned to card bottom */}
                <div className="w-full">
                  <div className="font-avant font-bold bg-[#5D45A5] group-hover:bg-[#73C04A] transition-colors text-white py-4 px-8 flex items-center justify-center text-lg">
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {!showAll && (
          <div className="flex justify-center px-5">
            <button
              onClick={() => setShowAll(true)}
              className="font-avant font-bold bg-[#73C04A] hover:bg-[#62A83D] transition-colors text-white py-4 px-8 flex items-center justify-center rounded-sm shadow-lg text-lg"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}