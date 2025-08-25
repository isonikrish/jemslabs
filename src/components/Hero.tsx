"use client";
import React, { useEffect, useRef, Suspense } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

const BookASlot = dynamic(() => import("./BookASlot"), {
  ssr: false,
});

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.to(".floating-orb", {
        y: "+=30",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen w-full px-6 md:px-12 py-24 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[20%] w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl z-0 floating-orb" />
      <div className="absolute right-[-100px] top-[60%] w-72 h-72 bg-green-400 opacity-20 rounded-full blur-3xl z-0 floating-orb" />

      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center"
      >
        <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md shadow-md">
          <div className="mr-2 text-green-400 text-sm">🤝</div>
          <span className="text-sm text-gray-300">
            Product partner for startups
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-5xl leading-tight"
        >
          We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:animate-pulse">
            build
          </span>{" "}
          your MVP <br />
          and help it{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 hover:animate-pulse">
            grow
          </span>
        </h1>

        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed"
        >
          Got an idea? We&apos;ll turn it into a real product.<br />
          From idea to launch and early user growth.
        </p>

        <div
          className="flex flex-wrap items-center justify-center pt-6 gap-4"
        >
          <Suspense fallback={<span>Loading...</span>}>
            <BookASlot isDefault={true} size="lg" isFull={false} />
          </Suspense>
          <Button
            size="lg"
            variant="outline"
            className="hover:border-white/20 hover:bg-white/5 transition-transform hover:scale-105 active:scale-95"
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