import React from 'react';
import Image from "next/image";
import { ArtModel } from '@/types/ArtModel';
import AvailableText from '@/components/collection/AvailableText';
import Link from 'next/link';

interface SlideProps {
    slide: ArtModel;
    isDragging: boolean;
}

const Slide = ({ slide, isDragging }: SlideProps) => {


    const handleClick = (e: any) => {
        if (isDragging) {
            e.preventDefault(); // Prevent link navigation if dragging
        }
    };

    return (
        <div onClick={handleClick} className="w-full flex flex-col sm:flex-row cursor-pointer">
            <Image src={slide.images[0]} alt={slide.title} width={500} height={500}
                draggable={false}
                className='w-full h-auto max-h-[300px] sm:w-[350px] lg:w-[400px] object-cover'
            />
            <div className='p-2 md:p-3 lg:p-4 flex flex-col gap-2 justify-between w-full sm:w-1/2 select-none'>
                <h3 className="font-header font-semibold text-[18px] md:text-[22px] lg:text-[26px]">{slide.title}</h3>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-3'>
                        <p className='font-body text-[16px] md:text-[18px] lg:text-[20px]'>{slide.sub_material}</p>
                        |
                        <p className='font-body text-[16px] md:text-[18px] lg:text-[20px]'>{slide.sub_type}</p>
                    </div>
                    <p className='flex items-center gap-2 font-body text-[16px] md:text-[18px] lg:text-[20px]'>{slide.dimensions[0]} x {slide.dimensions[1]} {slide.dimensions[2] && ` x  ${slide.dimensions[2]}`}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-body italic text-base md:text-[18px] lg:text-[20px]'>{slide.year}</p>
                    <AvailableText isAvailable={slide.status} />
                </div>
            </div>
        </div>
    );
}

export default Slide;
