import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import allBlogs from '@/lib/blogs' // Default import
import BlogPageClient from '@/components/blog/BlogClientPage'
// Types
interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    category: string
    author: {
        name: string
        title: string
        avatar: string
    }
    publishDate: string
    readTime: string
    featuredImage: string
    tags: string[]
    seo: {
        metaDescription: string
        keywords: string[]
    }
    contentType: string
    content: string
}

interface BlogPageProps {
    params: {
        slug: string
    }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return allBlogs.map((post: BlogPost) => ({
        slug: post.slug
    }))
}

// Generate metadata for SEO
export async function generateMetadata({
    params
}: BlogPageProps): Promise<Metadata> {
    const post = allBlogs.find((blog: BlogPost) => blog.slug === params.slug)

    if (!post) {
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.'
        }
    }

    return {
        title: post.title,
        description: post.seo.metaDescription || post.excerpt,
        keywords: post.seo.keywords?.join(', ') || post.tags.join(', '),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.featuredImage],
            type: 'article',
            publishedTime: post.publishDate,
            authors: [post.author.name],
            tags: post.tags
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.featuredImage]
        },
        alternates: {
            canonical: `/blog/${post.slug}`
        }
    }
}

export default function BlogPage({ params }: BlogPageProps) {
    const post = allBlogs.find((blog: BlogPost) => blog.slug === params.slug)

    if (!post) {
        notFound()
    }

    return <BlogPageClient blogPost={post} />
}
