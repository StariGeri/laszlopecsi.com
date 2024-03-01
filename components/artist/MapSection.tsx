// Dependencies
import Image from "next/image";

const MapSection = () => {

    return (
        <div className="w-full flex flex-col my-8 md:my-12 lg:my-24">
            <h1 className="font-header font-semibold text-[26px] md:text-[32px] lg:text-[36px]">Works Around The World</h1>
            <Image src="/assets/images/map.png" alt="Laszlo Pecsi" width={1240} height={800} layout="responsive" className="w-full max-w-[800px] mx-auto h-auto" />
        </div>
    );
};

export default MapSection;