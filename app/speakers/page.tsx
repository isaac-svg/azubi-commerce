import {
  Navigation,
  ProductCategories,
  AboutSection,
  Footer,
  Button,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

const speakers = [
  {
    name: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image:
      "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    href: "/speakers/zx9",
    isNew: true,
  },
  {
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image:
      "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    href: "/speakers/zx7",
    isNew: false,
  },
];

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      {/* Hero/Header */}
      <section className="bg-neutral-900 py-12 lg:py-20 text-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-widest uppercase">
          Speakers
        </h1>
      </section>

      {/* Speakers List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {speakers.map((product, idx) => (
          <div
            key={product.name}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
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
              <h2 className="text-2xl lg:text-4xl font-bold uppercase mb-6">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                {product.description}
              </p>
              <Link href={product.href}>
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
