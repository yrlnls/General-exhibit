
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const TravelGallery: React.FC<{ images: GalleryImage[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="relative w-full bg-background py-12">
        <div className="columns-2 md:columns-3 gap-x-3 md:gap-x-4 p-4 md:p-8">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative w-full overflow-hidden rounded-lg group cursor-pointer break-inside-avoid mb-3 md:mb-4"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block object-contain group-hover:scale-[1.02] transition-transform duration-300"
                loading={index < 4 ? "eager" : "lazy"}
                decoding={index < 4 ? "sync" : "async"}
                fetchPriority={index < 4 ? "high" : "auto"}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-4xl max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </>
  );
};

export default TravelGallery;
