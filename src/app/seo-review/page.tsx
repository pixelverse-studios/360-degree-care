import ContentReviewDashboard from '@/components/seo/ContentReviewDashboard'
import { bergenCountyPersonalCareContent } from '@/lib/content/bergen-county-personal-care'

export default function SEOReviewPage() {
    // Combine all content from the Bergen County Personal Care page
    const contentToAnalyze = [
        bergenCountyPersonalCareContent.hero.title,
        bergenCountyPersonalCareContent.hero.description,
        ...bergenCountyPersonalCareContent.intro.content,
        ...bergenCountyPersonalCareContent.regions.flatMap(r => r.content),
        bergenCountyPersonalCareContent.serviceAreas.subtitle,
        ...bergenCountyPersonalCareContent.serviceAreas.regions.map(
            r => `${r.name}: ${r.cities.join(', ')}. ${r.description}`
        ),
        bergenCountyPersonalCareContent.services.header,
        ...bergenCountyPersonalCareContent.services.items.map(
            item => `${item.title}: ${item.description}`
        ),
        bergenCountyPersonalCareContent.benefits.header,
        ...bergenCountyPersonalCareContent.benefits.items.map(
            item => `${item.title}: ${item.description}`
        ),
        bergenCountyPersonalCareContent.cta.title,
        ...bergenCountyPersonalCareContent.cta.description
    ].join(' ')

    const targetKeywords = [
        'personal care Bergen County',
        'personal care near me',
        'in home personal care',
        'Bergen County',
        'senior care',
        'Fort Lee',
        'Hackensack',
        'Westwood',
        'Ridgewood'
    ]

    return (
        <main className="bg-gray-100">
            <div className="container mx-auto max-w-7xl py-8 px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    SEO Content Review Tool
                </h1>

                <ContentReviewDashboard
                    content={contentToAnalyze}
                    targetKeywords={targetKeywords}
                    targetWordCount={2000}
                />

                <div className="mt-8 bg-white rounded-lg border p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Content Review Report Summary
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-gray-700 mb-2">
                                ✅ Phase 4.1: Content Review - COMPLETED
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>
                                    Word count verification tool implemented
                                </li>
                                <li>
                                    Keyword density checker with target ranges
                                </li>
                                <li>
                                    Readability score calculator
                                    (Flesch-Kincaid)
                                </li>
                                <li>Local reference accuracy tracking</li>
                                <li>
                                    Visual dashboard with color-coded metrics
                                </li>
                            </ul>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-medium text-gray-700 mb-2">
                                Analysis Features:
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Real-time content analysis</li>
                                <li>Overall content quality score</li>
                                <li>Individual metric breakdowns</li>
                                <li>Actionable recommendations</li>
                                <li>Local SEO reference tracking</li>
                            </ul>
                        </div>

                        <div className="border-t pt-4">
                            <h3 className="font-medium text-gray-700 mb-2">
                                Page Being Analyzed:
                            </h3>
                            <p className="text-gray-600">
                                Bergen County Personal Care Services page at{' '}
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                    /personal-care-bergen-county
                                </code>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
