"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import BookASlot from "./BookASlot";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };


  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-2 z-50 rounded-xl transition-all duration-500 ease-in-out ${scrolled
        ? "left-4 right-4 md:left-24 md:right-24 lg:left-56 lg:right-56 bg-black/60 text-white shadow-md backdrop-blur-lg border"
        : "left-4 right-4 md:left-8 md:right-8 bg-transparent"
        }`}>

      <div className="w-full flex items-center justify-between transition-all duration-300 px-4 md:px-6 py-3">


        <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Image src="/logo1.png" alt="logo" width={120} height={60} />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center font-medium">
            <li className="cursor-pointer px-4 hover:underline" onClick={() => scrollToSection("products")}>Products</li>
            <li className="cursor-pointer px-4 hover:underline" onClick={() => scrollToSection("services")}>Services</li>
            <li className="cursor-pointer px-4 hover:underline" onClick={() => scrollToSection("process")}>Our Process</li>
            <li className="cursor-pointer px-4 hover:underline" onClick={() => scrollToSection("faq")}>
              FAQ
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <BookASlot isDefault={true} size="default" isFull={false} />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full bg-black/50 backdrop-blur-lg p-6 border-t border-white/10">
          <ul className="flex flex-col gap-4 items-center text-white">
            <li className="cursor-pointer hover:underline border-b w-full py-3" onClick={() => scrollToSection("products")}>Products</li>
            <li className="cursor-pointer hover:underline border-b w-full py-3" onClick={() => scrollToSection("services")}>Services</li>
            <li className="cursor-pointer hover:underline border-b w-full py-3" onClick={() => scrollToSection("process")}>Our Process</li>
            <li className="cursor-pointer hover:underline border-b w-full py-3" onClick={() => scrollToSection("faq")}>FAQ</li>
            <li className="w-full"><BookASlot isDefault={true} size="default" isFull={false} /></li>
          </ul>
        </div>
      )}
    </nav>

  );

}

export default Navbar;
