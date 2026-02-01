import React from 'react';
import { WorkItem } from '@/data/workItems';

const WorkGallery: React.FC<{ items: WorkItem[] }> = ({ items }) => {
  return (
    <section className="w-full py-12">
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
        {items.map(item => (
          <article
            key={item.id}
            className="relative group overflow-hidden rounded-xl"
          >
            {/* Image */}
            <div
              className="relative aspect-video overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-1 text-white/80 text-sm max-w-sm">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
