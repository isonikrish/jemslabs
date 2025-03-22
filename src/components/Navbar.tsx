"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Calendar, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 px-6 md:px-10 py-3 border-b flex items-center justify-between shadow-md z-50 bg-black/50 backdrop-blur-md">
      <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
        <Image src="/logo1.png" alt="logo" width={120}
          height={60} />
      </div>

      <div className="hidden md:flex items-center gap-4">
        <ul className="flex items-center font-medium">
          <li
            className="cursor-pointer px-4 hover:underline"
            onClick={() => scrollToSection("products")}
          >
            Our Products
          </li>
          <li
            className="cursor-pointer px-4 hover:underline"
            onClick={() => scrollToSection("services")}
          >
            Services
          </li>
          <a href="https://cal.com/isonikrish/book" target="_blank" rel="noopener noreferrer">
            <Button className="ml-4 flex items-center gap-2">
              <Calendar size={16} />
              Book a Call
            </Button>
          </a>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md p-6 md:hidden">
          <ul className="flex flex-col gap-4 items-center text-white">
            <li className="cursor-pointer hover:underline border-b w-full py-3" onClick={() => scrollToSection("products")}>
              Our Products
            </li>
            <li className="cursor-pointer hover:underline border-b w-full py-3" onClick={() => scrollToSection("services")}>
              Services
            </li>
            <a href="https://cal.com/isonikrish/book" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="flex items-center gap-2">
                <Calendar size={16} />
                Book a Call
              </Button>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
