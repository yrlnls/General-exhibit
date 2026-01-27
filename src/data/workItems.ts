export interface WorkItem {
    id: number;
    title: string;
    image: string;
    link?: string;
    badge?: string;
    description?: string;
    ctaText?: string;
}

export const workItems: WorkItem[] = [
    {
        id: 1,
        title: 'MADAGASCAR',
        image: '/madagascar.jpg?w=800&h=800&fit=crop',
        link: 'https://strategicagenda.com/seforall-arican-greentec-madagascar/',
        description: 'Sustainable Energy for All(SEforALL) in the rural community of Mahavelona',
        ctaText: 'Explore',
    },
    {
        id: 2,
        title: 'ETHIOPIA',
        image: '/ethiopia.jpg?w=800&h=800&fit=crop',
        link: 'https://au.int/en/pressreleases/20240401/african-union-commission-meets-high-level-donor-mission-multi-hazard-early',
        description: 'UNDRR Donor Mission | AU Commission',
        ctaText: 'Explore',
    },
    {
        id: 3,
        title: 'SEYCHELLES',
        image: '/seychelles.jpg?w=800&h=800&fit=crop',
        link: 'https://www.youtube.com/watch?v=3VBPDhl8sWk',
        description: 'UNDRR, UNESCO, BMKG',
        ctaText: 'Explore',
    },
    {
        id: 4,
        title: 'SOUTH SUDAN',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        description: 'UNDRR',
    },
    {
        id: 5,
        title: 'KENYA',
        image: '/public/nairobi.jpg?w=800&h=800&fit=crop',
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
        link: 'https://www.dw.com/en/the-rise-of-roller-skates-in-nairobi/video-62612611#:~:text=The%20streets%20of%20Nairobi%20aren,found%20their%20own%20skating%20oasis.',
        description: 'The rise of roller skates in Nairobi',
        ctaText: 'Explore',
    },
    {
        id: 8,
        title: 'NAIROBI DESIGN',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop',
        link: 'https://www.nairobi.design/week/2022',
        description: '#NDW2022 (Photography)',
        ctaText: 'Explore',
    },
    {
        id: 9,
        title:'NAIROBI DESIGN',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
        link: 'https://www.youtube.com/watch?v=eQOaVEXrm24',
        description: '#NDW2021',
        ctaText: 'Explore',
    },
    {
        id: 10,
        title: 'OLOLO FARM',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
        link: 'https://www.ololofarm.com/',
        description: 'Documentary',
        ctaText: 'Explore',
    }
];