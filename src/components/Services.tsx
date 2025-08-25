"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section diagonal reveal
      gsap.fromTo(
        "#services",
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.6,
          ease: "power4.inOut",
          scrollTrigger: { trigger: "#services", start: "top 80%" },
        }
      );

      // Header lines
      gsap.from(".services-header > *", {
        y: 56,
        opacity: 0,
        skewY: 4,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".services-header", start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 72,
          x: i % 2 === 0 ? -56 : 56,
          rotate: i % 2 === 0 ? -2.5 : 2.5,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });

      gsap.to(".glow", {
        xPercent: 18,
        yPercent: 18,
        duration: 9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const serviceData = [
    {
      tag: "Build",
      color: "text-cyan-400",
      title: "Product Development",
      items: [
        { label: "Product Design", desc: "Crafting modern UI/UX that your users will actually enjoy using — from wireframes to high-fidelity design." },
        { label: "Web & App Development", desc: "Full stack web & mobile apps built with modern frameworks like Next.js, React Native, Hono, and more." },
        { label: "AI Integration", desc: "Integrate OpenAI, Gemini, or custom AI models into your product — from chatbots to task automation using agents." },
        { label: "Cloud Hosting & Infra", desc: "Deploy fast, secure, and scalable infrastructure with Vercel, Cloudflare, AWS, Supabase, or your stack of choice." },
      ],
    },
    {
      tag: "Grow",
      color: "text-green-400",
      title: "Launch, Market & Acquire Users",
      items: [
        { label: "Content & Brand Marketing", desc: "We create startup-friendly content strategies for social platforms that build trust and awareness." },
        { label: "Platform Growth", desc: "Engage and grow your audience on Instagram, Twitter, LinkedIn, and YouTube with smart strategies." },
        { label: "Performance Marketing", desc: "Run high-converting ad campaigns on Meta, Google, LinkedIn — driven by conversion data, not guesswork." },
        { label: "Go-to-Market Strategy", desc: "We help you craft a lean, fast launch — from positioning to launch-day content and feedback loops." },
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ willChange: "clip-path" }}
      className="relative border-t min-h-screen w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-dots-small opacity-10 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[30%] w-72 h-72 bg-blue-500/30 rounded-full blur-3xl glow" />
      <div className="absolute right-[-100px] top-[70%] w-72 h-72 bg-green-400/30 rounded-full blur-3xl glow" />

      {/* Header */}
      <div className="relative z-10 services-header">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          From product design to AI to user acquisition - we help founders build and grow with speed, clarity, and modern execution.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto relative z-10 services-grid">
        {serviceData.map((service, i) => (
          <div
            key={i}
            className="service-card bg-white/5 border border-white/10 backdrop-blur-lg p-8 text-left rounded-2xl hover:border-white/20 shadow-md hover:shadow-2xl transition-transform transform will-change-transform hover:-translate-y-2 hover:rotate-[1deg] duration-300"
          >
            <p className={`${service.color} font-semibold text-lg md:text-xl border-b border-white/10 pb-2`}>
              {service.tag}
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-3 text-white">
              {service.title}
            </h2>

            <Accordion type="multiple" className="w-full mt-6 space-y-2">
              {service.items.map((item, j) => (
                <AccordionItem key={j} value={item.label}>
                  <AccordionTrigger>{item.label}</AccordionTrigger>
                  <AccordionContent>{item.desc}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
