import { useActiveLink } from "@/hooks/useActiveLink";
import Link from "next/link";
import LanguageDropdown from "../shared/LanguageDropdown";
import { TFunction } from "i18next";


const NavItems = () => {

    const { activeLink } = useActiveLink();

    return (
        <ul className="hidden md:flex">
            <li className={`uppercase font-body font-medium md:text-[18px] lg:text-[20px] px-4 ${activeLink === '/' ? 'text-primaryOrange' : 'text-black'}`}>
                <Link href='/'>
                    <h1>home</h1>
                </Link>
            </li>
            <li className={`uppercase font-body font-medium md:text-[18px] lg:text-[20px] px-4 ${activeLink === '/' ? 'text-primaryOrange' : 'text-black'}`}>
                <Link href='/artist'>
                    <h1>artist</h1>
                </Link>
            </li>
            <li className={`uppercase font-body font-medium md:text-[18px] lg:text-[20px] px-4 ${activeLink === '/' ? 'text-primaryOrange' : 'text-black'}`}>
                <Link href='/collection'>
                    <h1>collection</h1>
                </Link>
            </li>
            <li className={`uppercase font-body font-medium md:text-[18px] lg:text-[20px] px-4 ${activeLink === '/' ? 'text-primaryOrange' : 'text-black'}`}>
                <Link href='/contact'>
                    <h1>contact</h1>
                </Link>
            </li>
            <LanguageDropdown />
        </ul>
    );

}

export default NavItems;