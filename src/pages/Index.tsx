import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import AchievementsSection from "@/components/AchievementsSection";
import ClientsSection from "@/components/ClientsSection";
import QuoteSection from "@/components/QuoteSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BiographySection />
      <AchievementsSection />
      <ClientsSection />
      <QuoteSection />
    </div>
  );
};

export default Index;