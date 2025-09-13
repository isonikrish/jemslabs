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
      // Fade in whole section
      gsap.from("#services", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: "#services", start: "top 80%" },
      });

      // Header fade
      gsap.from(".services-header > *", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".services-header", start: "top 80%" },
      });

      // Service cards fade
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
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

  const serviceData = [
    {
      tag: "Build",
      color: "text-cyan-400",
      title: "Design & Development",
      items: [
        { label: "Product Design", desc: "Crafting modern UI/UX that your users will actually enjoy using — from wireframes to high-fidelity design." },
        { label: "Full-Stack Development", desc: "Modern MVPs built with Next.js, React Native, Hono, and scalable backends." },
        { label: "AI-Powered Features", desc: "Integrate GPT, Gemini, or custom AI models — from chatbots to automation tools." },
        { label: "Cloud Infra & DevOps", desc: "Fast, secure deployment on Vercel, Cloudflare, AWS, Supabase — optimized for scale." },
      ],
    },
    {
      tag: "Grow",
      color: "text-green-400",
      title: "Launch & Market",
      items: [
        { label: "Go-to-Market Strategy", desc: "Positioning, launch-day content, and growth loops tailored for MVPs." },
        { label: "Content & Brand Marketing", desc: "Startup-friendly storytelling for trust and visibility across social platforms." },
        { label: "User Acquisition Campaigns", desc: "High-converting ads on Meta, Google, and LinkedIn, backed by analytics." },
        { label: "Growth Analytics & Retention", desc: "Track KPIs, user funnels, and retention with lightweight analytics setups." },
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative border-t min-h-screen w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden"
    >
      {/* Dots Background */}
      <div className="absolute inset-0 bg-dots-small opacity-10 pointer-events-none z-0" />

      {/* Header */}
      <div className="relative z-10 services-header">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          We help founders build and grow with speed, clarity, and modern execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto relative z-10 services-grid">
        {serviceData.map((service, i) => (
          <div
            key={i}
            className="service-card bg-white/5 border border-white/10 backdrop-blur-lg p-8 text-left rounded-2xl hover:border-white/20 shadow-md hover:shadow-2xl transition-transform transform will-change-transform hover:-translate-y-2 duration-300"
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
