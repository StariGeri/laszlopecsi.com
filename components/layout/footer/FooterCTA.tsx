import Button from "@/components/shared/Button";


const FooterCTA = () => {

    return (
        <>
            <p className="font-semibold md:text-[20px] lg:text-[24px] font-body text-white w-full max-w-[350px] hidden md:block">
                Would you be interested in acquiring a masterpiece? Do not hesitate to reach out!
            </p>
            <Button
                buttonText="Contact Us"
                href="/contact"
                isOutlined={true}
                color="light"
                additionalClasses="mt-4 w-fit"
            />
        </>
    );

}

export default FooterCTA;