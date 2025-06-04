'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { availablePages } from '@/utils/routes'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export default function Breadcrumbs() {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)

    // First check if the entire path is invalid (genuine 404 page)
    const fullPathIsValid =
        pathSegments.length > 0 &&
        (availablePages.some(
            nav =>
                nav.route === pathname ||
                nav.subLinks.some(sub => sub.route === pathname)
        ) ||
            (pathname.startsWith('/services/') &&
                availablePages.some(
                    nav =>
                        nav.subLinks &&
                        nav.subLinks.some(sub => sub.route === pathname)
                )))

    // Generate full breadcrumbs array regardless, but set a flag for showing just 404
    const showSingle404 = !fullPathIsValid && !pathname.startsWith('/services/')

    const breadcrumbs = pathSegments
        .filter((segment, index) => {
            if (pathname.startsWith('/services/') && pathSegments.length >= 3) {
                return index < 2
            }
            return true
        })
        .map((segment, index) => {
            const routePath = '/' + pathSegments.slice(0, index + 1).join('/')

            // Check if this is a parent segment with valid children
            // For example, if routePath is "/services" and it has subLinks
            const isParentWithValidChildren = availablePages.some(
                nav =>
                    nav.subLinks &&
                    nav.subLinks.length > 0 &&
                    nav.subLinks.some(sub =>
                        sub.route.startsWith(routePath + '/')
                    )
            )

            const matchedNav = availablePages.find(
                nav =>
                    nav.route === routePath ||
                    nav.subLinks.some(sub => sub.route === routePath)
            )

            // Find if any parent has this as a sublink
            const parentNav = availablePages.find(
                nav =>
                    nav.subLinks &&
                    nav.subLinks.some(sub => sub.route === routePath)
            )

            const label =
                matchedNav?.subLinks.find(sub => sub.route === routePath)
                    ?.label ||
                matchedNav?.label ||
                (routePath === '/services' ? 'Services' : segment) // Special case for services

            return {
                route: routePath,
                label: label.charAt(0).toUpperCase() + label.slice(1),
                canVisit: matchedNav?.canVisit || isParentWithValidChildren,
                isValid:
                    matchedNav !== undefined ||
                    isParentWithValidChildren ||
                    !!parentNav
            }
        })

    if (pathname === '/') return <div className="" />

    return (
        <Breadcrumb className="absolute w-full z-10 top-[6rem] hidden lg:block">
            <BreadcrumbList className="max-w-custom w-full mx-auto px-6 py-4 bg-transparent ">
                <BreadcrumbItem>
                    <BreadcrumbLink
                        asChild
                        className="text-black-muted font-bold hover:text-primary"
                    >
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {showSingle404 ? (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <span className="text-black font-bold">404</span>
                        </BreadcrumbItem>
                    </>
                ) : (
                    breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1
                        return (
                            <Fragment key={index}>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {isLast ||
                                    !crumb.canVisit ||
                                    crumb.route === '/services' ? (
                                        <span
                                            className={cn(
                                                'text-primary font-semibold',
                                                isLast
                                                    ? 'text-primary'
                                                    : 'text-black-muted'
                                            )}
                                        >
                                            {crumb.isValid ? crumb.label : 404}
                                        </span>
                                    ) : (
                                        <BreadcrumbLink
                                            asChild
                                            className={
                                                isLast
                                                    ? 'text-primary'
                                                    : 'text-black-muted'
                                            }
                                        >
                                            <Link href={crumb.route}>
                                                {crumb.isValid
                                                    ? crumb.label
                                                    : 404}
                                            </Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </Fragment>
                        )
                    })
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
