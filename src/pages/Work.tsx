import Header from "@/components/Header";
import WorkGallery from "@/components/WorkGallery/WorkGallery";
import EventsSection from "@/components/WorkGallery/EventsSection";
import NGOWorldSection from "@/components/WorkGallery/NGOWorldSection";
import DocumentariesSection from "@/components/WorkGallery/DocumentariesSection";
import ArtSection from "@/components/WorkGallery/ArtSection";
// import BeforeAfterSlider from "@/components/WorkGallery/BeforeAfterSlider";
// import ClosingBannerSection from "@/components/WorkGallery/ClosingBannerSection";
import Footer from "@/components/Footer";
import { workItems } from "@/data/workItems";
import { events, ngoItems, documentaries, artworks, colorGradingComparisons, closingBannerData } from "@/data/videosData";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Featured Work Gallery */}
          <WorkGallery items={workItems} />

          {/* Events Section */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <EventsSection events={events} />
          </div>

          {/* NGO World Section */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <NGOWorldSection items={ngoItems} />
          </div>

          {/* Documentaries Section */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <DocumentariesSection documentaries={documentaries} />
          </div>

          {/* Art Section */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <ArtSection artworks={artworks} />
          </div>

          {/* Color Grading Section */}
          {/* <div className="mt-20 border-t border-white/10 pt-12">
            <BeforeAfterSlider comparisons={colorGradingComparisons} />
          </div> */}
          {/* Closing Banner Section */}
          {/* <div className="mt-20">
            <ClosingBannerSection data={closingBannerData} />
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
