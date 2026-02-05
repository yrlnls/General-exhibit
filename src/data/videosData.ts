export interface Event {
  id: string;
  title: string;
  videoId: string;
}

export interface Documentary {
  id: string;
  title: string;
  videoId?: string;
  link?: string;
  image?: string;
}

export interface Artwork {
  id: string;
  title: string;
  videoId: string;
  platform?: 'youtube' | 'vimeo';
}

export const events: Event[] = [
  {
    id: 'wings-2023',
    title: 'Wings Forum 2023 Highlights',
    videoId: 'qigyUW4zulY', 
  },
];

export const documentaries: Documentary[] = [
  {
    id: 'batian-peak',
    title: 'Batian Peak Documentary',
    videoId: 'bxKghJNOlG8', 
  },
  {
    id: 'alliance-highschool',
    title: 'Alliance Highschool Documentary',
    videoId: 'Nbg_Xqvo0zY', 
  },
  {
    id: 'dw-77-percent',
    title: 'DW The 77 Percent',
    videoId: 'U87Ti87sbm0',
  },
  {
    id: 'ololo-farm',
    title: 'Ololo Farm',
    link: 'https://www.ololofarm.com/',
    image: '/Ololo Farm Logo.png?w=800&h=800&fit=crop',
  },
];

export const artworks: Artwork[] = [
  {
    id: 'art-1',
    title: 'Art 1',
    videoId: '1072341014',
    platform: 'vimeo',
  },
  {
    id: 'wise-two-jesse',
    title: 'Wise Two x Jesse',
    videoId: 'm49qOy-_Iko',
  },
];
