# Aboutial - Personal Portfolio & About Page

<div align="center">

A modern, flexible personal portfolio/about page built with Nuxt 4, featuring multiple social media-inspired layouts (Twitter/X, Instagram, LinkedIn), content management with Nuxt Content, and visual editing with Nuxt Studio.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00C58E?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Nuxt Content](https://img.shields.io/badge/Nuxt_Content-3.x-8DC63F?logo=nuxt.js&logoColor=white)](https://content.nuxt.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

</br>

</div>

## Features

- 🎨 **Multiple Layout Styles**: Choose from Twitter/X, Instagram, or LinkedIn-inspired designs
- 📝 **Content Management**: Markdown-based content with frontmatter configuration
- 🎭 **Visual Editing**: Integrated Nuxt Studio for content editing
- 🌓 **Dark Mode**: Full light/dark theme support with manual toggle and system preference detection
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎬 **Media Backgrounds**: Support for images (gif, png, webp, svg) and videos (mp4)
- 🔗 **Social Links**: Integrated social media links (GitHub, LinkedIn, Twitter, Instagram, YouTube)
- 📖 **Read More Component**: Collapsible content with smooth transitions
- ⚡ **Performance**: Built on Nuxt 4 with optimized assets and fonts

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) - The Intuitive Vue Framework
- **Content**: [@nuxt/content v3](https://content.nuxt.com/) - File-based CMS
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful typographic defaults
- **Icons**: [@nuxt/icon](https://nuxt.com/modules/icon) - Icon component with 100,000+ icons
- **Images**: [@nuxt/image](https://image.nuxt.com/) - Optimized image component
- **Fonts**: [@nuxt/fonts](https://fonts.nuxt.com/) - Automatic font optimization
- **Studio**: [Nuxt Studio](https://nuxt.studio/) - Visual content editing

## Available Layouts
- X/Twitter
- Instagram
- LinkedIn

## Project Structure

```
aboutial/
├── app/
│   ├── app.vue                 # Root application component
│   ├── layouts/
│   │   └── default.vue         # Base layout with centering and background
│   └── pages/
│       └── index.vue           # Home page with dynamic layout rendering
├── components/
│   ├── layout/
│   │   ├── x.vue              # Twitter/X layout component
│   │   ├── instagram.vue      # Instagram layout component
│   │   └── linkedin.vue       # LinkedIn layout component
│   ├── Footer.vue             # Footer with attribution
│   ├── PageBackground.vue     # Background handler (image/video/svg)
│   ├── ReadMore.vue           # Collapsible content component
│   ├── SocialLinks.vue        # Social media links component
│   ├── ThemeToggle.vue        # Dark/light mode toggle
│   └── XFollowMe.vue          # Twitter follow button
├── content/
│   └── index.md               # Main content file with frontmatter
├── assets/
│   └── css/
│       └── main.css           # Global styles with Tailwind directives
├── public/                    # Static assets (avatar, background images)
├── content.config.ts          # Content schema with Zod validation
├── nuxt.config.ts             # Nuxt configuration
└── postcss.config.js          # PostCSS configuration
```

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Static Site Generation

Generate a static site:

```bash
npm run generate
```

## Content Management

### Using Markdown Files

Content is managed through markdown files in the `content/` directory. The main content file is `content/index.md`:

```yaml
---
name: "Your Name"
role: "@username · Your Title"
avatar: "/avatar.png"
summary: "Your bio/summary"
date: 2024-06-15
layout: "x"  # Options: "x", "instagram", "linkedin"
background: "/bg.jpg"  # Optional: .gif, .png, .webp, .svg, .mp4
socialLinks:
  github: "https://github.com/username"
  linkedin: "https://linkedin.com/in/username"
  twitter: "https://twitter.com/username"
  instagram: "https://instagram.com/username"
  youTube: "https://youtube.com/username"
---

Your markdown content here...
- Projects
- Experience
- Achievements
```

### Using Nuxt Studio

Access the visual editor at `http://localhost:3000/editor` when running the dev server. Nuxt Studio provides a interface for editing content. For more details, visit the [Nuxt Studio Documentation](https://content.nuxt.com/docs/studio/setup).

## Configuration

### Content Schema

The content schema is defined in `content.config.ts` using Zod:

```typescript
schema: z.object({
  avatar: z.string(),
  name: z.string(),
  role: z.string(),
  layout: z.enum(["x", "linkedin", "instagram"]).default("x"),
  summary: z.string().optional(),
  date: z.date().optional(),
  background: z.string().optional(),
  socialLinks: z.object({
    github: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    youTube: z.string().optional(),
  }).optional(),
})
```

### Switching Layouts

To change the layout, update the `layout` field in your content frontmatter:

```yaml
layout: "instagram"  # Options: "x", "instagram", "linkedin"
```

### Background Images/Videos

The `background` property supports multiple formats:

- **Images**: .gif, .png, .webp, .jpg
- **SVG**: Uses Tailwind background utilities (bg-center, bg-repeat)
- **Video**: .mp4, .webm, .ogg (autoplay, loop, muted)

```yaml
background: "/bg.jpg"      # Image
background: "/pattern.svg" # SVG pattern
background: "/video.mp4"   # Video
```

## Styling

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the PostCSS plugin:

- **Zero-config**: No `tailwind.config.js` needed
- **CSS-first**: Configuration via CSS directives
- **Plugin system**: Uses `@plugin` directive for plugins

```css
/* app/assets/css/main.css */
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@custom-variant dark (&:where(.dark, .dark *));
```

## Components

### ReadMore Component

Height-based collapsible content with gradient fade effect:

```vue
<ReadMore
  :body="body"
  collapsed-height="150px"
  max-height="400px"
  gradient-from="from-white dark:from-gray-900"
/>
```

### SocialLinks Component

Reusable social media icons with size variants:

```vue
<SocialLinks
  :social-links="socialLinks"
  size="lg"  <!-- Options: xs, md, lg -->
/>
```

### PageBackground Component

Handles background media with auto-detection:

```vue
<PageBackground :background="backgroundUrl" />
```

### ThemeToggle Component

Dark/light mode toggle with persistence:

- Sun icon for light mode
- Moon icon for dark mode
- localStorage persistence
- System preference fallback

## Development Notes

### Hot Module Replacement (HMR)

The project uses `@tailwindcss/postcss` instead of `@tailwindcss/vite` for better HMR compatibility with Nuxt's SSR. If you experience issues with Tailwind classes not updating:

1. Restart the dev server: `npm run dev`
2. Clear Nuxt cache: `rm -rf .nuxt`
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

### File Watching

Vite is configured with polling for better file change detection:

```typescript
vite: {
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
}
```

## Deployment

This project can be deployed to any platform that supports Nuxt applications:

- **Vercel**: Zero-config deployment
- **Netlify**: Static or SSR deployment
- **Cloudflare Pages**: Edge deployment
- **Self-hosted**: Node.js server or static hosting

For static deployment:

```bash
npm run generate
```

Then deploy the `.output/public` directory.

## Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxt.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Nuxt Studio](https://nuxt.studio/)

## License

This project is open source and available under the MIT License.

## Credits

Crafted by an Artisan [Lauro Guedes](https://lauroguedes.dev)

If you find this project useful, consider giving it a ⭐ on GitHub!
