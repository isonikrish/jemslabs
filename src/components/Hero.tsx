"use client"
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import BookASlot from "./BookASlot";

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

    }
  };
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen w-full px-6 md:px-12 py-24 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none z-0" />

      {/* Left floating orb */}
      <div className="absolute left-[-100px] top-[20%] w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />
      {/* Right floating orb */}
      <div className="absolute right-[-100px] top-[60%] w-72 h-72 bg-green-400 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center animate-fade-up">
        <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-md">
          <div className="mr-2 text-green-400 text-sm">🤝</div>


          <span className="text-sm text-gray-300">
            Product partner for startups
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-5xl leading-tight">
          We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:animate-pulse">
            build
          </span>{" "}
          your MVP <br />
          and{" "}
          help it{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 hover:animate-pulse">
            grow
          </span>
        </h1>





        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
          Got an idea? We&apos;ll turn it into a real product.<br />
          From idea to launch and early user growth.
        </p>

        <div className="flex flex-wrap items-center justify-center pt-6 gap-4">
          <BookASlot isDefault={true} size="lg" isFull={false} />
          <Button
            size="lg"
            variant="outline"
            className=" hover:border-white/20 hover:bg-white/5 transition-transform hover:scale-105 active:scale-95"
            onClick={() => scrollToSection("products")}
          >
            View Our Work <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
