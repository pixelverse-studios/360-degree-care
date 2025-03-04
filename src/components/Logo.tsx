import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
    invert: boolean
}

const styles = 'font-bold text-2xl'

const Logo = ({ invert }: LogoProps) => {
    return (
        <div
            className={cn(
                'flex content-center gap-2 cursor-pointer logo',
                invert ? 'text-background' : 'text-primary'
            )}
        >
            <p className={cn('flex content-center', styles)}>
                360
                <Circle className="h-3 w-3 my-[0.4rem] text-blue-500" />
            </p>
            <p className={styles}>CARE</p>
        </div>
    )
}

export default Logo
