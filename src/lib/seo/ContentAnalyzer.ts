/**
 * Content Analyzer for SEO Quality Review
 * Provides word count, keyword density, readability scores, and local reference tracking
 */

export interface AnalysisResult {
    wordCount: number
    sentenceCount: number
    avgWordsPerSentence: number
    syllableCount: number
    readabilityScore: {
        fleschKincaid: number
        gradeLevel: string
        difficulty: string
    }
    keywordDensity: Map<string, number>
    localReferences: {
        cities: string[]
        landmarks: string[]
        medicalFacilities: string[]
        count: number
    }
}

export class ContentAnalyzer {
    // Bergen County cities for reference checking
    private static bergenCities = [
        'Fort Lee',
        'Hackensack',
        'Westwood',
        'Ridgewood',
        'Paramus',
        'Teaneck',
        'Fair Lawn',
        'Englewood',
        'Bergenfield',
        'Palisades Park',
        'Cliffside Park',
        'Edgewater',
        'River Edge',
        'New Milford',
        'Oradell',
        'Emerson',
        'Park Ridge',
        'Glen Rock',
        'Midland Park',
        'Waldwick',
        'Ho-Ho-Kus',
        'Englewood Cliffs',
        'Leonia',
        'Bogota',
        'North Bergen'
    ]

    private static localLandmarks = [
        'George Washington Bridge',
        'GWB',
        'Fort Lee Historic Park',
        'Hackensack University Medical Center',
        'HUMC',
        'Valley Hospital',
        'Holy Name Medical Center',
        'Bergen County Courthouse',
        'Garden State Plaza',
        'Paramus Park',
        'Overpeck County Park',
        'Pascack Valley Hospital',
        'Englewood Health',
        'Hudson River',
        'Palisades',
        'Bergen Performing Arts Center',
        'Van Saun Park'
    ]

    private static medicalFacilities = [
        'Hackensack University Medical Center',
        'HUMC',
        'Valley Hospital',
        'Holy Name Medical Center',
        'Pascack Valley Hospital',
        'Englewood Health',
        'Center for Healthy Aging'
    ]

    /**
     * Extract text content from HTML or plain text
     */
    static extractText(content: string): string {
        // Remove HTML tags if present
        const withoutTags = content.replace(/<[^>]*>/g, ' ')
        // Normalize whitespace
        return withoutTags.replace(/\s+/g, ' ').trim()
    }

    /**
     * Count words in text
     */
    static countWords(text: string): number {
        const words = text.trim().split(/\s+/)
        return words.filter(word => word.length > 0).length
    }

    /**
     * Count sentences (basic implementation)
     */
    static countSentences(text: string): number {
        // Split on sentence endings
        const sentences = text.split(/[.!?]+/)
        return sentences.filter(s => s.trim().length > 0).length
    }

    /**
     * Estimate syllable count (simplified)
     */
    static countSyllables(text: string): number {
        const words = text.toLowerCase().split(/\s+/)
        let syllableCount = 0

        words.forEach(word => {
            // Remove non-alphabetic characters
            word = word.replace(/[^a-z]/g, '')
            if (word.length === 0) return

            // Count vowel groups as syllables
            const vowelGroups = word.match(/[aeiouy]+/g) || []
            let wordSyllables = vowelGroups.length

            // Adjust for silent e
            if (word.endsWith('e') && wordSyllables > 1) {
                wordSyllables--
            }

            // Minimum of 1 syllable per word
            syllableCount += Math.max(1, wordSyllables)
        })

        return syllableCount
    }

    /**
     * Calculate Flesch-Kincaid readability scores
     */
    static calculateReadability(
        words: number,
        sentences: number,
        syllables: number
    ): AnalysisResult['readabilityScore'] {
        if (sentences === 0 || words === 0) {
            return {
                fleschKincaid: 0,
                gradeLevel: 'N/A',
                difficulty: 'No content'
            }
        }

        // Flesch-Kincaid Grade Level
        const gradeLevel =
            0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59

        // Determine difficulty level
        let difficulty = 'Very Easy'
        if (gradeLevel >= 16) difficulty = 'College Graduate'
        else if (gradeLevel >= 13) difficulty = 'College'
        else if (gradeLevel >= 10) difficulty = 'High School'
        else if (gradeLevel >= 7) difficulty = 'Middle School'
        else if (gradeLevel >= 5) difficulty = 'Elementary'

        return {
            fleschKincaid: Math.round(gradeLevel * 10) / 10,
            gradeLevel: `Grade ${Math.round(gradeLevel)}`,
            difficulty
        }
    }

    /**
     * Calculate keyword density for given keywords
     */
    static calculateKeywordDensity(
        text: string,
        keywords: string[]
    ): Map<string, number> {
        const lowerText = text.toLowerCase()
        const totalWords = this.countWords(text)
        const densityMap = new Map<string, number>()

        keywords.forEach(keyword => {
            const keywordLower = keyword.toLowerCase()
            // Count occurrences (with word boundaries)
            const regex = new RegExp(`\\b${keywordLower}\\b`, 'gi')
            const matches = lowerText.match(regex) || []
            const density = (matches.length / totalWords) * 100

            densityMap.set(keyword, Math.round(density * 100) / 100)
        })

        return densityMap
    }

    /**
     * Find local references in content
     */
    static findLocalReferences(
        text: string
    ): AnalysisResult['localReferences'] {
        const foundCities: string[] = []
        const foundLandmarks: string[] = []
        const foundMedical: string[] = []

        // Check for cities
        this.bergenCities.forEach(city => {
            const regex = new RegExp(`\\b${city}\\b`, 'gi')
            if (regex.test(text) && !foundCities.includes(city)) {
                foundCities.push(city)
            }
        })

        // Check for landmarks
        this.localLandmarks.forEach(landmark => {
            const regex = new RegExp(`\\b${landmark}\\b`, 'gi')
            if (regex.test(text) && !foundLandmarks.includes(landmark)) {
                foundLandmarks.push(landmark)
            }
        })

        // Check for medical facilities
        this.medicalFacilities.forEach(facility => {
            const regex = new RegExp(`\\b${facility}\\b`, 'gi')
            if (regex.test(text) && !foundMedical.includes(facility)) {
                foundMedical.push(facility)
            }
        })

        return {
            cities: foundCities,
            landmarks: foundLandmarks,
            medicalFacilities: foundMedical,
            count:
                foundCities.length + foundLandmarks.length + foundMedical.length
        }
    }

    /**
     * Perform complete content analysis
     */
    static analyzeContent(
        content: string,
        targetKeywords: string[] = []
    ): AnalysisResult {
        const text = this.extractText(content)
        const wordCount = this.countWords(text)
        const sentenceCount = this.countSentences(text)
        const syllableCount = this.countSyllables(text)

        return {
            wordCount,
            sentenceCount,
            avgWordsPerSentence:
                Math.round((wordCount / sentenceCount) * 10) / 10,
            syllableCount,
            readabilityScore: this.calculateReadability(
                wordCount,
                sentenceCount,
                syllableCount
            ),
            keywordDensity: this.calculateKeywordDensity(text, targetKeywords),
            localReferences: this.findLocalReferences(text)
        }
    }
}
