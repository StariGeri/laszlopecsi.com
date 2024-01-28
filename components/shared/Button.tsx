import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface ButtonProps {
    buttonText: string;
    color: 'dark' | 'light';
    isOutlined: boolean;
    href: string;
    additionalClasses?: string;
}

const Button = ({ buttonText, color, isOutlined, href, additionalClasses }: ButtonProps) => {

    return (
        <Link href={href}>
            <div className={`flex items-center gap-2 ${isOutlined && 'border-[1.4px] border-opacity-60'} ${color === 'dark' ? 'border-slate-900' : 'border-white'} px-4 py-[6px] group ${additionalClasses && additionalClasses}`}>
                <p className={`${color === 'dark' ? 'text-black' : 'text-white'} font-medium lg:font-semibold text-[18px] md:text-[20px] font-body`}>{buttonText}</p>
                <HiOutlineArrowNarrowRight className="text-primaryOrange transition-transform duration-150 group-hover:translate-x-1 stroke-[2px] w-8 h-5" />
            </div>
        </Link>
    );
}

export default Button;