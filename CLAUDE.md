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
