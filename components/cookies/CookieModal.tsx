// Dependencies
import React from 'react';

// 3rd party libs
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link from Next.js

interface CookieConsentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CookieConsentModal = ({ isOpen, onClose }: CookieConsentModalProps) => {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={isOpen ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-[#f1faee] p-4 shadow-lg z-50"
        >
            <p className='text-base md:text-lg lg:text-xl font-body'>
                We use cookies to improve your experience on our site, analyze site traffic, and understand where our audience is coming from.
                By continuing to use our site, you consent to our use of cookies. For more information, please visit our Cookie Policy by clicking the button below. 
            </p>

            <div className="flex justify-end items-center mt-4 gap-3">
                <Link href="/cookies" target='_blank'>
                    <div className="font-body font-medium text-base text-black px-4 py-2 border border-gray-500 hover:border-black duration-150 transition-all">
                        Learn more
                    </div>
                </Link>
                <button className="bg-primaryOrange hover:bg-[#dc2f02] duration-150 transition-all font-body font-semibold text-base text-white px-4 py-2 mr-2" onClick={onClose}>
                    Got it!
                </button>
            </div>
        </motion.div>
    );
};

export default CookieConsentModal;
