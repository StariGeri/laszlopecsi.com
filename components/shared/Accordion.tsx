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

    return (
        <div className="w-full border-b border-b-black">
            <div className="flex justify-between items-center cursor-pointer bg-background" onClick={toggleOpen}>
                <h1 className="font-header font-medium text-[26px] md:text-[32px] lg:text-[36px] mb-2">
                    {title}
                </h1>
                {isOpen ? <HiChevronUp className="w-6 h-6" /> : <HiChevronDown className="w-6 h-6" />}
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0}
                        }}
                        transition={{ duration: 0.3 }}
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
