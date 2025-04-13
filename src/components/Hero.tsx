import { Orbitron } from "next/font/google";
import React from "react";
import BookACall from "./BookACall";
import Link from "next/link";
import { Rocket } from "lucide-react";

const cosmicOcto = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cosmic-o",
});

function Hero() {
  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center min-h-screen w-full px-6 md:px-12 py-20 space-y-8 overflow-hidden ${cosmicOcto.variable}`}
      id="hero"
    >
      <div className="absolute inset-0 bg-grid-small opacity-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-1/3 w-full h-full bg-gradient-to-b from-gray-800/10 to-[#545454]/70 blur-xl opacity-80 rounded-xl"></div>

      <div className="relative flex flex-col items-center justify-center space-y-8">
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold text-center">
          <span className="text-left">BUILD. LAUNCH. MARKET.</span>
        </h1>

        <p className="text-xl sm:text-lg md:text-xl lg:text-2xl opacity-90 font-light leading-relaxed max-w-3xl text-gray-300">
          We build, launch, and market high-quality MVPs, transforming ideas into
          successful products.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <BookACall paddingX={6} paddingY={6} textSize={"lg"} />
          <Link
            href="/launchpad"
            className="inline-flex items-center text-lg font-semibold text-white border-b-2 border-transparent border-white transition-all"
          >
            Go to Launchpad <Rocket className="ml-2 text-white" />
          </Link>
        </div>


      </div>
    </div>
  );
}

export default Hero;
