const achievements = [
  "Voices of Pemba documentary official selection for screening at the 26th Annual Zanzibar International Film Festival 2023! #ziff2023",
  "Winner of the Entrepreneurial Prize at the MASK Awards 2019, securing an internship at Unilever's Heroes for Change.",
  "Featured in prominent exhibitions, including the TNR Silent Art Auction for Animal Welfare at One Off Gallery, a solo exhibition at the British Institute in East Africa (BIEA), and participation in the IAAF World U20 Championships in 2017.",
  "Shortlisted multiple times for the MASK-Prize Awards for photography, with exhibitions at the Turner Contemporary in the UK, London.",
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="pt-6 pb-10 scroll-reveal"
    >
      <div className="container mx-auto px-6">

        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-8">
            Achievements
          </h2>

          <div className="mirror-panel">
            <div className="mirror-panel-inner flex flex-col md:flex-row items-center gap-10">
              <figure className="w-full md:w-1/3 shrink-0">
                <img
                  src="/centre.jpeg"
                  alt="ZIFF 2023 official selection"
                  className="w-full h-auto rounded-lg object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <ul className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-white/60">–</span>
                    <span>
                      {index === 0 ? (
                        <>
                          Voices of Pemba documentary official selection for screening at the{" "}
                          <em className="text-white">
                            26th Annual Zanzibar International Film Festival 2023! #ziff2023
                          </em>
                        </>
                      ) : (
                        achievement
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
