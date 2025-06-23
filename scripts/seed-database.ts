import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// You'll need to replace these with your actual Supabase credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-supabase-url';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Fix image paths by removing ./ prefix and ensuring they start with /
function fixImagePath(path: string): string {
  if (path.startsWith("./")) {
    return "/" + path.substring(2);
  }
  return path.startsWith("/") ? path : "/" + path;
}

async function seedDatabase() {
  try {
    // Read the JSON data
    const dataPath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    const products = JSON.parse(jsonData);

    console.log(`Found ${products.length} products to seed...`);

    // Transform and insert each product
    for (const product of products) {
      const transformedProduct = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description,
        features: product.features,
        new: product.new,
        image_mobile: fixImagePath(product.image.mobile),
        image_tablet: fixImagePath(product.image.tablet),
        image_desktop: fixImagePath(product.image.desktop),
        category_image_mobile: fixImagePath(product.categoryImage.mobile),
        category_image_tablet: fixImagePath(product.categoryImage.tablet),
        category_image_desktop: fixImagePath(product.categoryImage.desktop),
        includes: product.includes,
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
        others: product.others.map((other: any) => ({
          ...other,
          image: {
            mobile: fixImagePath(other.image.mobile),
            tablet: fixImagePath(other.image.tablet),
            desktop: fixImagePath(other.image.desktop),
          },
        })),
      };

      const { error } = await supabase
        .from('products')
        .upsert(transformedProduct, { onConflict: 'slug' });

      if (error) {
        console.error(`Error inserting product ${product.slug}:`, error);
      } else {
        console.log(`✓ Inserted product: ${product.name}`);
      }
    }

    console.log('Database seeding completed!');
    
    // Verify the data
    const { data: count } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true });

    console.log(`Total products in database: ${count}`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeding script
seedDatabase();
