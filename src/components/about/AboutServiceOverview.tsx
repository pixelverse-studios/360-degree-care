import Link from 'next/link'
import { CornerLeftDown, CornerRightDown, MoveDown } from 'lucide-react'

import { navLinks } from '@/utils/routes'

const serviceCardStyles =
    'bg-white-bright rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow h-full border-t-green border-t-[4px] flex flex-col justify-center min-h-[180px]'

const ServiceOverview = () => {
    return (
        <div className="w-full">
            <h2 className="text-3xl italic font-bold text-primary text-center leading-tight">
                The Finest Nurses and Aides
                <br />
                in New Jersey
            </h2>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative flex flex-col gap-4 items-center w-full">
                        <CornerLeftDown
                            size={60}
                            className="text-green hidden md:block"
                        />
                        <Link
                            href={navLinks[1].subLinks[0].route}
                            className="no-underline w-full"
                        >
                            <div className={serviceCardStyles}>
                                <h3 className="text-2xl font-bold text-primary">
                                    Private Clients
                                </h3>
                            </div>
                        </Link>
                    </div>
                    <div className="relative flex flex-col gap-4 items-center w-full">
                        <MoveDown
                            size={60}
                            className="text-green hidden md:block"
                        />
                        <Link
                            href={navLinks[1].subLinks[1].route}
                            className="no-underline w-full"
                        >
                            <div className={serviceCardStyles}>
                                <h3 className="text-2xl font-bold text-primary">
                                    Elder Care <br /> Consulting
                                </h3>
                            </div>
                        </Link>
                    </div>
                    <div className="relative flex flex-col gap-4 items-center w-full">
                        <CornerRightDown
                            size={60}
                            className="text-green hidden md:block"
                        />
                        <Link
                            href={navLinks[1].subLinks[2].route}
                            className="no-underline w-full"
                        >
                            <div className={serviceCardStyles}>
                                <h3 className="text-2xl font-bold text-primary">
                                    Staffing <br /> Solutions
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceOverview
