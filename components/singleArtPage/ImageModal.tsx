//Dependencies
import { useState, useEffect } from 'react';
import Image from "next/image";

// Icons
import { HiOutlineChevronRight, HiOutlineChevronLeft, HiOutlineX } from "react-icons/hi";

interface ImageModalProps {
    images: string[];
    closeImageViewer: () => void;
    isModalOpen: boolean;
}

/**
 * @description ImageModal component to display images in a modal
 * @param images - array of image urls
 * @param closeImageViewer - function to close the image modal
 * @param isModalOpen - boolean to determine if the modal is open 
 * @returns 
 */
const ImageModal = ({ images, closeImageViewer, isModalOpen }: ImageModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const showPrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // cleanup
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <div className='fixed inset-0 flex items-center justify-center z-[100]'>
            <div className='fixed inset-0 bg-black opacity-80' onClick={closeImageViewer}></div>
            <div className='max-w-[1240px] w-fit max-h-[400px] min-[350px]:mx-6 sm:mx-2 min-[350px]:h-fit sm:h-full z-50 relative flex items-center'>
                <button
                    onClick={() => showPrevImage()}
                    className={`absolute top-1/2 -left-5 rounded-full bg-white z-50 hover:bg-gray-200 transform -translate-y-1/2 p-3  ${images.length === 1 && 'hidden'}`}
                >
                    <HiOutlineChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <Image src={images[currentImageIndex]} alt="Art" width={500} height={600} className='w-full max-w-[500px] h-auto' />
                <button
                    onClick={() => showNextImage()}
                    className={`absolute top-1/2 -right-5 rounded-full bg-white z-50 hover:bg-gray-200 transform -translate-y-1/2 p-3  ${images.length === 1 && 'hidden'}`}
                >
                    <HiOutlineChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>
            <button
                type='button'
                className='absolute top-4 right-8'
                onClick={closeImageViewer}
            >
                <HiOutlineX className='w-6 h-6 text-white' />
            </button>
        </div>
    );
};

export default ImageModal;
