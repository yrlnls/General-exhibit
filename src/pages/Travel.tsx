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
        <div className="pt-28 pb-12">
          <div className="container mx-auto px-6 space-y-10">
            <div className="flex justify-end">
              <div className="text-right space-y-2">
                <p className="section-kicker">Places</p>
                <h1 className="section-heading-right">Travel Stories</h1>
              </div>
            </div>

            <div className="mirror-surface">
              <span className="mirror-title">Places</span>
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
      </div>
      <Footer />
    </div>
  );
};

export default Travel;
