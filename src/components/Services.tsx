"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function Services() {
  return (
    <div
      className="relative border-t-4 min-h-screen w-full py-16 text-center bg-black text-white"
      id="services"
    >
      <div className="absolute inset-0 bg-dots-small opacity-20 pointer-events-none"></div>

      <div className="relative">
        <div className="flex justify-center gap-2 items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        </div>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto  px-5">
          We provide end-to-end solutions to help businesses and startups build,
          launch, and market their products with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 mt-10 relative">
        <div className="p-6 text-left rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <p className="text-gray-400 font-semibold text-lg md:text-xl border-b py-2">
            1. Build
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-2">
            End-to-End Application Development
          </h2>
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="product-design">
              <AccordionTrigger>Product Design</AccordionTrigger>
              <AccordionContent>
                We create intuitive, user-friendly, and visually stunning UI/UX
                designs to enhance user experience and engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fullstack-dev">
              <AccordionTrigger>Website Development</AccordionTrigger>
              <AccordionContent>
                Our team builds high-performance web applications with scalable
                and robust architectures.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ai-integration">
              <AccordionTrigger>AI Integration</AccordionTrigger>
              <AccordionContent>
                AI-powered solutions tailored to your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="p-6 text-left rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <p className="text-gray-400 font-semibold text-lg md:text-xl border-b py-2">
            2. Launch
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-2">
            Seamless Deployment & Scaling
          </h2>
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="cloud">
              <AccordionTrigger>Cloud Hosting</AccordionTrigger>
              <AccordionContent>
                Deploy on fast, secure cloud platforms like AWS, Vercel, and
                Cloudflare.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security">
              <AccordionTrigger>Security & Performance</AccordionTrigger>
              <AccordionContent>
                Optimize speed, protect data, and ensure smooth performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ci-cd">
              <AccordionTrigger>
                Continuous Integration & Deployment (CI/CD)
              </AccordionTrigger>
              <AccordionContent>
                Automate testing and deployment using CI/CD pipelines for
                seamless updates and reliability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="p-6 text-left rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <p className="text-gray-400 font-semibold text-lg md:text-xl border-b py-2">
            3. Market
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-2">
            Reach & Grow Your Audience
          </h2>
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="seo">
              <AccordionTrigger>SEO & Marketing</AccordionTrigger>
              <AccordionContent>
                Improve visibility with SEO and digital marketing strategies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ads">
              <AccordionTrigger>Paid Advertising</AccordionTrigger>
              <AccordionContent>
                Drive targeted traffic with Google Ads, Meta Ads, and LinkedIn
                campaigns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="content-social">
              <AccordionTrigger>Content & Social Media</AccordionTrigger>
              <AccordionContent>
                Build a strong online presence with engaging content marketing
                and social media strategies tailored to your brand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Services;
