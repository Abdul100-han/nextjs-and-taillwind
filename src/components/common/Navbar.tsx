"use client";

import Link from "next/link";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import Search from "../ui/Search";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          BloocodePod
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-800 hover:text-primary">
            Home
          </Link>

          <Dropdown title="Company" items={companyLinks} />

          <Link href="/resources" className="text-gray-800 hover:text-primary">
            Resources
          </Link>

          <Link href="/contact" className="text-gray-800 hover:text-primary">
            Contact Us
          </Link>

          <Link href="/advertise" className="text-gray-800 hover:text-primary">
            Advertise
          </Link>

          <Search />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-primary">
                Home
              </Link>

              <Dropdown title="Company" items={companyLinks} mobile />

              <Link href="/resources" className="text-gray-800 hover:text-primary">
                Resources
              </Link>

              <Link href="/contact" className="text-gray-800 hover:text-primary">
                Contact Us
              </Link>

              <Link href="/advertise" className="text-gray-800 hover:text-primary">
                Advertise
              </Link>

              <Search mobile />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;