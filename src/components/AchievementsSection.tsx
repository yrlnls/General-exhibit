import left from "@/assets/left.jpeg";
import centre from "@/assets/centre.jpeg";
import right from "@/assets/right.jpeg";

const achievements = [
  "Voices of Pemba documentary official selection for screening at the 26th Annual Zanzibar International Film Festival 2023! #ziff2023",
  "Winner of the Entrepreneurial Prize at the MASK Awards 2019, securing an internship at Unilever's Heroes for Change.",
  "Featured in prominent exhibitions, including the TNR Silent Art Auction for Animal Welfare at One Off Gallery, a solo exhibition at the British Institute in East Africa (BIEA), and participation in the IAAF World U20 Championships in 2017.",
  "Shortlisted multiple times for the MASK-Prize Awards for photography, with exhibitions at the Turner Contemporary in the UK, London.",
];

  

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-8">Achievements</h2>
        
        <ul className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed mb-16 max-w-5xl">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-foreground">-</span>
              <span>
                {index === 0 ? (
                  <>
                    Voices of Pemba documentary official selection for screening at the{" "}
                    <em className="text-foreground">26th Annual Zanzibar International Film Festival 2023! #ziff2023</em>
                  </>
                ) : (
                  achievement
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-2px max-w-4xl mx-auto">
  <div className="aspect-[3/4] max-h-[320px] relative overflow-hidden rounded-lg">
    <img
      src={left}
      alt="left"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="aspect-[3/4] max-h-[320px] relative overflow-hidden rounded-lg">
    <img
      src={centre}
      alt="centre"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="aspect-[3/4] max-h-[320px] relative overflow-hidden rounded-lg">
    <img
      src={right}
      alt="right"
      className="w-full h-full object-contain"
    />
  </div>
</div>

        {/* Separator */}
        <div className="flex justify-center mt-20">
          <div className="w-64 h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;