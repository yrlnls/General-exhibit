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

        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          lg:grid-cols-6
          gap-x-4
          gap-y-8
          md:gap-x-6
          md:gap-y-10
          place-items-center
          max-w-6xl
          mx-auto
        ">
          {clients.map((client) => (
            <div
              key={client.name}
              className="
                flex
                items-center
                justify-center
                w-36
                h-20
                sm:w-32
                sm:h-16
                md:w-32
                md:h-16
              "
            >
              <img
                src={`/${client.logo}`}
                alt={client.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain transition-transform duration-200 hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
