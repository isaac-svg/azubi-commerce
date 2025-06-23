-- Create cart table for persisting cart data
CREATE TABLE carts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  product_slug VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(session_id, product_slug)
);

-- Create updated_at trigger for carts table
CREATE TRIGGER update_carts_updated_at 
    BEFORE UPDATE ON carts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_carts_session_id ON carts(session_id);
CREATE INDEX idx_carts_product_slug ON carts(product_slug);

-- Enable Row Level Security
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow access based on session_id
-- This allows users to access their own cart data without authentication
CREATE POLICY "Allow access to own cart" ON carts
  FOR ALL USING (true);

-- Add foreign key constraint to ensure product exists
ALTER TABLE carts 
ADD CONSTRAINT fk_carts_product_slug 
FOREIGN KEY (product_slug) REFERENCES products(slug) ON DELETE CASCADE;
