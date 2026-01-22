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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="group relative overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${event.videoId}`}
              title={event.title}
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

export default EventsSection;
