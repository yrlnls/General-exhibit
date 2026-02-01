import Header from "@/components/Header";
import WorkGallery from "@/components/WorkGallery/WorkGallery";
import TravelVideosSection from "@/components/TravelVideosSection";
import TravelGallery from "@/components/TravelGallery";
import Footer from "@/components/Footer";
import { travelDestinations, travelVideos, galleryImages } from "@/data/travelDestinations";
import { WorkItem } from "@/data/workItems";

const Travel = () => {
  const workItems: WorkItem[] = travelDestinations.map(dest => ({
    id: dest.id,
    title: dest.country,
    description: dest.location,
    image: dest.image,
    link: `#`,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            {/* Destinations Gallery */}
            <div className="mt-12">
              <WorkGallery items={workItems} />
            </div>

            {/* Travel Videos Section */}
            <div className="mt-12">
              <TravelVideosSection videos={travelVideos} />
            </div>

            {/* Travel Gallery Section */}
            <div className="mt-12">
              <TravelGallery images={galleryImages} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Travel;
