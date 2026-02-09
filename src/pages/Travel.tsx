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
    imageFit: dest.imageFit ?? 'cover',
  }));

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: "url('/Places%20background%20.jpg')" }}
    >
      <div className="absolute inset-0 cinema-overlay-soft" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <div className="pt-24 pb-16">
            <div className="container mx-auto px-6">
              <div className="mirror-panel max-w-[760px] mx-auto">
                <div className="mirror-panel-inner">
                  <WorkGallery
                    items={workItems}
                    aspectClass="w-full h-[220px] md:h-[230px] lg:h-[240px]"
                    gridClassName="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-[760px] mx-auto"
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
    </div>
  );
};

export default Travel;
