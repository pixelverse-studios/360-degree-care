'use client'

import { useState, useRef, useEffect } from 'react'
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
import { cn } from '@/lib/utils'
import { navLinks } from '@/utils/routes'
import Logo from '../Logo'
import CallToAction from '../CallToAction'

interface HamburgerProps {
    isOpen: boolean
    toggleMenu: () => void
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerProps) => {
    return (
        <button
            className="group lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none rounded-full transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md hover:scale-105"
            onClick={e => {
                e.stopPropagation()
                toggleMenu()
            }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
        >
            <span
                className={cn(
                    'block w-6 h-0.5 transition-all duration-300',
                    isOpen
                        ? 'translate-y-2 rotate-45 bg-[var(--primary)]'
                        : 'bg-black group-hover:bg-[var(--primary)]'
                )}
            />
            <span
                className={cn(
                    'block w-6 h-0.5 transition-all duration-300',
                    isOpen
                        ? 'opacity-0 bg-[var(--primary)]'
                        : 'bg-black group-hover:bg-[var(--primary)]'
                )}
            />
            <span
                className={cn(
                    'block w-6 h-0.5 transition-all duration-300',
                    isOpen
                        ? '-translate-y-2 -rotate-45 bg-[var(--primary)]'
                        : 'bg-black group-hover:bg-[var(--primary)]'
                )}
            />
        </button>
    )
}

export function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)

    // Refs for the navigation elements
    const headerRef = useRef<HTMLElement>(null)
    const navRef = useRef<HTMLDivElement>(null)

    // Toggle mobile menu - fixed to be a parameterless function
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState)
    }

    // Handle clicks outside of the entire navigation
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Only process if menu is open
            if (!isMobileMenuOpen) return

            // Check if click is outside the entire header
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false)
            }
        }

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside)

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMobileMenuOpen])

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 w-full bg-white-muted z-50 border-b border-b-gray-300"
        >
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
                                const hasSubs =
                                    link.subLinks && link.subLinks.length > 0

                                if (hasSubs) {
                                    return (
                                        <NavigationMenuItem key={link.label}>
                                            <NavigationMenuTrigger
                                                className={cn(
                                                    'text-md text-black font-bold text-xl',
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
                                                                        'block p-3 rounded-md hover:text-primary duration-300 ease-in-out nav-link w-fit text-xl',
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
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={link.route}
                                                className={cn(
                                                    'nav-link',
                                                    isActive && 'active'
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                            })}
                            <CallToAction buttonLabel="Get In Touch" />
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* Hamburger Menu Button */}
                <HamburgerMenu
                    isOpen={isMobileMenuOpen}
                    toggleMenu={toggleMobileMenu}
                />

                {/* --- MOBILE MENU --- */}
                <div
                    ref={navRef}
                    className={cn(
                        'fixed inset-x-0 top-[4rem] bg-primary-fore border-b border-b-gray-300 lg:hidden',
                        'transition-[transform,opacity] duration-300 ease-in-out',
                        isMobileMenuOpen
                            ? 'translate-y-0 opacity-100 pointer-events-auto'
                            : '-translate-y-full opacity-0 pointer-events-none'
                    )}
                >
                    <nav className="max-w-[var(--max-width)] mx-auto px-6 py-4 bg-white shadow-md">
                        <ul className="space-y-4">
                            {navLinks.map(link => {
                                const isActive = pathname === link.route
                                const hasSubs =
                                    link.subLinks && link.subLinks.length > 0

                                return (
                                    <li key={link.label}>
                                        {hasSubs ? (
                                            <div>
                                                <button
                                                    className="flex items-center justify-between w-fit text-md rounded-md font-bold text-xl"
                                                    onClick={e => {
                                                        e.stopPropagation()
                                                        setIsServicesOpen(
                                                            !isServicesOpen
                                                        )
                                                    }}
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
                                                                    <li
                                                                        key={
                                                                            sub.label
                                                                        }
                                                                    >
                                                                        <Link
                                                                            className={cn(
                                                                                'nav-link',
                                                                                pathname ===
                                                                                    sub.route
                                                                                    ? 'text-primary'
                                                                                    : ''
                                                                            )}
                                                                            href={
                                                                                sub.route
                                                                            }
                                                                            onClick={e => {
                                                                                e.stopPropagation()
                                                                                setIsMobileMenuOpen(
                                                                                    false
                                                                                )
                                                                            }}
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
                                                onClick={e => {
                                                    e.stopPropagation()
                                                    setIsMobileMenuOpen(false)
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                            <li>
                                <div onClick={e => e.stopPropagation()}>
                                    <CallToAction buttonLabel="Get In Touch" />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
