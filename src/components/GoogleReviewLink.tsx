import { cn } from '@/lib/utils'

const GoogleGLogo = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
    >
        <path
            d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.62,5.73 17.04,7.21 17.04,7.21L19.07,5.42C19.07,5.42 16.58,3 12.19,3C6.42,3 2,7.42 2,12.5C2,17.58 6.42,22 12.19,22C17.96,22 21.5,18.33 21.5,12.81C21.5,12.24 21.45,11.66 21.35,11.1Z"
            fill="currentColor"
        />
    </svg>
)

const GoogleReviewLink = ({ className }: { className?: string }) => {
    const reviewLink = 'https://g.page/r/CeD-1nF5pZ34EBI/review'

    return (
        <a
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'flex items-center gap-4 p-4 w-fit text-white border border-white transition-all duration-300 ease-in-out border-b-8 rounded-xl hover:border-white-bright hover:shadow-xl hover:-translate-y-px active:translate-y-0.5 active:border-b-2 active:shadow-md',
                className
            )}
        >
            <GoogleGLogo />
            <div>
                <p className="font-bold text-base leading-tight">
                    Find us on Google
                </p>
                <p className="text-sm text-white/80 leading-tight">
                    Leave a review
                </p>
            </div>
        </a>
    )
}

export default GoogleReviewLink
