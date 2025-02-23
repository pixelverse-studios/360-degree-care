interface HamburgerProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export default function HamburgerMenu({ isOpen, setIsOpen }: HamburgerProps) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative w-10 h-10 flex flex-col items-center justify-center p-2 rounded-lg bg-primary-foreground text-white shadow-md border border-primary lg:hidden transition-colors duration-300 hover:bg-primary hover:text-background hover:border-background"
        >
            <span
                className={`absolute block w-6 h-0.5 bg-primary rounded transition-transform duration-300 group-hover:bg-background ${
                    isOpen ? 'rotate-45' : '-translate-y-2'
                }`}
            ></span>
            <span
                className={`absolute block w-6 h-0.5 bg-primary rounded transition-opacity duration-200 group-hover:bg-background ${
                    isOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`absolute block w-6 h-0.5 bg-primary rounded transition-transform duration-300 group-hover:bg-background ${
                    isOpen ? '-rotate-45' : 'translate-y-2'
                }`}
            ></span>
        </button>
    )
}
