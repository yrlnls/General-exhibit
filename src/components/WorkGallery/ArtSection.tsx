import React from 'react';

interface Artwork {
  id: string;
  title: string;
  videoId: string;
  platform?: 'youtube' | 'vimeo';
}

const ArtSection: React.FC<{ artworks: Artwork[] }> = ({ artworks }) => {
  const getEmbedUrl = (art: Artwork) => {
    if (art.platform === 'vimeo') {
      return `https://player.vimeo.com/video/${art.videoId}`;
    }
    return `https://www.youtube.com/embed/${art.videoId}`;
  };

  return (
    <section className="py-8 space-y-4 scroll-reveal">
      <h2 className="section-heading mb-12">Art</h2>
      
      <div className="mirror-panel">
        <div className="mirror-panel-inner grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
          {artworks.map((art) => (
            <div key={art.id} className="group relative overflow-hidden rounded-lg w-full border border-white/10 bg-black/40 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(art)}
                  title={art.title}
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtSection;
