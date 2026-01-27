import productionSet from "@/assets/production-set.jpg";
import interviewSetup from "@/assets/interview-setup.jpg";

const achievements = [
  "Voices of Pemba documentary official selection for screening at the 26th Annual Zanzibar International Film Festival 2023! #ziff2023",
  "Winner of the Entrepreneurial Prize at the MASK Awards 2019, securing an internship at Unilever's Heroes for Change.",
  "Featured in prominent exhibitions, including the TNR Silent Art Auction for Animal Welfare at One Off Gallery, a solo exhibition at the British Institute in East Africa (BIEA), and participation in the IAAF World U20 Championships in 2017.",
  "Shortlisted multiple times for the MASK-Prize Awards for photography, with exhibitions at the Turner Contemporary in the UK, London.",
];

const LaurelBranch = ({ className = "", mirror = false }: { className?: string; mirror?: boolean }) => {
  // A single leaf path (almond shape pointing right)
  const leafPath = "M0,0 C5,-6 15,-6 20,0 C15,6 5,6 0,0";
  
  return (
    <svg 
      viewBox="0 0 100 180" 
      className={className} 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: mirror ? "scale(-1, 1)" : "" }}
    >
        {/* Main curved stem */}
        <path d="M50 170 Q 10 90 50 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Leaves - positioned along the curve, pointing up and out (left) */}
        {/* Bottom to Top */}
        <g transform="translate(48, 162) rotate(135) scale(0.9)"> <path d={leafPath} /> </g>
        <g transform="translate(38, 145) rotate(140) scale(1.0)"> <path d={leafPath} /> </g>
        <g transform="translate(30, 128) rotate(145) scale(1.1)"> <path d={leafPath} /> </g>
        <g transform="translate(24, 110) rotate(150) scale(1.2)"> <path d={leafPath} /> </g>
        <g transform="translate(20, 90) rotate(155) scale(1.3)"> <path d={leafPath} /> </g>
        <g transform="translate(20, 70) rotate(165) scale(1.3)"> <path d={leafPath} /> </g>
        <g transform="translate(24, 50) rotate(175) scale(1.2)"> <path d={leafPath} /> </g>
        <g transform="translate(32, 32) rotate(190) scale(1.1)"> <path d={leafPath} /> </g>
        <g transform="translate(45, 15) rotate(210) scale(1.0)"> <path d={leafPath} /> </g>
    </svg>
  );
};

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
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
            <img
              src={productionSet}
              alt="Behind the scenes on production set"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Film Festival Laurel */}
          <div className="flex flex-col items-center justify-center text-center py-8">
             <div className="flex items-center justify-center -space-x-4 md:-space-x-2">
                <LaurelBranch className="w-20 h-40 md:w-32 md:h-64 text-foreground" />
                
                <div className="flex flex-col items-center px-2 z-10 pt-2 md:pt-4">
                  <h3 className="text-xl md:text-3xl font-bold text-foreground tracking-wide mb-1 whitespace-nowrap">ZIFF 2023</h3>
                  <div className="flex flex-col text-muted-foreground font-serif italic leading-tight">
                    <span className="text-sm md:text-lg">The 26<sup>th</sup></span>
                    <span className="text-sm md:text-lg">Anniversary Festival</span>
                  </div>
                  <div className="mt-2 md:mt-4 flex flex-col items-center leading-none">
                    <span className="text-lg md:text-2xl font-black text-foreground tracking-widest uppercase">OFFICIAL</span>
                    <span className="text-lg md:text-2xl font-black text-foreground tracking-widest uppercase">SELECTION</span>
                  </div>
                </div>

                <LaurelBranch className="w-20 h-40 md:w-32 md:h-64 text-foreground" mirror={true} />
             </div>
          </div>
          
          <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
            <img
              src={interviewSetup}
              alt="Professional interview setup"
              className="w-full h-full object-cover"
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