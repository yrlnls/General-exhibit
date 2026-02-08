import React from 'react';

interface Event {
  id: string;
  title: string;
  videoId: string;
}

const EventsSection: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <section className="py-12">
      <div className="mirror-surface">
        <span className="mirror-title">Events</span>
        <div className="grid gap-6 md:gap-8 grid-cols-1 p-6 md:p-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl w-full max-w-4xl mx-auto border border-white/10 bg-black/50 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1"
            >
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
      </div>
    </section>
  );
};

export default EventsSection;
