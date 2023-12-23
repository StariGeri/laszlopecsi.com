import { useActiveLink } from "@/hooks/useActiveLink";
import Link from "next/link";
import LanguageDropdown from "../shared/LanguageDropdown";
import { MenuItems } from "@/constants/Menu";


const NavItems = () => {

    const { activeLink } = useActiveLink();

    return (
        <ul className="hidden md:flex">
            {MenuItems.map((item, index) => (
                <li className={`uppercase font-body font-medium md:text-[18px] lg:text-[20px] px-4 ${activeLink === item.url ? 'text-primaryOrange' : 'text-black'}`}
                    key={index}>
                    <Link href={item.url}>
                        <h1>{item.title}</h1>
                    </Link>
                </li>
            ))}
            {/* <LanguageDropdown /> */}
        </ul>
    );

}

export default NavItems;