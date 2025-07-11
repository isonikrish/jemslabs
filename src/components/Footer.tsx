import Image from "next/image";
import { FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black/80 backdrop-blur-md text-white px-6 py-12 overflow-hidden">
      <div className="absolute left-[-100px] top-[30%] w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute right-[-100px] top-[70%] w-72 h-72 bg-green-400 opacity-10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
        <Image
          src="/logo1.png"
          alt="logo"
          width={140}
          height={60}
          className="object-contain cursor-pointer"
        />

        <div className="flex gap-6">
          <a
            href="https://github.com/Jems-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@JemsLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/jems_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-6 text-center text-sm text-gray-300">
        Have a question?{" "}
        <a
          href="mailto:labsjems@gmail.com"
          className="text-green-400 hover:text-white underline transition"
        >
          labsjems@gmail.com
        </a>
      </div>

      <div className="relative z-10 mt-8 text-center text-sm text-gray-400 border-t border-white/10 pt-6">
        &copy; 2025 <span className="text-white font-semibold">Jems Labs</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;