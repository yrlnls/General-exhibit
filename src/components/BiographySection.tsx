const stuffWeDoItems = [
  {
    title: "Visual Production",
    items: [
      "Filmmaking & Photography",
      "Commercial & Branded Video",
      "Post-Production & Editing",
    ],
    image: "/visual production thumb.jpg",
  },
  {
    title: "Digital & Design",
    items: ["Web Design & Development", "Graphic Design"],
    image: "/digital & design thumb.jpg",
  },
  {
    title: "Voice & Language",
    items: ["Voice Overs", "Translation & Localization", "Subtitling & Captions"],
    image: "/voice & language thumb.jpg",
  },
];

const BiographySection = () => {
  return (
    <section id="about" className="py-10 scroll-reveal">
      <div className="container mx-auto px-6">

        {/* ================= WHO WE ARE ================= */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="section-heading mb-8">Who We Are</h2>
          <div className="mirror-panel">
            <div className="mirror-panel-inner text-white/80 text-base md:text-lg leading-relaxed">
            General Exhibit is led by Jesse and supported by a network of collaborators across film, design, photography, voice, and language.
            We curate layered experiences across visual and digital media for brands, creators and organizations.
            </div>
          </div>
        </div>

        {/* ================= STUFF WE DO ================= */}
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-8">Stuff We Do</h2>
          <div className="mirror-panel">
            <div className="mirror-panel-inner">
              <div className="grid gap-6 md:grid-cols-3">
                {stuffWeDoItems.map((item, index) => (
                  <div key={item.title} className="grid gap-4 md:gap-6">
                    <article
                      className={`group h-full min-h-[200px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-xl shadow-black/20 ${
                        index % 2 === 1 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="relative h-full min-h-[200px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                      </div>
                    </article>

                    <article
                      className={`h-full min-h-[200px] rounded-2xl border border-white/10 bg-black/40 p-6 md:p-7 shadow-xl shadow-black/20 flex flex-col justify-center text-left ${
                        index % 2 === 1 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <h3 className="text-white font-semibold text-lg md:text-xl">
                        {item.title}
                      </h3>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm md:text-base text-white/70 marker:text-white/50">
                        {item.items.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BiographySection;
