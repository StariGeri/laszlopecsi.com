import Link from "next/link";
import { LiaFacebook } from "react-icons/lia";

const FacebookIcon = () => {

    return (
        <Link href='https://www.instagram.com/laszlopecsiart/' target='_blank' className='cursor-pointer'>
            <LiaFacebook className='w-[32px] h-[32px] sm:w-[36px] sm:h-[36px]' />
        </Link>
    );

};

export default FacebookIcon;