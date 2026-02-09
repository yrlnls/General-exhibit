import React from 'react';

interface TravelVideo {
  id: string;
  title: string;
  videoUrl: string;
  destination: string;
}

const TravelVideosSection: React.FC<{ videos: TravelVideo[] }> = ({ videos }) => {
  return (
    <section className="relative w-full py-8">
      <div className="flex flex-col gap-8 px-4 md:px-8 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="relative overflow-hidden rounded-lg w-full">
            <div className="tile-media">
              <iframe
                width="100%"
                height="100%"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelVideosSection;
