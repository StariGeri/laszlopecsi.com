import Image from 'next/image';

const AboutArtist = () => {
    return (
        <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-center gap-6 px-2 md:px-4 mx-auto'>
            <div className="w-full flex flex-col">
                <h1 className='w-fit font-header font-semibold text-[26px] md:text-[35px] lg:text-[40px] mb-2'>Laszlo Pecsi</h1>
                <p className='font-body font-normal text-base md:text-[20px] lg:text-[24px] leading-snug'>
                    Laszlo Pecsi played a clearly decisive and unquestionably important role in shaping 20th century Hungarian design as well as creating industrial designa and autonomous textile art. His professional erudition, creative force and the esteem of forerunners are evident during his whole artistic career.
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <Image src="/assets/images/artistabout.png" alt="Portrait if Laszlo Pecsi" width={400} height={500}
                    className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain"
                />
            </div>
            <div className='w-full flex flex-col p-2'>
                {/** DataSheet */}
                <div className="flex flex-col">
                    {/** Birth */}
                    <div className="flex flex-col font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                        <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-1">Birth</h3>
                        <p className='font-body text-base md:text-[20px] lg:text-[24px]'>5 Oct 1929, Budapest (Hungary) </p>
                    </div>
                    {/** Death */}
                    <div className="flex flex-col font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                        <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-1">Death</h3>
                        <p className='font-body text-base md:text-[20px] lg:text-[24px]'>
                            16 Dec 1984, Budapest (Hungary)
                        </p>
                    </div>
                    {/** Art */}
                    <div className="flex flex-col font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                        <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-1">Art</h3>
                        <p className='font-body text-base md:text-[20px] lg:text-[24px]'>Industrial Art</p>
                    </div>
                    {/** Awards */}
                    <div className="flex flex-col font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                        <h3 className="font-semibold text-base md:text-lg lg:text-xl mb-1">Awards</h3>
                        <p className='font-body text-base md:text-[20px] lg:text-[24px]'>Munkácsy Award 1964, 1972</p>
                        <p className='font-body text-base md:text-[20px] lg:text-[24px]'>State Award 1975</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArtist;