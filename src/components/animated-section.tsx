import { motion, useInView, Variant } from 'framer-motion'
import { useRef, ReactNode } from 'react'

type AnimationVariant = 'fadeIn' | 'slideLeft' | 'slideUp' | 'zoom'

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    animation: AnimationVariant
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'slideLeft'
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    // Change 'once: true' to 'once: false' to make the animation repeat
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    // Animation variants
    const animations = {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 }
        },
        slideUp: {
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
        },
        zoom: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    }

    const selectedAnimation = animations[animation]

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={selectedAnimation}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
