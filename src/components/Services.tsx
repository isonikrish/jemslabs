"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function Services() {
  return (
    <section
      id="services"
      className="relative border-t min-h-screen w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots-small opacity-10 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[30%] w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute right-[-100px] top-[70%] w-72 h-72 bg-green-400 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          From product design to AI to user acquisition - we help founders build and grow with speed, clarity, and modern execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 text-left rounded-2xl hover:border-white/20 shadow-md hover:shadow-2xl transition duration-300">
          <p className="text-cyan-400 font-semibold text-lg md:text-xl border-b border-white/10 pb-2">
            Build
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-3 text-white">
            Product Development
          </h2>
          <Accordion type="multiple" className="w-full mt-6 space-y-2">
            <AccordionItem value="product-design">
              <AccordionTrigger>Product Design</AccordionTrigger>
              <AccordionContent>
                Crafting modern UI/UX that your users will actually enjoy using — from wireframes to high-fidelity design.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="web-app-dev">
              <AccordionTrigger>Web & App Development</AccordionTrigger>
              <AccordionContent>
                Full stack web & mobile apps built with modern frameworks like Next.js, React Native, Hono, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ai-integration">
              <AccordionTrigger>AI + Agentic Systems</AccordionTrigger>
              <AccordionContent>
                Integrate OpenAI, Gemini, or custom AI models into your product — from chatbots to task automation using agents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="infra-hosting">
              <AccordionTrigger>Cloud Hosting & Infra</AccordionTrigger>
              <AccordionContent>
                Deploy fast, secure, and scalable infrastructure with Vercel, Cloudflare, AWS, Supabase, or your stack of choice.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Grow Section */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 text-left rounded-2xl hover:border-white/20 shadow-md hover:shadow-2xl transition duration-300">
          <p className="text-green-400 font-semibold text-lg md:text-xl border-b border-white/10 pb-2">
            Grow
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-3 text-white">
            Launch, Market & Acquire Users
          </h2>
          <Accordion type="multiple" className="w-full mt-6 space-y-2">
            <AccordionItem value="content-marketing">
              <AccordionTrigger>Content & Brand Marketing</AccordionTrigger>
              <AccordionContent>
                We create startup-friendly content strategies for social platforms that build trust and awareness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="social-media">
              <AccordionTrigger>Platform Growth</AccordionTrigger>
              <AccordionContent>
                Engage and grow your audience on Instagram, Twitter, LinkedIn, and YouTube with smart strategies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="paid-ads">
              <AccordionTrigger>Performance Marketing</AccordionTrigger>
              <AccordionContent>
                Run high-converting ad campaigns on Meta, Google, LinkedIn — driven by conversion data, not guesswork.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="launch-support">
              <AccordionTrigger>Go-to-Market Strategy</AccordionTrigger>
              <AccordionContent>
                We help you craft a lean, fast launch — from positioning to launch-day content and feedback loops.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Services;
