import { MenuItems } from "@/constants/Menu";
import Link from "next/link";

const FooterLinks = () => {

    return (
        <ul className="w-full flex justify-center md:justify-start gap-5 lg:gap-6 mt-5 md:mt-2 lg:pl-4">
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