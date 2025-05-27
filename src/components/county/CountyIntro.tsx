interface CountyIntroProps {
    description: string
}

export default function CountyHero({ description }: CountyIntroProps) {
    return (
        <section className="">
            <div className="section py-0 max-w-4xl">
                <p>{description}</p>
            </div>
        </section>
    )
}
