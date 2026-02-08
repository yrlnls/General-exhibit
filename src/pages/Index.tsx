import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import AchievementsSection from "@/components/AchievementsSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div
        className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(/background.jpg)` }}
      >
        <div className="absolute inset-0 cinema-overlay" />
        <div className="relative z-10">
          <BiographySection />
          <AchievementsSection />
          <ClientsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
