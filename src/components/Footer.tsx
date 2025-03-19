'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { CompanyName } from '@/components/Logo'
import { cn } from '@/lib/utils'
import Logo from '@/components/Logo'
import { navLinks, footerResources } from '@/utils/routes'

const [aboutLink, serviceLink, faqLink] = navLinks

const quickLinkStyles = 'text-sm'
const linkHover = 'transition-all duration-200 hover:text-black'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-primary py-10 text-black">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    {/* Left - Logo & CTA */}
                    <div>
                        <div className="flex gap-2 items-center">
                            <Logo invert />
                        </div>
                        <p className="mt-2 text-sm">
                            Providing compassionate in-home care services for
                            seniors
                        </p>
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
                                {item.label} Services
                            </Link>
                        ))}
                        <Link
                            href={faqLink.route}
                            className={cn(quickLinkStyles, linkHover)}
                        >
                            {faqLink.label}
                        </Link>
                    </div>

                    {/* Right - Contact & Socials */}
                    <div className="text-sm">
                        <p className="font-bold text-lg">Contact</p>
                        <p className="mt-2">
                            27 Chestnut Street <br />
                            Floor 1 <br />
                            Ridgewood, NJ 07450
                        </p>
                        <p className="mt-1">
                            <a
                                href="tel:8003387786"
                                className="text-primary hover:underline"
                            >
                                (800) 338-7786
                            </a>
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className={linkHover}>
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" className={linkHover}>
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="#" className={linkHover}>
                                <FaInstagram size={24} />
                            </a>
                        </div>
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
