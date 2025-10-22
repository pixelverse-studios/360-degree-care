import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['fair-lawn']

export const metadata = content.metadata

export default function PersonalCareFairLawnPage() {
    return <CityServicePage content={content} />
}
