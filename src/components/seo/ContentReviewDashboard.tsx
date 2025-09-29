'use client'

import { useState, useEffect } from 'react'
import {
    FaCheckCircle,
    FaExclamationTriangle,
    FaTimesCircle,
    FaBook,
    FaSearch,
    FaMapMarkerAlt,
    FaFileAlt
} from 'react-icons/fa'
import MetricCard from './MetricCard'
import { ContentAnalyzer, AnalysisResult } from '@/lib/seo/ContentAnalyzer'

interface ContentReviewDashboardProps {
    content: string
    targetKeywords?: string[]
    targetWordCount?: number
}

export default function ContentReviewDashboard({
    content,
    targetKeywords = [
        'personal care Bergen County',
        'personal care near me',
        'in home personal care NJ',
        'Bergen County caregivers'
    ],
    targetWordCount = 2000
}: ContentReviewDashboardProps) {
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
    const [overallScore, setOverallScore] = useState<number>(0)

    useEffect(() => {
        // Perform analysis when content changes
        const result = ContentAnalyzer.analyzeContent(content, targetKeywords)
        setAnalysis(result)

        // Calculate overall score
        let score = 0
        let factors = 0

        // Word count score (25 points)
        if (result.wordCount >= targetWordCount) {
            score += 25
        } else {
            score += (result.wordCount / targetWordCount) * 25
        }
        factors += 25

        // Readability score (25 points)
        const gradeLevel = result.readabilityScore.fleschKincaid
        if (gradeLevel >= 6 && gradeLevel <= 10) {
            score += 25
        } else if (gradeLevel >= 5 && gradeLevel <= 12) {
            score += 15
        } else {
            score += 5
        }
        factors += 25

        // Keyword density score (25 points)
        let keywordScore = 0
        result.keywordDensity.forEach(density => {
            if (density >= 0.5 && density <= 2.0) {
                keywordScore += 25 / targetKeywords.length
            } else if (density >= 0.3 && density <= 3.0) {
                keywordScore += 15 / targetKeywords.length
            } else {
                keywordScore += 5 / targetKeywords.length
            }
        })
        score += keywordScore
        factors += 25

        // Local references score (25 points)
        const localRefCount = result.localReferences.count
        if (localRefCount >= 20) {
            score += 25
        } else {
            score += (localRefCount / 20) * 25
        }
        factors += 25

        setOverallScore(Math.round((score / factors) * 100))
    }, [content, targetKeywords, targetWordCount])

    if (!analysis) {
        return <div>Analyzing content...</div>
    }

    // Determine status for each metric
    const wordCountStatus =
        analysis.wordCount >= targetWordCount
            ? 'success'
            : analysis.wordCount >= targetWordCount * 0.8
              ? 'warning'
              : 'error'

    const readabilityStatus =
        analysis.readabilityScore.fleschKincaid >= 6 &&
        analysis.readabilityScore.fleschKincaid <= 10
            ? 'success'
            : analysis.readabilityScore.fleschKincaid >= 5 &&
                analysis.readabilityScore.fleschKincaid <= 12
              ? 'warning'
              : 'error'

    const localRefStatus =
        analysis.localReferences.count >= 20
            ? 'success'
            : analysis.localReferences.count >= 10
              ? 'warning'
              : 'error'

    const overallStatus =
        overallScore >= 80
            ? 'success'
            : overallScore >= 60
              ? 'warning'
              : 'error'

    return (
        <div className="p-6 bg-gray-50 rounded-xl">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Content Quality Review
                </h2>
                <p className="text-gray-600">
                    SEO and readability analysis for Bergen County Personal Care
                    page
                </p>
            </div>

            {/* Overall Score */}
            <div className="mb-8">
                <div
                    className={`p-6 rounded-lg border-2 ${
                        overallStatus === 'success'
                            ? 'bg-green-50 border-green-500'
                            : overallStatus === 'warning'
                              ? 'bg-yellow-50 border-yellow-500'
                              : 'bg-red-50 border-red-500'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                Overall Content Score
                            </h3>
                            <p className="text-3xl font-bold mt-2">
                                {overallScore}%
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                {overallScore >= 80
                                    ? 'Excellent! Content meets SEO best practices'
                                    : overallScore >= 60
                                      ? 'Good, but some improvements recommended'
                                      : 'Needs improvement to meet SEO standards'}
                            </p>
                        </div>
                        <div className="text-5xl">
                            {overallStatus === 'success' ? (
                                <FaCheckCircle className="text-green-500" />
                            ) : overallStatus === 'warning' ? (
                                <FaExclamationTriangle className="text-yellow-500" />
                            ) : (
                                <FaTimesCircle className="text-red-500" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Word Count */}
                <MetricCard
                    title="Word Count"
                    value={analysis.wordCount.toLocaleString()}
                    subtitle={`/ ${targetWordCount.toLocaleString()} target`}
                    status={wordCountStatus}
                    icon={<FaFileAlt size={24} />}
                    detail={`${analysis.sentenceCount} sentences, ${analysis.avgWordsPerSentence} avg words/sentence`}
                    recommendation={
                        wordCountStatus === 'success'
                            ? 'Word count meets target for comprehensive coverage'
                            : `Add ${
                                  targetWordCount - analysis.wordCount
                              } more words for optimal content depth`
                    }
                />

                {/* Readability Score */}
                <MetricCard
                    title="Readability"
                    value={analysis.readabilityScore.gradeLevel}
                    subtitle={analysis.readabilityScore.difficulty}
                    status={readabilityStatus}
                    icon={<FaBook size={24} />}
                    detail={`Flesch-Kincaid: ${analysis.readabilityScore.fleschKincaid}`}
                    recommendation={
                        readabilityStatus === 'success'
                            ? 'Perfect for healthcare content (Grade 6-10)'
                            : analysis.readabilityScore.fleschKincaid > 10
                              ? 'Simplify sentences and use more common words'
                              : 'Consider adding more variety in sentence structure'
                    }
                />

                {/* Local References */}
                <MetricCard
                    title="Local References"
                    value={analysis.localReferences.count}
                    subtitle="locations found"
                    status={localRefStatus}
                    icon={<FaMapMarkerAlt size={24} />}
                    detail={`${analysis.localReferences.cities.length} cities, ${analysis.localReferences.landmarks.length} landmarks, ${analysis.localReferences.medicalFacilities.length} medical facilities`}
                    recommendation={
                        localRefStatus === 'success'
                            ? 'Excellent local SEO signals'
                            : 'Add more local landmarks and city mentions for better local SEO'
                    }
                />
            </div>

            {/* Keyword Density Section */}
            <div className="mt-6">
                <div className="bg-white rounded-lg border p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaSearch className="text-gray-500" />
                        Keyword Density Analysis
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array.from(analysis.keywordDensity.entries()).map(
                            ([keyword, density]) => {
                                const status =
                                    density >= 0.5 && density <= 2.0
                                        ? 'success'
                                        : density >= 0.3 && density <= 3.0
                                          ? 'warning'
                                          : 'error'

                                return (
                                    <div
                                        key={keyword}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {keyword}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Target: 0.5-2.0%
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p
                                                className={`font-bold ${
                                                    status === 'success'
                                                        ? 'text-green-600'
                                                        : status === 'warning'
                                                          ? 'text-yellow-600'
                                                          : 'text-red-600'
                                                }`}
                                            >
                                                {density}%
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {status === 'success'
                                                    ? 'Optimal'
                                                    : status === 'warning'
                                                      ? 'Acceptable'
                                                      : density < 0.5
                                                        ? 'Too low'
                                                        : 'Too high'}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>

            {/* Local References Details */}
            {analysis.localReferences.count > 0 && (
                <div className="mt-6">
                    <div className="bg-white rounded-lg border p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Local References Found
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {analysis.localReferences.cities.length > 0 && (
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-2">
                                        Cities (
                                        {analysis.localReferences.cities.length}
                                        )
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.localReferences.cities
                                            .slice(0, 10)
                                            .map(city => (
                                                <span
                                                    key={city}
                                                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                >
                                                    {city}
                                                </span>
                                            ))}
                                        {analysis.localReferences.cities
                                            .length > 10 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                +
                                                {analysis.localReferences.cities
                                                    .length - 10}{' '}
                                                more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {analysis.localReferences.landmarks.length > 0 && (
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-2">
                                        Landmarks (
                                        {
                                            analysis.localReferences.landmarks
                                                .length
                                        }
                                        )
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.localReferences.landmarks
                                            .slice(0, 5)
                                            .map(landmark => (
                                                <span
                                                    key={landmark}
                                                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                                                >
                                                    {landmark}
                                                </span>
                                            ))}
                                        {analysis.localReferences.landmarks
                                            .length > 5 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                +
                                                {analysis.localReferences
                                                    .landmarks.length - 5}{' '}
                                                more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {analysis.localReferences.medicalFacilities.length >
                                0 && (
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-2">
                                        Medical Facilities (
                                        {
                                            analysis.localReferences
                                                .medicalFacilities.length
                                        }
                                        )
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.localReferences.medicalFacilities.map(
                                            facility => (
                                                <span
                                                    key={facility}
                                                    className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                                                >
                                                    {facility}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
