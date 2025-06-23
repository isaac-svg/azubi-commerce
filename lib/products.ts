import data from "@/public/data.json";

// Fix image paths by removing ./ prefix and ensuring they start with /
function fixImagePath(path: string): string {
  if (path.startsWith("./")) {
    return "/" + path.substring(2);
  }
  return path.startsWith("/") ? path : "/" + path;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: Array<{
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }>;
}

// Get all products
export function getAllProducts(): Product[] {
  return (data as Product[]).map((product) => ({
    ...product,
    image: {
      mobile: fixImagePath(product.image.mobile),
      tablet: fixImagePath(product.image.tablet),
      desktop: fixImagePath(product.image.desktop),
    },
    categoryImage: {
      mobile: fixImagePath(product.categoryImage.mobile),
      tablet: fixImagePath(product.categoryImage.tablet),
      desktop: fixImagePath(product.categoryImage.desktop),
    },
    gallery: {
      first: {
        mobile: fixImagePath(product.gallery.first.mobile),
        tablet: fixImagePath(product.gallery.first.tablet),
        desktop: fixImagePath(product.gallery.first.desktop),
      },
      second: {
        mobile: fixImagePath(product.gallery.second.mobile),
        tablet: fixImagePath(product.gallery.second.tablet),
        desktop: fixImagePath(product.gallery.second.desktop),
      },
      third: {
        mobile: fixImagePath(product.gallery.third.mobile),
        tablet: fixImagePath(product.gallery.third.tablet),
        desktop: fixImagePath(product.gallery.third.desktop),
      },
    },
    others: product.others.map((other) => ({
      ...other,
      image: {
        mobile: fixImagePath(other.image.mobile),
        tablet: fixImagePath(other.image.tablet),
        desktop: fixImagePath(other.image.desktop),
      },
    })),
  }));
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter(
    (product: Product) => product.category === category
  );
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((product: Product) => product.slug === slug);
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = getAllProducts().map(
    (product: Product) => product.category
  );
  return [...new Set(categories)];
}

// Get category display name
export function getCategoryDisplayName(category: string): string {
  const categoryNames: { [key: string]: string } = {
    headphones: "Headphones",
    speakers: "Speakers",
    earphones: "Earphones",
  };
  return categoryNames[category] || category;
}

// Get recommended products (others)
export function getRecommendedProducts(currentProduct: Product): Product[] {
  return currentProduct.others
    .map((other) => {
      const product = getProductBySlug(other.slug);
      return product;
    })
    .filter(Boolean) as Product[];
}
