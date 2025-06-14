'use client'
import { useState } from 'react'
import { CirclePlay } from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogOverlay,
    DialogTitle
} from '@/components/ui/dialog'
import { videoMetadata } from '@/utils/videos'
import AnimatedSection from '@/components/animated-section'

export default function VaultOfWisdom() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1)

    const currentVideo = videoMetadata[currentVideoIndex]

    return (
        <main>
            <AnimatedSection animation="zoom" className="page-wrapper mb-12">
                <h1 className="text-3xl text-center mx-auto">
                    Wisdom of the Ages, Timeless Stories, and Relatable Journeys
                </h1>
                <h2 className="text-center mx-auto">
                    Celebrating Every Chapter
                </h2>
                <Dialog>
                    <DialogOverlay className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300" />
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                        {videoMetadata.map((vid, key) => (
                            <DialogTrigger
                                key={vid.id}
                                onClick={() => setCurrentVideoIndex(key)}
                            >
                                <li className="rounded-xl shadow-xl h-full w-full flex-1 text-left">
                                    <div className="bg-gray-700 rounded-tr-xl rounded-tl-xl p-4 h-[7rem] w-full flex items-center justify-center">
                                        <CirclePlay
                                            className="text-primary h-[3rem] w-[3rem]"
                                            strokeWidth={1}
                                        />
                                    </div>
                                    <h3 className="p-4">{vid.title}</h3>
                                    <p className="px-4 pb-4">
                                        {vid.description}
                                    </p>
                                </li>
                            </DialogTrigger>
                        ))}
                    </ul>
                    <DialogContent className="px-8 py-12 border-none max-w-4xl w-4/5 lg:w-full h-fit shadow-lg">
                        <DialogTitle>{currentVideo?.title ?? ''}</DialogTitle>
                        {currentVideo?.src ? (
                            <div className="h-[75dvh]">
                                <iframe
                                    src={currentVideo.src}
                                    className="h-[90%] w-full rounded-lg"
                                />
                                <p className="pt-4">
                                    {currentVideo.description}
                                </p>
                            </div>
                        ) : null}
                    </DialogContent>
                </Dialog>
            </AnimatedSection>
        </main>
    )
}
