import { counties } from '@/lib/counties'
import CountyHero from '@/components/county/CountyHero'
import CountyIntro from '@/components/county/CountyIntro'
import CountyServiceList from '@/components/county/CountyServiceList'
import CountyCityGrid from '@/components/county/CountyCityGrid'
import CountyCta from '@/components/county/CountyCta'

export async function generateStaticParams() {
    return counties.map(c => ({ county: c.slug }))
}

export default function CountyHubPage({
    params
}: {
    params: { county: string }
}) {
    const countyData = counties.find(c => c.slug === params.county)

    if (!countyData) return <div>County not found.</div>

    return (
        <main className="py-[4rem] space-y-10">
            <CountyHero
                title={countyData.heroTitle}
                subTitle={countyData.heroSubtitle}
            />
            <CountyIntro description={countyData.introText} />
            <CountyServiceList
                services={countyData.services}
                slug={countyData.slug}
                countyName={countyData.name}
            />
            <CountyCityGrid
                cities={countyData.cities}
                countyName={countyData.name}
            />
            <CountyCta
                header={countyData.cta.heading}
                subHeader={countyData.cta.subheading}
                buttonText={countyData.cta.buttonText}
            />
        </main>
    )
}
