import React from 'react';
import { Documentary } from '@/data/videosData';

const DocumentariesSection: React.FC<{ documentaries: Documentary[] }> = ({ documentaries }) => {
  return (
    <section className="py-6 space-y-4 scroll-reveal">
      <h2 className="section-heading mb-12">Documentaries</h2>
      
      <div className="mirror-panel max-w-[760px] mx-auto">
        <div className="mirror-panel-inner grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-[760px] mx-auto">
        {documentaries.map((doc, index) => (
          <div key={doc.id} className="group relative overflow-hidden rounded-lg w-full border border-white/10 bg-black/40 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {doc.videoId ? (
              <div className="work-video-media">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${doc.videoId}`}
                  title={doc.title}
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <article
                className="relative group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => {
                  if (doc.link && doc.link !== '#') {
                    window.open(doc.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="work-video-media overflow-hidden">
                  {doc.image && (
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding={index < 2 ? 'sync' : 'async'}
                      fetchPriority={index < 2 ? 'high' : 'auto'}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
                      {doc.title}
                    </h3>
                  </div>
                </div>
              </article>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentariesSection;
