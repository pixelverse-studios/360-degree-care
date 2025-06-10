'use client'

import BlogTemplate from './BlogTemplate'

// Define the BlogPost type to match the data structure
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
    seo?: {
        metaDescription: string
        keywords: string[]
    }
    contentType: string
    content: string
}

interface BlogPageClientProps {
    blogPost: BlogPost
}

export default function BlogPageClient({ blogPost }: BlogPageClientProps) {
    return <BlogTemplate blogPost={blogPost} />
}
