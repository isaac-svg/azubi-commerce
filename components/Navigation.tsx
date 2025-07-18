"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cart, ProductCategories } from "./index";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsMenuClosing(false);
      }, 300);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <>
      <nav className={`bg-neutral-900 text-white ${className}`}>
        <div className="max-w-7xl mx-auto  border-b-neutral-600 border-b-1">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 transition-transform duration-200 hover:scale-110 active:scale-95"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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

            {/* Logo */}
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold tracking-wider"
            >
              audiophile
            </Link>

            <div className="hidden lg:flex space-x-8">
              <Link
                href="/"
                className= "hover:text-[var(--color-rust)] text-sm font-medium hover:text-rust transition-colors uppercase tracking-wider"
              >
                Home
              </Link>
              <Link
                href="/headphones"
                className="hover:text-[var(--color-rust)] text-sm font-medium hover:text-rust transition-colors uppercase tracking-wider"
              >
                Headphones
              </Link>
              <Link
                href="/speakers"
                className="hover:text-[var(--color-rust)] text-sm font-medium hover:text-rust transition-colors uppercase tracking-wider"
              >
                Speakers
              </Link>
              <Link
                href="/earphones"
                className="hover:text-[var(--color-rust)] text-sm font-medium hover:text-rust transition-colors uppercase tracking-wider"
              >
                Earphones
              </Link>
            </div>

            {/* Cart Icon */}
            <button
              className="p-2 transition-transform duration-200 hover:scale-110 active:scale-95"
              aria-label="Shopping cart"
              onClick={() => setIsCartOpen(true)}
            >
              <svg
                className="w-6 h-6 transition-colors duration-200 hover:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-black transition-opacity duration-300 ease-out ${
            isMenuClosing ? 'bg-opacity-0' : 'bg-opacity-50'
          }`}
          onClick={toggleMobileMenu}
        >
          <div
            className={`fixed inset-y-0 left-0 w-full bg-white shadow-xl overflow-y-auto transform transition-all duration-300 ease-out ${
              isMenuClosing ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 z-10 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-200 hover:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className={`mt-16 max-h-[50vh] transform transition-all duration-500 delay-100 ${
                isMenuClosing ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              }`}>
                <ProductCategories className="py-8" onCategoryClick={toggleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
