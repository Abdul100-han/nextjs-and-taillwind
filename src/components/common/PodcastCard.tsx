import Image from "next/image";
import Link from "next/link";

interface PodcastCardProps {
  podcast: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    duration: string;
  };
}

const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/product/${podcast.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={podcast.image}
            alt={podcast.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs text-primary font-semibold">
          {podcast.category}
        </span>
        <Link href={`/product/${podcast.id}`}>
          <h3 className="text-lg font-semibold mt-1 hover:text-primary transition-colors">
            {podcast.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {podcast.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">{podcast.duration}</span>
          <button className="text-primary hover:text-green-600">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;