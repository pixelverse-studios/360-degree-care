import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyPersonalCareCities } from '@/lib/content/cities/bergen-county/personal-care'

const content = bergenCountyPersonalCareCities['paramus']

export const metadata = content.metadata

export default function PersonalCareParamusPage() {
    return <CityServicePage content={content} />
}
