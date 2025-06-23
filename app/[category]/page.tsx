import React from "react";
import {
  Navigation,
  ProductCategories,
  AboutSection,
  Footer,
  Button,
} from "@/components";
import {
  getProductsByCategory,
  getCategoryDisplayName,
  getAllCategories,
} from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = React.use(params);
  const validCategories = getAllCategories();

  // Check if category is valid
  if (!validCategories.includes(category)) {
    notFound();
  }

  const products = getProductsByCategory(category);
  const categoryDisplayName = getCategoryDisplayName(category);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />

      {/* Hero/Header */}
      <section className="bg-neutral-900 py-12 lg:py-20 text-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-widest uppercase">
          {categoryDisplayName}
        </h1>
      </section>

      {/* Products List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {products.map((product, idx) => (
          <div
            key={product.slug}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex-shrink-0">
              <div className=" rounded-lg flex items-center justify-center aspect-square w-full h-auto">
                <Image
                  src={product.categoryImage.desktop}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {product.new && (
                <p className="text-primary-500 text-xs lg:text-sm uppercase tracking-[8px] mb-4">
                  New Product
                </p>
              )}
              <h2 className="text-2xl lg:text-4xl font-bold uppercase mb-6">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                {product.description}
              </p>
              <Link href={`/${category}/${product.slug}`}>
                <Button
                  size="lg"
                  className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-0"
                >
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Product Categories */}
      <ProductCategories />

      {/* About Section */}
      <AboutSection />

      <Footer />
    </main>
  );
}
