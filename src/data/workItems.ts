export interface WorkItem {
    id: number;
    title: string;
    image: string;
    link: string;
    badge?: string;
    description?: string;
    ctaText?: string;
}

export const workItems: WorkItem[] = [
    {
        id: 1,
        title: 'MADAGASCAR',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
        link: 'https://strategicagenda.com/seforall-arican-greentec-madagascar/',
        description: 'Sustainable Energy for All(SEforALL) in the rural community of Mahavelona',
        ctaText: 'Explore',
    },
    {
        id: 2,
        title: 'ETHIOPIA',
        image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=600&fit=crop',
        link: 'https://example.com/ethiopia',
        description: 'UNDRR Donor Mission | AU Commission',
        ctaText: 'Explore',
    },
    {
        id: 3,
        title: 'SEYCHELLES',
        image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&h=600&fit=crop',
        link: 'https://example.com/seychelles',
        description: 'UNDRR, UNESCO, BMKG',
        ctaText: 'Explore',
    },
    {
        id: 4,
        title: 'SOUTH SUDAN',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        link: 'https://example.com/south-sudan',
        description: 'UNDRR',
    },
    {
        id: 5,
        title: 'KENYA',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=600&fit=crop',
        link: 'https://www.youtube.com/watch?v=EZqDX9VI3_I',
        description: 'UNDRR',
        badge: 'UNDRR',
        ctaText: 'Explore',
    },
    {
        id: 6,
        title: 'DOING ZERO',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        link: 'https://www.nairobi.design/agency/doing-zero',
        description: 'Nairobi Design | Design Manchester',
        ctaText: 'Explore',
    },
    {
        id: 7,
        title: 'DW The 77 Percent',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
        link: 'https://www.dw.com/en/the-77-percent/video-59304189',
        description: 'The rise of roller skates in Nairobi',
        ctaText: 'Explore',
    },
    {
        id: 8,
        title: 'NAIROBI DESIGN',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop',
        link: 'https://www.nairobi.design',
        description: '#NDW2022 (Photography)',
        ctaText: 'Explore',
    },
    {
        id: 9,
        title:'NAIROBI DESIGN',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
        link: 'https://www.nairobi.design/agency/nairobi-design',
        description: '#NDW2021',
        ctaText: 'Explore',
    },
    {
        id: 10,
        title: 'OLOLO FARM',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
        link: 'https://www.nairobi.design/agency/nairobi-design',
        description: 'Documentary',
        ctaText: 'Explore',
    }
];