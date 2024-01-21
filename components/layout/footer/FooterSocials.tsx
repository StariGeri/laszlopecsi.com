import FacebookIcon from "@/components/shared/FacebookIcon";
import InstagramIcon from "@/components/shared/InstagramIcon";

const FooterSocials = () => {

    return (
        <div className="mt-2 w-fit h-fit flex gap-6 md:gap-4 lg:gap-5 lg:pl-4">
            <FacebookIcon isOutlined color="dark" />
            <InstagramIcon isOutlined color="dark" />
        </div>
    );
};

export default FooterSocials;