# Supabase Setup Guide

This guide will help you set up Supabase for your Audiophile e-commerce application.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Node.js and npm installed

## Setup Steps

### 1. Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - Name: `audiophile-commerce`
   - Database Password: (generate a strong password)
   - Region: Choose closest to your users
5. Click "Create new project"

### 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - Project URL
   - Anon (public) key
   - Service Role key (keep this secret!)

### 3. Set Up Environment Variables

1. Create a `.env.local` file in your project root:

```bash
cp .env.local.example .env.local
```

2. Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 4. Set Up the Database

1. In your Supabase dashboard, go to the SQL Editor
2. Copy the contents of `supabase-migration.sql` and run it
3. This will create the `products` table with all necessary columns and indexes

### 5. Seed the Database

1. Install dependencies if you haven't already:

```bash
npm install
```

2. Install ts-node for running TypeScript scripts:

```bash
npm install -g ts-node
```

3. Run the seeding script:

```bash
ts-node scripts/seed-database.ts
```

This will populate your database with all the product data from the JSON file.

### 6. Verify Setup

1. In your Supabase dashboard, go to Table Editor
2. Click on the `products` table
3. You should see all your products listed

### 7. Start Your Application

```bash
npm run dev
```

Your application should now be connected to Supabase and working with the database!

## Troubleshooting

### Common Issues

1. **Environment variables not loading**: Make sure `.env.local` is in your project root and restart your development server.

2. **Database connection failed**: Double-check your Supabase URL and API keys.

3. **Seeding script fails**: Ensure your service role key is correct and has the necessary permissions.

4. **RLS (Row Level Security) issues**: The migration script sets up basic RLS policies. For production, you may want to implement more sophisticated authentication.

## Database Schema

The `products` table includes:
- Basic product info (id, slug, name, category, price, description, features)
- Image URLs for different screen sizes
- JSON fields for complex data (includes, gallery, others)
- Timestamps for created_at and updated_at

## Production Considerations

1. **Environment Variables**: Make sure to set up environment variables in your production environment.

2. **Database Backups**: Supabase automatically backs up your database, but consider setting up additional backups for critical data.

3. **Performance**: The database is indexed for common queries (category, slug, new products).

4. **Security**: Consider implementing proper authentication and authorization if you plan to add user accounts or admin features.

## Next Steps

Your application is now running with Supabase! The existing functionality remains the same, but now all product data is served from a real database instead of a static JSON file.

Future enhancements could include:
- User authentication
- User reviews and ratings
- Order management
- Inventory tracking
- Product management admin interface
