import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'

const content = essexCountyElderCareCities['newark']

export const metadata = content.metadata

export default function ElderCareNewarkPage() {
    return <CityServicePage content={content} />
}
