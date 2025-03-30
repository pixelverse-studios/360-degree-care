'use client'
import AnimatedSection from './animated-section'

const Page404Content = () => {
    return (
        <main className="px-6 py-12 bg-white">
            <AnimatedSection
                animation="zoom"
                className="max-w-custom w-full rounded-xl shadow-xl overflow-hidden"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="bg-primary text-white p-8 flex items-center justify-center md:w-2/5">
                        <div className="text-center">
                            <svg
                                className="mx-auto w-40 h-40"
                                viewBox="0 0 200 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 180c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                    fill="#ffffff"
                                    fillOpacity="0.2"
                                />
                                <path
                                    d="M70 90h60M100 60v60"
                                    stroke="#ffffff"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M60 120s5 30 40 30 40-30 40-30"
                                    stroke="#ffffff"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="70"
                                    stroke="#ffffff"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="mt-6 text-3xl font-bold">404</div>
                            <div className="text-lg opacity-80">
                                Page Not Found
                            </div>
                        </div>
                    </div>

                    {/* Right content column */}
                    <div className="p-8 md:p-12 md:w-3/5 bg-white">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Oops! We need a care plan
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Just like in healthcare, sometimes things don't go
                            according to plan. The page you're looking for seems
                            to have been transferred to another unit.
                        </p>

                        <div className="bg-white-bright p-6 rounded-lg mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Care Instructions:
                            </h2>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Check the URL for any typos or errors
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Use the navigation menu to find what you
                                    need
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Contact our support team if you need
                                    assistance
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/"
                                className="px-6 py-3 bg-primary text-white rounded-lg font-medium text-center hover:bg-white-bright hover:text-primary transition-colors"
                            >
                                Return Home
                            </a>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </main>
    )
}

export default Page404Content
