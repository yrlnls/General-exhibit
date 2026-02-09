import Header from "@/components/Header";
import WorkGallery from "@/components/WorkGallery/WorkGallery";
import EventsSection from "@/components/WorkGallery/EventsSection";
import NGOWorldSection from "@/components/WorkGallery/NGOWorldSection";
import DocumentariesSection from "@/components/WorkGallery/DocumentariesSection";
import ArtSection from "@/components/WorkGallery/ArtSection";
import Footer from "@/components/Footer";
import { ngoWorldItems, workItems } from "@/data/workItems";
import { events, documentaries, artworks } from "@/data/videosData";

const Work = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Featured%20work%20background.jpg')" }}
    >
      <div className="absolute inset-0 cinema-overlay" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="pt-24 pb-16 flex-1">
          <div className="container mx-auto px-6">
            <div className="space-y-12">
              <EventsSection events={events} />
              <DocumentariesSection documentaries={documentaries} />
              <ArtSection artworks={artworks} />
              <NGOWorldSection
                items={ngoWorldItems}
                aspectClass="aspect-video"
                gridClassName="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto"
              />
              <section className="scroll-reveal space-y-6">
                <h2 className="section-heading mb-8">Projects</h2>
                <div className="mirror-panel">
                  <div className="mirror-panel-inner">
                    <WorkGallery
                      items={workItems}
                      aspectClass="aspect-video"
                      gridClassName="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Work;
