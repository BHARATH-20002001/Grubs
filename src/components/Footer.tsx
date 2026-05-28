"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSearchRescue = pathname === "/search-rescue";
  const isDrones = pathname === "/drones";
  const isElectrical = pathname === "/electrical";
  const hasShortTransition = isSearchRescue || isDrones || isElectrical;

  return (
    <footer className={`relative w-full overflow-visible z-10 ${isHome ? 'mt-auto' : (hasShortTransition ? 'mt-[80px] md:mt-[300px]' : 'mt-[300px]')}`}>
      {/* ── S-Curve Top Transition ───────────────────────────────────────── */}
      {!isHome && (
        <div
          className="absolute top-0 left-0 w-full pointer-events-none z-20"
          style={{ transform: "translateY(-99%)" }}
        >
          <svg
            viewBox="0 0 1280 305"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block w-full"
          >
            <rect width="100%" height="100%" fill="#F7EDE8" />
            <path
              d="M839 245C485.5 245 296.5 0 0 91.5C0 200.328 0.000167847 171.198 0.000167847 305H1280V0C1186 136.5 1061.5 245 839 245Z"
              fill="#5740C0"
            />
          </svg>
        </div>
      )}

      {/* ── Main Content Area (Purple) ─────────────────────────────────── */}
      <div className="relative bg-[#5740C0] text-[#F7EDE8] pt-16 pb-35 z-0 flex flex-col items-center">
        <h2 className="font-forma text-5xl md:text-7xl font-medium mb-6">
          Contact
        </h2>
        <p className="font-avant font-bold text-lg md:text-xl text-[#F7EDE8]/90 mb-10 tracking-wide">
          Get in contact with us today!
        </p>

        {/* Contact / Social Links */}
        <div className="flex gap-15 items-center justify-center relative z-20">
          <a
            href="mailto:info@grubselectric.com"
            className="text-[#F7EDE8] hover:text-[#73C04A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Email Us"
          >
            <svg
              viewBox="0 0 45 33"
              className="w-[36px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.21875 0C1.88965 0 0 1.84766 0 4.125C0 5.42266 0.624023 6.64297 1.6875 7.425L20.8125 21.45C21.8145 22.1805 23.1855 22.1805 24.1875 21.45L43.3125 7.425C44.376 6.64297 45 5.42266 45 4.125C45 1.84766 43.1104 0 40.7812 0H4.21875ZM0 9.625V27.5C0 30.5336 2.52246 33 5.625 33H39.375C42.4775 33 45 30.5336 45 27.5V9.625L25.875 23.65C23.8711 25.1195 21.1289 25.1195 19.125 23.65L0 9.625Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="tel:+17805550199"
            className="text-[#F7EDE8] hover:text-[#73C04A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Call Us"
          >
            <svg
              viewBox="0 0 45 45"
              className="w-[32px] h-[32px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4925 2.164C13.8158 0.529302 12.0317 -0.340777 10.3267 0.125023L2.59266 2.23431C1.06343 2.65616 0 4.04477 0 5.62673C0 27.3699 17.6301 45 39.3733 45C40.9552 45 42.3438 43.9366 42.7657 42.4073L44.875 34.6733C45.3408 32.9683 44.4707 31.1842 42.836 30.5075L34.3989 26.992C32.9663 26.3944 31.3053 26.8074 30.3297 28.0115L26.7791 32.3443C20.5919 29.4177 15.5823 24.4081 12.6557 18.2209L16.9885 14.6791C18.1926 13.6947 18.6056 12.0425 18.008 10.6099L14.4925 2.17278V2.164Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7EDE8] hover:text-[#73C04A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Facebook"
          >
            <svg
              viewBox="0 0 45 45"
              className="w-[32px] h-[32px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 22.6369C45 10.1318 34.9294 0 22.5 0C10.0706 0 0 10.1318 0 22.6369C0 33.9353 8.22792 43.3004 18.9844 45V29.1806H13.2687V22.6369H18.9844V17.6495C18.9844 11.9766 22.3412 8.843 27.4827 8.843C29.945 8.843 32.5198 9.28479 32.5198 9.28479V14.8527H29.6819C26.8875 14.8527 26.0156 16.598 26.0156 18.3879V22.6369H32.2557L31.2578 29.1806H26.0156V45C36.7721 43.3004 45 33.9353 45 22.6369Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F7EDE8] hover:text-[#73C04A] hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 45 45"
              className="w-[32px] h-[32px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5051 10.9626C16.1202 10.9626 10.9702 16.1137 10.9702 22.5C10.9702 28.8863 16.1202 34.0375 22.5051 34.0375C28.8899 34.0375 34.0399 28.8863 34.0399 22.5C34.0399 16.1137 28.8899 10.9626 22.5051 10.9626ZM22.5051 30.0009C18.379 30.0009 15.0059 26.6371 15.0059 22.5C15.0059 18.363 18.3689 14.9992 22.5051 14.9992C26.6411 14.9992 30.0042 18.363 30.0042 22.5C30.0042 26.6371 26.6311 30.0009 22.5051 30.0009ZM37.2022 10.4906C37.2022 11.9868 35.9975 13.1817 34.5117 13.1817C33.016 13.1817 31.8213 11.9767 31.8213 10.4906C31.8213 9.00453 33.026 7.79957 34.5117 7.79957C35.9975 7.79957 37.2022 9.00453 37.2022 10.4906ZM44.8419 13.2219C44.6712 9.61704 43.848 6.42392 41.2077 3.7931C38.5775 1.16227 35.3852 0.338893 31.7811 0.15815C28.0666 -0.0527167 16.9334 -0.0527167 13.2189 0.15815C9.62494 0.328853 6.43252 1.15224 3.79225 3.78305C1.15198 6.41388 0.338818 9.607 0.158115 13.2118C-0.0527049 16.9271 -0.0527049 28.0629 0.158115 31.7781C0.328779 35.383 1.15198 38.5761 3.79225 41.207C6.43252 43.8377 9.61489 44.6611 13.2189 44.8419C16.9334 45.0527 28.0666 45.0527 31.7811 44.8419C35.3852 44.6712 38.5775 43.8478 41.2077 41.207C43.838 38.5761 44.6612 35.383 44.8419 31.7781C45.0527 28.0629 45.0527 16.9371 44.8419 13.2219ZM40.0432 35.7646C39.2602 37.7326 37.7443 39.2489 35.7666 40.0421C32.8051 41.217 25.7778 40.9459 22.5051 40.9459C19.2324 40.9459 12.1949 41.207 9.24346 40.0421C7.2758 39.2589 5.75991 37.7427 4.96682 35.7646C3.79225 32.8024 4.06331 25.7735 4.06331 22.5C4.06331 19.2265 3.80229 12.1877 4.96682 9.23548C5.74986 7.26738 7.26576 5.75115 9.24346 4.95788C12.205 3.78305 19.2324 4.05417 22.5051 4.05417C25.7778 4.05417 32.8151 3.7931 35.7666 4.95788C37.7343 5.7411 39.2501 7.25734 40.0432 9.23548C41.2178 12.1976 40.9467 19.2265 40.9467 22.5C40.9467 25.7735 41.2178 32.8124 40.0432 35.7646Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Wrapper for Larva Crawl & Bottom Green Bar ─────────────────── */}
      <div className="relative w-full overflow-hidden pt-[200px] -mt-[200px] z-20 pointer-events-none">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes larvaCrawl {
            0% {
              left: 100%;
              transform: translateX(0);
            }
            100% {
              left: 0;
              transform: translateX(-100%);
            }
          }
          .larva-crawl {
            animation: larvaCrawl 20s linear infinite;
          }
        `}} />

        {/* Crawling Larva Logo */}
        <img
          src="/footer-larva-logo.png"
          alt="Crawling Larva"
          className="absolute bottom-[60px] h-[100px] w-auto z-30 pointer-events-none larva-crawl"
        />

        {/* Bottom Bar (Green) */}
        <div className="relative bg-[#73C04A] w-full py-6 z-20 pointer-events-auto">
          <div className="max-w-[1240px] mx-auto px-[20px] md:px-0">
            <p className="font-avant font-bold text-white text-sm">
              Copyright 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
