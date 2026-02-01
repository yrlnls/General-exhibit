import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import AchievementsSection from "@/components/AchievementsSection";
import ClientsSection from "@/components/ClientsSection";
// import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BiographySection />
      <AchievementsSection />
      <ClientsSection />
      {/* <QuoteSection /> */}
      <Footer />
    </div>
  );
};

export default Index;