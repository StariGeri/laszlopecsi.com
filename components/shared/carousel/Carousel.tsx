import React, { useState } from 'react';
import { SlideModel } from '@/types/SlideModel';
import Slide from './Slide';
import Button from '../Button';

interface CarouselProps {
    items: SlideModel[];
}

const Carousel = ({ items }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => setActiveIndex((prev) => prev === 0 ? items.length - 1 : prev - 1);
    const goNext = () => setActiveIndex((prev) => prev === items.length - 1 ? 0 : prev + 1);

    return (
        <div className="w-full my-5 md:w-fit md:max-w-[1240px] md:mx-auto flex flex-col">
            <div className='w-full flex justify-center items-center gap-4 md:px-4'>
                <button onClick={goPrev} className="hidden md:flex items-center justify-center w-10 h-10 pb-1 bg-black text-white rounded-full">←</button>
                <div className="overflow-hidden w-full max-w-[862px] mx-auto shadow-lg">
                    <div className="flex h-fit transition-transform duration-300" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {items.map((item) => (
                            <div key={item.id} className="w-full h-full flex-shrink-0">
                                <Slide slide={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={goNext} className="hidden md:flex items-center justify-center w-10 h-10 pb-1 bg-black text-white rounded-full">→</button>
            </div>
            {/**INDICATORS */}
            <div className='flex justify-between w-full max-w-screen-md mx-auto'>
                <div className="w-fit flex items-center m-4 ml-0">
                    {items.map((item, index) => (
                        <span
                            key={item.id}
                            className={`h-[10px] w-[10px] mx-1 rounded-full ${index === activeIndex ? 'bg-primaryOrange' : 'bg-[#D9D9D9]'} transition duration-300`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
                <div className="flex md:hidden items-center gap-4 m-4 mr-0">
                    <button onClick={goPrev} className="w-10 h-10 pb-1 bg-black text-white rounded-full">←</button>
                    <button onClick={goNext} className="w-10 h-10 pb-1 bg-black text-white rounded-full">→</button>
                </div>
                <div className='hidden md:flex items-center m-4'>
                    <Button buttonText='Discover Collection' isOutlined={false} color='dark' href='/collection'/>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
