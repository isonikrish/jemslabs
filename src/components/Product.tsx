import Image, { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";

function Product({
  image,
  liveLink,
  description,
  title,
}: {
  image: StaticImageData;
  liveLink: string;
  description: string;
  title: string;
}) {
  return (
    <a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all hover:border-white/20 hover:shadow-2xl backdrop-blur-sm"
    >
      <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
        <Image
          src={image}
          alt={`${title} image`}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="flex flex-col justify-between flex-grow p-5 gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <ExternalLink className="text-gray-400 group-hover:text-white transition" size={18} />
        </div>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 text-left">
          {description}
        </p>
      </div>
    </a>
  );
}

export default Product;
