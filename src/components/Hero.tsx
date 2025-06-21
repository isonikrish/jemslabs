import React from "react";
import { ChevronRight} from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen w-full px-6 md:px-12 py-20 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-grid-small opacity-15 pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
          <div className="w-2 h-2 bg-neutral-300 rounded-full mr-3 animate-pulse" />
          <span className="text-sm text-gray-400">Building the future, one product at a time</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-snug sm:leading-tight tracking-tight text-white max-w-4xl">
          We build and grow <br />
          <span className="font-lora font-normal italic text-gray-400">
            tech products
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
          From idea to market — we help founders build, launch, and scale real products that make an impact.
        </p>

        <div className="flex items-center pt-2">
          <Button size="lg">
            Book a call <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
