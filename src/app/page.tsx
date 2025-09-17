import FAQSection from "@/components/FAQ";
import Hero from "@/components/Hero";
import LeadTrackerWrapper from "@/components/LeadTrackerWrapper";
import OurProcess from "@/components/OurProcess";
import OurProducts from "@/components/OurProducts";
import Services from "@/components/Services";


function Home() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white text-center w-full">
      <LeadTrackerWrapper />
      <Hero />
      <OurProducts />
      <Services />
      <OurProcess />
      <FAQSection />
    </div>
  );
}

export default Home;
