import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    count: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/categories/${category.id}`}>
        <div className="relative h-32 w-full">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/categories/${category.id}`}>
          <h3 className="text-lg font-semibold hover:text-primary transition-colors">
            {category.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-1">{category.count} Podcasts</p>
      </div>
    </div>
  );
};

export default CategoryCard;