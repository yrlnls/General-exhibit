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
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="mt-12">
              <WorkGallery
                items={workItems}
                aspectClass="aspect-video"
                gridClassName="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 px-4 md:px-8 max-w-6xl mx-auto"
              />
            </div>           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Travel;
