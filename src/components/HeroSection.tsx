import heroImage from "@/assets/hero-nairobi.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 hero-text-shadow animate-fade-in">
          Art, rhythm, and real human stories
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl hero-text-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
          See the future beyond.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;