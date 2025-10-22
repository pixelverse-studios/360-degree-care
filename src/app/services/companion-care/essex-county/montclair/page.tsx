import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyCompanionCareCities } from '@/lib/content/cities/essex-county/companion-care'

const content = essexCountyCompanionCareCities['montclair']

export const metadata = content.metadata

export default function CompanionCareMontclairPage() {
    return <CityServicePage content={content} />
}
