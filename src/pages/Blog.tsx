import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/Blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 cinema-overlay-soft" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="pt-24 pb-16 flex-1">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-12">
              <section className="mirror-panel scroll-reveal">
                <div className="mirror-panel-inner text-center space-y-4">
                  <p className="mirror-kicker">Journal</p>
                  <h1 className="text-3xl md:text-4xl font-semibold text-white">
                    Stories from the Field
                  </h1>
                  <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                    Short reflections, production notes, and visual essays from
                    across our projects. The stories below are placeholders for
                    upcoming releases.
                  </p>
                </div>
              </section>

              <section className="scroll-reveal">
                <h2 className="section-heading mb-8">Latest Stories</h2>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
