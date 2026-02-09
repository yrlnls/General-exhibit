import React from 'react';
import { WorkItem } from '@/data/workItems';

const WorkGallery: React.FC<{
  items: WorkItem[];
  aspectClass?: string;
  gridClassName?: string;
  cardClassName?: string;
  overlayClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}> = ({
  items,
  aspectClass = 'tile-media',
  gridClassName = 'grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 px-8 md:px-16 max-w-8xl mx-auto',
  cardClassName = '',
  overlayClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  imageClassName,
}) => {

  return (
    <section className="w-full">
      <div className={gridClassName}>

        {items.map((item, index) => {
          const itemAspectClass = item.aspectClass ?? aspectClass;
          const fitClass = item.imageFit === 'contain' ? 'object-contain' : 'object-cover';
          const imagePosition = item.imagePosition ?? 'top';
          const baseImageClass = imageClassName ?? 'absolute inset-0 h-full w-full';

            return (
              <article
                key={item.id}
                className={`relative group overflow-hidden rounded-xl cursor-pointer border border-white/10 bg-black/35 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardClassName}`}
                onClick={() => {
                  if (item.link && item.link !== '#') {
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Image */}
              <div className={`relative ${itemAspectClass} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${baseImageClass} ${fitClass} transition-transform duration-700 group-hover:scale-105`}
                  style={{ objectPosition: imagePosition }}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  decoding={index < 4 ? 'sync' : 'async'}
                  fetchPriority={index < 4 ? 'high' : 'auto'}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className={`absolute inset-0 flex flex-col justify-end p-8 ${overlayClassName}`}>
                <h3 className={`text-white text-2xl md:text-3xl font-semibold tracking-wide ${titleClassName}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={`mt-2 text-white/80 text-base max-w-sm ${descriptionClassName}`}>
                    {item.description}
                  </p>
                )}
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WorkGallery;
