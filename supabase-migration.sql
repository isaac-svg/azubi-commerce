-- Create products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT NOT NULL,
  features TEXT NOT NULL,
  new BOOLEAN DEFAULT false,
  image_mobile VARCHAR(500) NOT NULL,
  image_tablet VARCHAR(500) NOT NULL,
  image_desktop VARCHAR(500) NOT NULL,
  category_image_mobile VARCHAR(500) NOT NULL,
  category_image_tablet VARCHAR(500) NOT NULL,
  category_image_desktop VARCHAR(500) NOT NULL,
  includes JSONB NOT NULL,
  gallery JSONB NOT NULL,
  others JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at 
    BEFORE UPDATE ON products 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_new ON products(new);

-- Enable Row Level Security (optional, for future authentication)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow read access to all users (since this is an e-commerce site)
CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

-- If you want to restrict write access, you can create policies for that too
-- CREATE POLICY "Allow authenticated users to insert" ON products
--   FOR INSERT WITH CHECK (auth.role() = 'authenticated');
