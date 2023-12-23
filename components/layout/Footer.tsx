import Button from "../shared/Button";
import { MenuItems } from "@/constants/Menu";
import Link from "next/link";
import FacebookIcon from "../shared/FacebookIcon";
import InstagramIcon from "../shared/InstagramIcon";

const Footer = () => {

    return (
        <div className="w-full p-6 bg-black">
            <div className="w-full max-w-[1240px]">
                <div className="FooterTop w-full flex">
                    <div className="w-1/2">
                        <div className="flex-col">
                            <h3 className="font-semibold text-[24px] font-body text-white">Site Links</h3>
                            <ul className="flex gap-2 mt-2">
                                {MenuItems.map((item, index) => (
                                    <Link href={item.url} key={index}>
                                        <li className="font-body font-medium text-[20px] text-white hover:opacity-60 duration-200">
                                            <h1>{item.title}</h1>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-col mt-4">
                            <h3 className="font-semibold text-[24px] font-body text-white">Social Media</h3>
                            <div className="mt-2 w-fit h-fit flex gap-2">
                                <FacebookIcon isOutlined color="dark" />
                                <InstagramIcon isOutlined color="dark"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2"></div>
                </div>
                <div className="footerBottom"></div>
            </div>
        </div>
    );

}

export default Footer;