import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Using anon key for public read

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyDatabase() {
  try {
    // Try to fetch all products using the anon key (public read access)
    const { data: products, error } = await supabase
      .from('products')
      .select('slug, name, category')
      .limit(10);

    if (error) {
      console.error('Error fetching products:', error);
      return;
    }

    console.log('Products in database:');
    console.log('=====================');
    products?.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} (${product.category}) - slug: ${product.slug}`);
    });
    
    console.log(`\nTotal products found: ${products?.length || 0}`);
    
  } catch (error) {
    console.error('Database verification failed:', error);
  }
}

verifyDatabase();
