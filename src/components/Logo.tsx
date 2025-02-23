import { FaRegCircle } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

interface LogoProps {
    invert: boolean
}

const Logo = ({ invert }: LogoProps) => {
    return (
        <div
            className={cn(
                'flex content-center gap-2 text-4xl font-bold cursor-pointer',
                invert ? 'text-background' : 'text-primary'
            )}
        >
            <p className="flex content-center">
                360
                <FaRegCircle className="h-2 w-2 my-[5px]" />
            </p>
            <p>CARE</p>
        </div>
    )
}

export default Logo
