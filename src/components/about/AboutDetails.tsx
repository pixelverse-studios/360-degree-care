import Autoplay from 'embla-carousel-autoplay'

import { CompanyName } from '@/components/Logo'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../ui/carousel'
import AnimatedSection from '../animated-section'

const carouselItems = [
    '/carousel/ad-15.jpg',
    '/carousel/interim-billboard-hi-res.jpg',
    '/carousel/interim-bmv-2page-spread-boombox-hi-res.jpg',
    '/carousel/interim-bmv-2page-spread-hutton-hi-res.jpg',
    '/carousel/jeff-ads-version-C3-hi-res.jpg',
    '/carousel/man-with-bat-v01.jpg'
]

export default function AboutDetails() {
    return (
        <section>
            <div className="flex flex-col gap-4 px-6 py-10 max-w-custom mx-auto">
                <AnimatedSection
                    animation="zoom"
                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6"
                >
                    <img
                        src="/assets/runners.jpg"
                        alt="small details to help"
                        className="w-fit h-full rounded-3xl object-cover"
                    />
                    <article className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            The{' '}
                            <CompanyName className="text-3xl text-primary mb-[10px]" />{' '}
                            Difference
                        </h2>
                        <p className="text-lg max-w-2xl mb-6">
                            We believe homecare must go beyond sending someone
                            to do something and sending a bill. We have created{' '}
                            <span className="prio">Concierge Level™</span>{' '}
                            Homecare.
                        </p>
                        <p>
                            We are ready to take care of everything a client or
                            patient needs from the moment they open their eyes
                            in the morning to the memento they close them at
                            night…and often for many times they need extra help
                            in between. We cover all of the details, and many
                            more needs that pop up. We believe that we are here
                            to make our clients lives better.
                        </p>
                    </article>
                </AnimatedSection>
            </div>
            <div className="bg-white">
                <AnimatedSection
                    animation="zoom"
                    className="max-w-custom mx-auto p-10"
                >
                    <div className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-bright">
                            Same Dedicated Care, Now Independent
                        </h2>
                        <p className="my-auto text-black">
                            We formerly worked under the Interim Healthcare
                            banner but realized that the added bureaucracy and
                            overhead of a franchise system did not provide
                            enough added value to warrant its continuing. All of
                            our personnel and all of our services remain exactly
                            as before.
                        </p>
                    </div>
                    <div className="w-[80%] mx-auto h-[50vh] mt-8">
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true,
                                slidesToScroll: 1
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 4000
                                })
                            ]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4 md:-ml-6">
                                {/* Add flex and alignment properties to vertically center content */}
                                {carouselItems
                                    .slice(0, 3)
                                    .map((item, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="pl-4 md:pl-6 basis-full md:basis-1/2 xl:basis-1/3 flex items-center"
                                        >
                                            <img
                                                src={item}
                                                className="h-fit max-h-[20rem] w-auto m-auto object-contain rounded-xl"
                                                alt={`360 degree care advertisement-${index + 1}`}
                                            />
                                        </CarouselItem>
                                    ))}
                                <CarouselItem className="pl-4 md:pl-6 basis-full md:basis-1/2 xl:basis-1/3 flex items-center">
                                    <div className="flex flex-col gap-4 w-full">
                                        <img
                                            src={carouselItems[3]}
                                            className="h-fit max-h-[20rem] w-auto m-auto object-contain rounded-xl"
                                            alt="360 degree care advertisement-4"
                                        />
                                        <img
                                            src={carouselItems[4]}
                                            className="h-fit max-h-[20rem] w-auto m-auto object-contain rounded-xl"
                                            alt="360 degree care advertisement-5"
                                        />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="pl-4 md:pl-6 basis-full md:basis-1/2 xl:basis-1/3 flex items-center">
                                    <img
                                        src={carouselItems[5]}
                                        className="h-fit max-h-[20rem] w-auto m-auto object-contain rounded-xl"
                                        alt="360 degree care advertisement-6"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                    {/* <img
                        src="/assets/freedom.jpg"
                        alt="freedome img"
                        className="rounded-xl shadow-xl object-cover"
                    /> */}
                </AnimatedSection>
            </div>
            <div className="bg-white-bright">
                <AnimatedSection
                    animation="zoom"
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 max-w-custom mx-auto"
                >
                    <div className="p-8">
                        <h3 className="text-3xl font-semibold mb-6 text-primary-dark">
                            The Tiny Details that Really Matter
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                {[
                                    'Cooking',
                                    'Light housekeeping',
                                    'Personal care and hygiene',
                                    'Transportation',
                                    'Daily exercise'
                                ].map(service => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4">
                                {[
                                    'Fall Prevention',
                                    'Dog walking',
                                    'Party planning for family',
                                    'Organizing a Facetime with family',
                                    'Facilitating hair salon appointments'
                                ].map(service => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <img
                        src="/media/done-stamp.png"
                        alt="DONE stamp"
                        className="w-64 h-64 object-contain m-auto"
                    />
                </AnimatedSection>
            </div>
            <div className="bg-secondary">
                <AnimatedSection
                    animation="zoom"
                    className="max-w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-10"
                >
                    <img
                        src="/assets/staff.jpg"
                        alt="freedome img"
                        className="rounded-xl shadow-xl object-cover"
                    />
                    <div className="my-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            Elite Staffing for Healthcare Facilities
                        </h2>
                        <p className="my-auto text-white">
                            We also provide competent and reliable CNAs and
                            Aides to facilities that have staffing shortages.
                            Our experience caring for families that have the
                            highest expectations means the staffing we provide
                            to a rehab or subacute or in an assisted living
                            facility can be expected to be of the highest
                            quality.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
