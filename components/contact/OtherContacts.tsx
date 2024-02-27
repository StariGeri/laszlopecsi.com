import FacebookIcon from "../shared/FacebookIcon";
import InstagramIcon from "../shared/InstagramIcon";

const OtherContacts = () => {
    return (
        <div className='flex flex-col w-full sm:w-1/3 p-2 md:p-4 lg:p-6'>
            <h1 className="className='text-lg md:text-xl lg:text-[22px] font-body mb-2 sm:mb-3 font-medium md:font-semibold">Write us at</h1>
            <div className='relative group w-fit mx-auto sm:mx-0'>
                <div className="relative z-10 p-3 md:p-4 lg:p-6 lg:px-8 border border-black font-body bg-background text-base md:text-[20px] lg:text-[24px]">
                    laszlopecsicollection@gmail.com
                </div>
                <div className='absolute top-0 left-0 border border-primaryOrange z-0 translate-x-4 translate-y-4 md:translate-x-4 md:translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 duration-200 ease-in-out' style={{ width: '100%', height: '100%' }}></div>
            </div>
            <h1 className="className='text-lg md:text-xl lg:text-[22px] font-body mb-1 mt-12 font-medium md:font-semibold">Find us on</h1>
            <div className="mt-2 w-fit h-fit flex gap-6 md:gap-4 lg:gap-5 lg:pl-4 mx-auto sm:mx-0">
                <FacebookIcon isOutlined color="light" />
                <InstagramIcon isOutlined color="light" />
            </div>
        </div>
    );
};

export default OtherContacts;
