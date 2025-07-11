import Hero from "@/components/Hero";
import OpenSource from "@/components/OpenSource";
import OurProducts from "@/components/OurProducts";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";


function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white text-center w-full">
      <Hero />
      <OurProducts />
      <Services />
      <Pricing />
      <OpenSource />
    </div>
  );
}

export default Home;
