import { Podcast } from "@/types";

export const podcasts: Podcast[] = [
  {
    id: "1",
    title: "The Daily Tech",
    description: "Latest in technology and innovation",
    image: "/images/podcast1.jpg",
    category: "News & Storytelling",
    duration: "45 min",
    episodes: [
      {
        id: "1-1",
        title: "AI Revolution",
        description: "Exploring the future of artificial intelligence",
        image: "/images/episode1.jpg",
        duration: "45:22",
        audioUrl: "/audio/ai-revolution.mp3",
        publishDate: "2023-05-15",
      },
      // Add more episodes...
    ],
  },
  // Add more podcasts...
];