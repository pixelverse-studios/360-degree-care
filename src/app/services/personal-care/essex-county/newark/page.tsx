import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'

const content = essexCountyPersonalCareCities['newark']

export const metadata = content.metadata

export default function PersonalCareNewarkPage() {
    return <CityServicePage content={content} />
}
