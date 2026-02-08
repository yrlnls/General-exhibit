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
      <main className="relative">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(/background.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 film-grain opacity-70" />
        <div className="relative z-10 space-y-6 md:space-y-10 py-6">
          <BiographySection />
          <AchievementsSection />
          <ClientsSection />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
