import { Metadata } from 'next'
import allBlogs from '@/lib/blogs'
import BlogArchives from '@/components/blog/BlogArchives'

export const metadata: Metadata = {
    title: 'Blog Archives - 360° Care',
    description:
        'The latest news, tips, and insights on home healthcare. Stay informed with expert advice and practical guidance for better health and wellness.',
    keywords:
        'home healthcare, senior care, aging in place, family care, wellness tips',
    openGraph: {
        title: 'Blog Archives - 360° Care',
        description: 'The latest news, tips, and insights on home healthcare.',
        type: 'website'
    }
}

export default function BlogIndex() {
    return <BlogArchives posts={allBlogs} />
}
