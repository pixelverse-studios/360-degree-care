'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { availablePages } from '@/utils/routes'
import { generateBreadcrumbSchema } from '@/lib/seo/breadcrumb-schema'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

type Page = {
    route: string
    label: string
    canVisit: boolean
    subLinks: Page[]
    hasDynamicChildren?: boolean
}

const findPageByRoute = (pages: Page[], route: string): Page | null => {
    for (const page of pages) {
        if (page.route === route) return page
        if (page.subLinks && page.subLinks.length > 0) {
            const foundInSublinks = findPageByRoute(page.subLinks, route)
            if (foundInSublinks) return foundInSublinks
        }
    }
    return null
}

const formatSegmentAsLabel = (segment: string): string => {
    if (!segment) return ''
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export default function Breadcrumbs() {
    const [isMounted, setIsMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (pathname === '/' || !isMounted) return <div className="" />

    const pathSegments = pathname.split('/').filter(Boolean)

    const breadcrumbs = pathSegments
        .map((segment, index) => {
            const currentPath = `/${pathSegments.slice(0, index + 1).join('/')}`
            const parentPath = `/${pathSegments.slice(0, index).join('/')}`

            const page = findPageByRoute(availablePages as Page[], currentPath)
            const parentPage = findPageByRoute(
                availablePages as Page[],
                parentPath === '/' ? '' : parentPath
            )

            if (page) {
                return {
                    route: currentPath,
                    label: page.label,
                    canVisit: page.canVisit ?? true,
                    isValid: true
                }
            } else if (parentPage?.hasDynamicChildren) {
                return {
                    route: currentPath,
                    label: formatSegmentAsLabel(segment),
                    canVisit: true,
                    isValid: true
                }
            } else {
                return {
                    route: currentPath,
                    label: '404',
                    isValid: false,
                    canVisit: false
                }
            }
        })
        .filter((_, index) => {
            if (pathname.startsWith('/services/') && pathSegments.length > 2) {
                return index < 2
            }
            return true
        })

    const is404Page = breadcrumbs.length > 0 && !breadcrumbs[0].isValid

    // Generate JSON-LD schema for valid breadcrumbs
    const breadcrumbSchema =
        !is404Page && breadcrumbs.length > 0
            ? generateBreadcrumbSchema(
                  breadcrumbs.map(b => ({ route: b.route, label: b.label }))
              )
            : null

    return (
        <>
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema)
                    }}
                />
            )}
            <Breadcrumb className="absolute w-full z-10 top-[10rem] hidden lg:block">
                <BreadcrumbList className="max-w-custom w-full mx-auto px-6 py-4 bg-transparent">
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            asChild
                            className="text-black-muted font-bold hover:text-primary"
                        >
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {is404Page ? (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <span className="text-black font-bold">
                                    404
                                </span>
                            </BreadcrumbItem>
                        </>
                    ) : (
                        breadcrumbs.map((crumb, index) => {
                            const isLast = index === breadcrumbs.length - 1

                            return (
                                <Fragment key={crumb.route}>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        {isLast || !crumb.canVisit ? (
                                            <span
                                                className={cn(
                                                    'font-semibold',
                                                    isLast
                                                        ? 'text-primary'
                                                        : 'text-black-muted'
                                                )}
                                            >
                                                {crumb.label}
                                            </span>
                                        ) : (
                                            <BreadcrumbLink
                                                asChild
                                                className="text-black-muted font-bold hover:text-primary"
                                            >
                                                <Link href={crumb.route}>
                                                    {crumb.label}
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
        </>
    )
}
