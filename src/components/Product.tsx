import Image, { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";

function Product({
  image,
  liveLink,
  description,
}: {
  image: StaticImageData;
  liveLink: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl w-11/12 sm:w-3/4 md:w-1/2 bg-black text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden relative">
          <Image src={image} alt="product-img" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
            <p className="text-lg mt-1 font-bold">{description}</p>

            <ExternalLink size={20} className="text-white opacity-100 hover:opacity-100 transition" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default Product;
