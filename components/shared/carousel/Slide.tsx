import React from 'react';
import { SlideModel } from "@/types/SlideModel";
import Image from "next/image";

interface SlideProps {
    slide: SlideModel;
}

const Slide = ({ slide }: SlideProps) => {

    const maxContentLength = 110;
    const cutContent = slide.content.length > maxContentLength ? slide.content.substring(0, maxContentLength) + '...' : slide.content;

    return (
        <div className="w-full flex flex-col sm:flex-row">
            <Image src={`/dummy/${slide.image}`} alt={slide.title} width={3000} height={3000} className='w-full h-auto sm:w-[400px] lg:w-[450px] object-cover' />
            <div className='p-2 md:p-3 lg:p-4 flex flex-col gap-2 justify-between'>
                <h3 className="font-header font-semibold text-[18px] md:text-[22px] lg:text-[26px]">{slide.title}</h3>
                <p className="font-body text-base leading-normal md:text-[20px] lg:text-[22px]">{cutContent}</p>
                <p className='font-body italic text-base md:text-[18px] lg:text-[20px]'>{slide.year}. {slide.location}</p>
            </div>
        </div>
    );
}

export default Slide;
