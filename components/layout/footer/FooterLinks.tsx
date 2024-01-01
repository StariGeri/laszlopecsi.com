import { MenuItems } from "@/constants/Menu";
import Link from "next/link";

const FooterLinks = () => {

    return (
        <ul className="flex gap-2 md:gap-4 lg:gap-6 mt-2 lg:pl-2">
            {MenuItems.map((item, index) => (
                <Link href={item.url} key={index}>
                    <li className="font-body font-medium text-[20px] text-white hover:opacity-60 duration-200">
                        <h1>{item.title}</h1>
                    </li>
                </Link>
            ))}
        </ul>
    );

}

export default FooterLinks;