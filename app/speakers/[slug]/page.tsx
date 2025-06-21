"use client";
import {
  Navigation,
  ProductCategories,
  AboutSection,
  Footer,
  Button,
  useCart,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Mock data for speakers
const products = {
  zx9: {
    name: "ZX9 SPEAKER",
    slug: "zx9",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: 4500,
    image:
      "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    features: `Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.`,
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 10m Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" },
    ],
    gallery: [
      "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
      "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
      "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
    ],
    isNew: true,
  },
  zx7: {
    name: "ZX7 SPEAKER",
    slug: "zx7",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    image:
      "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    features: `Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.`,
    inTheBox: [
      { quantity: 2, item: "Speaker Unit" },
      { quantity: 2, item: "Speaker Cloth Panel" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 7.5m Audio Cable" },
      { quantity: 1, item: "7.5m Optical Cable" },
    ],
    gallery: [
      "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
      "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
      "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
    ],
    isNew: false,
  },
};

// Others to recommend
const others = [
  {
    name: "XX99 MARK II",
    image:
      "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
    href: "/headphones/xx99-mark-ii",
  },
  {
    name: "XX59",
    image:
      "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    href: "/headphones/xx59",
  },
  {
    name: "YX1 EARPHONES",
    image:
      "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    href: "/earphones/yx1",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { addItem } = useCart();
  const [qty, setQty] = React.useState(1);

  const product = products[params.slug as keyof typeof products];

  if (!product) {
    return (
      <main className="min-h-screen bg-neutral-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <Link href="/speakers" className="text-primary-500 mt-4 inline-block">
            Return to Speakers
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <Link
          href="/speakers"
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
            {product.isNew && (
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
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-16 border rounded px-2 py-1 text-center"
              />
              <Button
                size="lg"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-0"
                onClick={() => {
                  addItem(
                    {
                      slug: product.slug,
                      name: product.name,
                      price: product.price,
                      image: product.image,
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
              {product.inTheBox.map((item, idx) => (
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
              src={product.gallery[0]}
              alt={`${product.name} gallery image 1`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src={product.gallery[1]}
              alt={`${product.name} gallery image 2`}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <Image
              src={product.gallery[2]}
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
            {others.map((item) => (
              <div key={item.name} className="text-center">
                <div className="bg-neutral-100 rounded-lg flex items-center justify-center aspect-square w-full h-auto mb-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={250}
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-6">{item.name}</h3>
                <Link href={item.href}>
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
