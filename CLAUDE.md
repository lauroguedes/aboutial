# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/about page built with Nuxt 4, using @nuxt/content for content management and Nuxt Studio for visual editing. The project is a single-page application that displays personal information, avatar, role, and summary from markdown files.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally

## Architecture

### Content Management System

The project uses @nuxt/content with a custom schema defined in `content.config.ts`:

- Content source: `content/` directory with markdown files
- Schema fields: `avatar`, `name`, `role`, `layout`, `summary`, `date`, `socialLinks`
- Layout options: "x", "linkedin", or "instagram" (default: "x")
- The home page queries content at `/` path using `queryCollection("content")`

### Nuxt Studio Integration

Configured at `/editor` route (nuxt.config.ts:16) for visual content editing:
- Repository: github:lauroguedes/aboutial
- Branch: main
- Root directory: project root

### Page Structure

- `app/app.vue` - Root application component wrapping NuxtLayout and NuxtPage
- `app/pages/index.vue` - Home page that queries and displays content from `/content/index.md`
- Uses `useAsyncData` with `queryCollection` to fetch content at build/request time
- SEO metadata automatically set from content frontmatter (name, summary)

### Modules

The project uses these Nuxt modules:
- `@nuxt/content` - Content management and markdown rendering
- `@nuxt/fonts` - Font optimization
- `@nuxt/icon` - Icon system
- `@nuxt/image` - Image optimization
- `nuxt-studio` - Visual content editing interface

### Content Schema

When modifying content structure, update both:
1. `content.config.ts` - Zod schema definition
2. `app/pages/index.vue` - Template consuming the content

The schema enforces type safety for content fields and must include all required fields (`avatar`, `name`, `role`).

### Styling

**IMPORTANT:** This project uses **Tailwind CSS v4** with the PostCSS plugin.

- Always use Tailwind CSS utility classes for all styling
- Setup: `tailwindcss` v4 + `@tailwindcss/postcss` plugin
- CSS file: `app/assets/css/main.css` with `@import "tailwindcss";`
- PostCSS configuration: `postcss.config.js` with `@tailwindcss/postcss` plugin
- No Tailwind config file needed (Tailwind v4 is zero-config)
- **DO NOT install `@nuxtjs/tailwindcss`** - it conflicts with v4

#### Typography Plugin for Markdown Styling

The project uses `@tailwindcss/typography` to style markdown content rendered by `@nuxt/content`.

**Setup** (Tailwind v4 style):
```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

**Usage:**
- Apply `prose` classes to ContentRenderer for automatic markdown styling
- Use `prose-invert` for dark mode styling
- Example: `class="prose prose-invert max-w-none"`

**Features:**
- Automatic styling for headings, paragraphs, lists, code blocks
- Link, blockquote, and table formatting
- Customizable via CSS variables in Tailwind v4

**Note:** In v4, plugins are registered via `@plugin` directive in CSS, not in config files.

#### Dark Mode Implementation

The project uses Tailwind CSS v4's class-based dark mode strategy for manual theme toggling.

**Configuration:**
```css
@custom-variant dark (&:where(.dark, .dark *));
```

**Components:**
- `components/ThemeToggle.vue` - Toggle switch in top-right corner
  - Sun icon for light mode, moon icon for dark mode
  - Persists preference in localStorage
  - Falls back to system preference on first visit
  - Fixed positioning with z-50

**Usage in Components:**
- Apply dark mode variants: `bg-white dark:bg-gray-900`
- Text colors: `text-gray-900 dark:text-white`
- For markdown: `prose dark:prose-invert`

**Behavior:**
- Toggles `dark` class on `<html>` element
- Three-state logic: light, dark, or system preference
- Smooth transitions with `transition-colors`

**Testing:**
- Toggle button visible in top-right corner
- Preference persists across page reloads
- Respects system preference if no manual selection made

#### Hot Module Replacement (HMR) Configuration

Tailwind CSS v4 had known HMR issues with the Vite plugin in Nuxt (see GitHub issues #16760, #31096). The project uses the **PostCSS plugin** instead, which provides better HMR behavior with SSR enabled.

The project includes Vite server configuration for better file watching:

```typescript
postcss: {
  plugins: {
    "@tailwindcss/postcss": {},
  },
},

vite: {
  server: {
    watch: {
      usePolling: true,  // Enables file polling for better change detection
      interval: 100,     // Check for changes every 100ms
    },
  },
  optimizeDeps: {
    include: ["tailwindcss"],  // Pre-optimize Tailwind for better performance
  },
}
```

If Tailwind classes still don't update on hot reload:
1. Restart the dev server: `npm run dev`
2. Clear Nuxt cache: `rm -rf .nuxt`
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

### Layout System

The project uses a two-layer layout system:
1. **Base Layout** (`layouts/default.vue`) - Provides page-level structure and centering
2. **Component Layouts** (`components/layout/*.vue`) - Content-specific layouts selected via frontmatter

The `layout` field in content frontmatter determines which component layout renders:
- `x` → `components/layout/x.vue` (Twitter/X style card)
- `linkedin` → `components/layout/linkedin.vue` (future)
- `instagram` → `components/layout/instagram.vue` (future)
