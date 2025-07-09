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
      className="group block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="relative w-full h-60 sm:h-72 md:h-80">
        <Image
          src={image}
          alt={`${title} image`}
          className="object-cover w-full h-full"
        />

        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <h3 className="text-white font-medium text-base">{title}</h3>
        <ExternalLink className="text-gray-400 group-hover:text-white transition" size={18} />
      </div>
    </a>
  );
}

export default Product;
