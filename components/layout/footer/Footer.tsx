import Link from "next/link";
import Button from "../../shared/Button";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import Logo from "@/components/shared/Logo";
import FooterCTA from "./FooterCTA";

const Footer = () => {

    return (
        <div className="w-full p-2 py-6 md:p-6 lg:py-12 bg-black mt-auto">
            <div className="w-full max-w-[1240px] lg:mx-auto flex flex-col">
                <div className="FooterTop w-full mx-auto md:mx-0 flex flex-row px-2 lg:px-4">
                    <div className="w-1/2 flex justify-start sm:justify-center items-center md:hidden">
                        <FooterCTA />
                    </div>
                    <div className="w-1/2 flex justify-end sm:justify-center items-center md:hidden">
                        <FooterSocials />
                    </div>
                    <div className="w-2/3 pl-4 hidden md:block">
                        <div className="">
                            <h3 className="font-semibold text-[24px] font-body text-white mb-2 md:mb-3 lg:mb-6 hidden md:block">Site Links</h3>
                            <FooterLinks />
                        </div>
                        <div className="mt-4 md:mt-6 lg:mt-10 hidden md:block">
                            <h3 className="font-semibold text-[24px] font-body text-white mb-2 md:mb-3 lg:mb-6">Social Media</h3>
                            <FooterSocials />
                        </div>
                    </div>
                    <div className="w-1/3 flex-col items-start justify-center hidden md:flex">
                        <FooterCTA />
                    </div>
                </div>
                <div className="w-full mx-auto mt-4 flex justify-center md:hidden">
                    <FooterLinks />
                </div>
                <div className="divider bg-white h-[1px] w-full bg-opacity-60 my-4 md:mt-6 md:mb-2 lg:mt-12 lg:mb-6"></div>
                <div className="footerBottom w-full mx-auto flex gap-5 md:gap-3 lg:gap-4 items-center justify-center md:px-2 lg:px-4 md:mb-4 lg:mb-8">
                    <div className="copyright hidden md:block">
                        <p className="text-white text-base font-body">© 2024 All rights reserved.</p>
                    </div>
                    <Link href='privacy-policy' className="font-body font-normal text-base text-white cursor-pointer hover:opacity-60 duration-200">Privacy Policy</Link>
                    <Link href='cookies' className="font-body font-normal text-base text-white cursor-pointer hover:opacity-60 duration-200">Cookies</Link>
                </div>
                <div className="w-fit mx-auto my-2 md:my-3 lg:my-4">
                    <Logo theme="light" isFull={true} />
                </div>
                <div className="copyright w-full">
                    <p className="text-white text-center text-sm font-body block md:hidden">© 2024 All rights reserved.</p>
                </div>
            </div>
        </div>
    );

}

export default Footer;