import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { RegistrySection } from "@/components/RegistrySection";
import { SectionCards } from "@/components/SectionCards";

export default function Home() {
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
}
