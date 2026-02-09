import Header from "@/components/Header";
import Footer from "@/components/Footer";

const approachImages = ["/ETH1.jpg", "/ETH2.jpg", "/ETH3.jpg"];

const workSteps = [
  {
    title: "Step 1 – Discover",
    body: "We listen first - understanding your goals, audience and story",
  },
  {
    title: "Step 2 – Create",
    body: "A tailored team is assembled to design and produce with precision.",
  },
  {
    title: "Step 3 – Deliver",
    body: "Final assets are polished, platform-ready, and delivered on time.",
  },
];

const About = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/About%20page.jpg')" }}
    >
      <div className="absolute inset-0 cinema-overlay" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-24 pb-16 flex-1">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <section className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 shadow-xl shadow-black/20 scroll-reveal">
                <h2 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
                  Why We Create
                </h2>
                <p className="text-white/80 leading-relaxed text-center">
                  We believe strong stories deserve thoughtful execution.
                </p>
                <p className="text-white/80 leading-relaxed mt-4 text-center">
                  Our work blends visual craft, digital design, and cultural
                  context to create pieces that feel human, intentional, and
                  lasting. Especially stories emerging from Africa and its
                  creative industries.
                </p>
              </section>

              <section className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 shadow-xl shadow-black/20 scroll-reveal">
                <h2 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
                  Meet Jesse Otumba,{" "}
                  <span className="text-white/70 italic font-normal">
                    Creative Lead
                  </span>
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-stretch">
                  <div className="order-2 md:order-1 space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Jesse is a self-taught multi-disciplinary creative based in
                      Nairobi, Kenya, specializing in filmmaking, photography, and
                      visual art.
                    </p>
                    <p>
                      With over seven years of experience, he has contributed to
                      projects for organizations such as Adidas, UNDRR, UNDP,
                      L'Oréal Paris, Deutsche Welle (DW), The 77 Percent, AGRA,
                      Microsoft ADC, Ulster University, Global Mathematica, Cordio
                      East Africa, Techno Kenya, African Crossroads 2020, Lokhem
                      Kids Entertainment, Nairobi Design Week, Mobile Art School
                      in Kenya (MASK), and Ololo Farm Kenya among others.
                    </p>
                  </div>
                  <div className="order-1 md:order-2 h-full">
                    <div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-xl shadow-black/20">
                      <img
                        src="/Jesse.jpg"
                        alt="Jesse Otumba"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="scroll-reveal">
                <h2 className="section-heading mb-8">Plan/Approach</h2>
                <div className="mirror-panel">
                  <div className="mirror-panel-inner grid gap-6 md:grid-cols-3">
                    {workSteps.map((step, index) => (
                      <div key={step.title} className="grid gap-4 md:gap-6">
                        <article
                          className={`group h-full min-h-[200px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-xl shadow-black/20 ${
                            index % 2 === 1 ? "md:order-2" : "md:order-1"
                          }`}
                        >
                          <div className="relative h-full min-h-[200px]">
                            <img
                              src={approachImages[index]}
                              alt={step.title}
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
                            {step.title}
                          </h3>
                          <p className="text-white/70 text-sm md:text-base leading-relaxed mt-3">
                            {step.body}
                          </p>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
