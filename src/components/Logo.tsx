import { FaRegCircle } from 'react-icons/fa6'

const Logo = () => {
    return (
        <div className="flex content-center gap-2 text-4xl text-primary font-bold cursor-pointer">
            <p className="flex content-center">
                360
                <FaRegCircle className="h-2 w-2 my-[5px]" />
            </p>
            <p>CARE</p>
        </div>
    )
}

export default Logo
