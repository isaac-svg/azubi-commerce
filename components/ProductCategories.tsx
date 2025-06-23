import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  href: string;
  image: string;
  onCategoryClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, href, image, onCategoryClick }) => {
  return (
    <Link key={title} href={`${href}`} className='relative bg-gray-100 flex flex-col items-center text-center gap-4 pt-20 pb-6 rounded-lg mx-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group'
               onClick={onCategoryClick}
               >
               <Image
                  alt={`a png of a ${title}`}
                  src={`${image}`}
                   width={160}
            height={160}
                  className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-9 max-w-[150px] transition-transform duration-300 group-hover:scale-110' />

               <p className='text-base font-bold tracking-wide text-black opacity-100 transition-colors duration-300 group-hover:text-orange-500'>{title}</p>

               <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm opacity-50 transition-opacity duration-300 group-hover:opacity-75'>shop</p>

                  <div className='w-2 h-2 border-t-2 border-r-2 border-orange-500 transform rotate-45 transition-transform duration-300 group-hover:translate-x-1'></div>
               </div>
            </Link>
  );
};

interface ProductCategoriesProps {
  className?: string;
  onCategoryClick?: () => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  className = "",
  onCategoryClick,
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
    <section className={`py-16 lg:py-24 bg-white  ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`animate-in slide-in-from-bottom-4 fade-in duration-500`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <CategoryCard
                title={category.title}
                href={category.href}
                image={category.image}
                onCategoryClick={onCategoryClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;