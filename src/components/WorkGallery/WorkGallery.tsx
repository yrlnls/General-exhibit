import React from 'react';
import { WorkItem } from '@/data/workItems';

const WorkGallery: React.FC<{ items: WorkItem[] }> = ({ items }) => {
    return (
        <div className="space-y-8">
            {/* Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <a 
                        key={item.id} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group block relative"
                    >
                        <div className="relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
                            {/* Background Image */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6">
                                {/* Top Badge */}
                                {item.badge && (
                                    <div className="flex items-start">
                                        <span className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded text-sm font-semibold">
                                            {item.badge}
                                        </span>
                                    </div>
                                )}
                                
                                {/* Bottom Content */}
                                <div className="space-y-3">
                                    <h3 className="text-3xl md:text-2xl font-bold text-white">{item.title}</h3>
                                    {item.description && (
                                        <p className="text-white/80 text-sm">{item.description}</p>
                                    )}
                                    {item.ctaText && (
                                        <button className="border border-white text-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                                            {item.ctaText}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default WorkGallery;