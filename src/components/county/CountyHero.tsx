import { getImgSrc } from '@/lib/images'

interface CountyHeroProps {
    title: string
    subTitle: string
}

export default function CountyHero({ title, subTitle }: CountyHeroProps) {
    return (
        <section className="">
            <div className="section grid grid-cols-1 md:grid-cols-2 col-6">
                <article className="flex flex-col gap-4">
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </article>
                <img
                    src={getImgSrc('happy_couple_1')}
                    alt=""
                    className="rounded-xl"
                />
            </div>
        </section>
    )
}
