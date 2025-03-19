import Link from 'next/link'
import { MoveDown } from 'lucide-react'

import { navLinks } from '@/utils/routes'

const serviceCardStyles =
    'bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow h-full border-t-secondary border-t-[4px]'

const ServiceOverview = () => {
    return (
        <div className="">
            <p className="text-2xl italic font-bold text-primary text-center">
                The Finest Nurses and Aides in New Jersey
            </p>

            {/* Custom CSS for left/right positioning */}
            <style jsx global>{`
                .left-1\/6 {
                    left: 16.666667%;
                }
                .right-1\/6 {
                    right: 16.666667%;
                }
            `}</style>

            {/* Service Categories with Arrows */}
            <div className="relative mt-8 mb-12">
                {/* Diagram structure - fully connected */}
                <div className="relative hidden lg:block h-20">
                    {/* Main horizontal line */}
                    <div
                        className={
                            'absolute top-0 left-1/6 right-1/6 border-t border-secondary border-[4px]'
                        }
                    />

                    {/* Left vertical line */}
                    <div
                        className={
                            'absolute top-0 left-1/6 w-[4px] h-10 bg-secondary'
                        }
                    />

                    {/* Middle vertical line */}
                    <div
                        className={
                            'absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] h-10 bg-secondary'
                        }
                    />

                    {/* Right vertical line */}
                    <div
                        className={
                            'absolute top-0 right-1/6 w-[4px] h-10 bg-secondary'
                        }
                    />

                    {/* Left arrow */}
                    <div className="absolute bottom-[1rem] left-1/6 transform -translate-x-1/2">
                        <MoveDown className="text-secondary w-fit h-[46px] ml-[4px]" />
                    </div>

                    {/* Middle arrow */}
                    <div className="absolute bottom-[1rem] left-1/2 transform -translate-x-1/2">
                        <MoveDown className="text-secondary w-fit h-[46px]" />
                    </div>

                    {/* Right arrow */}
                    <div className="absolute bottom-[1rem] right-1/6 transform translate-x-1/2">
                        <MoveDown className="text-secondary w-fit h-[46px] mr-[4px]" />
                    </div>
                </div>

                {/* Service Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link
                        href={navLinks[1].subLinks[0].route}
                        className="no-underline"
                    >
                        <div className={serviceCardStyles}>
                            <p className="font-semibold text-primary">
                                Private Clients
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={navLinks[1].subLinks[1].route}
                        className="no-underline"
                    >
                        <div className={serviceCardStyles}>
                            <p className="font-semibold text-primary">
                                Elder Care Consulting
                            </p>
                        </div>
                    </Link>

                    <Link
                        href={navLinks[1].subLinks[2].route}
                        className="no-underline"
                    >
                        <div className={serviceCardStyles}>
                            <p className="font-semibold text-primary">
                                Staffing Solutions
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceOverview
