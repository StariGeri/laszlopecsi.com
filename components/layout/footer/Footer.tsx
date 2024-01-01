import Button from "../../shared/Button";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

const Footer = () => {

    return (
        <div className="w-full p-2 md:p-6 lg:p-10 bg-black">
            <div className="w-full max-w-[1240px] lg:mx-auto flex flex-col">
                <div className="FooterTop w-full flex px-4">
                    <div className="w-1/2 pl-4">
                        <div className="flex-col">
                            <h3 className="font-semibold text-[24px] font-body text-white">Site Links</h3>
                            <FooterLinks />
                        </div>
                        <div className="flex-col mt-4">
                            <h3 className="font-semibold text-[24px] font-body text-white">Social Media</h3>
                            <FooterSocials />
                        </div>
                    </div>
                    <div className="w-1/2 flex-col items-center">
                        <p className="font-semibold text-[24px] font-body text-white text-balance">
                            Would you be interested in acquiring a masterpiece? Do not hesitate to reach out!
                        </p>
                        <Button
                            buttonText="Contact Us"
                            href="/contact"
                            isOutlined={true}
                            color="light"
                            additionalClasses="mt-4 w-fit"
                        />
                    </div>
                </div>
                <div className="divider bg-white h-[1px] w-full bg-opacity-60 lg:my-12"></div>
                <div className="footerBottom"></div>
            </div>
        </div>
    );

}

export default Footer;