'use client'

import { useState, useMemo } from 'react'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
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

interface BlogArchivesProps {
    posts: BlogPost[]
}

// Extract unique categories from posts
// const getCategories = (posts: BlogPost[]) => {
//     const categories = new Set(['All'])
//     posts.forEach(post => {
//         if (post.category) {
//             categories.add(post.category)
//         }
//     })
//     return Array.from(categories)
// }

export default function BlogArchives({ posts }: BlogArchivesProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    // const [showFilters, setShowFilters] = useState(false)

    // Get categories dynamically from posts
    // const categories = getCategories(posts)

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch =
                !searchTerm ||
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags.some(tag =>
                    tag.toLowerCase().includes(searchTerm.toLowerCase())
                )

            const matchesCategory =
                selectedCategory === 'All' || post.category === selectedCategory

            return matchesSearch && matchesCategory
        })
    }, [posts, searchTerm, selectedCategory])

    const featuredPost = posts[0]

    const regularPosts = filteredPosts.filter(
        post => post.id !== featuredPost?.id
    )

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('All')
    }

    const getExcerptPreview = (excerpt: string, maxLength: number = 150) => {
        if (excerpt.length <= maxLength) return excerpt
        return excerpt.slice(0, maxLength) + '...'
    }

    return (
        <main>
            {/* Header Section */}
            <div className="gradient-left text-white max-w-custom">
                <div className="px-6 py-10">
                    <div className="text-center">
                        <h1 className="text-white">Blog Archives</h1>
                        <p className="text-xl text-white max-w-3xl mx-auto">
                            The latest news, tips, and insights on home
                            healthcare. Stay informed with expert advice and
                            practical guidance for better health and wellness.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-6 py-10">
                {/* Search and Filter Section */}
                {/* <div className="mb-12">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                            />
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <Filter className="h-5 w-5" />
                            Filters
                        </button>
                    </div> */}

                {/* Category Filters */}
                {/* <div
                        className={`${showFilters ? 'block' : 'hidden'} lg:block`}
                    >
                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="text-gray-600 font-medium">
                                Categories:
                            </span>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={`px-4 py-2 rounded-full transition-colors ${
                                        selectedCategory === category
                                            ? 'bg-orange-500 text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-300'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                            {(searchTerm || selectedCategory !== 'All') && (
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-1 px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                    Clear
                                </button>
                            )}
                        </div>
                    </div> */}
                {/* </div> */}

                {/* Featured Post */}
                {featuredPost && selectedCategory === 'All' && !searchTerm && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Featured Article
                        </h2>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-fit">
                            <div className="lg:flex">
                                <div className="lg:w-1/2">
                                    <img
                                        src={getImgSrc(
                                            featuredPost.featuredImage
                                        )}
                                        alt={featuredPost.title}
                                        className="w-full h-64 lg:h-full object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/2 p-8 lg:p-12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green text-white text-sm font-medium rounded-full">
                                            <Tag className="h-3 w-3" />
                                            {featuredPost.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                        {getExcerptPreview(
                                            featuredPost.excerpt,
                                            200
                                        )}
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1 text-sm">
                                                <Calendar className="h-4 w-4" />
                                                {formatDate(
                                                    featuredPost.publishDate
                                                )}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm">
                                                <Clock className="h-4 w-4" />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/blog/${featuredPost.slug}`}
                                            className="flex text-sm items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                                        >
                                            Read More
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {regularPosts.length > 0 ? (
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-gray-600">
                            {filteredPosts.length === 0
                                ? 'No articles found'
                                : `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'article' : 'articles'}`}
                            {searchTerm && ` for "${searchTerm}"`}
                            {selectedCategory !== 'All' &&
                                ` in ${selectedCategory}`}
                        </p>
                    </div>
                ) : null}

                {regularPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map(post => (
                            <article
                                key={post.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <img
                                        src={getImgSrc(post.featuredImage)}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                                            <Tag className="h-3 w-3" />
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {getExcerptPreview(post.excerpt, 120)}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {formatDate(post.publishDate)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                                    >
                                        Read Article
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No other articles
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {searchTerm || selectedCategory !== 'All'
                                ? "Try adjusting your search terms or filters to find what you're looking for."
                                : 'No other blog posts are available at the moment.'}
                        </p>
                        {(searchTerm || selectedCategory !== 'All') && (
                            <button
                                onClick={clearFilters}
                                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                )}

                {/* Load More Button (for pagination) */}
                {regularPosts.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-semibold">
                            Load More Articles
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}
