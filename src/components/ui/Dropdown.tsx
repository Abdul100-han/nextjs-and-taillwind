import Link from "next/link";
import { useState } from "react";

interface DropdownProps {
  title: string;
  items: { name: string; href: string }[];
  mobile?: boolean;
}

const Dropdown = ({ title, items, mobile = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${mobile ? "w-full" : "inline-block"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${mobile ? "w-full justify-between" : ""}`}
      >
        <span className="text-gray-800 hover:text-primary">{title}</span>
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            mobile ? "relative mt-2" : "mt-2"
          } bg-white shadow-lg rounded-md py-2 z-50 ${
            mobile ? "w-full" : "min-w-[160px]"
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;