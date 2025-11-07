import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'

const content = essexCountyCompanionCareCities['bloomfield']

export const metadata = content.metadata

export default function CompanionCareBloomfieldPage() {
    return <CityServicePage content={content} />
}
