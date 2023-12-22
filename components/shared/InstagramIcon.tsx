import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const InstagramIcon = () => {

    return (
        <Link href='https://www.instagram.com/laszlopecsiart/' target='_blank' className='cursor-pointer'>
            <FaInstagram className='w-[32px] h-[32px] sm:w-[36px] sm:h-[36px]' />
        </Link>
    );
}

export default InstagramIcon;