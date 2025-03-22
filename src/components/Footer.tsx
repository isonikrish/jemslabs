import Image from "next/image";
import { FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="px-6 py-10 border-t-4 bg-black">
      <div className="pb-6 flex flex-col md:flex-row justify-between items-center">
        <Image
          src="/logo1.png"
          alt="logo"
          width={140}
          height={60}
          className="object-contain cursor-pointer"
        />
        <div className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Jems-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://www.youtube.com/@JemsLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
          <a
            href="https://x.com/jems_labs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </a>
        </div>
      </div>

      <div className="text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 pt-4 border-t">
        &copy; 2025 <span className="flex items-center gap-1">Jems Labs.</span> All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
