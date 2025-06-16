import React from "react";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  href: string;
  imagePlaceholder: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  href,
  imagePlaceholder,
}) => {
  return (
    <Link href={href} className="group">
      <div className="bg-neutral-100 rounded-lg p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 min-h-[200px] lg:min-h-[240px] flex flex-col justify-between">
        {/* Image Placeholder */}
        <div className="flex justify-center mb-4 lg:mb-6">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xs lg:text-sm">
              {imagePlaceholder}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-4 uppercase tracking-wider">
            {title}
          </h3>
          <div className="flex items-center justify-center text-sm font-medium text-gray-600 group-hover:text-primary-500 transition-colors">
            <span className="uppercase tracking-wider mr-2">Shop</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface ProductCategoriesProps {
  className?: string;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  className = "",
}) => {
  const categories = [
    {
      title: "Headphones",
      href: "/headphones",
      imagePlaceholder: "Headphones",
    },
    {
      title: "Speakers",
      href: "/speakers",
      imagePlaceholder: "Speakers",
    },
    {
      title: "Earphones",
      href: "/earphones",
      imagePlaceholder: "Earphones",
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              href={category.href}
              imagePlaceholder={category.imagePlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
