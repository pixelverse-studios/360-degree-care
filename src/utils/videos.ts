// Video metadata for 360-degree-care project
export const videoMetadata = [
    {
        id: 'v1',
        title: 'Reflection',
        description:
            'A full life and successful career. Still writing their story.',
        src: '/videos/v1_reflection.mp4'
    },
    {
        id: 'v2',
        title: 'Family & Happiness',
        description: 'Love, family, and the happiness they bring.',
        src: '/videos/v2_family&happiness.mp4'
    },
    {
        id: 'v3',
        title: 'Wisdom & Memories',
        description: 'Experiences and lessons through the years.',
        src: '/videos/v3_wisdom&memories.mp4'
    },
    {
        id: 'v4',
        title: "A Mother's Love",
        description: 'Great advice and always willing to help.',
        src: '/videos/v4_motherslove.mp4'
    },
    {
        id: 'v5',
        title: "Stanley's Wisdom",
        description: 'Stanley shares moments from his rich & full life.',
        src: '/videos/v5_stanleywisdom.mp4'
    },
    {
        id: 'v6',
        title: 'Above & Beyond',
        description: 'Our team always goes the extra mile.',
        src: '/videos/v6_above&beyond.mp4'
    },
    {
        id: 'v7',
        title: 'Daily Recap',
        description:
            'Our team always touches base to provide updates on our clients.',
        src: '/videos/v7_dailyrecap.mp4'
    }
]

export function extractThumbnail(videoElement: HTMLVideoElement) {
    const canvas = document.createElement('canvas')
    canvas.width = videoElement.videoWidth
    canvas.height = videoElement.videoHeight
    canvas.getContext('2d')?.drawImage(videoElement, 0, 0)
    return canvas.toDataURL('image/jpeg')
}
