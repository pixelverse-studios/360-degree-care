'use client'

import { cn } from '@/lib/utils'
import React, {
    useState,
    useEffect,
    useRef,
    ReactNode,
    RefObject,
    Children,
    isValidElement,
    cloneElement,
    useCallback
} from 'react'

interface AnimationProps {
    children: ReactNode
    delay?: number
}

interface SlideInProps extends AnimationProps {
    direction?: 'left' | 'right' | 'up' | 'down'
    className?: string
}

interface StaggeredProps {
    children: ReactNode
    className?: string
    childClass?: string
}

const clampDelay = (delay: number) => Math.max(delay, 0)

// Custom hook for intersection observer with proper typing
const useInView = (threshold = 0.1): [RefObject<HTMLDivElement>, boolean] => {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            { threshold }
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [threshold])

    return [ref, isInView]
}

const useDelayedVisibility = (isInViewState: boolean, delayMs: number) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | undefined

        if (isInViewState) {
            timeoutId = window.setTimeout(
                () => setIsActive(true),
                clampDelay(delayMs)
            )
        } else {
            setIsActive(false)
        }

        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [isInViewState, delayMs])

    return isActive
}

const useStaggeredVisibility = (
    isInViewState: boolean,
    itemCount: number,
    stepMs: number
) => {
    const [visibleCount, setVisibleCount] = useState(0)

    useEffect(() => {
        if (!isInViewState) {
            setVisibleCount(0)
            return
        }

        const timers = Array.from({ length: itemCount }).map((_, index) =>
            window.setTimeout(
                () => {
                    setVisibleCount(prev => Math.max(prev, index + 1))
                },
                clampDelay(index * stepMs)
            )
        )

        return () => {
            timers.forEach(timerId => window.clearTimeout(timerId))
        }
    }, [isInViewState, itemCount, stepMs])

    return useCallback((index: number) => index < visibleCount, [visibleCount])
}

const resolveSlideInHiddenClass = (direction: SlideInProps['direction']) => {
    switch (direction) {
        case 'right':
            return 'translate-x-6 opacity-0'
        case 'up':
            return '-translate-y-6 opacity-0'
        case 'down':
            return 'translate-y-6 opacity-0'
        case 'left':
        default:
            return '-translate-x-6 opacity-0'
    }
}

// Animation Option 1: Fade Up
const FadeUpSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 2: Slide In from sides
const SlideInSection: React.FC<SlideInProps> = ({
    children,
    direction = 'left',
    delay = 0,
    className
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive
                    ? 'translate-x-0 translate-y-0 opacity-100'
                    : resolveSlideInHiddenClass(direction),
                className
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 3: Scale and Fade
const ScaleFadeSection: React.FC<AnimationProps> = ({
    children,
    delay = 0
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 4: Staggered Children
const StaggeredSection: React.FC<StaggeredProps> = ({
    children,
    className,
    childClass
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const count = Children.count(children)
    const isItemActive = useStaggeredVisibility(isInViewState, count, 200)

    return (
        <div ref={ref} className={cn(className)}>
            {Children.map(children, (child, index) => (
                <div
                    key={index}
                    className={cn(
                        'transition-all duration-1000 ease-out',
                        isItemActive(index)
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6',
                        childClass ?? ''
                    )}
                >
                    {child}
                </div>
            ))}
        </div>
    )
}

// Animation Option 5: Blur to Focus
const BlurFocusSection: React.FC<AnimationProps> = ({
    children,
    delay = 0
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1200 ease-out',
                isActive
                    ? 'opacity-100 blur-0 translate-y-0'
                    : 'opacity-0 blur-sm translate-y-4'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 6: Rotate and Fade
const RotateFadeSection: React.FC<AnimationProps> = ({
    children,
    delay = 0
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-3 scale-95'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 7: Elastic Bounce
const ElasticSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000',
                isActive
                    ? 'opacity-100 translate-y-0 scale-100 ease-bouncy'
                    : 'opacity-0 translate-y-8 scale-90 ease-out'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 8: Slide and Fade from Bottom
const SlideUpSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInViewState] = useInView(0.15)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 9: Typewriter Effect
const TypewriterSection: React.FC<AnimationProps> = ({
    children,
    delay = 0
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)
    const [displayedContent, setDisplayedContent] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        let startTimeout: ReturnType<typeof setTimeout> | undefined
        let intervalId: ReturnType<typeof setInterval> | undefined
        let cursorTimeout: ReturnType<typeof setTimeout> | undefined

        if (isInViewState && isValidElement(children)) {
            const props = children.props as { children?: string }
            const text = props.children || ''

            if (typeof text === 'string') {
                setDisplayedContent('')
                setShowCursor(true)

                startTimeout = window.setTimeout(() => {
                    let index = 0
                    intervalId = window.setInterval(() => {
                        index += 1
                        setDisplayedContent(text.slice(0, index))

                        if (index >= text.length) {
                            if (intervalId) {
                                window.clearInterval(intervalId)
                            }
                            cursorTimeout = window.setTimeout(
                                () => setShowCursor(false),
                                1000
                            )
                        }
                    }, 50)
                }, clampDelay(delay))
            }
        } else {
            setDisplayedContent('')
            setShowCursor(true)
        }

        return () => {
            if (startTimeout) window.clearTimeout(startTimeout)
            if (intervalId) window.clearInterval(intervalId)
            if (cursorTimeout) window.clearTimeout(cursorTimeout)
        }
    }, [isInViewState, children, delay])

    if (isValidElement(children)) {
        const props = children.props as { children?: string }
        if (typeof props.children === 'string') {
            return (
                <div
                    ref={ref}
                    className={cn(
                        'transition-all duration-1000 ease-out',
                        isActive ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {cloneElement(children, {
                        children: displayedContent + (showCursor ? '|' : '')
                    } as any)}
                </div>
            )
        }
    }

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive ? 'opacity-100' : 'opacity-0'
            )}
        >
            {children}
        </div>
    )
}

const EnhancedTypewriterSection: React.FC<AnimationProps> = ({
    children,
    delay = 0
}) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)
    const [displayedText, setDisplayedText] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        let startTimeout: ReturnType<typeof setTimeout> | undefined
        let intervalId: ReturnType<typeof setInterval> | undefined
        let cursorTimeout: ReturnType<typeof setTimeout> | undefined

        const extractText = (element: ReactNode): string => {
            if (typeof element === 'string') return element
            if (Array.isArray(element)) return element.map(extractText).join('')
            if (isValidElement(element) && element.props?.children) {
                return extractText(element.props.children)
            }
            return ''
        }

        if (isInViewState && isValidElement(children)) {
            const fullText = extractText(children)
            setDisplayedText('')
            setShowCursor(true)

            startTimeout = window.setTimeout(() => {
                let index = 0
                intervalId = window.setInterval(() => {
                    index += 1
                    setDisplayedText(fullText.slice(0, index))

                    if (index >= fullText.length) {
                        if (intervalId) {
                            window.clearInterval(intervalId)
                        }
                        cursorTimeout = window.setTimeout(
                            () => setShowCursor(false),
                            1000
                        )
                    }
                }, 50)
            }, clampDelay(delay))
        } else {
            setDisplayedText('')
            setShowCursor(true)
        }

        return () => {
            if (startTimeout) window.clearTimeout(startTimeout)
            if (intervalId) window.clearInterval(intervalId)
            if (cursorTimeout) window.clearTimeout(cursorTimeout)
        }
    }, [isInViewState, children, delay])

    if (isValidElement(children) && isInViewState) {
        return (
            <div
                ref={ref}
                className={cn(
                    'transition-all duration-1000 ease-out',
                    isActive ? 'opacity-100' : 'opacity-0'
                )}
            >
                {cloneElement(children, {
                    children: displayedText + (showCursor ? '|' : '')
                } as any)}
            </div>
        )
    }

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all duration-1000 ease-out',
                isActive ? 'opacity-100' : 'opacity-0'
            )}
        >
            {children}
        </div>
    )
}

// Animation Option 10: Flip Card Effect
const FlipSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInViewState] = useInView(0.2)
    const isActive = useDelayedVisibility(isInViewState, delay)

    return (
        <div ref={ref} className="[perspective:1000px]">
            <div
                className={cn(
                    'transition-all duration-1000 ease-out transform-gpu [transform-style:preserve-3d]',
                    isActive
                        ? 'opacity-100 [transform:rotateY(0deg)]'
                        : 'opacity-0 [transform:rotateY(-90deg)]'
                )}
            >
                {children}
            </div>
        </div>
    )
}

export {
    FadeUpSection,
    SlideInSection,
    ScaleFadeSection,
    StaggeredSection,
    BlurFocusSection,
    RotateFadeSection,
    ElasticSection,
    SlideUpSection,
    TypewriterSection,
    FlipSection,
    EnhancedTypewriterSection,
    useInView
}
