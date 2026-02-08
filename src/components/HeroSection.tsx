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
    <section className="relative h-screen min-h-[620px] flex items-center justify-center overflow-hidden">
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

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 film-grain" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 hero-parallax-content space-y-4">
        <img
          src={logo}
          alt="GE Collective logo"
          className="w-36 md:w-44 lg:w-52 object-contain animate-fade-in"
          style={{ animationDelay: "0.1s" }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <p className="section-kicker animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Art, rhythm, and real human stories
        </p>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground hero-text-shadow animate-fade-in">
          Stories. Design. Motion.
        </h1>

        <p
          className="text-foreground text-base md:text-lg hero-text-shadow animate-fade-in"
          style={{ animationDelay: "0.25s" }}
        >
          See the future beyond.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
