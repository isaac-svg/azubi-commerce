import { supabase } from "./supabase";

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

// Transform database row to Product interface
function transformProduct(row: any): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    image: {
      mobile: row.image_mobile,
      tablet: row.image_tablet,
      desktop: row.image_desktop,
    },
    category: row.category,
    categoryImage: {
      mobile: row.category_image_mobile,
      tablet: row.category_image_tablet,
      desktop: row.category_image_desktop,
    },
    new: row.new,
    price: row.price,
    description: row.description,
    features: row.features,
    includes: row.includes,
    gallery: row.gallery,
    others: row.others,
  };
}

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}

// Get products by category
export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('id');

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}

// Get product by slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching product by slug:', error);
    return null;
  }

  return data ? transformProduct(data) : null;
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('products')
    .select('category')
    .order('category');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  const categories = data?.map(item => item.category) || [];
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
export async function getRecommendedProducts(currentProduct: Product): Promise<Product[]> {
  const recommendedSlugs = currentProduct.others.map(other => other.slug);
  
  if (recommendedSlugs.length === 0) return [];

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .in('slug', recommendedSlugs);

  if (error) {
    console.error('Error fetching recommended products:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}
