import { Film, Palette, Mic } from "lucide-react";

const services = [
  {
    title: "Visual Production",
    icon: Film,
    items: ["Filmmaking & Photography", "Commercial & Branded Video", "Post-Production & Editing"],
  },
  {
    title: "Digital & Design",
    icon: Palette,
    items: ["Web Design & Development", "Graphic Design"],
  },
  {
    title: "Voice & Language",
    icon: Mic,
    items: ["Voice Overs", "Translation & Localization", "Subtitling & Captions"],
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="services"
      className="py-16"
    >
      <div className="container mx-auto px-6">
        <div className="mirror-surface">
          <span className="mirror-title">Stuff We Do</span>
          <div className="grid gap-6 md:grid-cols-3 p-6 md:p-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-black/50 p-6 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.85)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-white text-lg font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-2 text-white/70 text-sm md:text-base">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
