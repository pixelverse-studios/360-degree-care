'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type AnimationVariant = 'fadeIn' | 'slideLeft' | 'slideUp' | 'zoom'

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    animation?: AnimationVariant
    delay?: number
    duration?: number
    threshold?: number
    rootMargin?: string
}

const supportsReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

const hiddenClasses: Record<AnimationVariant, string> = {
    fadeIn: 'opacity-0',
    slideLeft: 'opacity-0 -translate-x-6',
    slideUp: 'opacity-0 translate-y-6',
    zoom: 'opacity-0 scale-95'
}

const visibleClasses: Record<AnimationVariant, string> = {
    fadeIn: 'opacity-100',
    slideLeft: 'opacity-100 translate-x-0',
    slideUp: 'opacity-100 translate-y-0',
    zoom: 'opacity-100 scale-100'
}

const DURATION_CLASS_MAP: Record<number, string> = {
    0: 'duration-0',
    75: 'duration-75',
    100: 'duration-100',
    150: 'duration-150',
    200: 'duration-200',
    250: 'duration-[250ms]',
    300: 'duration-300',
    350: 'duration-[350ms]',
    400: 'duration-[400ms]',
    450: 'duration-[450ms]',
    500: 'duration-500',
    600: 'duration-[600ms]',
    700: 'duration-700',
    800: 'duration-[800ms]',
    900: 'duration-[900ms]',
    1000: 'duration-1000'
}

const DELAY_CLASS_MAP: Record<number, string> = {
    0: 'delay-0',
    75: 'delay-75',
    100: 'delay-100',
    150: 'delay-150',
    200: 'delay-200',
    250: 'delay-[250ms]',
    300: 'delay-300',
    350: 'delay-[350ms]',
    400: 'delay-[400ms]',
    450: 'delay-[450ms]',
    500: 'delay-500',
    600: 'delay-[600ms]',
    700: 'delay-700',
    800: 'delay-[800ms]',
    900: 'delay-[900ms]',
    1000: 'delay-1000'
}

const DURATION_OPTIONS = Object.keys(DURATION_CLASS_MAP).map(Number)
const DELAY_OPTIONS = Object.keys(DELAY_CLASS_MAP).map(Number)

const getClosestTransitionClass = (
    valueInSeconds: number,
    map: Record<number, string>,
    fallbackMs: number,
    options: number[]
) => {
    const msValue = Math.max(0, Math.round(valueInSeconds * 1000))
    let closest = options[0]

    for (const option of options) {
        const currentDiff = Math.abs(msValue - option)
        const bestDiff = Math.abs(msValue - closest)
        if (currentDiff < bestDiff) {
            closest = option
        }
    }

    return map[closest] ?? map[fallbackMs]
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'slideLeft',
    delay = 0.2,
    duration = 0.4,
    threshold = 0.1,
    rootMargin = '0px'
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [hasAnimated, setHasAnimated] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const reduced = supportsReducedMotion()
        setPrefersReducedMotion(reduced)

        if (reduced) {
            setHasAnimated(true)
            return
        }

        const element = ref.current
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setHasAnimated(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold, rootMargin }
        )

        if (element) {
            observer.observe(element)
        }

        return () => {
            observer.disconnect()
        }
    }, [threshold, rootMargin])

    const effectiveDuration = useMemo(
        () => (prefersReducedMotion ? duration * 0.5 : duration),
        [duration, prefersReducedMotion]
    )

    const effectiveDelay = prefersReducedMotion ? 0 : delay
    const durationClass = getClosestTransitionClass(
        effectiveDuration,
        DURATION_CLASS_MAP,
        400,
        DURATION_OPTIONS
    )
    const delayClass = getClosestTransitionClass(
        effectiveDelay,
        DELAY_CLASS_MAP,
        200,
        DELAY_OPTIONS
    )

    const active = prefersReducedMotion || hasAnimated

    return (
        <div
            ref={ref}
            className={cn(
                'will-change-[opacity,transform] transition-all ease-out',
                durationClass,
                delayClass,
                hiddenClasses[animation],
                active ? visibleClasses[animation] : '',
                className
            )}
        >
            {children}
        </div>
    )
}
