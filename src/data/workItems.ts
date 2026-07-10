import { getCloudinaryAssetUrl } from "@/lib/cloudinary";

export interface WorkItem {
    id: number;
    title: string;
    image: string;
    link?: string;
    badge?: string;
    description?: string;
    aspectClass?: string;
    imageFit?: 'cover' | 'contain';
    imagePosition?: string;
}

export const ngoWorldItems: WorkItem[] = [
    {
        id: 1,
        title: 'KENYA',
        image: getCloudinaryAssetUrl('/Kenya-thumb.JPG', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://www.youtube.com/watch?v=EZqDX9VI3_I',
        description: 'UNDRR',
        badge: 'UNDRR',
    },
    {
        id: 5,
        title: 'MADAGASCAR',
        image: getCloudinaryAssetUrl('/MAD39.jpg', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://strategicagenda.com/seforall-arican-greentec-madagascar/',
        description: 'Sustainable Energy for All(SEforALL) in the rural community of Mahavelona',
    },
    {
        id: 2,
        title: 'ETHIOPIA',
        image: getCloudinaryAssetUrl('/ETH00.jpg', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://au.int/en/pressreleases/20240401/african-union-commission-meets-high-level-donor-mission-multi-hazard-early',
        description: 'UNDRR Donor Mission | AU Commission',
        imagePosition: 'center',
    },
    {
        id: 3,
        title: 'SEYCHELLES',
        image: getCloudinaryAssetUrl('/SEY13.jpg', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://www.youtube.com/watch?v=3VBPDhl8sWk',
        description: 'UNDRR, UNESCO, BMKG',
    },
    {
        id: 4,
        title: 'SOUTH SUDAN',
        image: getCloudinaryAssetUrl('/SS9.JPG', { width: 800, height: 800, crop: 'fill' }),
        description: 'UNDRR',
        imagePosition: 'bottom',
    },
];

export const workItems: WorkItem[] = [
    {
        id: 9,
        title:'NAIROBI DESIGN',
        image: getCloudinaryAssetUrl('/NDW.jpg', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://www.youtube.com/watch?v=eQOaVEXrm24',
        description: '#NDW2021',
    },
    {
        id: 6,
        title: 'DOING ZERO',
        image: getCloudinaryAssetUrl('/DOING_ZERO.jpg', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://www.nairobi.design/agency/doing-zero',
        description: 'Nairobi Design | Design Manchester',
    },
    {
        id: 11,
        title: 'ALX Ventures',
        image: getCloudinaryAssetUrl('/ALX-thumb.png', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://www.youtube.com/watch?v=6kgnUOZDMFc',
        description: 'Documentary',
    },
    {
        id: 12,
        title: 'LG HVAC',
        image: getCloudinaryAssetUrl('/LG-THUMB.png', { width: 800, height: 800, crop: 'fill' }),
        link: 'https://www.youtube.com/watch?v=tPZZrHLWBJI',
        description: 'Documentary',
    }
];
