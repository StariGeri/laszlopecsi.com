// Dependencies
import React from 'react';

// Components
import Slide from './Slide';
import Button from '../Button';

//Icons
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

//Types
import { ArtModel } from '@/types/ArtModel';

//Hooks
import { useCarousel } from '@/hooks/useCarousel';

interface CarouselProps {
    items: ArtModel[];
}

const Carousel = ({ items }: CarouselProps) => {

    const { activeIndex, setActiveIndex, isDragging, handleTouchStart, handleTouchMove, handleTouchEnd, goPrev, goNext } = useCarousel(items);


    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full md:w-fit md:max-w-[1000px] flex flex-col md:mx-auto my-8 md:my-12 lg:my-24"
        >
            <div className='w-full flex justify-center items-center gap-4 md:px-4'>
                <button onClick={goPrev} className="hidden md:flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
                    <HiOutlineArrowNarrowLeft className="text-white transition-transform duration-150 group-hover:translate-x-1 stroke-[2px] w-8 h-5" />
                </button>
                <div className="overflow-hidden w-full max-w-[862px] mx-auto shadow-lg">
                    <div className="flex h-fit transition-transform duration-300" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                        {items.map((item) => (
                            <div key={item.id} className="w-full h-full flex-shrink-0">
                                <Slide slide={item} isDragging={isDragging} />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={goNext} className="hidden md:flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
                    <HiOutlineArrowNarrowRight className="text-white transition-transform duration-150 group-hover:translate-x-1 stroke-[2px] w-8 h-5" />
                </button>
            </div>
            {/**INDICATORS */}
            <div className='flex justify-between w-full max-w-[862px] mx-auto'>
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
                    <button onClick={goPrev} className="flex items-center justify-center w-10 h-10 pb-1 bg-black text-white rounded-full">
                        <HiOutlineArrowNarrowLeft className="text-white transition-transform duration-150 stroke-[2px] w-8 h-5 pt-1" />
                    </button>
                    <button onClick={goNext} className="flex items-center justify-center w-10 h-10 pb-1 bg-black text-white rounded-full">
                        <HiOutlineArrowNarrowRight className="text-white transition-transform duration-150 stroke-[2px] w-8 h-5 pt-1" />
                    </button>
                </div>
                <div className='hidden md:flex items-center my-4'>
                    <Button buttonText='Discover Collection' isOutlined={false} color='dark' href='/collection' />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
