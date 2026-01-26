// Portrait images from public folder
const edit1Image = "/edit1.jpg";
const edit2Image = "/edit2.jpg";

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
            <li key={index} className="flex">
              <span className="mr-2">-</span>
              <span>
                {achievement.includes("26th Annual Zanzibar International Film Festival 2023") ? (
                  <>
                    Voices of Pemba documentary official selection for screening at the{" "}
                    <em className="text-foreground">26th Annual Zanzibar International Film Festival 2023! #ziff2023</em>
                  </>
                ) : achievement.includes("internship at Unilever") ? (
                  <>
                    Winner of the Entrepreneurial Prize at the MASK Awards 2019, securing an{" "}
                    <span className="text-foreground">internship at Unilever's Heroes for Change</span>.
                  </>
                ) : (
                  achievement
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="aspect-[4/5]">
            <img
              src={edit1Image}
              alt="Artistic portrait featuring elegant fashion styling with natural outdoor lighting"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Film Festival Laurel */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-16 h-24 text-foreground" viewBox="0 0 40 60" fill="currentColor">
                  <path d="M20 55 C15 50, 5 40, 5 25 C5 15, 10 5, 20 5 M20 5 C10 8, 5 18, 5 25" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <ellipse cx="8" cy="15" rx="3" ry="5" transform="rotate(-30 8 15)"/>
                  <ellipse cx="6" cy="22" rx="3" ry="5" transform="rotate(-45 6 22)"/>
                  <ellipse cx="6" cy="30" rx="3" ry="5" transform="rotate(-60 6 30)"/>
                  <ellipse cx="8" cy="38" rx="3" ry="5" transform="rotate(-75 8 38)"/>
                  <ellipse cx="12" cy="45" rx="3" ry="5" transform="rotate(-85 12 45)"/>
                </svg>
                
                <div className="text-center px-4">
                  <p className="text-lg font-semibold text-foreground">ZIFF 2023</p>
                  <p className="text-sm text-muted-foreground">The 26<sup>th</sup></p>
                  <p className="text-sm text-muted-foreground">Anniversary Festival</p>
                  <p className="text-lg font-bold text-foreground mt-2">OFFICIAL</p>
                  <p className="text-lg font-bold text-foreground">SELECTION</p>
                </div>
                
                <svg className="w-16 h-24 text-foreground" viewBox="0 0 40 60" fill="currentColor">
                  <path d="M20 55 C25 50, 35 40, 35 25 C35 15, 30 5, 20 5 M20 5 C30 8, 35 18, 35 25" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <ellipse cx="32" cy="15" rx="3" ry="5" transform="rotate(30 32 15)"/>
                  <ellipse cx="34" cy="22" rx="3" ry="5" transform="rotate(45 34 22)"/>
                  <ellipse cx="34" cy="30" rx="3" ry="5" transform="rotate(60 34 30)"/>
                  <ellipse cx="32" cy="38" rx="3" ry="5" transform="rotate(75 32 38)"/>
                  <ellipse cx="28" cy="45" rx="3" ry="5" transform="rotate(85 28 45)"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="aspect-[4/5]">
            <img
              src={edit2Image}
              alt="Contemporary fashion portrait showcasing creative styling and composition"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
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