import Header from "@/components/Header";
import WorkGallery from "@/components/WorkGallery/WorkGallery";
import Footer from "@/components/Footer";
import { travelDestinations } from "@/data/travelDestinations";
import { WorkItem } from "@/data/workItems";

const Travel = () => {
  const workItems: WorkItem[] = travelDestinations.map(dest => ({
    id: dest.id,
    title: dest.country,
    description: dest.location,
    image: dest.image,
    link: `/travel/${dest.slug}`,
    imagePosition: dest.imagePosition,
    imageFit: dest.imageFit,
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="mirror-panel">
              <div className="mirror-panel-inner">
                <WorkGallery
                  items={workItems}
                  aspectClass="aspect-video"
                  gridClassName="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto"
                  cardClassName="rounded-lg"
                  overlayClassName="p-5 md:p-6"
                  titleClassName="text-lg md:text-xl"
                  descriptionClassName="text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Travel;
