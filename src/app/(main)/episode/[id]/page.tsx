import { notFound } from 'next/navigation';
import Image from 'next/image';
import AudioPlayer from '@/components/common/AudioPlayer';
import { episodes } from '@/constants';

interface EpisodePageProps {
  params: {
    id: string;
  };
}

export default function EpisodePage({ params }: EpisodePageProps) {
  const episode = episodes.find(e => e.id === params.id);
  if (!episode) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={episode.image}
              alt={episode.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 text-sm">
              Published: {new Date(episode.publishDate).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{episode.description}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <AudioPlayer />
        
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Show Notes</h2>
          <div className="prose max-w-none">
            <p>In this episode, we cover:</p>
            <ul className="list-disc pl-5">
              <li>Introduction to the topic</li>
              <li>Key concepts and theories</li>
              <li>Practical applications</li>
              <li>Interview with a special guest</li>
              <li>Q&A from our listeners</li>
            </ul>
            <p className="mt-4">
              Resources mentioned in this episode:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Example Resource 1
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Example Resource 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}