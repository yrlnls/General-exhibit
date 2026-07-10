import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TravelGallery from "@/components/TravelGallery";
import { blogPosts } from "@/data/blogPosts";
import { getCloudinaryAssetUrl } from "@/lib/cloudinary";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const post = useMemo(
    () => blogPosts.find((entry) => entry.id === id),
    [id]
  );

  const galleryImages = useMemo(
    () =>
      post?.gallery?.map((src, index) => ({
        id: `${post.id}-gallery-${index}`,
        src,
        alt: `${post.title} photo ${index + 1}`,
      })) ?? [],
    [post]
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-6 py-24">
          <div className="max-w-xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Story not found</p>
            <h1 className="mt-4 text-3xl font-semibold">This story could not be loaded.</h1>
            <p className="mt-4 text-white/70">
              Please return to the blog index and select a story from the list.
            </p>
            <Link to="/blog" className="mt-8 inline-flex text-sm uppercase tracking-[0.3em] text-accent transition-colors hover:text-white">
              Back to journal
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${getCloudinaryAssetUrl("/background.jpg")}')` }}
    >
      <div className="absolute inset-0 cinema-overlay-soft" />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-6 py-24">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white">
              ← Back to stories
            </Link>

            <article className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 shadow-2xl shadow-black/30">
              <img src={getCloudinaryAssetUrl(post.image)} alt={post.title} className="h-72 w-full object-cover" />
              <div className="space-y-6 p-8 md:p-10">
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                    {/* {post.category} */}
                     • {post.readTime}
                  </p>
                  <h1 className="text-3xl font-semibold text-white md:text-4xl">{post.title}</h1>
                  <p className="text-base text-white/70">{post.excerpt}</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>
              </div>
            </article>

            {galleryImages.length > 0 && (
              <section className="mt-10">
                <div className="mirror-panel">
                  <div className="mirror-panel-inner">
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="section-heading text-white">Photo story</h2>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                        {galleryImages.length} images
                      </p>
                    </div>
                    <TravelGallery images={galleryImages} />
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
