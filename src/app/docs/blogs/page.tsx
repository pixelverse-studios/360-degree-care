import { Metadata } from 'next'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock'
import { DocSection, DocCard } from '@/components/docs/DocSection'
import { DocSearch } from '@/components/docs/DocSearch'
import { BookOpen, Zap, Shield, Settings } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Blog System Documentation | 360° Care',
    description:
        'Complete documentation for the 360° Care blog system. Learn how to create, manage, and publish blog posts.'
}

// Generate TOC items from the content
const tocItems = [
    { id: 'overview', title: 'Overview', level: 1 },
    { id: 'architecture', title: 'Architecture', level: 1 },
    { id: 'content-storage', title: 'Content Storage Model', level: 2 },
    { id: 'directory-structure', title: 'Directory Structure', level: 2 },
    { id: 'blog-post-structure', title: 'Blog Post Structure', level: 1 },
    { id: 'key-components', title: 'Key Components', level: 1 },
    { id: 'adding-a-new-blog-post', title: 'Adding a New Blog Post', level: 1 },
    { id: 'features', title: 'Features', level: 1 },
    { id: 'best-practices', title: 'Best Practices', level: 1 },
    { id: 'troubleshooting', title: 'Troubleshooting', level: 1 }
]

export default function BlogDocsPage() {
    return (
        <main className="">
            <div className="flex">
                {/* Main Content */}
                <div className="flex-1 max-w-5xl mx-auto px-6 lg:px-8 py-12">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <DocSearch />
                    </div>

                    <div className="space-y-8">
                        {/* Header */}
                        <header className="pb-8 border-b border-gray-200">
                            <h1
                                id="overview"
                                className="text-4xl font-bold text-gray-900 mb-4"
                            >
                                360° Care Blog System Documentation
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Complete guide for creating and managing blog
                                content on the 360° Care website. This
                                documentation covers everything from basic setup
                                to advanced features.
                            </p>
                        </header>

                        {/* Quick Start Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            <DocCard
                                title="Quick Start"
                                description="Get up and running in 5 minutes"
                                icon={<Zap className="w-5 h-5" />}
                            >
                                <a
                                    href="#adding-a-new-blog-post"
                                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                    Jump to tutorial →
                                </a>
                            </DocCard>
                            <DocCard
                                title="Examples"
                                description="See live blog posts in action"
                                icon={<BookOpen className="w-5 h-5" />}
                            >
                                <a
                                    href="/blog"
                                    target="_blank"
                                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                                >
                                    View blog →
                                </a>
                            </DocCard>
                        </div>

                        {/* Overview Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Overview
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                The 360° Care blog system is a modern,
                                TypeScript-based content management solution
                                built on Next.js 14 with the App Router. It
                                provides a fully-featured blogging platform with
                                SEO optimization, social sharing, and static
                                site generation for optimal performance.
                            </p>
                        </section>

                        {/* Architecture Section */}
                        <section>
                            <h2
                                id="architecture"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Architecture
                            </h2>

                            <DocSection
                                title="Content Storage Model"
                                defaultOpen={true}
                            >
                                <div id="content-storage">
                                    <p className="text-gray-600 mb-4">
                                        Unlike traditional markdown-based blog
                                        systems, this implementation uses{' '}
                                        <strong className="text-gray-900">
                                            TypeScript files as the content
                                            source
                                        </strong>
                                        . Each blog post is a TypeScript module
                                        that exports a structured data object
                                        containing all post metadata and
                                        content.
                                    </p>
                                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                                        <p className="text-sm text-blue-800">
                                            <strong>Pro tip:</strong> Using
                                            TypeScript for content provides type
                                            safety and better IDE support when
                                            creating posts.
                                        </p>
                                    </div>
                                </div>
                            </DocSection>

                            <DocSection
                                title="Directory Structure"
                                defaultOpen={true}
                            >
                                <div id="directory-structure">
                                    <p className="text-gray-600 mb-4">
                                        The blog system follows a clear,
                                        organized structure:
                                    </p>
                                    <CodeBlock
                                        language="bash"
                                        filename="Project Structure"
                                        code={`src/
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
                └── [other blog posts...]`}
                                    />
                                </div>
                            </DocSection>
                        </section>

                        {/* Blog Post Structure */}
                        <section>
                            <h2
                                id="blog-post-structure"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Blog Post Structure
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Each blog post is a TypeScript file that exports
                                a blog object with the following interface:
                            </p>

                            <CodeBlock
                                language="typescript"
                                filename="BlogPost Interface"
                                code={`interface BlogPost {
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
}`}
                            />
                        </section>

                        {/* Key Components */}
                        <section>
                            <h2
                                id="key-components"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Key Components
                            </h2>

                            <div className="space-y-4">
                                <DocSection
                                    title="1. Blog Index"
                                    defaultOpen={false}
                                >
                                    <div className="text-gray-600">
                                        <p className="mb-3">
                                            Located at{' '}
                                            <InlineCode>
                                                src/lib/blogs/index.ts
                                            </InlineCode>
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>
                                                Imports all blog post modules
                                            </li>
                                            <li>
                                                Exports an array of blog posts
                                            </li>
                                            <li>
                                                First post in array is treated
                                                as featured
                                            </li>
                                        </ul>
                                    </div>
                                </DocSection>

                                <DocSection
                                    title="2. Blog Archive Page"
                                    defaultOpen={false}
                                >
                                    <div className="text-gray-600">
                                        <p className="mb-3">
                                            Located at{' '}
                                            <InlineCode>
                                                src/app/blog/page.tsx
                                            </InlineCode>
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>Lists all blog posts</li>
                                            <li>
                                                Implements search functionality
                                            </li>
                                            <li>Category filtering</li>
                                            <li>Featured post highlighting</li>
                                            <li>Responsive grid layout</li>
                                        </ul>
                                    </div>
                                </DocSection>

                                <DocSection
                                    title="3. Dynamic Blog Pages"
                                    defaultOpen={false}
                                >
                                    <div className="text-gray-600">
                                        <p className="mb-3">
                                            Located at{' '}
                                            <InlineCode>
                                                src/app/blog/[slug]/page.tsx
                                            </InlineCode>
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-sm">
                                            <li>
                                                Static generation using{' '}
                                                <InlineCode>
                                                    generateStaticParams()
                                                </InlineCode>
                                            </li>
                                            <li>
                                                Dynamic metadata generation for
                                                SEO
                                            </li>
                                            <li>
                                                Handles 404 for non-existent
                                                posts
                                            </li>
                                            <li>
                                                Server-side rendering for
                                                optimal performance
                                            </li>
                                        </ul>
                                    </div>
                                </DocSection>
                            </div>
                        </section>

                        {/* Adding a New Blog Post */}
                        <section>
                            <h2
                                id="adding-a-new-blog-post"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Adding a New Blog Post
                            </h2>

                            <div className="space-y-6">
                                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                                    <p className="text-sm text-green-800">
                                        <strong>Quick tip:</strong> Copy an
                                        existing blog post file as a template to
                                        get started quickly!
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Step 1: Create the Blog Post File
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        Create a new TypeScript file in{' '}
                                        <InlineCode>
                                            src/lib/blogs/articles/[YEAR]/
                                        </InlineCode>
                                        :
                                    </p>
                                    <CodeBlock
                                        language="typescript"
                                        filename="src/lib/blogs/articles/2025/newPost.ts"
                                        code={`import { BlogPost } from '@/lib/types';

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
  content: \`
# Your Markdown Content Here

Write your blog post using markdown syntax...
  \`,
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
};`}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Step 2: Add to Blog Index
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        Import and add your post to{' '}
                                        <InlineCode>
                                            src/lib/blogs/index.ts
                                        </InlineCode>
                                        :
                                    </p>
                                    <CodeBlock
                                        language="typescript"
                                        filename="src/lib/blogs/index.ts"
                                        code={`import { newPost } from './articles/2025/newPost';

export const blogs = [
  // If featured, add as first item
  newPost,
  // Other posts...
  elderCareConsulting,
  politicalGame,
  // ...
];`}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Step 3: Add Images
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        Place any images in the appropriate
                                        public directories:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        <li>
                                            Author photos:{' '}
                                            <InlineCode>
                                                /public/images/authors/
                                            </InlineCode>
                                        </li>
                                        <li>
                                            Featured images:{' '}
                                            <InlineCode>
                                                /public/images/blog/
                                            </InlineCode>
                                        </li>
                                        <li>
                                            Content images:{' '}
                                            <InlineCode>
                                                /public/images/blog/content/
                                            </InlineCode>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section>
                            <h2
                                id="features"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Features
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <DocCard
                                    title="SEO Optimization"
                                    icon={<Shield className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Dynamic metadata generation</li>
                                        <li>• Open Graph tags</li>
                                        <li>• Twitter Card support</li>
                                        <li>• XML sitemap integration</li>
                                        <li>• Canonical URLs</li>
                                    </ul>
                                </DocCard>

                                <DocCard
                                    title="Performance"
                                    icon={<Zap className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Static Site Generation</li>
                                        <li>• Image optimization</li>
                                        <li>• Lazy loading</li>
                                        <li>• Minimal JavaScript bundle</li>
                                        <li>• Fast page transitions</li>
                                    </ul>
                                </DocCard>

                                <DocCard
                                    title="Social Sharing"
                                    icon={<BookOpen className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Floating share buttons</li>
                                        <li>• Pre-filled share content</li>
                                        <li>• Twitter/X support</li>
                                        <li>• Facebook integration</li>
                                        <li>• Email sharing</li>
                                    </ul>
                                </DocCard>

                                <DocCard
                                    title="User Experience"
                                    icon={<Settings className="w-5 h-5" />}
                                >
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Responsive design</li>
                                        <li>• Mobile-friendly</li>
                                        <li>• Accessible markup</li>
                                        <li>• Related posts</li>
                                        <li>• Search functionality</li>
                                    </ul>
                                </DocCard>
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section>
                            <h2
                                id="best-practices"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Best Practices
                            </h2>

                            <div className="space-y-4">
                                <DocSection
                                    title="Content Guidelines"
                                    defaultOpen={true}
                                >
                                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                        <li>
                                            Keep excerpts between 150-160
                                            characters
                                        </li>
                                        <li>
                                            Use descriptive, SEO-friendly slugs
                                        </li>
                                        <li>
                                            Include relevant tags (3-5 per post)
                                        </li>
                                        <li>
                                            Optimize images before uploading
                                            (WebP preferred)
                                        </li>
                                        <li>
                                            Write engaging meta descriptions
                                        </li>
                                    </ol>
                                </DocSection>

                                <DocSection
                                    title="Development Guidelines"
                                    defaultOpen={true}
                                >
                                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                        <li>
                                            Test posts locally before deployment
                                        </li>
                                        <li>Validate markdown syntax</li>
                                        <li>Check all links work correctly</li>
                                        <li>Ensure images are optimized</li>
                                        <li>
                                            Test social sharing functionality
                                        </li>
                                    </ol>
                                </DocSection>

                                <DocSection
                                    title="SEO Guidelines"
                                    defaultOpen={true}
                                >
                                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                        <li>
                                            Include target keywords in title
                                        </li>
                                        <li>Write unique meta descriptions</li>
                                        <li>Use proper heading hierarchy</li>
                                        <li>Include alt text for all images</li>
                                        <li>
                                            Internal linking to related posts
                                        </li>
                                    </ol>
                                </DocSection>
                            </div>
                        </section>

                        {/* Troubleshooting */}
                        <section>
                            <h2
                                id="troubleshooting"
                                className="text-2xl font-bold text-gray-900 mb-4"
                            >
                                Troubleshooting
                            </h2>

                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Post not appearing?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Verify post is imported in{' '}
                                            <InlineCode>index.ts</InlineCode>
                                        </li>
                                        <li>• Check slug matches URL</li>
                                        <li>
                                            • Ensure valid TypeScript syntax
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Images not loading?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>
                                            • Verify image paths are correct
                                        </li>
                                        <li>
                                            • Check image exists in public
                                            directory
                                        </li>
                                        <li>• Ensure proper image format</li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        SEO issues?
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Validate metadata structure</li>
                                        <li>• Check Open Graph debugger</li>
                                        <li>• Verify sitemap generation</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="pt-8 mt-12 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Last updated: January 2025 • Documentation for
                                360° Care Blog System v1.0
                            </p>
                        </footer>
                    </div>
                </div>

                {/* Table of Contents - Desktop Only */}
                <aside className="hidden xl:block w-80 p-6">
                    <TableOfContents items={tocItems} />
                </aside>
            </div>
        </main>
    )
}
