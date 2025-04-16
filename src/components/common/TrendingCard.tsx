import Image from "next/image";
import Link from "next/link";

interface TrendingCardProps {
  podcast: {
    id: string;
    title: string;
    image: string;
    category: string;
  };
  index: number;
}

const TrendingCard = ({ podcast, index }: TrendingCardProps) => {
  return (
    <div className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded transition-colors">
      <span className="text-2xl font-bold text-gray-300 w-8">{index + 1}</span>
      <Link href={`/product/${podcast.id}`} className="flex-1">
        <div className="flex items-center space-x-3">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={podcast.image}
              alt={podcast.title}
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h3 className="font-medium hover:text-primary transition-colors">
              {podcast.title}
            </h3>
            <p className="text-xs text-gray-500">{podcast.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingCard;