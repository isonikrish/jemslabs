"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Product from "./Product";
import { products } from "@/lib/products";

gsap.registerPlugin(ScrollTrigger);

function OurProducts() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".products-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Product cards stagger reveal
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative min-h-screen w-full px-6 md:px-12 py-24 bg-background border-t border-white/10 text-center overflow-hidden"
    >
      {/* Heading */}
      <div className="relative z-10 mb-12 products-heading opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Products
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover our innovative ideas brought to life - each product is a
          real-world solution born from bold concepts.
        </p>
      </div>

      {/* Product Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              cardsRef.current[index] = el;
            }}
            className="opacity-0"
          >
            <Product
              image={product.image}
              title={product.title}
              description={product.description}
              liveLink={product.liveLink}
            />
          </div>

        ))}
      </div>
    </section>
  );
}

export default OurProducts;
