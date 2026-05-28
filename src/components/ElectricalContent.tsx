"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AccordionItem {
  title: string;
  content: string;
}

export default function ElectricalContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".content-header",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: ".content-header", start: "top 85%" },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".accordion-container",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ".accordion-container", start: "top 80%" },
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items: AccordionItem[] = [
    {
      title: "Residential Electrical Services:",
      content: "From wiring your new home to upgrading your lighting, we enhance the safety and functionality of your living space.",
    },
    {
      title: "Commercial Electrical Services:",
      content: "We cater to businesses of all sizes, ensuring efficient electrical systems that keep your operations running smoothly.",
    },
    {
      title: "Industrial Electrical Services:",
      content: "Our team is well-equipped to handle the unique electrical needs of industrial facilities, making sure that your electric system isn't unnecessarily complex.",
    },
    {
      title: "Security:",
      content: "We can install security alarms, cameras, and integrated security cameras at your home or business.",
    },
    {
      title: "Thermal Imaging:",
      content: "Our advanced thermal imaging services allow us to detect electrical issues before they become critical, preventing expensive breakdowns.",
    },
    {
      title: "Maintenance:",
      content: "Our comprehensive electrical maintenance plans keep your systems in optimal condition, providing peace of mind.",
    },
    {
      title: "Lake Lots and Underground Installation of Utilities:",
      content: "If you're developing a lakeside property or need utilities buried underground, we provide expert solutions.",
    },
    {
      title: "Solar Off-Grid and On-Grid Solutions:",
      content: "Harness the power of the sun with our solar installation services. Choose from off-grid or on-grid systems to save on energy costs and reduce your environmental footprint.",
    },
    {
      title: "Thermal Heating:",
      content: "Energy-efficient thermal heating solutions help make you more comfortable while also saving you money on heating costs.",
    },
    {
      title: "Electrical Upgrades:",
      content: "We help you stay current with the latest electrical technologies and codes, ensuring the efficiency of your electrical systems. This includes fire alarm installations and maintenance.",
    },
    {
      title: "Electrical Vehicle Chargers Installation:",
      content: "We offer safe and convenient EV charger installation services, making it easy for you to charge your electric car at home.",
    },
    {
      title: "Farm Wiring:",
      content: "Our farm wiring services cover yards, grain driers, overhead services, and transfer switches.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F7EDE8] py-20 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-0 relative z-30">
        
        {/* Title and Intro */}
        <div className="content-header mb-16 max-w-[850px]">
          <h2 className="font-forma text-5xl md:text-7xl text-[#5D45A5] font-medium mb-8 tracking-tight">
            Experts at Work
          </h2>
          <p className="font-avant text-lg md:text-xl text-[#5D45A5] leading-relaxed">
            Grubs is here to help with all things electric. Our experts are trained in a variety of services, and are capable of designing a build for any electric job. You can feel confident that we'll provide you with innovative and safe electric solutions.
          </p>
        </div>

        {/* Accordion List full width */}
        <div className="accordion-container w-full bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-md">
          <div className="divide-y divide-[#5D45A5]/30">
            {items.map((item, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full flex justify-between items-center text-left text-[#5D45A5] hover:text-[#73C04A] transition-colors focus:outline-none"
                  >
                    <span className="font-forma text-2xl md:text-3xl font-medium pr-4">
                      {item.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {/* Animated height content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="font-avant text-base md:text-lg text-[#5D45A5]/85 leading-relaxed pl-4 border-l-2 border-[#5D45A5]/40 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#5D45A5]/60 mt-2 flex-shrink-0" />
                        <span>{item.content}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
