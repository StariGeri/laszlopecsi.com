import React from 'react';
import { motion } from 'framer-motion';

const MarqueeText = () => {

    const stringArray = ['Gobelin', 'Industrial Art', 'Textile', 'Gobelin', 'Industrial Art', 'Textile'];

    const duration = stringArray.length * 2;

    const marqueeVariants = {
        animate: {
            x: [0, -100 * stringArray.length],
            transition: {
                x: {
                    repeat: Infinity,
                    duration: duration,
                    ease: "linear"
                }
            }
        }
    };

    return (
        <motion.div className="overflow-hidden whitespace-nowrap" variants={marqueeVariants} animate="animate">
            {stringArray.map((string, index) => (
                <span key={index} className="mx-4">{string}</span>
            ))}
        </motion.div>
    );
};

export default MarqueeText;

