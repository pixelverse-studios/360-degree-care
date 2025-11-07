import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'

const content = monmouthCountyElderCareCities['manalapan']

export const metadata = content.metadata

export default function ElderCareManalapanPage() {
    return <CityServicePage content={content} />
}
