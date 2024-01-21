import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface MarqueeTextProps {
    direction: 'left' | 'right';
}

const MarqueeText = ({ direction }: MarqueeTextProps) => {
    const stringArray = ['Gobelin', 'Industrial Art', 'Textile', 'Gobelin', 'Industrial Art', 'Textile', 'Gobelin', 'Industrial Art', 'Textile'];
    const extendedArray = Array(5).fill(stringArray).flat(); // Extend the array to cover full width
    const { scrollYProgress } = useScroll();

    // Determine the initial and final positions based on direction
    const initialPosition = direction === 'right' ? -extendedArray.length * 20 : 0;
    const finalPosition = direction === 'left' ? -extendedArray.length * 20 : extendedArray.length * 20;

    // Adjust the range of xPosition to control movement
    const xPosition = useTransform(scrollYProgress, [0, 1], [initialPosition, finalPosition]);

    return (
        <div className="w-full overflow-hidden flex gap-8 my-5">
            {extendedArray.map((string, index) => (
                <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    style={{ x: xPosition, transition: 'transform 0.8s linear'}}>
                    <p className="text-[22px] md:text-[34px] lg:text-[50px] font-header font-bold opacity-80 text-nowrap">{string}</p>
                    <div className='w-3 h-3 rounded-full bg-primaryOrange bg-opacity-30'></div>
                </motion.div>
            ))}
        </div>
    );
};

export default MarqueeText;
