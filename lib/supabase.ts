import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types
export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          slug: string
          name: string
          category: string
          price: number
          description: string
          features: string
          new: boolean
          image_mobile: string
          image_tablet: string
          image_desktop: string
          category_image_mobile: string
          category_image_tablet: string
          category_image_desktop: string
          includes: { quantity: number; item: string }[]
          gallery: {
            first: { mobile: string; tablet: string; desktop: string }
            second: { mobile: string; tablet: string; desktop: string }
            third: { mobile: string; tablet: string; desktop: string }
          }
          others: {
            slug: string
            name: string
            image: { mobile: string; tablet: string; desktop: string }
          }[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          slug: string
          name: string
          category: string
          price: number
          description: string
          features: string
          new?: boolean
          image_mobile: string
          image_tablet: string
          image_desktop: string
          category_image_mobile: string
          category_image_tablet: string
          category_image_desktop: string
          includes: { quantity: number; item: string }[]
          gallery: {
            first: { mobile: string; tablet: string; desktop: string }
            second: { mobile: string; tablet: string; desktop: string }
            third: { mobile: string; tablet: string; desktop: string }
          }
          others: {
            slug: string
            name: string
            image: { mobile: string; tablet: string; desktop: string }
          }[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          slug?: string
          name?: string
          category?: string
          price?: number
          description?: string
          features?: string
          new?: boolean
          image_mobile?: string
          image_tablet?: string
          image_desktop?: string
          category_image_mobile?: string
          category_image_tablet?: string
          category_image_desktop?: string
          includes?: { quantity: number; item: string }[]
          gallery?: {
            first: { mobile: string; tablet: string; desktop: string }
            second: { mobile: string; tablet: string; desktop: string }
            third: { mobile: string; tablet: string; desktop: string }
          }
          others?: {
            slug: string
            name: string
            image: { mobile: string; tablet: string; desktop: string }
          }[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
