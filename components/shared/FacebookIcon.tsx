import Link from "next/link";
import { LiaFacebook } from "react-icons/lia";

export interface IconProps {
    isOutlined: boolean;
    color: 'dark' | 'light';
}

const FacebookIcon = ({ isOutlined, color }: IconProps) => {
    return (
        <Link href='https://www.instagram.com/laszlopecsiart/' target='_blank' className="duration-200">
            <div className={`w-fit h-fit flex items-center justify-center cursor-pointer rounded-full ${isOutlined && 'border'} ${color === 'dark' ? 'border-white border-opacity-20 hover:bg-white hover:border-white' : ' border-black border-opacity-80 hover:bg-black hover:border-black'} transition-all duration-200 p-1 group`}>
                <LiaFacebook className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] ${color === 'dark' ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white'} transition-all duration-200`} />
            </div>
        </Link>
    );
};

export default FacebookIcon;
