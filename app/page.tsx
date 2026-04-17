import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialOffers from "@/components/SpecialOffers";
import ProcessSteps from "@/components/ProcessSteps";
import PopularVehicles from "@/components/PopularVehicles";
import FirstTimeBuyer from "@/components/FirstTimeBuyer";
import ServicesOffered from "@/components/ServicesOffered";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <SpecialOffers />
      <ProcessSteps />
      <PopularVehicles />
      <FirstTimeBuyer />
      <ServicesOffered />
      <Footer />
    </main>
  );
}
