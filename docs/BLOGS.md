# 360° Care Blog System Documentation

## Overview

The 360° Care blog system is a modern, TypeScript-based content management solution built on Next.js 14 with the App Router. It provides a fully-featured blogging platform with SEO optimization, social sharing, and static site generation for optimal performance.

## Architecture

### Content Storage Model

Unlike traditional markdown-based blog systems, this implementation uses **TypeScript files as the content source**. Each blog post is a TypeScript module that exports a structured data object containing all post metadata and content.

### Directory Structure

```
src/
├── app/
│   └── blog/
│       ├── page.tsx                 # Blog archive/listing page
│       ├── [slug]/
│       │   └── page.tsx             # Dynamic blog post pages
│       └── notFound.tsx             # 404 page for missing posts
├── components/
│   └── blog/
│       ├── BlogTemplate.tsx        # Main blog post template
│       ├── BlogArchives.tsx        # Blog listing component
│       ├── BlogClientPage.tsx      # Client-side wrapper
│       └── MarkdownRenderer.tsx    # Custom markdown renderer
└── lib/
    └── blogs/
        ├── index.ts                 # Blog index (imports all posts)
        └── articles/
            └── 2025/                # Year-based organization
                ├── elderCareConsulting.ts
                ├── politicalGame.ts
                └── [other blog posts...]
```

## Blog Post Structure

Each blog post is a TypeScript file that exports a blog object with the following structure:

```typescript
interface BlogPost {
  // Core Metadata
  id: string;                    // Unique identifier
  title: string;                 // Post title
  slug: string;                  // URL slug
  excerpt: string;               // Short description (150-160 chars)
  category: string;              // Post category
  
  // Author Information
  author: {
    name: string;
    photo: string;               // Author photo URL
    bio: string;                 // Author biography
  };
  
  // Publishing Details
  publishedAt: string;          // ISO date string
  featured: boolean;            // Featured post flag
  featuredImage: string;        // Hero image URL
  
  // Content
  content: string;              // Markdown content
  tags: string[];               // Post tags
  
  // SEO Metadata
  seo: {
    title: string;              // SEO title
    description: string;        // Meta description
    openGraph: {
      title: string;
      description: string;
      images: Array<{
        url: string;
        width: number;
        height: number;
        alt: string;
      }>;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      images: string[];
    };
  };
}
```

## Key Components

### 1. Blog Index (`src/lib/blogs/index.ts`)
- Imports all blog post modules
- Exports an array of blog posts
- First post in array is treated as featured

### 2. Blog Archive Page (`src/app/blog/page.tsx`)
- Lists all blog posts
- Implements search functionality
- Category filtering
- Featured post highlighting
- Responsive grid layout

### 3. Dynamic Blog Pages (`src/app/blog/[slug]/page.tsx`)
- Static generation using `generateStaticParams()`
- Dynamic metadata generation for SEO
- Handles 404 for non-existent posts
- Server-side rendering for optimal performance

### 4. Blog Template (`src/components/blog/BlogTemplate.tsx`)
- Hero section with featured image
- Author information display
- Social sharing buttons (Twitter/X, Facebook, Instagram, Email)
- Breadcrumb navigation
- Related posts section
- Responsive design

### 5. Markdown Renderer (`src/components/blog/MarkdownRenderer.tsx`)
- Custom markdown parsing
- Supports:
  - Headers (H1-H6)
  - Paragraphs
  - Lists (ordered and unordered)
  - Blockquotes
  - Images
  - Tables
  - Horizontal rules
  - Links
- Styled with Tailwind CSS

## Adding a New Blog Post

### Step 1: Create the Blog Post File

Create a new TypeScript file in `src/lib/blogs/articles/[YEAR]/`:

```typescript
// src/lib/blogs/articles/2025/newPost.ts
import { BlogPost } from '@/lib/types';

export const newPost: BlogPost = {
  id: 'unique-post-id',
  title: 'Your Blog Post Title',
  slug: 'your-blog-post-url',
  excerpt: 'A brief description of your post (150-160 characters)...',
  category: 'Elder Care',
  author: {
    name: 'Author Name',
    photo: '/images/authors/author.jpg',
    bio: 'Author biography...'
  },
  publishedAt: '2025-01-15T12:00:00Z',
  featured: false,
  featuredImage: '/images/blog/featured-image.jpg',
  tags: ['tag1', 'tag2', 'tag3'],
  content: `
# Your Markdown Content Here

Write your blog post using markdown syntax...
  `,
  seo: {
    title: 'SEO Title | 360° Care',
    description: 'SEO meta description...',
    openGraph: {
      title: 'Open Graph Title',
      description: 'Open Graph description...',
      images: [{
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image description'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Twitter Card Title',
      description: 'Twitter description...',
      images: ['https://yourdomain.com/twitter-image.jpg']
    }
  }
};
```

### Step 2: Add to Blog Index

Import and add your post to `src/lib/blogs/index.ts`:

```typescript
import { newPost } from './articles/2025/newPost';

export const blogs = [
  // If featured, add as first item
  newPost,
  // Other posts...
  elderCareConsulting,
  politicalGame,
  // ...
];
```

### Step 3: Add Images

Place any images in the appropriate public directories:
- Author photos: `/public/images/authors/`
- Featured images: `/public/images/blog/`
- Content images: `/public/images/blog/content/`

## Features

### SEO Optimization
- Dynamic metadata generation
- Open Graph tags for social media
- Twitter Card support
- Structured data
- XML sitemap integration
- Canonical URLs

### Social Sharing
- Floating share buttons
- Pre-filled share content
- Support for:
  - Twitter/X
  - Facebook
  - Instagram (via web intent)
  - Email

### Performance
- Static Site Generation (SSG)
- Image optimization
- Lazy loading
- Minimal JavaScript bundle
- Fast page transitions

### User Experience
- Responsive design
- Mobile-friendly
- Accessible markup
- Breadcrumb navigation
- Related posts
- Search functionality
- Category filtering

## Image Management

The blog system uses a centralized image management approach:

```typescript
// src/lib/images.ts
export const images = {
  blog: {
    elderCare: '/images/blog/elder-care.jpg',
    // Other blog images...
  },
  authors: {
    defaultAuthor: '/images/authors/default.jpg',
    // Author photos...
  }
};
```

## Styling

The blog system uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** for specific components
- **Responsive breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Best Practices

### Content Guidelines
1. Keep excerpts between 150-160 characters
2. Use descriptive, SEO-friendly slugs
3. Include relevant tags (3-5 per post)
4. Optimize images before uploading (WebP preferred)
5. Write engaging meta descriptions

### Development Guidelines
1. Test posts locally before deployment
2. Validate markdown syntax
3. Check all links work correctly
4. Ensure images are optimized
5. Test social sharing functionality

### SEO Guidelines
1. Include target keywords in title and content
2. Write unique meta descriptions
3. Use proper heading hierarchy (H1 → H2 → H3)
4. Include alt text for all images
5. Internal linking to related posts

## Maintenance

### Regular Tasks
- Review and update old posts
- Check for broken links
- Update author information
- Monitor page performance
- Review SEO rankings

### Troubleshooting

**Post not appearing:**
- Verify post is imported in `index.ts`
- Check slug matches URL
- Ensure valid TypeScript syntax

**Images not loading:**
- Verify image paths are correct
- Check image exists in public directory
- Ensure proper image format

**SEO issues:**
- Validate metadata structure
- Check Open Graph debugger
- Verify sitemap generation

## Future Enhancements

Potential improvements to consider:
- CMS integration for non-technical editors
- Comment system integration
- Newsletter subscription
- Advanced analytics
- A/B testing for titles/images
- Automated social media posting
- RSS feed generation
- Multi-language support

## Support

For questions or issues with the blog system, please consult:
1. This documentation
2. Next.js App Router documentation
3. The codebase examples in existing blog posts
4. Team lead or senior developer

---

*Last updated: January 2025*
*Documentation for 360° Care Blog System v1.0*