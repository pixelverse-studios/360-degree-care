import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyCompanionCareCities } from '@/lib/content/cities/monmouth-county/companion-care'

const content = monmouthCountyCompanionCareCities['manalapan']

export const metadata = content.metadata

export default function CompanionCareManalapanPage() {
    return <CityServicePage content={content} />
}
