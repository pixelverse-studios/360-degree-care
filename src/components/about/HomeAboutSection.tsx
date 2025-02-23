import { FaCircleCheck } from 'react-icons/fa6'

export default function HomeAboutSection() {
    return (
        <section className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-between items-center  max-h-[60dvh] p-6">
            <img
                className="rounded-2xl h-fit w-fit"
                src="https://placehold.co/1200x1200"
                alt="placeholder"
            />
            <div className="flex flex-col gap-6">
                <h1 className="text-primary font-bold text-3xl">
                    About 360° Care
                </h1>
                <p>
                    For over 10 years, we've been proudly based in Ridgewood,
                    NJ, offering compassionate and reliable care solutions to
                    families across New Jersey. From home care for the elderly,
                    to a variety of other tailored services, we are committed to
                    meeting the unique needs of every individual. Our focus on
                    quality assurance ensures that those we serve receive
                    personalized, attentive support. As a certified CHAP
                    organization and licensed by the State Attorney General, we
                    adhere to the strictest standards of care and
                    professionalism. Your loved ones deserve the best, and we're
                    here to deliver with dignity, trust, and exceptional
                    service.
                </p>
                <div className="flex justify-between gap-4">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-2 text-lg">
                            <FaCircleCheck className="text-primary" />
                            <span>10+ Years of Trusted Service</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCircleCheck className="text-primary" />
                            <span>Certified CHAP Organization</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCircleCheck className="text-primary" />
                            <span>Highest Standards of Quality Assurance</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCircleCheck className="text-primary" />
                            <span>Licensed by the State Attorney General</span>
                        </li>
                    </ul>
                    <div className="rounded-full bg-yellow-600 text-white h-[6rem] w-[6rem] flex items-center justify-center">
                        CHAP
                    </div>
                </div>
            </div>
        </section>
    )
}
