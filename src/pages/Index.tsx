import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import BlogCard from "@/components/Blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { getCloudinaryAssetUrl } from "@/lib/cloudinary";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div
        className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('${getCloudinaryAssetUrl("/background.jpg")}')` }}
      >
        <div className="absolute inset-0 cinema-overlay" />
        <div className="relative z-10">
          <BiographySection />

          <section className="container mx-auto px-6 py-24">
            <div className="max-w-5xl mx-auto space-y-10">
              <div className="mirror-panel scroll-reveal">
                <div className="mirror-panel-inner text-center space-y-4">
                  <p className="mirror-kicker">THE ARCHIVE</p>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Journey Behind the Story
                  </h2>
                  <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                    Every project leaves a trail. Discover the journeys, collaborations, and communities shaping our work across the world.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>

          <ClientsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
