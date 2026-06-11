import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import RoadmapSection from "@/components/RoadmapSection";
import HowToBuySection from "@/components/HowToBuySection";
import CommunitySection from "@/components/CommunitySection";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <RoadmapSection />
      <HowToBuySection />
      <CommunitySection />
    </main>
  );
}
