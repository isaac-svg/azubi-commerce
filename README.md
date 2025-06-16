# Azubi Commerce - Design System Implementation

A modern e-commerce platform built with Next.js 15, TypeScript, and Tailwind CSS v4, featuring a custom design system based on the provided design specifications.

## 🎨 Design System

This project implements a comprehensive design system with the following components:

### Colors

- **Primary Colors:**

  - `rust` (#ed7043) - Main brand color
  - `charcoal` (#1a1a1a) - Dark neutral
  - `light` (#f7f7f7) - Light neutral
  - `peach` (#fea780) - Accent color

- **Usage in Code:**

  ```css
  /* CSS Custom Properties */
  var(--color-rust)
  var(--color-charcoal)
  var(--color-light)
  var(--color-peach)

  /* Tailwind Classes */
  text-rust bg-charcoal border-peach
  ```

### Typography

- **Font Family:** Manrope (Google Fonts)
- **Display Sizes:**
  - `text-display-1`: 4rem (64px)
  - `text-display-2`: 3rem (48px)
- **Heading Sizes:** h1-h6 with responsive line heights
- **Body Text:** Standard, large, and small variants

### Components

#### Button Component

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

**Variants:**

- `primary`: Rust background with white text
- `secondary`: Transparent with charcoal border
- `ghost`: Transparent with hover effects

**Sizes:**

- `sm`: Small padding and text
- `md`: Medium (default)
- `lg`: Large padding and text

#### Input Component

```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  helperText="Optional helper text"
  error="Error message if validation fails"
/>
```

#### Card Component

```tsx
<Card padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Padding Options:**

- `sm`: 1rem (16px)
- `md`: 1.5rem (24px) - default
- `lg`: 2rem (32px)

## 🛠️ Technical Setup

### Tailwind Configuration

The project uses a custom `tailwind.config.ts` that extends the default theme with:

- Custom color palette
- Typography scale
- Spacing system
- Border radius values
- Box shadows
- Font families

### Global Styles

Custom CSS in `app/globals.css` includes:

- Google Fonts import for Manrope
- CSS custom properties for design tokens
- Base component styles (.btn, .input, etc.)
- Typography utilities

### File Structure

```
azubi-commerce/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with font setup
│   └── page.tsx             # Home page showcasing design system
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Input.tsx            # Form input component
│   ├── Card.tsx             # Card container component
│   └── index.ts             # Component exports
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Design System Features

### Color System

- Consistent color palette across all components
- CSS custom properties for easy theming
- Dark mode support built-in

### Typography

- Manrope font for modern, clean aesthetic
- Responsive font sizes
- Proper line heights and letter spacing

### Component Library

- Reusable, accessible components
- Consistent styling through design tokens
- TypeScript support for better DX

### Form Elements

- Accessible form inputs with labels
- Error and helper text support
- Focus states and validation styling

## 📱 Responsive Design

The design system is fully responsive with:

- Mobile-first approach
- Breakpoint-specific utilities
- Flexible grid systems
- Adaptive typography

## 🔧 Customization

### Adding New Colors

1. Add to CSS custom properties in `globals.css`
2. Extend colors in `tailwind.config.ts`
3. Use in components with Tailwind classes

### Creating New Components

1. Follow existing component patterns
2. Use design tokens for consistency
3. Include TypeScript interfaces
4. Export from `components/index.ts`

## 📚 Component Usage Examples

Visit the home page to see live examples of all components including:

- Color palette showcase
- Typography samples
- Button variations
- Form elements
- Product cards
- Layout examples

## 🎨 Design Tokens

All design decisions are centralized through:

- CSS custom properties
- Tailwind configuration
- TypeScript interfaces
- Component props

This ensures consistency and makes theme changes easy to implement across the entire application.
