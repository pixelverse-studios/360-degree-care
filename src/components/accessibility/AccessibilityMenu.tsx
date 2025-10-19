'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
    Settings,
    RefreshCw,
    ZoomIn,
    ZoomOut,
    Circle,
    Contrast,
    Eye,
    EyeOff,
    Type,
    Underline
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type ToggleSettingKey =
    | 'grayscale'
    | 'highContrast'
    | 'negativeContrast'
    | 'lightBackground'
    | 'underlineLinks'
    | 'readableFont'

interface AccessibilitySettings {
    fontScaleIndex: number
    grayscale: boolean
    highContrast: boolean
    negativeContrast: boolean
    lightBackground: boolean
    underlineLinks: boolean
    readableFont: boolean
}

const STORAGE_KEY = 'accessibility-preferences'
const FONT_SCALE_STEPS = [0.9, 1, 1.15, 1.3, 1.45]
const DEFAULT_SETTINGS: AccessibilitySettings = {
    fontScaleIndex: 1,
    grayscale: false,
    highContrast: false,
    negativeContrast: false,
    lightBackground: false,
    underlineLinks: false,
    readableFont: false
}

const clampScaleIndex = (index: number) =>
    Math.min(Math.max(index, 0), FONT_SCALE_STEPS.length - 1)

const applyDocumentPreferences = (settings: AccessibilitySettings) => {
    if (typeof document === 'undefined') return

    const root = document.documentElement

    root.style.setProperty(
        '--font-scale',
        FONT_SCALE_STEPS[settings.fontScaleIndex].toString()
    )

    const toggleClass = (className: string, enabled: boolean) => {
        root.classList.toggle(className, enabled)
    }

    toggleClass('accessibility-grayscale', settings.grayscale)
    toggleClass('accessibility-high-contrast', settings.highContrast)
    toggleClass('accessibility-negative-contrast', settings.negativeContrast)
    toggleClass('accessibility-light-background', settings.lightBackground)
    toggleClass('accessibility-underline-links', settings.underlineLinks)
    toggleClass('accessibility-readable-font', settings.readableFont)
}

const loadPreferences = (): AccessibilitySettings => {
    if (typeof window === 'undefined') return DEFAULT_SETTINGS

    try {
        const stored = window.localStorage.getItem(STORAGE_KEY)
        if (!stored) return DEFAULT_SETTINGS

        const parsed = JSON.parse(stored) as AccessibilitySettings
        return {
            ...DEFAULT_SETTINGS,
            ...parsed,
            fontScaleIndex: clampScaleIndex(parsed.fontScaleIndex)
        }
    } catch {
        return DEFAULT_SETTINGS
    }
}

const savePreferences = (settings: AccessibilitySettings) => {
    if (typeof window === 'undefined') return
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
        // Ignore storage failures (private browsing, etc.)
    }
}

type MenuAction = {
    label: string
    icon: LucideIcon
    action: 'increase' | 'decrease'
}

type MenuToggle = {
    label: string
    icon: LucideIcon
    toggleKey: ToggleSettingKey
}

type MenuItem = MenuAction | MenuToggle

const MENU_SECTIONS: {
    title: string
    items: MenuItem[]
}[] = [
    {
        title: 'Text Size',
        items: [
            {
                label: 'Increase Text',
                icon: ZoomIn,
                action: 'increase'
            },
            {
                label: 'Decrease Text',
                icon: ZoomOut,
                action: 'decrease'
            }
        ]
    },
    {
        title: 'Visual Adjustments',
        items: [
            {
                label: 'Grayscale',
                icon: Circle,
                toggleKey: 'grayscale'
            },
            {
                label: 'High Contrast',
                icon: Contrast,
                toggleKey: 'highContrast'
            },
            {
                label: 'Negative Contrast',
                icon: EyeOff,
                toggleKey: 'negativeContrast'
            },
            {
                label: 'Light Background',
                icon: Eye,
                toggleKey: 'lightBackground'
            },
            {
                label: 'Links Underline',
                icon: Underline,
                toggleKey: 'underlineLinks'
            },
            {
                label: 'Readable Font',
                icon: Type,
                toggleKey: 'readableFont'
            }
        ]
    }
]

export function AccessibilityMenu() {
    const [open, setOpen] = useState(false)
    const [settings, setSettings] =
        useState<AccessibilitySettings>(DEFAULT_SETTINGS)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const initial = loadPreferences()
        setSettings(initial)
        applyDocumentPreferences(initial)
    }, [])

    useEffect(() => {
        applyDocumentPreferences(settings)
        savePreferences(settings)
    }, [settings])

    const increaseText = () =>
        setSettings(prev => ({
            ...prev,
            fontScaleIndex: clampScaleIndex(prev.fontScaleIndex + 1)
        }))

    const decreaseText = () =>
        setSettings(prev => ({
            ...prev,
            fontScaleIndex: clampScaleIndex(prev.fontScaleIndex - 1)
        }))

    const handleToggle = (key: ToggleSettingKey) => {
        setSettings(prev => {
            const next = { ...prev, [key]: !prev[key] }

            if (key === 'highContrast' && !prev.highContrast) {
                next.negativeContrast = false
                next.lightBackground = false
            }

            if (key === 'negativeContrast' && !prev.negativeContrast) {
                next.highContrast = false
                next.lightBackground = false
            }

            if (key === 'lightBackground' && !prev.lightBackground) {
                next.highContrast = false
                next.negativeContrast = false
            }

            return next
        })
    }

    const resetPreferences = () => {
        setSettings(DEFAULT_SETTINGS)
    }

    const fontScaleLabel = useMemo(() => {
        const multiplier = FONT_SCALE_STEPS[settings.fontScaleIndex]
        const percentage = Math.round(multiplier * 100)
        return `${percentage}%`
    }, [settings.fontScaleIndex])

    const canIncrease = settings.fontScaleIndex < FONT_SCALE_STEPS.length - 1
    const canDecrease = settings.fontScaleIndex > 0

    useEffect(() => {
        if (!open) return

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target as Node | null
            if (!target) return

            if (
                menuRef.current?.contains(target) ||
                triggerRef.current?.contains(target)
            ) {
                return
            }

            setOpen(false)
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false)
                triggerRef.current?.focus()
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open])

    return (
        <div
            className={cn(
                'fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3'
            )}
        >
            {open && (
                <div
                    id="accessibility-menu"
                    ref={menuRef}
                    className="w-64 rounded-xl border border-blue/20 bg-white p-4 shadow-xl ring-1 ring-blue/10"
                >
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-blue">
                            Accessibility Tools
                        </h2>
                        <span className="rounded-full bg-blue/10 px-2 py-0.5 text-xs font-medium text-blue">
                            Text {fontScaleLabel}
                        </span>
                    </div>
                    <div className="space-y-4 text-sm">
                        {MENU_SECTIONS.map(section => (
                            <div key={section.title} className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    {section.title}
                                </p>
                                <div className="space-y-1.5">
                                    {section.items.map(item => {
                                        const Icon = item.icon

                                        if (
                                            'action' in item &&
                                            item.action === 'increase'
                                        ) {
                                            return (
                                                <button
                                                    key={item.label}
                                                    type="button"
                                                    onClick={increaseText}
                                                    disabled={!canIncrease}
                                                    className={cn(
                                                        'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue',
                                                        canIncrease
                                                            ? 'hover:bg-blue/5'
                                                            : 'cursor-not-allowed opacity-50'
                                                    )}
                                                >
                                                    <Icon
                                                        className="h-4 w-4 text-blue"
                                                        aria-hidden="true"
                                                    />
                                                    <span>{item.label}</span>
                                                </button>
                                            )
                                        }

                                        if (
                                            'action' in item &&
                                            item.action === 'decrease'
                                        ) {
                                            return (
                                                <button
                                                    key={item.label}
                                                    type="button"
                                                    onClick={decreaseText}
                                                    disabled={!canDecrease}
                                                    className={cn(
                                                        'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue',
                                                        canDecrease
                                                            ? 'hover:bg-blue/5'
                                                            : 'cursor-not-allowed opacity-50'
                                                    )}
                                                >
                                                    <Icon
                                                        className="h-4 w-4 text-blue"
                                                        aria-hidden="true"
                                                    />
                                                    <span>{item.label}</span>
                                                </button>
                                            )
                                        }

                                        const toggleItem = item as MenuToggle
                                        const ToggleIcon = toggleItem.icon
                                        const isActive =
                                            settings[toggleItem.toggleKey]

                                        return (
                                            <button
                                                key={toggleItem.label}
                                                type="button"
                                                aria-pressed={isActive}
                                                onClick={() =>
                                                    handleToggle(
                                                        toggleItem.toggleKey
                                                    )
                                                }
                                                className={cn(
                                                    'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue',
                                                    isActive
                                                        ? 'bg-blue text-white'
                                                        : 'hover:bg-blue/5'
                                                )}
                                            >
                                                <ToggleIcon
                                                    className={cn(
                                                        'h-4 w-4',
                                                        isActive
                                                            ? 'text-white'
                                                            : 'text-blue'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                <span>{toggleItem.label}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={resetPreferences}
                            className="flex w-full items-center gap-3 rounded-lg border border-blue/20 px-3 py-2 text-left text-sm font-medium text-blue transition hover:bg-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                        >
                            <RefreshCw className="h-4 w-4" aria-hidden="true" />
                            Reset
                        </button>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                aria-expanded={open}
                aria-controls="accessibility-menu"
                ref={triggerRef}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-lg transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/70"
            >
                <Settings className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle accessibility menu</span>
                <span className="pointer-events-none absolute right-full mr-3 rounded-lg bg-blue text-white px-4 py-1.5 text-sm font-medium opacity-0 w-fit whitespace-nowrap shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 rtl:left-full rtl:right-auto rtl:ml-3">
                    Accessibility Menu
                </span>
            </button>
        </div>
    )
}
