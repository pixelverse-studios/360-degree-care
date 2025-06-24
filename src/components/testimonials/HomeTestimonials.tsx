import { testimonials } from '@/lib/testimonials'
import { formatDistanceToNow } from 'date-fns'
import { FaStar } from 'react-icons/fa6'
import { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '../ui/carousel'

export default function HomeTestimonials() {
    const [expandedTestimonials, setExpandedTestimonials] = useState<
        Set<string>
    >(new Set())
    const CHARACTER_LIMIT = 150

    const toggleExpanded = (name: string) => {
        const newExpanded = new Set(expandedTestimonials)
        if (newExpanded.has(name)) {
            newExpanded.delete(name)
        } else {
            newExpanded.add(name)
        }
        setExpandedTestimonials(newExpanded)
    }
    return (
        <section className="py-8 gradient-left">
            {/* <AnimatedSection
                animation="zoom"
                className="max-w-custom mx-auto p-6"
            > */}
            <section className="max-w-custom mx-auto p-6">
                <div className="text-center text-white-muted mb-6">
                    <h2 className="font-bold text-2xl mb-3 text-white-muted">
                        What Families Are Saying
                    </h2>
                    <p>
                        Read what families have to say about our care services
                        and dedicated team members
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true
                    }}
                    className="w-full max-w-6xl mx-auto px-10 py-6"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map(testimonial => {
                            const reviewDate = formatDistanceToNow(
                                new Date(testimonial.date),
                                { addSuffix: true }
                            )
                            const starCount = Array.from({
                                length: testimonial.rating
                            })
                            const isExpanded = expandedTestimonials.has(
                                testimonial.name
                            )
                            const shouldShowReadMore =
                                testimonial.description.length > CHARACTER_LIMIT
                            const displayText =
                                shouldShowReadMore && !isExpanded
                                    ? testimonial.description.substring(
                                          0,
                                          CHARACTER_LIMIT
                                      ) + '...'
                                    : testimonial.description

                            return (
                                <CarouselItem
                                    key={testimonial.name}
                                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="flex flex-col gap-4 justify-center bg-white-muted p-6 rounded-xl h-full">
                                        <div>
                                            <h4 className="text-black font-bold text-lg">
                                                {testimonial.name}
                                            </h4>
                                        </div>
                                        <div className="h-full flex flex-col justify-between items-start">
                                            <p className="mb-2">
                                                "{displayText}"
                                            </p>
                                            {shouldShowReadMore && (
                                                <button
                                                    onClick={() =>
                                                        toggleExpanded(
                                                            testimonial.name
                                                        )
                                                    }
                                                    className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
                                                >
                                                    {isExpanded
                                                        ? 'Read less'
                                                        : 'Read more'}
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex gap-3 items-center flex-wrap">
                                            <div className="flex gap-1 text-primary">
                                                {starCount.map((_, index) => (
                                                    <FaStar
                                                        key={`${testimonial.name}-${index}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-400 italic">
                                                {reviewDate}
                                            </span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 transition-all duration-200 hover:bg-blue hover:text-white" />
                    <CarouselNext className="right-0 transition-all duration-200 hover:bg-green hover:text-white" />
                </Carousel>
            </section>
            {/* </AnimatedSection> */}
        </section>
    )
}
