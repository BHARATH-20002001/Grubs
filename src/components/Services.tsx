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
      // Reveal the title and subtext
      gsap.fromTo(".services-header", 
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Reveal the initial grid
      gsap.fromTo(".service-card", 
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animation for newly added cards when "View All" is clicked
  useEffect(() => {
    if (showAll) {
      gsap.fromTo(".service-card:nth-child(n+4)", 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [showAll]);

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section ref={containerRef} className="py-32 bg-[#F7EDE8] relative overflow-hidden" id="services">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#5D45A5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1240px] mx-auto px-5 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="services-header font-forma text-5xl md:text-7xl text-[#5D45A5] mb-6 leading-tight">
            Services
          </h2>
          <div className="services-header w-20 h-1.5 bg-[#73C04A] mx-auto mb-8 rounded-full" />
          <p className="services-header font-avant text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Providing 24-hour service to the mid-Alberta region with cutting-edge technology and expertise.
          </p>
        </div>

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
              <div className="p-10 flex-grow flex flex-col items-start text-left">
                <h3 className="font-forma text-3xl font-medium text-[#5D45A5] mb-4 group-hover:text-[#73C04A] transition-colors">
                  {service.title}
                </h3>
                <p className="font-avant text-base text-slate-500 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <div className="font-avant font-bold text-[#5D45A5] group-hover:text-[#73C04A] flex items-center gap-2 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="font-avant font-bold bg-[#73C04A] hover:bg-[#62A83D] transition-colors text-white py-4 px-8 flex items-center justify-center rounded-sm shadow-lg text-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
