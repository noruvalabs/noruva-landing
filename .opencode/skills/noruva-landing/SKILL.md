---
name: noruva-landing
description: Use when working on the Noruva Labs landing page (Astro + React + Tailwind)
---

# Noruva Labs Landing Page

## Project Overview
Astro-based landing page for Noruva Labs with React components and Tailwind CSS v4.

## Tech Stack
- **Framework**: Astro 7.x with React integration
- **Styling**: Tailwind CSS v4 with custom theme
- **Components**: React (TSX) for interactive elements
- **Icons**: Lucide React

## Key Files
- `src/layouts/Base.astro` - Base HTML layout with meta tags
- `src/pages/index.astro` - Homepage
- `src/pages/products/*.astro` - Product pages (interview, immigration, law)
- `src/pages/blog.astro` - Blog page
- `src/pages/contact.astro` - Contact page
- `src/components/site/header.tsx` - Navigation with mobile menu
- `src/components/site/hero.tsx` - Hero section and logo marquee
- `src/components/site/sections.tsx` - All page sections and footer
- `src/components/site/scroll-sections.tsx` - Scroll-jacked sections
- `src/styles/global.css` - Custom utilities and theme

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix lint issues

## Design System

### Colors (Light theme)
- Background: `#ffffff` / `#f8f9fb`
- Card: `#ffffff` with `#e2e8f0` border
- Text: `#1a1a2e` (graphite) / `#64748b` (slate)
- Accent: `#153E6E` (navy blue from logo)

### Custom Utilities
- `btn-pill` - Rounded button (8px radius)
- `btn-ink` - Dark filled button
- `btn-ghost` - Outlined button
- `card-surface` - White card with shadow
- `contained-nav` - Frosted glass nav bar
- `glow-purple` - Subtle radial gradient
- `grid-lines` - Background line pattern
- `container-page` - Max-width container (1200px)

### Typography
- Headings: Poppins (`font-cal`)
- Body: Inter (`font-inter`)

## Conventions
- Use `className` not `class` in TSX files
- Use Tailwind classes directly, avoid custom CSS when possible
- Mobile-first responsive design
- All interactive components need `client:load` directive
