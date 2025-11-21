'use client'

type TocItem = {
    id: string
    label: string
}

type SeoTocNavProps = {
    items: TocItem[]
}

export function SeoTocNav({ items }: SeoTocNavProps) {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <nav className="sticky top-48 space-y-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                On this page
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
                {items.map(item => (
                    <li key={item.id}>
                        <button
                            type="button"
                            onClick={() => scrollTo(item.id)}
                            className="w-full text-left rounded-lg px-2 py-1 transition hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
