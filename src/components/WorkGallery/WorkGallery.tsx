import React, { useCallback, useState } from 'react';
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
  openInNewTab?: boolean;
  autoContainPortrait?: boolean;
}> = ({
  items,
  aspectClass = 'tile-media',
  gridClassName = 'grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 px-8 md:px-16 max-w-8xl mx-auto',
  cardClassName = '',
  overlayClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  imageClassName,
  openInNewTab = true,
  autoContainPortrait = false,
}) => {
  const [portraitById, setPortraitById] = useState<Record<string, boolean>>({});
  const handleImageLoad = useCallback(
    (id: WorkItem['id'], event: React.SyntheticEvent<HTMLImageElement>) => {
      if (!autoContainPortrait) return;
      const image = event.currentTarget;
      const isPortrait = image.naturalHeight > image.naturalWidth;
      const key = String(id);
      setPortraitById((prev) => {
        if (prev[key] === isPortrait) return prev;
        return { ...prev, [key]: isPortrait };
      });
    },
    [autoContainPortrait],
  );

  return (
    <section className="w-full">
      <div className={gridClassName}>

        {items.map((item, index) => {
          const itemAspectClass = item.aspectClass ?? aspectClass;
          const isPortrait = autoContainPortrait && portraitById[String(item.id)];
          const fitClass = item.imageFit
            ? item.imageFit === 'contain'
              ? 'object-contain'
              : 'object-cover'
            : isPortrait
              ? 'object-contain'
              : 'object-cover';
          const imagePosition = item.imagePosition ?? 'top';
          const baseImageClass = imageClassName ?? 'absolute inset-0 h-full w-full';
          const isClickable = Boolean(item.link && item.link !== '#');
          const cardClass = `relative group overflow-hidden rounded-xl border border-white/10 bg-black/35 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${isClickable ? 'cursor-pointer' : 'cursor-default'} ${cardClassName}`;
          const content = (
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
                onLoad={(event) => handleImageLoad(item.id, event)}
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
          );

          return isClickable ? (
            <button
              key={item.id}
              type="button"
              className={`${cardClass} block text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60`}
              onClick={() => {
                if (openInNewTab) {
                  window.open(item.link, '_blank', 'noopener,noreferrer');
                } else {
                  window.location.assign(item.link);
                }
              }}
              aria-label={item.title}
            >
              {content}
            </button>
          ) : (
            <div key={item.id} className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkGallery;
