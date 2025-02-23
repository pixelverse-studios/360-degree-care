'use client'

import Link from 'next/link'
import {
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaHeartPulse
} from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'
import { navLinks, footerResources } from '@/utils/routes'

const [serviceLink, aboutLink, faqLink, testimonialLink] = navLinks

const linkHover = 'transition-all duration-200 textwhite hover:text-black'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-primary border-t border-gray-300 py-10 text-black">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    {/* Left - Logo & CTA */}
                    <div>
                        <div className="flex gap-2 items-center">
                            <FaHeartPulse className="h-6 w-6" />
                            <Logo invert />
                        </div>
                        <p className="mt-2 text-sm">
                            Providing compassionate in-home care services for
                            seniors
                        </p>
                        <div className="mt-4">
                            <Button className="w-full md:w-auto px-6 py-3 border-2 font-bold transition-all duration-200 bg-background text-primary border-background hover:border-white hover:bg-primary hover:text-white rounded-3xl">
                                Call To Action
                            </Button>
                        </div>
                    </div>

                    {/* Middle - Links */}
                    <div className="flex flex-col space-y-2 text-sm">
                        <p className="font-bold text-lg">Quick Links</p>
                        <Link
                            href={serviceLink.route}
                            className="hover:text-black"
                        >
                            {serviceLink.label}
                        </Link>
                        <Link
                            href={aboutLink.route}
                            className="hover:text-black"
                        >
                            {aboutLink.label}
                        </Link>
                        <p className="font-bold text-lg pt-3">Resources</p>
                        <Link href={faqLink.route} className="hover:text-black">
                            {faqLink.label}
                        </Link>
                        <Link
                            href={testimonialLink.route}
                            className="hover:text-black"
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
                            <a href="#" className={linkHover}>
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" className={linkHover}>
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="#" className={linkHover}>
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-200 pt-4 text-center text-xs text-white">
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
