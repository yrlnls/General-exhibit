const clients = [
  { name: "Akuna Wallet", logo: "AKUNA.png" },
  { name: "LG", logo: "LG.png" },
  { name: "L'Oréal Paris", logo: "lOrealParis.png" },
  { name: "Adidas", logo: "ADIDAS.png" },
  { name: "UNDRR", logo: "UNDRR_logo.png" },
  { name: "UNDP", logo: "UNDP.png" },
  { name: "Spotify", logo: "SPOTIFY.png" },
  { name: "Ulster University", logo: "Ulster_University_Logo.png" },
  { name: "Hyatt", logo: "HYATT.png" },
  { name: "Wise Two", logo: "WISETWO.png" },
  { name: "Batian Peak", logo: "BATIAN.png" },
  { name: "Nairobi Design", logo: "NAIROBIDESIGN.png" },
  { name: "Cordio", logo: "CORDIO.png" },
  { name: "Waco", logo: "WACO.png" },
  { name: "Strategic Agenda", logo: "STRATEGICAGENDA.png" },
  { name: "Mathematica", logo: "mathematicawithtagline560.png" },
  { name: "Rift Valley Institute", logo: "RVI-logo-01.png" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-xs tracking-[0.35em] text-muted-foreground uppercase mb-10 md:mb-12">
          Clients
        </h2>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-9
            gap-x-8
            gap-y-12
            place-items-center
            max-w-7xl
            mx-auto
          "
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="
                w-full
                h-28
                md:h-32
                lg:h-36
                flex
                items-center
                justify-center
              "
            >
              <img
                src={`/${client.logo}`}
                alt={client.name}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-contain
                  scale-110
                  transition-transform
                  duration-200
                  hover:scale-125
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default ClientsSection;