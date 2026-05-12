"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
      );
    }
  }, []);

  return (
    <div className="flex flex-col flex-grow py-12 items-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Contact Us</h1>
      <form 
        ref={formRef}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="your@email.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
          <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}