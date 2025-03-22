import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Orbitron } from "next/font/google";
import React from "react";

const cosmicOcto = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cosmic-octo",
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
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold ">
          BUILD, LAUNCH, & MARKET
        </h1>

        <p className="text-xl sm:text-lg md:text-xl lg:text-2xl opacity-90 font-light leading-relaxed max-w-3xl text-gray-300">
          We build, launch, and market high-quality MVPs, transforming ideas into
          successful products.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a href="https://cal.com/isonikrish/book" target="_blank" rel="noopener noreferrer">
            <Button className="px-8 py-6 text-lg font-semibold rounded-md flex items-center space-x-1">
              <Calendar className="w-5 h-5" /> <span>Book a Call</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
