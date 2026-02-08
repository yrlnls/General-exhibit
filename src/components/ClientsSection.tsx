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
  { name: "Strategic Agenda", logo: "STRATEGICAGENDA.png" },
  { name: "Mathematica", logo: "mathematicawithtagline560.png" },
  { name: "Rift Valley Institute", logo: "RVI-logo-01.png" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16">
      <div className="container mx-auto px-6">
        <div className="mirror-surface">
          <span className="mirror-title">Clients</span>
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-8
              gap-x-10
              gap-y-12
              place-items-center
              max-w-7xl
              mx-auto
              p-6
              md:p-10
              pt-12
              md:pt-14
            "
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="
                  w-full
                  h-24
                  md:h-28
                  lg:h-32
                  flex
                  items-center
                  justify-center
                  px-2
                "
              >
                <img
                  src={`/${client.logo}`}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    max-w-full
                    max-h-full
                    object-contain
                    opacity-70
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:scale-110
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
