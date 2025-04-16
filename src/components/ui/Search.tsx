import { useState } from "react";

interface SearchProps {
  mobile?: boolean;
}

const Search = ({ mobile = false }: SearchProps) => {
  const [query, setQuery] = useState("");

  return (
    <div className={`relative ${mobile ? "w-full mt-4" : ""}`}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary ${
          mobile ? "w-full" : "w-48"
        }`}
      />
      <button className="absolute right-3 top-2.5 text-gray-600">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;