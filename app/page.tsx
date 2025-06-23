import {
  Navigation,
  Hero,
  ProductCategories,
  FeaturedProducts,
  AboutSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <AboutSection />
      <Footer />
    </main>
  );
}
