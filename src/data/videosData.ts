export interface Event {
  id: string;
  title: string;
  videoId: string;
}

export interface Documentary {
  id: string;
  title: string;
  videoId: string;
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
    id: 'alx-ventures',
    title: 'ALX Ventures Documentary',
    videoId: '6kgnUOZDMFc', 
  },
  {
    id: 'lg-hvac',
    title: 'LG HVAC Documentary',
    videoId: 'tPZZrHLWBJI',
  }
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
