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

    const transitionDuration = useMemo(() => {
        const effective = prefersReducedMotion ? duration * 0.5 : duration
        return `${effective}s`
    }, [duration, prefersReducedMotion])

    const transitionDelay = useMemo(() => {
        if (prefersReducedMotion) return '0s'
        return `${delay}s`
    }, [delay, prefersReducedMotion])

    const active = prefersReducedMotion || hasAnimated

    return (
        <div
            ref={ref}
            className={cn(
                'will-change-[opacity,transform] transition-all ease-out',
                hiddenClasses[animation],
                active ? visibleClasses[animation] : '',
                className
            )}
            style={{
                transitionDuration,
                transitionDelay
            }}
        >
            {children}
        </div>
    )
}
