'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Info } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import Logo, { CompanyName } from '@/components/Logo'
import { cn } from '@/lib/utils'
import { navLinks, footerResources } from '@/utils/routes'
import { ADDRESS, FACEBOOK, INSTA, PHONE } from '@/utils/constants'
import { HoverPopover } from './ui/popover'

const [aboutLink, serviceLink, faqLink] = navLinks

const quickLinkStyles = 'text-sm'
const linkHover = 'transition-all duration-200 hover:text-black'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-primary py-10 text-black">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">
                    {/* Left - Logo & CTA */}
                    <div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Logo invert />
                            </div>
                            <p className="mt-2 text-sm">
                                Providing compassionate in-home care services
                                for seniors
                            </p>
                        </div>
                        <div className="text-sm mt-6">
                            <p className="font-bold text-lg">Contact</p>
                            <p className="mt-2">
                                {ADDRESS.STREET}
                                <br />
                                {ADDRESS.DETAILS}
                            </p>
                            <p className="mt-1">
                                <a
                                    href={`tel:${PHONE}`}
                                    className="text-white hover:underline"
                                >
                                    {PHONE}
                                </a>
                            </p>

                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href={FACEBOOK}
                                    target="_blank"
                                    className={linkHover}
                                >
                                    <FaFacebookF size={24} />
                                </a>
                                <a
                                    href={INSTA}
                                    target="_blank"
                                    className={linkHover}
                                >
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Middle - Links */}
                    <div className="flex flex-col space-y-2 text-sm">
                        <p className="font-bold text-lg">Quick Links</p>
                        <Link
                            href={aboutLink.route}
                            className={cn(quickLinkStyles, linkHover)}
                        >
                            {aboutLink.label}
                        </Link>
                        {serviceLink.subLinks.map(item => (
                            <Link
                                key={`${item.label}-footer`}
                                href={item.route}
                                className={cn(quickLinkStyles, linkHover)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href={faqLink.route}
                            className={cn(quickLinkStyles, linkHover)}
                        >
                            {faqLink.label}
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-2 text-sm">
                        <div className="font-bold text-lg flex gap-1">
                            Locations{' '}
                            <HoverPopover
                                content={
                                    <p>
                                        Bergen County, located in the
                                        northeastern part of New Jersey, is the
                                        area we cover fully. However, for
                                        special situation and for cases
                                        requiring Live-In Care we cover
                                        virtually the whole state with a special
                                        emphasis on the Jersey Shore and Sussex
                                        County:
                                    </p>
                                }
                            >
                                <Info />
                            </HoverPopover>
                        </div>
                        <ul className="grid grid-cols-2 gap-1">
                            <li>Allendale</li>
                            <li>Alpine</li>
                            <li>Cresskill</li>
                            <li>East Rutherford</li>
                            <li>Fair Lawn</li>
                            <li>Fort Lee</li>
                            <li>Glen Rock</li>
                            <li>Hackensack</li>
                            <li>Haworth</li>
                            <li>Ho-Ho-Kus</li>
                            <li>Northvale</li>
                            <li>Old Tappan</li>
                            <li>Oradell</li>
                            <li>River Edge</li>
                            <li>Ridgewood</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-200 pt-4 text-center text-white">
                    <p className="text-sm">
                        <CompanyName invert /> is an Equal Opportunity Employer.
                        Each franchise is independently owned and operated.
                    </p>
                    <p className="mt-1 text-sm">
                        &copy; {currentYear} 360 Degree Care Inc. All rights
                        reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="mt-2 flex flex-wrap justify-center space-x-3">
                        {footerResources.map((resource, key) => (
                            <Fragment key={resource.route}>
                                <Link
                                    key={resource.label}
                                    href={resource.route}
                                    className="hover:underline text-[14px]"
                                >
                                    {resource.label}
                                </Link>
                                {key + 1 !== footerResources.length ? (
                                    <span className="text-[14px]" key={key}>
                                        |
                                    </span>
                                ) : null}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
