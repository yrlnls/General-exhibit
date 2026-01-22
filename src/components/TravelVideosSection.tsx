import React from 'react';

interface TravelVideo {
  id: string;
  title: string;
  videoId: string;
  destination: string;
}

const TravelVideosSection: React.FC<{ videos: TravelVideo[] }> = ({ videos }) => {
  return (
    <section className="relative w-full bg-black py-12">
      <div className="grid grid-cols-3 gap-4 md:gap-6 p-4 md:p-8">
        {videos.map((video) => (
          <div key={video.id} className="relative overflow-hidden rounded-lg h-64 md:h-80">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelVideosSection;
