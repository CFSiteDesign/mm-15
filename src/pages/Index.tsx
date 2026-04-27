import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import DamageSection from "@/components/DamageSection";
import PropertySelector from "@/components/PropertySelector";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <HeroSection />
      <StorySection />
      <DamageSection />
      <PropertySelector />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
