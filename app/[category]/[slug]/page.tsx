import {
  Navigation,
  ProductCategories,
  AboutSection,
  Footer,
} from "@/components";
import { getProductBySlug, getRecommendedProducts, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, slug } = await params;

  const product = await getProductBySlug(slug);

  // Check if product exists and matches category
  if (!product || product.category !== category) {
    notFound();
  }

  const recommendedProducts = await getRecommendedProducts(product);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      <ProductDetailClient 
        product={product} 
        recommendedProducts={recommendedProducts}
        category={category}
      />
      <ProductCategories className="bg-white" />
      <AboutSection />
      <Footer />
    </main>
  );
}
