import Header from "@/components/Header";
import Footer from "@/components/Footer";

const approachCards = [
  {
    title: "Pre-Production",
    description:
      "We listen first. Research, scripting, and planning shape the story before a single frame is shot.",
    image: "/ETH1.jpg",
    tag: "01",
  },
  {
    title: "Production",
    description:
      "Cinematic, human, and precise. We capture real moments with a calm, intentional pace.",
    image: "/ETH2.jpg",
    tag: "02",
  },
  {
    title: "Post Production",
    description:
      "Editing, color, and sound design come together to deliver a film that feels alive and honest.",
    image: "/ETH3.jpg",
    tag: "03",
  },
];

const workSteps = [
  {
    title: "Step 1 – Discover",
    body: "We listen first and align on your goals, audience, and story.",
  },
  {
    title: "Step 2 – Create",
    body: "A tailored team builds the visual language and production plan.",
  },
  {
    title: "Step 3 – Deliver",
    body: "Final assets are refined, platform-ready, and delivered on time.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            <section className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 shadow-xl shadow-black/20 scroll-reveal">
              <h2 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
                Why We Create
              </h2>
              <p className="text-white/80 leading-relaxed">
                We believe strong stories deserve thoughtful execution. Our work blends
                visual craft, digital design, and cultural context to create pieces
                that feel human, intentional, and lasting.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                Especially stories emerging from Africa and its creative industries, we
                build films that connect local truth with global audiences.
              </p>
            </section>

            <section className="relative overflow-hidden rounded-2xl border border-white/10 scroll-reveal">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/DOING_ZERO.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />
              <div className="relative p-6 md:p-10 text-white space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70 text-center">
                  My Work
                </p>
                <h2 className="text-center text-2xl md:text-3xl font-semibold">
                  Documentary realism with poetic rhythm.
                </h2>
                <p className="text-center text-white/80 leading-relaxed">
                  Films that honor people, culture, and the quiet power of authentic
                  human moments.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 shadow-xl shadow-black/20 scroll-reveal">
              <h2 className="text-center text-xl md:text-2xl font-semibold text-white mb-4">
                Meet Jesse Otumba,{" "}
                <span className="text-white/70 italic font-normal">Creative Lead</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Jesse is a self-taught multi-disciplinary creative based in Nairobi,
                  Kenya, specializing in filmmaking, photography, and visual art.
                </p>
                <p>
                  With over seven years of experience, he has contributed to projects
                  for organizations such as UNDRR, UNDP, L'Oréal Paris, Deutsche Welle
                  (DW), The 77 Percent, AGRA, Microsoft ADC, Ulster University, Global
                  Mathematica, Cordio East Africa, and Nairobi Design Week among others.
                </p>
              </div>
            </section>

            <section className="scroll-reveal">
              <h2 className="section-heading mb-8">Plan/Approach</h2>
              <div className="mirror-panel">
                <div className="mirror-panel-inner grid gap-6 md:grid-cols-3 md:grid-rows-2 md:auto-rows-fr">
                  <article className="group h-full min-h-[160px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-xl shadow-black/20 md:col-start-1 md:row-start-1">
                    <div className="relative h-full min-h-[160px]">
                      <img
                        src={approachCards[0].image}
                        alt={approachCards[0].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="absolute left-4 top-3 text-xs tracking-[0.4em] text-white/70">
                        {approachCards[0].tag}
                      </span>
                    </div>
                  </article>

                  <article className="h-full min-h-[160px] rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 shadow-xl shadow-black/20 flex flex-col justify-center text-center md:col-start-2 md:row-start-1">
                    <h3 className="text-white font-semibold text-lg">
                      {approachCards[1].title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      {approachCards[1].description}
                    </p>
                  </article>

                  <article className="group h-full min-h-[160px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-xl shadow-black/20 md:col-start-3 md:row-start-1">
                    <div className="relative h-full min-h-[160px]">
                      <img
                        src={approachCards[2].image}
                        alt={approachCards[2].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="absolute left-4 top-3 text-xs tracking-[0.4em] text-white/70">
                        {approachCards[2].tag}
                      </span>
                    </div>
                  </article>

                  <article className="h-full min-h-[160px] rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 shadow-xl shadow-black/20 flex flex-col justify-center text-center md:col-start-1 md:row-start-2">
                    <h3 className="text-white font-semibold text-lg">
                      {approachCards[0].title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      {approachCards[0].description}
                    </p>
                  </article>

                  <article className="group h-full min-h-[160px] rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-xl shadow-black/20 md:col-start-2 md:row-start-2">
                    <div className="relative h-full min-h-[160px]">
                      <img
                        src={approachCards[1].image}
                        alt={approachCards[1].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="absolute left-4 top-3 text-xs tracking-[0.4em] text-white/70">
                        {approachCards[1].tag}
                      </span>
                    </div>
                  </article>

                  <article className="h-full min-h-[160px] rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 shadow-xl shadow-black/20 flex flex-col justify-center text-center md:col-start-3 md:row-start-2">
                    <h3 className="text-white font-semibold text-lg">
                      {approachCards[2].title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mt-2">
                      {approachCards[2].description}
                    </p>
                  </article>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8 shadow-xl shadow-black/20 scroll-reveal">
              <h2 className="text-center text-xl md:text-2xl font-semibold text-white mb-6">
                How We Work
              </h2>
              <div className="space-y-4">
                {workSteps.map((step) => (
                  <div key={step.title} className="text-white/80">
                    <p className="font-semibold text-white text-center">{step.title}</p>
                    <p className="text-center text-white/70 mt-1">{step.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
