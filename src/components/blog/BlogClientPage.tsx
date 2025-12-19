'use client'

import BlogTemplate from './BlogTemplate'
import { generateArticleSchema } from '@/lib/seo/local-business-schema'

// Define the BlogPost type to match the data structure
import { BlogPost } from '@/app/blog/[slug]/page'

interface BlogPageClientProps {
    blogPost: BlogPost
}

export default function BlogPageClient({ blogPost }: BlogPageClientProps) {
    const articleSchema = generateArticleSchema({
        title: blogPost.title,
        description: blogPost.seo.metaDescription || blogPost.excerpt,
        slug: blogPost.slug,
        publishDate: blogPost.publishDate,
        author: {
            name: blogPost.author.name,
            title: blogPost.author.title
        },
        featuredImage: blogPost.featuredImage,
        category: blogPost.category,
        tags: blogPost.tags
    })

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema)
                }}
            />
            <BlogTemplate blogPost={blogPost} />
        </>
    )
}
