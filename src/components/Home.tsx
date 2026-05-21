"use client";

import Hero from "./Hero";
import Services from "./Services";
import About from "./About";

export default function HomeComponent() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <About />
      {/* Other sections will be added here later */}
    </div>
  );
}