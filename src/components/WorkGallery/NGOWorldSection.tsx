import React from 'react';
import { WorkItem } from '@/data/workItems';

const NGOWorldSection: React.FC<{
  items: WorkItem[];
  aspectClass?: string;
  gridClassName?: string;
}> = ({
  items,
  aspectClass = 'aspect-video',
  gridClassName = 'grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 px-8 md:px-16 max-w-8xl mx-auto',
}) => {
  return (
    <section className="py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in">NGO world..</h2>
      </div>
      
      <div className={gridClassName}>
        {items.map((item, index) => (
          <article
            key={item.id}
            className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            onClick={() => {
              if (item.link && item.link !== '#') {
                window.open(item.link, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div className={`relative ${aspectClass} overflow-hidden`}>
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading={index < 4 ? 'eager' : 'lazy'}
                decoding={index < 4 ? 'sync' : 'async'}
                fetchPriority={index < 4 ? 'high' : 'auto'}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-2 text-white/80 text-base max-w-sm">
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

export default NGOWorldSection;
