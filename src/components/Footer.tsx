'use client'

import Link from 'next/link'
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import { navLinks, footerResources } from '@/utils/routes'

const [serviceLink, aboutLink, faqLink, testimonialLink] = navLinks

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-foreground border-t border-gray-300 py-10 text-black">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left - Logo & CTA */}
                    <div>
                        <Logo />
                        <p className="mt-2 text-sm text-gray-600">
                            First in Home Care™
                        </p>
                        <div className="mt-4">
                            <Button variant="cta" className="w-full md:w-auto">
                                Call To Action
                            </Button>
                        </div>
                        <div className="mt-2">
                            <Button
                                variant="ghost"
                                ghostBg="hsl(var(--primary))"
                                ghostText="white"
                                className="w-full md:w-auto font-bold rounded-3xl"
                            >
                                Careers
                            </Button>
                        </div>
                    </div>

                    {/* Middle - Links */}
                    <div className="flex flex-col space-y-2 text-sm">
                        <p className="font-bold text-lg">See More</p>
                        <Link
                            href={serviceLink.route}
                            className="hover:text-primary"
                        >
                            {serviceLink.label}
                        </Link>
                        <Link
                            href={aboutLink.route}
                            className="hover:text-primary"
                        >
                            {aboutLink.label}
                        </Link>
                        <p className="font-bold text-lg pt-3">Resources</p>
                        <Link
                            href={faqLink.route}
                            className="hover:text-primary"
                        >
                            {faqLink.label}
                        </Link>
                        <Link
                            href={testimonialLink.route}
                            className="hover:text-primary"
                        >
                            {testimonialLink.label}
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
                            <a
                                href="#"
                                className="text-gray-700 hover:text-primary"
                            >
                                <FaFacebookF size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-primary"
                            >
                                <FaLinkedinIn size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-primary"
                            >
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-200 pt-4 text-center text-xs text-gray-600">
                    <p>
                        360 Degree Care is an Equal Opportunity Employer. Each
                        franchise is independently owned and operated.
                    </p>
                    <p className="mt-1">
                        &copy; {currentYear} 360 Degree Care Inc. All rights
                        reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="mt-2 flex flex-wrap justify-center space-x-3">
                        {footerResources.map((resource, key) => (
                            <>
                                <Link
                                    key={resource.label}
                                    href={resource.route}
                                    className="hover:underline"
                                >
                                    {resource.label}
                                </Link>
                                {key + 1 !== footerResources.length ? (
                                    <span key={key}>|</span>
                                ) : null}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
