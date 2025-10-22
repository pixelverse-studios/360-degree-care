import { CityServicePage } from '@/components/city/CityServicePage'
import { bergenCountyElderCareCities } from '@/lib/content/cities/bergen-county/elder-care'

const content = bergenCountyElderCareCities['fair-lawn']

export const metadata = content.metadata

export default function ElderCareFairLawnPage() {
    return <CityServicePage content={content} />
}
