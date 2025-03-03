'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronUp } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { navLinks } from '@/utils/routes'
import HamburgerMenu from './Hamburger'
import Logo from '../Logo'
import CallToAction from '../CallToAction'

export function Header() {
    const pathname = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)

    console.log(pathname.includes('/services/') && 'text-primary')

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-primary-foreground z-50 border-b border-b-gray-300">
            <div className="max-w-[var(--max-width)] mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/">
                    <Logo invert={false} />
                </Link>

                {/* --- DESKTOP --- */}
                <nav className="hidden lg:block">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-6">
                            {navLinks.map(link => {
                                const isActive = pathname === link.route
                                const hasSubs = link.subLinks.length > 0

                                if (hasSubs) {
                                    return (
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger
                                                className={cn(
                                                    'text-md text-black font-bold',
                                                    pathname.includes(
                                                        '/services/'
                                                    ) && 'text-primary'
                                                )}
                                            >
                                                {link.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4">
                                                    {link.subLinks.map(sub => (
                                                        <li key={sub.label}>
                                                            <NavigationMenuLink
                                                                asChild
                                                            >
                                                                <Link
                                                                    href={
                                                                        sub.route
                                                                    }
                                                                    className={cn(
                                                                        'block p-3 rounded-md hover:text-primary duration-300 ease-in-out nav-link w-fit',
                                                                        pathname ===
                                                                            sub.route
                                                                            ? 'text-primary'
                                                                            : ''
                                                                    )}
                                                                >
                                                                    <div className="text-md font-medium mb-1">
                                                                        {
                                                                            sub.label
                                                                        }
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    )
                                }

                                return (
                                    <NavigationMenuItem key={link.label}>
                                        <Link
                                            href={link.route}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={cn(
                                                    'nav-link',
                                                    isActive && 'active'
                                                )}
                                            >
                                                {link.label}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                )
                            })}
                            <CallToAction buttonLabel="Get In Touch" />
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                <HamburgerMenu
                    isOpen={isMobileMenuOpen}
                    setIsOpen={setIsMobileMenuOpen}
                />
                {/* --- MOBILE --- */}
                <div
                    className={cn(
                        'fixed inset-x-0 top-[65px] bg-primary-fore border-b border-b-gray-300 lg:hidden',
                        'transition-[transform,opacity] duration-300 ease-in-out',
                        isMobileMenuOpen
                            ? 'translate-y-0 opacity-100 pointer-events-auto'
                            : '-translate-y-full opacity-0 pointer-events-none'
                    )}
                >
                    <nav className="max-w-[var(--max-width)] mx-auto px-6 py-4 bg-primary-foreground shadow-md">
                        <ul className="space-y-4">
                            {navLinks.map(link => {
                                const isActive = pathname === link.route
                                const hasSubs = link.subLinks.length > 0

                                return (
                                    <li key={link.label}>
                                        {hasSubs ? (
                                            <div>
                                                <button
                                                    className="flex items-center justify-between w-fit text-md rounded-md font-bold"
                                                    onClick={() =>
                                                        setIsServicesOpen(
                                                            !isServicesOpen
                                                        )
                                                    }
                                                >
                                                    {link.label}
                                                    <ChevronUp
                                                        className={cn(
                                                            'h-4 w-4 transition-transform duration-200',
                                                            isServicesOpen &&
                                                                'rotate-180'
                                                        )}
                                                    />
                                                </button>
                                                <div
                                                    className={cn(
                                                        'grid transition-[grid-template-rows,opacity] duration-200 ease-in-out',
                                                        isServicesOpen
                                                            ? 'grid-rows-[1fr] opacity-100'
                                                            : 'grid-rows-[0fr] opacity-0'
                                                    )}
                                                >
                                                    <div className="overflow-hidden">
                                                        <ul className="pl-4 py-2 space-y-4 mt-2">
                                                            {link.subLinks.map(
                                                                sub => (
                                                                    <li>
                                                                        <Link
                                                                            className={cn(
                                                                                'nav-link',
                                                                                isActive &&
                                                                                    'active'
                                                                            )}
                                                                            href={
                                                                                sub.route
                                                                            }
                                                                        >
                                                                            {
                                                                                sub.label
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.route}
                                                className={cn(
                                                    'nav-link',
                                                    isActive && 'active'
                                                )}
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                            <CallToAction buttonLabel="Get In Touch" />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
