import Button from "../shared/Button";

const SingleArtCTA = () => {

    return (
        <div className="w-full max-w-[600px] flex flex-col items-center justify-center mx-auto my-8 md:my-12 lg:my-24">
            <h2 className="font-header font-semibold text-2xl lg:text-3xl text-center mb-4 md:mb-6">
                Would you be interested in acquiring this particular masterpiece?
            </h2>
            <Button buttonText="Contact Us" color="dark" isOutlined href="/contact"/>
        </div>
    );

}

export default SingleArtCTA;