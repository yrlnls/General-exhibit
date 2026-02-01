import Header from "@/components/Header";
import WorkGallery from "@/components/WorkGallery/WorkGallery";
import EventsSection from "@/components/WorkGallery/EventsSection";
import NGOWorldSection from "@/components/WorkGallery/NGOWorldSection";
import DocumentariesSection from "@/components/WorkGallery/DocumentariesSection";
import ArtSection from "@/components/WorkGallery/ArtSection";
import Footer from "@/components/Footer";
import { workItems } from "@/data/workItems";
import { events, ngoItems, documentaries, artworks } from "@/data/videosData";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Featured Work Gallery */}
          <WorkGallery items={workItems} />

          {/* Events & NGO World Section - Side by Side */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <EventsSection events={events} />
              <NGOWorldSection items={ngoItems} />
            </div>
          </div>

          {/* Documentaries Section */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <DocumentariesSection documentaries={documentaries} />
          </div>

          {/* Art Section */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <ArtSection artworks={artworks} />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
