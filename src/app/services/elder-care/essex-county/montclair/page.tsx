import { CityServicePage } from '@/components/city/CityServicePage'
import { essexCountyElderCareCities } from '@/lib/content/cities/essex-county/elder-care'

const content = essexCountyElderCareCities['montclair']

export const metadata = content.metadata

export default function ElderCareMontclairPage() {
    return <CityServicePage content={content} />
}
