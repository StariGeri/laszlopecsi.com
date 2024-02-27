import Button from "../shared/Button";

const SingleArtCTA = () => {

    return (
        <div className="w-full max-w-[800px] flex flex-col items-center justify-center mx-auto my-12 md:my-16 lg:my-24">
            <h2 className="font-header font-semibold text-[26px] md:text-[35px] lg:text-[40px] text-center mb-4 md:mb-6">
                Would you be interested in acquiring this particular masterpiece?
            </h2>
            <Button buttonText="Contact Us" color="dark" isOutlined href="/contact"/>
        </div>
    );

}

export default SingleArtCTA;