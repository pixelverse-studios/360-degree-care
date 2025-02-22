'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { navLinks } from '@/utils/header'
import HamburgerMenu from './Hamburger'
import Logo from '../Logo'

export function Header() {
    const pathname = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-foreground z-50">
            <div className="max-w-[var(--max-width)] mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/">
                    <Logo />
                </Link>

                {/* --- DESKTOP --- */}
                <nav className="hidden lg:block">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-6">
                            {navLinks.map(link => {
                                const isActive = pathname === link.route

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
                            <Button variant="cta" className="rounded-3xl">
                                Call To Action
                            </Button>
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
                        'fixed inset-x-0 top-[65px] bg-[hsl(var(--nav))] border-b-gray-600 lg:hidden',
                        'transition-[transform,opacity] duration-300 ease-in-out',
                        isMobileMenuOpen
                            ? 'translate-y-0 opacity-100 pointer-events-auto'
                            : '-translate-y-full opacity-0 pointer-events-none'
                    )}
                >
                    <nav className="max-w-[var(--max-width)] mx-auto px-6 py-4 bg-foreground">
                        <ul className="space-y-4">
                            {navLinks.map(link => {
                                const isActive = pathname === link.route

                                return (
                                    <li key={link.label}>
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
                                    </li>
                                )
                            })}
                            <Button variant="cta" className="rounded-3xl">
                                Call To Action
                            </Button>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
