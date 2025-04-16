export interface Podcast {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    episodes: Episode[];
    duration: string;
  }
  
  export interface Episode {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    audioUrl: string;
    publishDate: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    image: string;
    count: number;
  }
  
  export interface Partner {
    id: string;
    name: string;
    logo: string;
    url: string;
  }