import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyPersonalCareCities } from '@/lib/content/cities/essex-county/personal-care'

const content = essexCountyPersonalCareCities['bloomfield']

export const metadata = content.metadata

export default function PersonalCareBloomfieldPage() {
    return <CityServicePage content={content} />
}
