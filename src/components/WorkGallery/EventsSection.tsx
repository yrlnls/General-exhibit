import React from 'react';

interface Event {
  id: string;
  title: string;
  videoId: string;
}

const EventsSection: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <section className="py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Events..</h2>
      </div>
      
      <div className="grid gap-6 md:gap-8 grid-cols-1 px-4 md:px-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div key={event.id} className="group relative overflow-hidden rounded-lg w-full max-w-3xl mx-auto">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${event.videoId}`}
                title={event.title}
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
    </section>
  );
};

export default EventsSection;
