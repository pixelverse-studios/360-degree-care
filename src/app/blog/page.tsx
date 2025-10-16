import { Metadata } from 'next'
import allBlogs from '@/lib/blogs'
import BlogArchives from '@/components/blog/BlogArchives'

export const metadata: Metadata = {
    title: 'NJ Home Care Insights & News Hub | 360 Degree Care',
    description:
        'Explore the 360 Degree Care insights hub for New Jersey home care trends, caregiver tips, and stories that help families navigate aging with confidence.',
    keywords:
        'home healthcare, senior care, aging in place, family care, wellness tips',
    openGraph: {
        title: 'NJ Home Care Insights & News Hub | 360 Degree Care',
        description:
            'Explore the 360 Degree Care insights hub for New Jersey home care trends, caregiver tips, and stories that help families navigate aging with confidence.',
        type: 'website'
    }
}

export default function BlogIndex() {
    return <BlogArchives posts={allBlogs} />
}
