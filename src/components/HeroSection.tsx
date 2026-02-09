import logo from "/Contactlogo.png";
import heroImage from "/ABOUT.png";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      rafId = 0;
      document.documentElement.style.setProperty(
        "--hero-scroll",
        window.scrollY.toString()
      );
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
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
      <div className="hero-overlay opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 hero-parallax-content space-y-0 max-w-3xl mx-auto">
        <img
          src={logo}
          alt="Logo"
          className="w-48 md:w-64 lg:w-80 object-contain animate-fade-in mx-auto"
          style={{ animationDelay: "0.1s" }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground hero-text-shadow animate-fade-in text-center">
          Stories. Design. Motion.
        </h1>

        <p
          className="text-foreground text-lg md:text-xl hero-text-shadow animate-fade-in text-center"
          style={{ animationDelay: "0.2s" }}
        >
          See the future beyond.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
