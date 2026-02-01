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
    <section className="py-8 space-y-4">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Art..</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {artworks.map((art) => (
          <div key={art.id} className="group relative overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="315"
              src={getEmbedUrl(art)}
              title={art.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtSection;
