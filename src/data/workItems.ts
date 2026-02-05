export interface WorkItem {
    id: number;
    title: string;
    image: string;
    link?: string;
    badge?: string;
    description?: string;
}

export const ngoWorldItems: WorkItem[] = [
    {
        id: 1,
        title: 'KENYA',
        image: '/Kenya-thumb.JPG?w=800&h=800&fit=crop',
        link: 'https://www.youtube.com/watch?v=EZqDX9VI3_I',
        description: 'UNDRR',
        badge: 'UNDRR',
    },
    {
        id: 5,
        title: 'MADAGASCAR',
        image: '/MAD39.jpg?w=800&h=800&fit=crop',
        link: 'https://strategicagenda.com/seforall-arican-greentec-madagascar/',
        description: 'Sustainable Energy for All(SEforALL) in the rural community of Mahavelona',
    },
    {
        id: 2,
        title: 'ETHIOPIA',
        image: '/ETH00.jpg?w=800&h=800&fit=crop',
        link: 'https://au.int/en/pressreleases/20240401/african-union-commission-meets-high-level-donor-mission-multi-hazard-early',
        description: 'UNDRR Donor Mission | AU Commission',
    },
    {
        id: 3,
        title: 'SEYCHELLES',
        image: '/SEY13.jpg?w=800&h=800&fit=crop',
        link: 'https://www.youtube.com/watch?v=3VBPDhl8sWk',
        description: 'UNDRR, UNESCO, BMKG',
    },
    {
        id: 4,
        title: 'SOUTH SUDAN',
        image: '/SS5.JPG?w=800&h=800&fit=crop',
        description: 'UNDRR',
    },
];

export const workItems: WorkItem[] = [
    {
        id: 7,
        title: 'DW The 77 Percent',
        image: '/DW.jpeg?w=800&h=800&fit=crop',
        link: 'https://www.dw.com/en/the-rise-of-roller-skates-in-nairobi/video-62612611#:~:text=The%20streets%20of%20Nairobi%20aren,found%20their%20own%20skating%20oasis.',
        description: 'The rise of roller skates in Nairobi',
    },
 
    {
        id: 9,
        title:'NAIROBI DESIGN',
        image: '/NDW.jpg?w=800&h=800&fit=crop',
        link: 'https://www.youtube.com/watch?v=eQOaVEXrm24',
        description: '#NDW2021',
    },
    {
        id: 6,
        title: 'DOING ZERO',
        image: '/DOING_ZERO.jpg?w=800&h=800&fit=crop',
        link: 'https://www.nairobi.design/agency/doing-zero',
        description: 'Nairobi Design | Design Manchester',
    },
    {
        id: 10,
        title: 'OLOLO FARM',
        image: '/Ololo Farm Logo.png?w=800&h=800&fit=crop',
        link: 'https://www.ololofarm.com/',
        description: 'Documentary',
    }
];
