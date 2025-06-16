'use client'

import BlogTemplate from './BlogTemplate'

// Define the BlogPost type to match the data structure
import { BlogPost } from '@/app/blog/[slug]/page'

interface BlogPageClientProps {
    blogPost: BlogPost
}

export default function BlogPageClient({ blogPost }: BlogPageClientProps) {
    return <BlogTemplate blogPost={blogPost} />
}
