import logo from "/Contactlogo.png"
import heroImage from "/HERO.jpg";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--hero-scroll', scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-parallax-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay" />
      
      <div className="relative z-10 text-center px-6 hero-parallax-content space-y-4">
       <img
  src={logo}
  alt="Logo"
  className="mx-auto mb-6 w-32 md:w-40 lg:w-44 object-contain animate-fade-in"
  style={{ animationDelay: "0.1s" }}
/>

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 hero-text-shadow animate-fade-in">
          Art, rhythm, and real human stories
        </h1>
        <p className="text-foreground text-xl md:text-2xl hero-text-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
          See the future beyond.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

