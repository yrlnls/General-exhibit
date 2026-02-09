import { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl shadow-black/20 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.3em] text-white/80 bg-black/50 px-3 py-1 rounded-full border border-white/10">
          {post.category}
        </span>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <p className="text-[11px] text-white/60 uppercase tracking-[0.3em]">
          {post.date} • {post.readTime}
        </p>
        <h3 className="text-lg md:text-xl font-semibold text-white mt-3">
          {post.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mt-3 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between text-[11px] text-white/60 uppercase tracking-[0.3em]">
          <span>{post.author}</span>
          <span>Coming Soon</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
