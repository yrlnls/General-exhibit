const clients = [
  { name: "Spotify", logo: "Spotify_Full_Logo_RGB_White.png" },
  { name: "Akuna Wallet", logo: "akuna.png" },
  { name: "Batian Peak", logo: "batianpeak.png" },
  { name: "Waco", logo: "wacologo1.jpg" },
  { name: "Rift Valley Institute", logo: "riftvalley.png" },
  { name: "Adidas", logo: "adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png" },
  { name: "Cordio", logo: "cordio.png" },
  { name: "Nairobi Design", logo: "NAIROBI DESIGN_.png" },
  { name: "LG", logo: "LG_logo_(2014).svg.png" },
  { name: "L'Oréal Paris", logo: "l'orealparis.png" },
  { name: "UNDRR", logo: "UNDRR_logo.png" },
  { name: "Wise Two", logo: "wisetwo.png" },
  { name: "Strategic Agenda", logo: "strategicagenda.png" },
  { name: "UNDP", logo: "undp.png" },
  { name: "Mathematica", logo: "mathematicawithtagline560.png" },
  { name: "Ulster University", logo: "Ulster_University.png" },
  { name: "Hyatt", logo: "Hyatt-Regency-Logo.png" },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-sm tracking-[0.3em] text-muted-foreground uppercase mb-16">
          Clients
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <img
                src={`/${client.logo}`}
                alt={client.name}
                className="h-12 md:h-16 lg:h-20 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;