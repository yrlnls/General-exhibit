import React from 'react';
import { WorkItem } from '@/data/workItems';

const NGOWorldSection: React.FC<{
  items: WorkItem[];
  aspectClass?: string;
  gridClassName?: string;
}> = ({
  items,
  aspectClass = 'aspect-video',
  gridClassName = 'grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2',
}) => {
  return (
    <section className="py-12">
      <div className="mirror-surface">
        <span className="mirror-title">NGO World</span>
        <div className={`p-6 md:p-10 ${gridClassName}`}>
        {items.map((item, index) => {
          const itemAspectClass = item.aspectClass ?? aspectClass;
          const fitClass = item.imageFit === 'contain' ? 'object-contain' : 'object-cover';
          const imagePosition = item.imagePosition ?? 'top';
          const hasLink = Boolean(item.link && item.link !== '#');
          const isEven = index % 2 === 1;

          return (
            <article
              key={item.id}
              className={`mirror-card group transition-transform duration-300 hover:-translate-y-1 ${hasLink ? 'cursor-pointer' : ''} ${isEven ? 'mirror-card-even' : ''}`}
              onClick={
                hasLink
                  ? () => {
                      window.open(item.link!, '_blank', 'noopener,noreferrer');
                    }
                  : undefined
              }
            >
                <div className="mirror-image">
                  <div className={`relative ${itemAspectClass} w-full`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`absolute inset-0 h-full w-full ${fitClass} transition-transform duration-700 group-hover:scale-105`}
                      style={{ objectPosition: imagePosition }}
                      loading={index < 4 ? 'eager' : 'lazy'}
                      decoding={index < 4 ? 'sync' : 'async'}
                      fetchPriority={index < 4 ? 'high' : 'auto'}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  </div>
                </div>
                <div className="mirror-body space-y-2">
                  <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white/70 text-sm md:text-base max-w-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NGOWorldSection;
