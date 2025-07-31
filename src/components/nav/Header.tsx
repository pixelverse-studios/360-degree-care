'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import { navLinks } from '@/utils/routes'
import Logo from '../Logo'
import { Button } from '../ui/button'
import { FACEBOOK, INSTA, PHONE } from '@/utils/constants'
import CallToAction from '../CallToAction'

function ContactLinks() {
    return (
        <div className="flex gap-4">
            <Button
                variant="pillPrimary"
                size="sm"
                asChild
                className="rounded-3xl h-10 text-sm lg:text-initial"
            >
                <a
                    href={`tel:${PHONE}`}
                    id="header-phone-btn"
                    className="flex items-center gap-2 text-sm lg:text-initial"
                >
                    <Phone size={16} />
                    {PHONE}
                </a>
            </Button>
            <a href={FACEBOOK} target="_blank" className="nav-social-icon">
                <FaFacebookF size={20} />
            </a>
            <a href={INSTA} target="_blank" className="nav-social-icon">
                <FaInstagram size={24} />
            </a>
        </div>
    )
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md"
        >
            <TopBar />
            <NavBar
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                closeMobileMenu={() => setIsMobileMenuOpen(false)}
            />
        </header>
    )
}

const TopBar = () => (
    <div className="hidden lg:block bg-white-bright border-b border-gray-200 h-30">
        <div className="max-w-custom mx-auto px-6 py-2 flex items-center justify-between">
            <Link href="/">
                <Logo invert={false} />
            </Link>
            <div className="flex flex-col-reverse items-end max-w-80 gap-2 text-right">
                <p className="text-sm text-blue-dark font-medium italic">
                    Independent & family-owned agency providing exceptional home
                    care in New Jersey.
                </p>
                <ContactLinks />
            </div>
        </div>
    </div>
)

interface NavBarProps {
    isMobileMenuOpen: boolean
    toggleMobileMenu: () => void
    closeMobileMenu: () => void
}

const NavBar = ({
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
}: NavBarProps) => (
    <div className="bg-white lg:bg-blue">
        <div className="max-w-custom mx-auto px-6 flex items-center justify-between h-16 lg:h-10">
            <div className="lg:hidden">
                <Link href="/">
                    <Logo size="md" />
                </Link>
            </div>

            <nav className="hidden lg:flex items-center justify-between w-full h-10">
                <DesktopNav />
                <CallToAction
                    buttonLabel="Get In Touch"
                    buttonClass="h-[1.75rem]"
                    type="general"
                    value=""
                    variant="pillPrimary"
                />
            </nav>

            <div className="lg:hidden">
                <HamburgerMenu
                    isOpen={isMobileMenuOpen}
                    toggleMenu={toggleMobileMenu}
                />
            </div>
        </div>
        <MobileNav isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
    </div>
)

const DesktopNav = () => {
    const pathname = usePathname()
    return (
        <ul className="flex items-center space-x-8">
            {navLinks.map(link => (
                <li key={link.label}>
                    {link.subLinks && link.subLinks.length > 0 ? (
                        <Dropdown
                            trigger={
                                <div
                                    className={cn(
                                        'flex items-center text-lg text-white font-medium hover:text-primary-muted transition-colors duration-300 cursor-pointer',
                                        link.subLinks.some(
                                            sub => sub.route === pathname
                                        ) && 'text-primary'
                                    )}
                                >
                                    {link.label}
                                    <ChevronDown className="ml-1 h-5 w-5" />
                                </div>
                            }
                            className="w-64"
                        >
                            <div className="p-2">
                                <ul className="space-y-1">
                                    {link.subLinks.map(sub => (
                                        <li key={sub.label}>
                                            <Link
                                                href={sub.route}
                                                className={cn(
                                                    'block p-3 rounded-md hover:bg-blue-dark hover:text-white transition-colors text-black cursor-pointer',
                                                    sub.route === pathname
                                                        ? 'text-primary font-semibold'
                                                        : ''
                                                )}
                                            >
                                                {sub.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Dropdown>
                    ) : (
                        <Link
                            href={link.route}
                            className={cn(
                                'text-lg text-white font-medium hover:text-primary transition-colors duration-300',
                                pathname === link.route && 'text-primary'
                            )}
                        >
                            {link.label}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    )
}

interface MobileNavProps {
    isOpen: boolean
    closeMenu: () => void
}

const MobileNav = ({ isOpen, closeMenu }: MobileNavProps) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isWisdomOpen, setIsWisdomOpen] = useState(false)

    return (
        <div
            className={cn(
                'absolute left-0 w-full bg-white shadow-lg lg:hidden transition-transform duration-300 ease-in-out',
                isOpen ? 'translate-y-0' : '-translate-y-[150%]'
            )}
        >
            <ul className="flex flex-col p-6 space-y-4">
                {navLinks.map(link => (
                    <li key={link.label}>
                        {link.subLinks && link.subLinks.length > 0 ? (
                            <div>
                                <button
                                    className="flex items-center justify-between w-full text-lg font-bold"
                                    onClick={() =>
                                        link.label === 'Services'
                                            ? setIsServicesOpen(!isServicesOpen)
                                            : setIsWisdomOpen(!isWisdomOpen)
                                    }
                                >
                                    <span>{link.label}</span>
                                    <ChevronDown
                                        className={cn(
                                            'h-5 w-5 transition-transform text-black',
                                            (link.label === 'Services' &&
                                                isServicesOpen) ||
                                                (link.label ===
                                                    'Wisdom Vault' &&
                                                    isWisdomOpen)
                                                ? 'rotate-180'
                                                : ''
                                        )}
                                    />
                                </button>
                                <div
                                    className={cn(
                                        'overflow-hidden transition-all duration-300',
                                        (link.label === 'Services' &&
                                            isServicesOpen) ||
                                            (link.label === 'Wisdom Vault' &&
                                                isWisdomOpen)
                                            ? 'max-h-96'
                                            : 'max-h-0'
                                    )}
                                >
                                    <ul className="pl-4 pt-2 space-y-2">
                                        {link.subLinks.map(sub => (
                                            <li key={sub.label}>
                                                <Link
                                                    href={sub.route}
                                                    className="block text-gray-700 hover:text-primary"
                                                    onClick={closeMenu}
                                                >
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link
                                href={link.route}
                                className="text-lg font-bold"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
                <li>
                    <CallToAction
                        buttonLabel="Get In Touch"
                        type="general"
                        value=""
                        variant="pillPrimary"
                    />
                </li>
                <li className="border-t border-t-green pt-4">
                    <ContactLinks />
                </li>
            </ul>
        </div>
    )
}

const HamburgerMenu = ({
    isOpen,
    toggleMenu
}: {
    isOpen: boolean
    toggleMenu: () => void
}) => (
    <button
        onClick={toggleMenu}
        className="z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5 transition-all duration-200 hover:bg-gray-200 rounded-xl"
    >
        <span
            className={cn(
                'block w-6 h-0.5 bg-primary transition-transform duration-300',
                isOpen && 'translate-y-2 rotate-45'
            )}
        />
        <span
            className={cn(
                'block w-6 h-0.5 bg-primary transition-opacity duration-300',
                isOpen && 'opacity-0'
            )}
        />
        <span
            className={cn(
                'block w-6 h-0.5 bg-primary transition-transform duration-300',
                isOpen && '-translate-y-2 -rotate-45'
            )}
        />
    </button>
)

const Dropdown = ({
    trigger,
    children,
    className
}: {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setIsOpen(true)
    }
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 200)
    }

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {trigger}
            <div
                className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white border border-gray-200 rounded-lg shadow-xl transition-all duration-300 ease-in-out z-50',
                    isOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none',
                    className
                )}
            >
                {children}
            </div>
        </div>
    )
}
