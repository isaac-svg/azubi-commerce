"use client";
import {
  Navigation,
  ProductCategories,
  AboutSection,
  Footer,
  Button,
  QuantityInput,
  useCart,
} from "@/components";
import { getProductBySlug, getRecommendedProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, slug } = React.use(params);
  const { addItem } = useCart();
  const [qty, setQty] = React.useState(1);

  const product = getProductBySlug(slug);

  // Check if product exists and matches category
  if (!product || product.category !== category) {
    notFound();
  }

  const recommendedProducts = getRecommendedProducts(product);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <Link
          href={`/${category}`}
          className="text-gray-500 hover:text-primary-500 text-sm mb-8 inline-block"
        >
          Go Back
        </Link>

        {/* Product Info */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20">
          {/* Image */}
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex-shrink-0">
            <div className="bg-neutral-100 rounded-lg flex items-center justify-center aspect-square w-full h-auto">
              <Image
                src={product.image.desktop}
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
            <h1 className="text-2xl lg:text-4xl font-bold uppercase mb-6">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              {product.description}
            </p>
            <div className="text-xl font-bold mb-6">
              $ {product.price.toLocaleString()}
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <QuantityInput value={qty} onChange={setQty} min={1} max={10} />
              <Button
                size="lg"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-0"
                onClick={() => {
                  addItem(
                    {
                      slug: product.slug,
                      name: product.name,
                      price: product.price,
                      image: product.image.desktop,
                    },
                    qty
                  );
                  alert("Added to cart!");
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Features and In the Box */}
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
            <div className="whitespace-pre-line text-gray-600">
              {product.features}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
            <ul className="space-y-2">
              {product.includes.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-500 font-bold mr-4">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-600">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="space-y-8">
            <Image
              src={product.gallery.first.desktop}
              alt={`${product.name} gallery image 1`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src={product.gallery.second.desktop}
              alt={`${product.name} gallery image 2`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <Image
              src={product.gallery.third.desktop}
              alt={`${product.name} gallery image 3`}
              width={700}
              height={700}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* You May Also Like */}
        <div className="my-20">
          <h2 className="text-2xl font-bold uppercase text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.others.map((item) => (
              <div key={item.slug} className="text-center">
                <div className="bg-neutral-100 rounded-lg flex items-center justify-center aspect-square w-full h-auto mb-6">
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    width={250}
                    height={250}
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-6">{item.name}</h3>
                <Link
                  href={`/${getProductBySlug(item.slug)?.category}/${
                    item.slug
                  }`}
                >
                  <Button className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-0">
                    See Product
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <ProductCategories />

      {/* About Section */}
      <AboutSection />

      <Footer />
    </main>
  );
}
