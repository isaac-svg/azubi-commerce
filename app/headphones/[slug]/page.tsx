"use client"
import { Navigation, ProductCategories, AboutSection, Footer, Button, useCart } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Mock data for demonstration
const product = {
  name: "XX99 MARK II HEADPHONES",
  slug: "xx99-mark-ii",
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  price: 2999,
  image: "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
  features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.

The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
  inTheBox: [
    { quantity: 1, item: "Headphone Unit" },
    { quantity: 2, item: "Replacement Earcups" },
    { quantity: 1, item: "User Manual" },
    { quantity: 1, item: "3.5mm 5m Audio Cable" },
    { quantity: 1, item: "Travel Bag" },
  ],
  gallery: [
    "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
    "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
    "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
  ],
  others: [
    {
      name: "XX99 MARK I",
      image: "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      href: "/headphones/xx99-mark-i",
    },
    {
      name: "XX59",
      image: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      href: "/headphones/xx59",
    },
    {
      name: "ZX9 SPEAKER",
      image: "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
      href: "/speakers/zx9",
    },
  ],
};

export default function ProductDetailPage() {
  const { addItem } = useCart();
  const [qty, setQty] = React.useState(1);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <Link href="/headphones" className="text-gray-500 hover:text-primary-500 text-sm mb-8 inline-block">
          Go Back
        </Link>
        {/* Product Info */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20">
          {/* Image */}
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex-shrink-0">
            <div className="bg-neutral-100 rounded-lg flex items-center justify-center aspect-square w-full h-auto">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary-500 text-xs lg:text-sm uppercase tracking-[8px] mb-4">New Product</p>
            <h1 className="text-2xl lg:text-4xl font-bold uppercase mb-6">{product.name}</h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">{product.description}</p>
            <div className="text-xl font-bold mb-6">$ {product.price.toLocaleString()}</div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <input
                type="number"
                min={1}
                value={qty}
                onChange={e => setQty(Number(e.target.value))}
                className="w-16 border rounded px-2 py-1 text-center"
              />
              <Button
                size="lg"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-0"
                onClick={() => {
                  addItem({
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  }, qty);
                  alert('Added to cart!');
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        {/* Features & In the Box */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="flex-1">
            <h2 className="text-xl lg:text-2xl font-bold uppercase mb-6 tracking-wider">Features</h2>
            <p className="text-gray-600 whitespace-pre-line">{product.features}</p>
          </div>
          <div className="flex-1 lg:max-w-xs">
            <h2 className="text-xl lg:text-2xl font-bold uppercase mb-6 tracking-wider">In the Box</h2>
            <ul className="space-y-2">
              {product.inTheBox.map((item) => (
                <li key={item.item} className="flex items-center gap-4">
                  <span className="text-primary-500 font-bold">{item.quantity}x</span>
                  <span className="text-gray-700">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {product.gallery.map((src, idx) => (
            <div key={idx} className="bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center aspect-[4/3] w-full h-auto">
              <Image src={src} alt={`Gallery ${idx + 1}`} width={400} height={300} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        {/* You May Also Like */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold uppercase text-center mb-10 tracking-wider">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others.map((other) => (
              <div key={other.name} className="flex flex-col items-center text-center">
                <div className="bg-neutral-100 rounded-lg flex items-center justify-center aspect-square w-full max-w-xs mx-auto mb-6">
                  <Image src={other.image} alt={other.name} width={200} height={200} className="object-contain rounded-lg" />
                </div>
                <h3 className="text-lg font-bold uppercase mb-4">{other.name}</h3>
                <Link href={other.href}>
                  <Button size="md" className="px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-0 mb-2">See Product</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Product Categories */}
        <ProductCategories />
        {/* About Section */}
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
} 