"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, LayoutDashboard, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery & Validation",
    desc: "We understand your idea, goals, validate it, and plan the MVP effectively.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design & Development",
    desc: "We create clean wireframes, visuals, and build fast using modern tech.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Launch & Growth",
    desc: "We deploy your MVP with monitoring and start growth strategies immediately.",
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "from-teal-500 to-cyan-600",
  },
];

export default function OurProcess() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in whole section
      gsap.from("#process", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: "#process", start: "top 80%" },
      });

      // Header fade
      gsap.from(".process-header > *", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".process-header", start: "top 80%" },
      });

      // Step cards fade
      gsap.utils.toArray<HTMLElement>(".process-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-12 bg-background text-white border-t overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12 process-header">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process</h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-3 max-w-2xl mx-auto">
          We guide founders through every step with clarity, speed, and modern execution.
        </p>
      </div>

      {/* Steps horizontal */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-card group relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all flex-1 flex flex-col items-center text-center"
          >
            {/* Step number */}
            <div className="absolute -top-5 text-xl md:text-2xl font-bold text-white bg-zinc-900 px-4 py-1 rounded-full border border-white/20 shadow-md">
              {step.number}
            </div>

            {/* Icon */}
            <div
              className={`mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-md transition-transform duration-500 group-hover:scale-105`}
            >
              {step.icon}
            </div>

            {/* Title & description */}
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
