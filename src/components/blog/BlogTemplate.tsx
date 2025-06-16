'use client'

import {
    Calendar,
    Clock,
    ArrowLeft,
    Share2,
    Bookmark,
    Facebook,
    Twitter,
    Linkedin,
    Phone,
    Mail
} from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import { getImgSrc } from '@/lib/images'

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
    seo?: {
        metaDescription: string
        keywords: string[]
    }
    contentType: string
    content: string
}

interface BlogTemplateProps {
    blogPost: BlogPost
}

export default function BlogTemplate({ blogPost }: BlogTemplateProps) {
    if (!blogPost) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Blog Post Not Found
                    </h1>
                    <p className="text-gray-600 mb-6">
                        The requested blog post could not be found.
                    </p>
                    <a
                        href="/blog"
                        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary transition-colors"
                    >
                        Back to Blog
                    </a>
                </div>
            </div>
        )
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
    const shareText = `Check out this article: ${blogPost.title}`

    const handleShare = (platform: string) => {
        const encodedUrl = encodeURIComponent(shareUrl)
        const encodedText = encodeURIComponent(shareText)

        const shareUrls: Record<string, string> = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        }

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400')
        }
    }

    return (
        <main>
            {/* Hero Section */}
            {/* UPDATED: Added rounded-xl and overflow-hidden to the main container */}
            <div className="relative rounded-xl overflow-hidden">
                <img
                    src={getImgSrc(blogPost.featuredImage)}
                    alt={blogPost.title}
                    className="w-full h-96 lg:h-[500px] object-cover"
                />

                <div className="absolute inset-0 p-6 text-white flex items-center">
                    <div className="w-full">
                        {/* The "glass" container is now perfectly clipped inside the parent */}
                        <div className="p-6 flex flex-col gap-4 items-start bg-gray-800/50 rounded-xl">
                            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-full shadow-lg">
                                {blogPost.category}
                            </span>
                            <span className="text-3xl text-primary font-bold leading-tight drop-shadow-lg text-outline-shadow-black">
                                {blogPost.title}
                            </span>
                            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed drop-shadow-md">
                                {blogPost.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 pb-8 mb-12 border-b border-gray-200">
                    {blogPost.author && (
                        <div className="flex items-center gap-4">
                            <img
                                src={
                                    blogPost.author.avatar ||
                                    '/api/placeholder/64/64'
                                }
                                alt={blogPost.author.name}
                                className="w-14 h-14 rounded-full ring-2 ring-primary"
                            />
                            <div>
                                <p className="font-semibold text-gray-900 text-lg">
                                    {blogPost.author.name}
                                </p>
                                <p className="text-gray-600">
                                    {blogPost.author.title}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center gap-6 text-gray-600">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            {formatDate(blogPost.publishDate)}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            {blogPost.readTime}
                        </span>
                    </div>

                    {/* <div className="flex items-center gap-4 ml-auto">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <Share2 className="h-5 w-5" />
                            Share
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <Bookmark className="h-5 w-5" />
                            Save
                        </button>
                    </div> */}
                </div>

                {/* Markdown Content - This is where the .md file content gets rendered */}
                <MarkdownRenderer content={blogPost.content} />

                {/* Call to Action Section */}
                {/* <div className="my-16 bg-gradient-to-r from-orange-500 to-primary text-white rounded-2xl p-8 lg:p-12 text-center">
                    <h3 className="text-3xl font-bold mb-4">
                        Ready to Get Started?
                    </h3>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how we can help you or your
                        loved one maintain independence at home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                            <Phone className="h-5 w-5" />
                            Call (555) 123-4567
                        </button>
                        <button className="flex items-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-colors shadow-lg">
                            <Mail className="h-5 w-5" />
                            Free Consultation
                        </button>
                    </div>
                </div> */}

                {/* Tags */}
                {blogPost.tags && blogPost.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                            Tags
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {blogPost.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-green cursor-pointer transition-colors"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share Section */}
                {/* <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-6 text-lg">
                        Share this article
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => handleShare('facebook')}
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                        >
                            <Facebook className="h-5 w-5" />
                            Facebook
                        </button>
                        <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors shadow-md"
                        >
                            <Twitter className="h-5 w-5" />
                            Twitter
                        </button>
                        <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                        >
                            <Linkedin className="h-5 w-5" />
                            LinkedIn
                        </button>
                    </div>
                </div> */}

                {/* Navigation */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <a
                        href="/blog"
                        className="flex items-center gap-2 text-primary hover:text-green font-semibold text-lg transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back to Blog
                    </a>
                </div>

                {/* Related Articles Suggestion */}
                <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                        You might also be interested in:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-primary hover:text-green cursor-pointer">
                            <span className="text-2xl">📋</span>
                            <span>Tips for Choosing a Home Care Provider</span>
                        </div>
                        <div className="flex items-center gap-3 text-primary hover:text-green cursor-pointer">
                            <span className="text-2xl">👥</span>
                            <span>How to Care for Aging Parents</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
