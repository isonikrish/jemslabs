"use client";

import React from "react";
import Image from "next/image";
import { products } from "@/lib/products";
import { FaGithub } from "react-icons/fa6";

function OpenSource() {
  return (
    <section
      id="opensource"
      className="relative w-full py-24 px-6 md:px-12 bg-background text-white text-center overflow-hidden border-t"
    >
      <div className="absolute left-[-100px] top-[25%] w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute right-[-100px] top-[60%] w-72 h-72 bg-green-400 opacity-10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Open Source @ Jems Labs</h2>
        <p className="mt-4 text-gray-400 text-base md:text-lg">
          We don&apos;t just build for clients - we launch and grow products ourselves.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {products.map((proj) => (
            <a
              key={proj.title}
              href={proj.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:shadow-2xl transition group"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold group-hover:text-green-400 transition">
                {proj.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{proj.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/Jems-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-green-400 transition"
          >
            <FaGithub className="w-5 h-5" />
            <span>Explore Our GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default OpenSource;
