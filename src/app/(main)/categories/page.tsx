import { categories } from '@/constants';
import CategoryCard from '@/components/common/CategoryCard';
import Pagination from '@/components/ui/Pagination';

interface CategoriesPageProps {
  searchParams: {
    page?: string;
  };
}

export default function CategoriesPage({ searchParams }: CategoriesPageProps) {
  const currentPage = parseInt(searchParams.page || '1', 10);
  const itemsPerPage = 6;
  const totalItems = categories.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentCategories = categories.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Categories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {currentCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/categories"
      />
    </div>
  );
}