'use client'

import { useEffect, useRef, useState } from 'react'

interface LiteYouTubeProps {
    videoId: string
    title: string
    className?: string
    aspectRatio?: string
    params?: string
}

const generateThumbnail = (videoId: string) =>
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

export default function LiteYouTube({
    videoId,
    title,
    className = '',
    aspectRatio = 'aspect-video',
    params = ''
}: LiteYouTubeProps) {
    const [isActive, setIsActive] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isActive) {
            return
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsActive(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.25 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [isActive])

    const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${params ? `&${params}` : ''}`

    return (
        <div
            ref={containerRef}
            className={`relative w-full overflow-hidden rounded-lg ${aspectRatio} ${className}`}
        >
            {isActive ? (
                <iframe
                    src={iframeSrc}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                />
            ) : (
                <button
                    type="button"
                    aria-label={`Play video: ${title}`}
                    className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
                    onClick={() => setIsActive(true)}
                >
                    <span
                        className="absolute inset-0 z-0 block h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                        style={{
                            backgroundImage: `url(${generateThumbnail(videoId)})`
                        }}
                    ></span>
                    <span className="absolute inset-0 flex h-full w-full items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white transition-transform duration-300 hover:scale-110">
                            ▶
                        </span>
                    </span>
                </button>
            )}
        </div>
    )
}
