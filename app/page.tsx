import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { RegistrySection } from "@/components/RegistrySection";
import { SectionCards } from "@/components/SectionCards";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* <Navigation /> */}
      <Hero />
      <SectionCards />
      <RegistrySection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
