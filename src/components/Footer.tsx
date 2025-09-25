'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import Logo, { CompanyName } from '@/components/Logo'
import { cn } from '@/lib/utils'
import { navLinks, footerResources } from '@/utils/routes'
import { ADDRESS, FACEBOOK, INSTA, PHONE } from '@/utils/constants'
import GoogleReviewLink from './GoogleReviewLink'
import ContactMap from './contact/ContactMap'
import { counties } from '@/lib/counties'

const activeCounties = counties.map(county => ({
    name: county.name,
    slug: county.slug
}))
const [aboutLink, serviceLink, vaultLink] = navLinks

const quickLinkStyles = 'text-sm'
const linkHover = 'transition-all duration-200 hover:text-green-muted'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-primary py-10 text-black">
            <div className="max-w-custom mx-auto px-6">
                {/* <div className="flex flex-wrap gap-4 justify-between text-white"> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr] gap-8 justify-between text-white">
                    <div className="space-y-6">
                        <div className="">
                            <Logo invert />
                            <p className="mt-2 text-sm">
                                Providing compassionate in-home care services
                                for seniors
                            </p>
                        </div>

                        <ContactMap />
                    </div>
                    <div className="flex flex-col gap-8 text-sm">
                        <div className="text-sm space-y-4">
                            <p className="font-bold text-lg">Contact</p>
                            <p className="mt-2">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS.MAP}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:underline hover:text-green-muted transition-colors"
                                >
                                    {ADDRESS.STREET}
                                    <br />
                                    {ADDRESS.DETAILS}
                                </a>
                            </p>
                            <p className="mt-1">
                                <a
                                    href={`tel:${PHONE}`}
                                    id="footer-phone-btn"
                                    className="text-white hover:underline"
                                >
                                    {PHONE}
                                </a>
                            </p>
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
                        <GoogleReviewLink className="h-fit" />
                    </div>
                    <div className="flex flex-col space-y-2 text-sm">
                        <p className="font-bold text-lg">Now Servicing</p>
                        {activeCounties.map(county => (
                            <Link
                                key={county.slug}
                                href={'/location/' + county.slug}
                                className={cn(quickLinkStyles, linkHover)}
                            >
                                {county.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-2 text-sm">
                        <p className="font-bold text-lg">Quick Links</p>
                        <Link
                            href={aboutLink.route}
                            className={cn(quickLinkStyles, linkHover)}
                        >
                            {aboutLink.label}
                        </Link>
                        <div className="flex flex-col gap-2">
                            <h5 className="font-semibold text-sm">Services</h5>
                            {serviceLink.subLinks.map(item => (
                                <Link
                                    key={`${item.label}-footer`}
                                    href={item.route}
                                    className={cn(
                                        quickLinkStyles,
                                        linkHover,
                                        'ml-2'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="font-semibold text-sm">
                                Wisdom Vault
                            </h5>
                            {vaultLink.subLinks.map(item => (
                                <Link
                                    key={`${item.label}-footer`}
                                    href={item.route}
                                    className={cn(
                                        quickLinkStyles,
                                        linkHover,
                                        'ml-2'
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-200 pt-4 text-center text-white">
                    <article className="text-sm">
                        <CompanyName invert /> is an Equal Opportunity Employer.
                        Each franchise is independently owned and operated.
                    </article>
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
