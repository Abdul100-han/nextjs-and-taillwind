import { notFound } from 'next/navigation';
import Image from 'next/image';
import PodcastCard from '@/components/common/PodcastCard';
import { podcasts } from '@/constants';

interface ProductPageProps {
  params: {
    id: string;
  };
  searchParams: {
    page?: string;
  };
}

export default function ProductPage({ params, searchParams }: ProductPageProps) {
  const podcast = podcasts.find(p => p.id === params.id);
  if (!podcast) return notFound();

  const currentPage = parseInt(searchParams.page || '1', 10);
  const episodesPerPage = 3;
  const totalEpisodes = podcast.episodes.length;
  const totalPages = Math.ceil(totalEpisodes / episodesPerPage);
  const startIdx = (currentPage - 1) * episodesPerPage;
  const currentEpisodes = podcast.episodes.slice(startIdx, startIdx + episodesPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={podcast.image}
              alt={podcast.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{podcast.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-primary text-white text-xs px-2 py-1 rounded mr-2">
              {podcast.category}
            </span>
            <span className="text-gray-600 text-sm">{podcast.duration}</span>
          </div>
          <p className="text-gray-700 mb-6">{podcast.description}</p>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">
          ALL EPISODES ({podcast.episodes.length} AVAILABLE)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentEpisodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-40 w-full">
                <Image
                  src={episode.image}
                  alt={episode.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{episode.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {episode.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{episode.duration}</span>
                  <a 
                    href={`/episode/${episode.id}`}
                    className="text-primary hover:text-green-600 text-sm font-medium"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/product/${podcast.id}`}
      />
    </div>
  );
}