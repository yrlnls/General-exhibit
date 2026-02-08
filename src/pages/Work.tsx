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
      <div className="pt-28 pb-12">
        <div className="container mx-auto px-6 space-y-10">
          <div className="flex justify-end">
            <div className="text-right space-y-2">
              <p className="section-kicker">Featured Work</p>
              <h1 className="section-heading-right">Projects & Stories</h1>
            </div>
          </div>

          <EventsSection events={events} />
          <DocumentariesSection documentaries={documentaries} />
          <ArtSection artworks={artworks} />
          <NGOWorldSection items={ngoWorldItems} aspectClass="aspect-video" />

          <div className="mirror-surface">
            <span className="mirror-title">Projects</span>
            <div className="p-6 md:p-10">
              <WorkGallery
                items={workItems}
                aspectClass="aspect-video"
                sectionClassName="py-0"
                gridClassName="grid gap-6 md:gap-8 grid-cols-1"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
