interface CityHeroProps {
    cityName: string
    countyName: string
}

export default function CityHero({ cityName, countyName }: CityHeroProps) {
    return (
        <section className="">
            <div className="page-section">
                {/* <div className="section grid grid-cols-1 md:grid-cols-2 col-6"> */}
                <h1 className="text-4xl md:text-5xl font-bold">
                    Services in {cityName}, {countyName}
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Learn more about the home healthcare services we offer in{' '}
                    {cityName}.
                </p>
            </div>
            {/* </div> */}
        </section>
    )
}
