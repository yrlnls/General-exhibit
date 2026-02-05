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
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Events Section */}
          <div className="mt-4">
            <EventsSection events={events} />
          </div>

          {/* Documentaries Section */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <DocumentariesSection documentaries={documentaries} />
          </div>

          {/* Art Section */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <ArtSection artworks={artworks} />
          </div>

          {/* NGO World Section */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <NGOWorldSection
              items={ngoWorldItems}
              aspectClass="aspect-video"
              gridClassName="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 px-4 md:px-8 max-w-6xl mx-auto"
            />
          </div>

          {/* Projects Section */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <WorkGallery
              items={workItems}
              aspectClass="aspect-video"
              gridClassName="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 px-4 md:px-8 max-w-6xl mx-auto"
            />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
