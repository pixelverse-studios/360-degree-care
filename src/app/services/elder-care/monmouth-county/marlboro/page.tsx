import { CityServicePage } from '@/components/city/CityServicePage'
import { monmouthCountyElderCareCities } from '@/lib/content/cities/monmouth-county/elder-care'

const content = monmouthCountyElderCareCities['marlboro']

export const metadata = content.metadata

export default function ElderCareMarlboroPage() {
    return <CityServicePage content={content} />
}
