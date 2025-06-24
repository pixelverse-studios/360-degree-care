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
    cloneElement
} from 'react'

// Type definitions
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

// Animation Option 1: Fade Up
const FadeUpSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
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
    const [ref, isInView] = useInView(0.2)

    const getTransform = () => {
        if (!isInView) {
            switch (direction) {
                case 'left':
                    return '-translate-x-6 opacity-0'
                case 'right':
                    return 'translate-x-6 opacity-0'
                case 'up':
                    return '-translate-y-6 opacity-0'
                case 'down':
                    return 'translate-y-6 opacity-0'
                default:
                    return 'translate-y-8 opacity-0'
            }
        }
        return 'translate-x-0 translate-y-0 opacity-100'
    }

    return (
        <div
            ref={ref}
            className={cn(
                `transition-all duration-1000 ease-out ${getTransform()}`,
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
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
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
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
    const [ref, isInView] = useInView(0.2)

    return (
        <div ref={ref} className={cn(className)}>
            {Children.map(children, (child, index) => (
                <div
                    key={index}
                    className={cn(
                        `transition-all duration-1000 ease-out`,
                        isInView
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6',
                        childClass ?? ''
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
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
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            className={`transition-all duration-1200 ease-out ${
                isInView
                    ? 'opacity-100 blur-0 translate-y-0'
                    : 'opacity-0 blur-sm translate-y-4'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
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
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isInView
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-3 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

// Animation Option 7: Elastic Bounce
const ElasticSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ${
                isInView
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-90'
            }`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: isInView
                    ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                    : 'ease-out'
            }}
        >
            {children}
        </div>
    )
}

// Animation Option 8: Slide and Fade from Bottom
const SlideUpSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInView] = useInView(0.15)

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
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
    const [ref, isInView] = useInView(0.2)
    const [displayedContent, setDisplayedContent] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        if (isInView && isValidElement(children)) {
            const props = children.props as { children?: string }
            const text = props.children || ''
            if (typeof text === 'string') {
                let i = 0
                const timer = setInterval(() => {
                    setDisplayedContent(text.slice(0, i))
                    i++
                    if (i > text.length) {
                        clearInterval(timer)
                        setTimeout(() => setShowCursor(false), 1000)
                    }
                }, 50)
                return () => clearInterval(timer)
            }
        }
    }, [isInView, children])

    if (isValidElement(children)) {
        const props = children.props as { children?: string }
        if (typeof props.children === 'string') {
            return (
                <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>
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
            className={`transition-all duration-1000 ease-out ${
                isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

const EnhancedTypewriterSection: React.FC<AnimationProps> = ({
    children,
    delay = 0
}) => {
    const [ref, isInView] = useInView(0.2)
    const [displayedText, setDisplayedText] = useState('')
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        if (isInView && isValidElement(children)) {
            // Extract plain text from JSX, ignoring HTML tags
            const extractText = (element: any): string => {
                if (typeof element === 'string') return element
                if (Array.isArray(element))
                    return element.map(extractText).join('')
                if (element?.props?.children)
                    return extractText(element.props.children)
                return ''
            }

            const fullText = extractText(children)
            let i = 0

            const timer = setInterval(() => {
                setDisplayedText(fullText.slice(0, i))
                i++
                if (i > fullText.length) {
                    clearInterval(timer)
                    setTimeout(() => setShowCursor(false), 1000)
                }
            }, 50)

            return () => clearInterval(timer)
        }
    }, [isInView, children])

    if (isValidElement(children) && isInView) {
        return (
            <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>
                {cloneElement(children, {
                    children: displayedText + (showCursor ? '|' : '')
                } as any)}
            </div>
        )
    }

    return (
        <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}

// Animation Option 10: Flip Card Effect
const FlipSection: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
    const [ref, isInView] = useInView(0.2)

    return (
        <div
            ref={ref}
            className="perspective-1000"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div
                className={`transition-all duration-1000 ease-out transform-gpu ${
                    isInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    transform: isInView ? 'rotateY(0deg)' : 'rotateY(-90deg)',
                    transformStyle: 'preserve-3d'
                }}
            >
                {children}
            </div>
        </div>
    )
}

// Export all animation components
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
