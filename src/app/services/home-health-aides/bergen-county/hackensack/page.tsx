import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyHomeHealthAideCities } from '@/lib/content/cities/bergen-county/home-health-aides'

const content = bergenCountyHomeHealthAideCities['hackensack']

export const metadata = content.metadata

export default function HomeHealthAidesHackensackPage() {
    return <CityServicePage content={content} />
}
