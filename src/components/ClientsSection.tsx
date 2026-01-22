const clients = [
  { name: "Spotify", logo: "spotify" },
  { name: "Akuna Wallet", logo: "akuna" },
  { name: "Batian Peak", logo: "batianpeak" },
  { name: "Waco", logo: "waco" },
  { name: "Rift Valley Institute", logo: "rift" },
  { name: "Adidas", logo: "adidas" },
  { name: "Cordio", logo: "cordio" },
  { name: "Nairobi Design", logo: "nairobi" },
  { name: "LG", logo: "lg" },
  { name: "L'Oréal Paris", logo: "loreal" },
  { name: "UNDRR", logo: "undrr" },
  { name: "Wise Two", logo: "wise" },
  { name: "Strategic Agenda", logo: "strategic" },
  { name: "UNDP", logo: "undp" },
  { name: "Mathematica", logo: "mathematica" },
  { name: "Ulster University", logo: "ulster" },
  { name: "Hyatt", logo: "hyatt" },
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
              <span className="text-lg md:text-xl font-medium opacity-70 hover:opacity-100 transition-opacity">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;