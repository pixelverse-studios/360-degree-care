import { CityServicePage } from '@/components/city/CityServicePage'
import { passaicCountyPersonalCareCities } from '@/lib/content/cities/passaic-county/personal-care'

const content = passaicCountyPersonalCareCities['wayne']

export const metadata = content.metadata

export default function PersonalCareWaynePage() {
    return <CityServicePage content={content} />
}
