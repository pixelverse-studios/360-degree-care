import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'

const content = essexCountyPersonalCareCities['east-orange']

export const metadata = content.metadata

export default function PersonalCareEastOrangePage() {
    return <CityServicePage content={content} />
}
