import { formatDistanceToNow } from 'date-fns'
import { FaStar } from 'react-icons/fa6'

import { StaggeredSection } from '../animations'

interface TestimonialProps {
    name: string
    description: string
    date: string
}

export default function TestimonialCards({
    testimonials
}: {
    testimonials: TestimonialProps[]
}) {
    return (
        <ul>
            <StaggeredSection className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {testimonials.map(review => {
                    const reviewDate = formatDistanceToNow(
                        new Date(review.date),
                        { addSuffix: true }
                    )
                    return (
                        <li
                            key={review.name}
                            className="flex flex-col gap-4 justify-center bg-white-muted p-6 rounded-xl"
                        >
                            <div>
                                <h4 className="text-black font-bold text-lg">
                                    {review.name}
                                </h4>
                            </div>
                            <p className="h-full">"{review.description}"</p>
                            <div className="flex gap-3 items-center flex-wrap">
                                <div className="flex gap-1 text-primary">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-sm text-gray-400 italic">
                                    {reviewDate}
                                </span>
                            </div>
                        </li>
                    )
                })}
            </StaggeredSection>
        </ul>
    )
}
