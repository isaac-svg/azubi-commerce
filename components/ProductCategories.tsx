import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  href: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, href, image }) => {
  return (
    <Link href={href} className="group">
      <div className=" rounded-xl text-center hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center">
        {/* Image */}
        <div className="mb-6">
          <Image
            src={image}
            alt={title}
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold uppercase tracking-widest mb-3 text-neutral-900">
          {title}
        </h3>
        <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-orange-500 transition-colors">
          <span className="uppercase tracking-widest mr-2">Shop</span>
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
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
      title: "Speakers",
      href: "/speakers",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
      title: "Earphones",
      href: "/earphones",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    },
  ];

  return (
    <section className={`py-16 lg:py-24  ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              href={category.href}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
