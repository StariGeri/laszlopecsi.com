import React from 'react';
import { SlideModel } from "@/types/SlideModel";
import Image from "next/image";

interface SlideProps {
    slide: SlideModel;
}

const Slide = ({ slide }: SlideProps) => {
    return(
        <div className="w-full h-full flex flex-col items-center justify-center bg-blue-300">
            <h3 className="text-xl font-semibold">{slide.title}</h3>
            <p className="text-base">{slide.content}</p>
            <Image src={`/public/dummy/${slide.image}`} alt={slide.title} width={300} height={300} />
        </div>
    );
}

export default Slide;
