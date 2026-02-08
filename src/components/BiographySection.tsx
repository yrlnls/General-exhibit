const BiographySection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <div className="mirror-surface">
          <span className="mirror-title">Who We Are</span>
          <div className="grid gap-8 md:grid-cols-2 items-center p-6 md:p-10">
            <div className="order-2 md:order-1 space-y-5 text-white/80 text-base md:text-lg leading-relaxed">
              <p>
                Led by Jesse, we are a flexible team of trusted creatives who
                curate stories through film, photography, design, and sound for
                brands, creators, and organizations.
              </p>
              <p>
                Our work blends visual craft, digital design, and cultural
                context to create pieces that feel human, intentional, and
                lasting - especially stories emerging from Africa and its
                creative industries.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/Photo+22-11-2022,+14+35+29.jpg"
                  alt="Jesse filming in the field"
                  className="w-full h-[280px] md:h-[360px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
