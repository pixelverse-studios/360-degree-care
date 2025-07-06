import CityHero from '@/components/county/CityHero'
import CityServiceList from '@/components/county/CityServiceList'
import CountyCta from '@/components/county/CountyCta'
import CityFocusList from '@/components/county/CityFocusList'

export async function generateStaticParams() {
    const { counties } = await import('@/lib/counties')
    const paths = counties.flatMap(county =>
        county.cities.map(city => ({
            county: county.slug,
            city: city.slug
        }))
    )
    return paths
}

export default async function CityPage({
    params
}: {
    params: { county: string; city: string }
}) {
    const { counties } = await import('@/lib/counties')
    const countyData = counties.find(c => c.slug === params.county)
    if (!countyData) {
        return <div>County not found.</div>
    }

    const cityData = countyData.cities.find(c => c.slug === params.city)
    if (!cityData) {
        return <div>City not found.</div>
    }

    return (
        <main className="pb-[4rem] space-y-10">
            <CityHero cityName={cityData.name} countyName={countyData.name} />
            <CityFocusList {...cityData.seoContent} />
            {cityData.offeredServices && (
                <CityServiceList
                    offeredServiceSlugs={cityData.offeredServices}
                    cityName={cityData.name}
                />
            )}
            <CountyCta
                header={`Need In-Home Care in ${cityData.name}`}
                subHeader={countyData.cta.subheading}
                buttonText={countyData.cta.buttonText}
            />
        </main>
    )
}
