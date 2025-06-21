import { Navigation, ProductCategories, AboutSection, Footer, Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

const headphones = [
  {
    name: "XX99 MARK II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
    href: "/headphones/xx99-mark-ii",
    isNew: true,
  },
  {
    name: "XX99 MARK I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate studio reproduction for audiophiles, mixing engineers, and music aficionados alike in studio and on live.",
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
    href: "/headphones/xx99-mark-i",
    isNew: false,
  },
  {
    name: "XX59 HEADPHONES",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    href: "/headphones/xx59",
    isNew: false,
  },
];

export default function HeadphonesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      {/* Hero/Header */}
      <section className="bg-neutral-900 py-12 lg:py-20 text-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold tracking-widest uppercase">Headphones</h1>
      </section>

      {/* Headphones List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {headphones.map((product, idx) => (
          <div
            key={product.name}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
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
                <p className="text-primary-500 text-xs lg:text-sm uppercase tracking-[8px] mb-4">New Product</p>
              )}
              <h2 className="text-2xl lg:text-4xl font-bold uppercase mb-6">{product.name}</h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">{product.description}</p>
              <Link href={product.href}>
                <Button size="lg" className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-0">
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