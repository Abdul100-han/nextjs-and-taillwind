import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Show dots if current page is more than 3 away from first page
    if (currentPage > 3) {
      pages.push(-1); // -1 represents dots
    }
    
    // Show previous page if not first page
    if (currentPage > 1 && currentPage <= totalPages) {
      pages.push(currentPage - 1);
    }
    
    // Show current page if not first or last
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }
    
    // Show next page if not last page
    if (currentPage < totalPages && currentPage >= 1) {
      pages.push(currentPage + 1);
    }
    
    // Show dots if current page is more than 3 away from last page
    if (currentPage < totalPages - 2) {
      pages.push(-1);
    }
    
    // Always show last page if different from first
    if (totalPages !== 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-2">
        {currentPage > 1 && (
          <Link
            href={`${basePath}?page=${currentPage - 1}`}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            Prev
          </Link>
        )}

        {getPageNumbers().map((page, index) =>
          page === -1 ? (
            <span key={index} className="px-3 py-1">
              ...
            </span>
          ) : (
            <Link
              key={index}
              href={`${basePath}?page=${page}`}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          )
        )}

        {currentPage < totalPages && (
          <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;