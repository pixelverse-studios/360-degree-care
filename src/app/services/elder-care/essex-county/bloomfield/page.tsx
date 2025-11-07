import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'

const content = essexCountyElderCareCities['bloomfield']

export const metadata = content.metadata

export default function ElderCareBloomfieldPage() {
    return <CityServicePage content={content} />
}
