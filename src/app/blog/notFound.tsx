export default function BlogNotFound() {
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
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                    Back to Blog
                </a>
            </div>
        </div>
    )
}
