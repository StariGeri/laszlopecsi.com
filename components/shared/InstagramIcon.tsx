import Link from "next/link";
import { LiaInstagram } from "react-icons/lia";
import { IconProps } from "./FacebookIcon";

const InstagramIcon = ({ isOutlined, color }: IconProps) => {

    return (
        <Link href='https://www.instagram.com/laszlopecsiart/' target='_blank' className="duration-200">
            <div className={`w-fit h-fit flex items-center justify-center cursor-pointer rounded-full ${isOutlined && 'border'} ${color === 'dark' ? 'border-white border-opacity-20 hover:bg-white hover:border-white' : ' border-black border-opacity-80 hover:bg-black hover:border-black'} transition-all duration-200 p-1 group`}>
                <LiaInstagram className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] ${color === 'dark' ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white'} transition-all duration-200`} />
            </div>
        </Link>
    );
}

export default InstagramIcon;