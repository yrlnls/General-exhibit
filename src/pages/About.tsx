import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkGallery from "@/components/WorkGallery/WorkGallery";
import { workItems } from "@/data/workItems";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-12">
        <div className="container mx-auto px-6 space-y-10">
          <div className="flex justify-end">
            <div className="text-right space-y-2">
              <p className="section-kicker">About</p>
              <h1 className="section-heading-right">Why We Create</h1>
            </div>
          </div>

          <div className="mirror-surface">
            <span className="mirror-title">Why We Create</span>
            <div className="p-6 md:p-10 space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
              <p>We believe strong stories deserve thoughtful execution.</p>
              <p>
                Our work blends visual craft, digital design, and cultural
                context to create pieces that feel human, intentional, and
                lasting - especially stories emerging from Africa and its
                creative industries.
              </p>
            </div>
          </div>

          <div className="mirror-surface">
            <span className="mirror-title">My Work</span>
            <div className="p-6 md:p-10">
              <WorkGallery
                items={workItems.slice(0, 3)}
                aspectClass="aspect-video"
                sectionClassName="py-0"
                gridClassName="grid gap-6 md:gap-8 grid-cols-1"
              />
            </div>
          </div>

          <div className="mirror-surface">
            <span className="mirror-title">Creative Lead</span>
            <div className="grid gap-8 md:grid-cols-2 items-center p-6 md:p-10">
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p className="text-white font-semibold">Meet Jesse Otumba, Creative Lead</p>
                <p>
                  Jesse is a self-taught multi-disciplinary creative based in
                  Nairobi, Kenya, specializing in filmmaking, photography, and
                  visual art.
                </p>
                <p>
                  With over seven years of experience, he has contributed to
                  projects for organizations such as Adidas, UNDRR, UNDP, L'Oreal
                  Paris, Deutsche Welle (DW), The 77 Percent, AGRA, Microsoft
                  ADC, Ulster University, Global Mathematica, Cordio East
                  Africa, Techno Kenya, African Crossroads 2020, Lokhem Kids
                  Entertainment, Nairobi Design Week, Mobile Art School in
                  Kenya (MASK), and Ololo Farm Kenya among others.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/Photo+22-11-2022,+14+35+29.jpg"
                  alt="Jesse Otumba"
                  className="w-full h-[300px] md:h-[420px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          </div>

          <div className="mirror-surface">
            <span className="mirror-title">Plan / Approach</span>
            <div className="p-6 md:p-10 space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    copy: "We listen first - understanding your goals, audience, and story.",
                  },
                  {
                    step: "02",
                    title: "Create",
                    copy: "A tailored team is assembled to design and produce with precision.",
                  },
                  {
                    step: "03",
                    title: "Deliver",
                    copy: "Final assets are polished, platform-ready, and delivered on time.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-white/10 bg-black/50 p-6"
                  >
                    <p className="text-white/40 text-xs tracking-[0.4em] uppercase">
                      Step {item.step}
                    </p>
                    <h3 className="mt-3 text-white text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-white/70 text-sm md:text-base">{item.copy}</p>
                  </div>
                ))}
              </div>

              <div className="mirror-divider pt-6">
                <h2 className="text-white text-xl font-semibold mb-4">How We Work</h2>
                <div className="space-y-4 text-white/70 text-sm md:text-base">
                  <p>
                    Step 1 - Discover. We listen first - understanding your goals,
                    audience, and story.
                  </p>
                  <p>
                    Step 2 - Create. A tailored team is assembled to design and
                    produce with precision.
                  </p>
                  <p>
                    Step 3 - Deliver. Final assets are polished, platform-ready,
                    and delivered on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
