import filmmmakerPortrait from "@/assets/filmmaker-portrait.jpg";

const BiographySection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Biography */}
        <div className="max-w-4xl mb-20">
          <h2 className="section-heading">Biography</h2>
          <div className="space-y-6 text-foreground text-base md:text-lg leading-relaxed">
            <p>
              Hello! I'm a self-taught artist & filmmaker based in Nairobi, Kenya and specializing in filmmaking, photography, and visual art.
            </p>
            <p>
              I turned my passion for art and skating into a filmmaking journey - from editing my own videos to telling meaningful stories for global brands and organizations.
            </p>
            <p>
              I'm also part of{" "}
              <a href="https://strategicagenda.com/the-agenda/network-of-creatives/" className="text-primary hover:underline">
                The Creative Network
              </a>{" "}
              at <strong className="text-foreground">Strategic Agenda UK</strong> where we tell compelling stories around the world.
            </p>
          </div>
        </div>

        {/* My Work */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-heading">My Work</h2>
            <div className="space-y-6 text-foreground text-base md:text-lg leading-relaxed">
              <p>
                With over <strong className="text-foreground">seven</strong> years of experience, I've contributed to various projects for renowned organizations such as UNDRR, UNDP, L'Oreal Paris, Deutsche Welle (DW) the 77 percent, AGRA, Microsoft ADC, Ulster University, Global Mathematica, Cordio East Africa, Techno Kenya, African Crossroads 2020, Lokhem Kids Entertainment, Nairobi Design Week, Mobile Art School in Kenya (MASK), and Ololo Farm Kenya among others.
              </p>
              <p>
                My style blends documentary realism with visual artistry—marked by authentic human moments, purposeful pacing, and an elegant sense of rhythm. My films reflect a deep respect for people, culture, and the power of storytelling to connect global audiences with meaningful change.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/Photo+22-11-2022,+14+35+29.jpg"
              alt="Jesse Otumba Otieno with camera equipment"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;