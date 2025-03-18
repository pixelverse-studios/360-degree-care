'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
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

    const breadcrumbs = pathSegments.map((segment, index) => {
        const routePath = '/' + pathSegments.slice(0, index + 1).join('/')
        const matchedNav = availablePages.find(
            nav =>
                nav.route === routePath ||
                nav.subLinks.some(sub => sub.route === routePath)
        )

        const label =
            matchedNav?.subLinks.find(sub => sub.route === routePath)?.label ||
            matchedNav?.label ||
            segment

        return {
            route: routePath,
            label: label.charAt(0).toUpperCase() + label.slice(1),
            canVisit: matchedNav?.canVisit
        }
    })

    if (pathname === '/') return <div className="mt-[4.8rem]" />

    return (
        <Breadcrumb className="mt-[5.5rem] max-w-custom w-full mx-auto px-6 py-4 bg-transparent">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        asChild
                        className="text-black-muted font-bold hover:text-primary"
                    >
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1
                    return (
                        <Fragment key={index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem key={crumb.route}>
                                {index === breadcrumbs.length - 1 ||
                                !crumb.canVisit ? (
                                    <span
                                        className={cn(
                                            'text-primary font-semibold',
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
                                        className={
                                            isLast
                                                ? 'text-primary'
                                                : 'text-black-muted'
                                        }
                                    >
                                        <Link href={crumb.route}>
                                            {crumb.label}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
