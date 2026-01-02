'use client'

import Image from 'next/image'
import {
    Calendar,
    Clock,
    ArrowLeft,
    Mail,
    Share2,
    Twitter,
    Facebook,
    Instagram
} from 'lucide-react'
import { useState } from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { getImgSrc } from '@/lib/images'
import { BlogPost } from '@/app/blog/[slug]/page'

interface BlogTemplateProps {
    blogPost: BlogPost
}

export default function BlogTemplate({ blogPost }: BlogTemplateProps) {
    const [isShareOpen, setIsShareOpen] = useState(false)
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

    const handleEmailShare = () => {
        const subject = encodeURIComponent(
            `Thought you'd find this interesting: ${blogPost.title}`
        )
        const body = encodeURIComponent(`${shareText}\n\n${shareUrl}`)
        const mailtoUrl = `mailto:?subject=${subject}&body=${body}`
        window.location.href = mailtoUrl
    }

    const handleXShare = () => {
        const encodedUrl = encodeURIComponent(shareUrl)
        const encodedText = encodeURIComponent(shareText)
        const xUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`
        window.open(xUrl, '_blank', 'width=600,height=400')
    }

    const handleFacebookShare = () => {
        const currentUrl = window.location.href
        const encodedUrl = encodeURIComponent(currentUrl)
        const encodedQuote = encodeURIComponent(shareText)
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedQuote}`
        window.open(facebookUrl, '_blank', 'width=600,height=400')
    }

    const handleInstagramShare = () => {
        // Instagram doesn't have a direct URL sharing API, so we'll copy the URL to clipboard
        // and show a message to the user
        if (navigator.clipboard) {
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
            alert(
                'Link copied to clipboard! You can now paste it in your Instagram story or post.'
            )
        } else {
            // Fallback for browsers that don't support clipboard API
            alert(`Copy this link to share on Instagram: ${shareUrl}`)
        }
    }

    return (
        <main>
            {/* Hero Section */}
            {/* UPDATED: Added rounded-xl and overflow-hidden to the main container */}
            <div className="relative rounded-xl overflow-hidden">
                {getImgSrc(blogPost.featuredImage) ? (
                    <Image
                        src={getImgSrc(blogPost.featuredImage) as string}
                        alt={blogPost.title}
                        width={1600}
                        height={900}
                        className="w-full h-96 lg:h-[500px] object-cover"
                        sizes="100vw"
                        priority
                    />
                ) : null}

                <div className="absolute inset-0 p-6 text-white flex items-center">
                    <div className="w-full max-w-custom mx-auto">
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
            <div className="max-w-custom mx-auto px-6 py-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 pb-8 mb-12 border-b border-gray-200">
                    {blogPost.author && (
                        <div className="flex items-center gap-4">
                            {blogPost.author.avatar?.endsWith('.svg') ? (
                                <img
                                    src={blogPost.author.avatar}
                                    alt={blogPost.author.name}
                                    className="h-14 w-14 rounded-full ring-2 ring-primary object-contain bg-white p-1"
                                />
                            ) : (
                                <Image
                                    src={
                                        blogPost.author.avatar ||
                                        '/api/placeholder/64/64'
                                    }
                                    alt={blogPost.author.name}
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 rounded-full ring-2 ring-primary object-cover"
                                    sizes="56px"
                                />
                            )}
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

                {/* Floating Share Speed Dial */}
                <div className="fixed bottom-8 right-8 z-50">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsShareOpen(true)}
                        onMouseLeave={() => setIsShareOpen(false)}
                    >
                        {/* Extended hover area to bridge the gap */}
                        <div className="absolute bottom-0 right-0 w-14 h-32 bg-transparent" />

                        {/* Share Options */}
                        <div
                            className={`absolute bottom-14 right-0 transition-all duration-500 ease-out ${
                                isShareOpen
                                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                                    : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                            }`}
                        >
                            <div className="flex flex-col gap-3 pb-2">
                                <button
                                    onClick={handleInstagramShare}
                                    className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 ease-out shadow-lg whitespace-nowrap hover:shadow-xl hover:scale-105 transform"
                                >
                                    <Instagram className="h-5 w-5" />
                                    Share on Instagram
                                </button>
                                <button
                                    onClick={handleFacebookShare}
                                    className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ease-out shadow-lg whitespace-nowrap hover:shadow-xl hover:scale-105 transform"
                                >
                                    <Facebook className="h-5 w-5" />
                                    Share on Facebook
                                </button>
                                <button
                                    onClick={handleXShare}
                                    className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 ease-out shadow-lg whitespace-nowrap hover:shadow-xl hover:scale-105 transform"
                                >
                                    <Twitter className="h-5 w-5" />
                                    Share on X
                                </button>
                                <button
                                    onClick={handleEmailShare}
                                    className="flex items-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 ease-out shadow-lg border border-gray-200 whitespace-nowrap hover:shadow-xl hover:scale-105 transform"
                                >
                                    <Mail className="h-5 w-5" />
                                    Share via Email
                                </button>
                            </div>
                        </div>

                        {/* Main Share Button */}
                        <button className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-green transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl transform">
                            <Share2 className="h-6 w-6" />
                        </button>
                    </div>
                </div>

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
