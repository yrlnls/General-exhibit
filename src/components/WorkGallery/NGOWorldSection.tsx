import React from 'react';

interface NGOItem {
  id: string;
  title: string;
  videoId: string;
}

const NGOWorldSection: React.FC<{ items: NGOItem[] }> = ({ items }) => {
  return (
    <section className="py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">NGO world..</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
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

export default NGOWorldSection;
