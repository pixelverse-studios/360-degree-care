import { Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
    invert: boolean
}

const styles = 'font-bold text-3xl'

export const CompanyName = ({ styles }: { styles: string }) => (
    <span className={cn('text-primary', styles)}>360 Degree Care</span>
)

const Logo = ({ invert }: LogoProps) => {
    return (
        <div
            className={cn(
                'flex content-center gap-2 cursor-pointer logo',
                invert ? 'text-background' : 'text-primary'
            )}
        >
            <div className={cn('flex content-center', styles)}>
                360
                <div className="h-4 w-4 rounded-full border-4 border-[var(--logo-accent)] bg-transparent mt-2 ml-2" />
            </div>
            <p className={styles}>CARE</p>
        </div>
    )
}

export default Logo
