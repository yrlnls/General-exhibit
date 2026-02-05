import logo from "/Contactlogo.png";
import heroImage from "/ABOUT.png";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty(
        "--hero-scroll",
        scrollY.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover hero-parallax-bg"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Darker overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 hero-parallax-content space-y-1">
        <img
          src={logo}
          alt="Logo"
          className="w-40 md:w-48 lg:w-60 object-contain animate-fade-in"
          style={{ animationDelay: "0.1s" }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground hero-text-shadow animate-fade-in">
          Art, rhythm, and real human stories
        </h1>

        <p
          className="text-foreground text-lg md:text-xl hero-text-shadow animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          See the future beyond.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
