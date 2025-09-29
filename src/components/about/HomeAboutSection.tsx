import { CircleCheck } from 'lucide-react'
import AnimatedSection from '../animated-section'
import { getImgSrc } from '@/lib/images'

export default function HomeAboutSection() {
    return (
        <section className="bg-white">
            <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-start p-6"
            >
                {/* <img
                    className="rounded-2xl h-full w-fit object-cover"
                    src={getImgSrc('swimmer')}
                    alt="Content senior man"
                /> */}
                {/* 
                <iframe
                    src="https://youtu.be/940TQdvwoxs"
                    title="Transition from Interim to 360 Degree Care"
                    className="h-[90%] w-full rounded-lg"
                /> */}

                <iframe
                    className="h-full w-full rounded-lg"
                    src="https://www.youtube.com/embed/940TQdvwoxs?si=fqdzPoORSzGveCqZ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                <div className="flex flex-col gap-4">
                    <h1 className="text-primary font-bold text-3xl">
                        About 360° Care
                    </h1>
                    <p>
                        For over 10 years, 360 Degree Care has proudly served
                        families across New Jersey with compassionate,
                        dependable home care services — all from our base in
                        Ridgewood, NJ. We provide comprehensive{' '}
                        <a
                            href="/personal-care-bergen-county"
                            className="text-primary hover:underline"
                        >
                            Bergen County personal care
                        </a>{' '}
                        services, including senior home care, companion care,
                        and other personalized solutions, all dedicated to
                        meeting each client's unique needs.
                    </p>
                    <p>
                        As a certified CHAP organization and licensed by the
                        State Attorney General, we uphold the highest standards
                        of safety, professionalism, and dignity. Our focus on
                        quality assurance ensures your loved ones receive
                        attentive, individualized care they can trust —
                        delivered with compassion and excellence.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-4">
                        <ul className="flex flex-col gap-4 mb-6 md:mb-0">
                            <li className="bullet-item text-lg">
                                <CircleCheck className="text-primary" />
                                <span>10+ Years of Trusted Service</span>
                            </li>
                            <li className="bullet-item text-lg">
                                <CircleCheck className="text-primary" />
                                <span>Certified CHAP Organization</span>
                            </li>
                            <li className="bullet-item text-lg">
                                <CircleCheck className="text-primary" />
                                <span>
                                    Highest Standards of Quality Assurance
                                </span>
                            </li>
                            <li className="bullet-item text-lg">
                                <CircleCheck className="text-primary" />
                                <span>
                                    Licensed by the State Attorney General
                                </span>
                            </li>
                        </ul>
                        <a href="https://chapinc.org/about/" target="_blank">
                            <img
                                src={getImgSrc('CHAPLogo')}
                                alt="CHAP badge"
                                className="w-[8rem] h-[8rem] mx-auto md:mx-0"
                            />
                        </a>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    )
}
