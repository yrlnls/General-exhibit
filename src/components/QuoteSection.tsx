import creativeHero from "@/assets/creative-hero.jpg";
import { Button } from "@/components/ui/button";

const QuoteSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center scroll-reveal">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${creativeHero})` }}
      />
      <div className="absolute inset-0 cinema-overlay" />
      
      <div className="relative z-10 text-center px-6">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 hero-text-shadow">
          The young can lead through creativity
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-10 hero-text-shadow">
          The Star Newspaper
        </p>
        <Button
          variant="outline"
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 border-none px-10 py-6 text-base font-medium"
          onClick={() => window.open('https://www.the-star.co.ke/news/realtime/2020-12-11-the-young-can-lead-through-creativity', '_blank')}
        >
          Read More
        </Button>
      </div>
    </section>
  );
};

export default QuoteSection;
