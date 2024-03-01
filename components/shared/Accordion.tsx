import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const variants = {
        open: { opacity: 1, maxHeight: 1000 }, // Adjust maxHeight as needed
        collapsed: { opacity: 0, maxHeight: 0 }
    };

    return (
        <div className="w-full border-b border-b-black">
            <div className="flex justify-between items-center cursor-pointer bg-background py-2" onClick={toggleOpen}>
                <h1 className="font-header font-semibold text-[26px] md:text-[32px] lg:text-[36px]">
                    {title}
                </h1>
                <HiChevronDown className={`w-6 h-6 lg:w-7 lg:h-7 ${isOpen ? 'rotate-0' : '-rotate-90'} transition-all duration-150`} />
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={variants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='px-2 md:px-3 bg-background'
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
