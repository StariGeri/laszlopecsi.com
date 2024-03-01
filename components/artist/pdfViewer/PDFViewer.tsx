import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineX } from "react-icons/hi";

interface PDFViewerProps {
    pdfImages: string[];
    closePdfViewer: () => void;
    isViewerOpen: boolean;
}

const PDFViewer = ({ pdfImages, closePdfViewer, isViewerOpen }: PDFViewerProps) => {

    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        if (currentPage < pdfImages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        if (isViewerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // cleanup
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isViewerOpen]);

    return (
        <div className='fixed inset-0 flex items-center justify-center z-[100]'>
            <div className='fixed inset-0 bg-black opacity-80' onClick={closePdfViewer}></div>
            <div className='max-w-[1240px] w-fit max-h-[400px] min-[350px]:mx-6 sm:mx-2 min-[350px]:h-fit sm:h-full z-50 relative flex items-center'>
                <button
                    onClick={() => prevPage()}
                    className={`absolute top-1/2 -left-5 rounded-full bg-white z-50 hover:bg-gray-200 transform -translate-y-1/2 p-3  ${pdfImages.length === 1 && 'hidden'}`}
                >
                    <HiOutlineChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <Image src={pdfImages[currentPage]} alt="Art" width={500} height={600} className='w-full max-w-[500px] h-auto' />
                <button
                    onClick={() => nextPage()}
                    className={`absolute top-1/2 -right-5 rounded-full bg-white z-50 hover:bg-gray-200 transform -translate-y-1/2 p-3  ${pdfImages.length === 1 && 'hidden'}`}
                >
                    <HiOutlineChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>
            <button
                type='button'
                className='absolute top-4 right-8'
                onClick={closePdfViewer}
            >
                <HiOutlineX className='w-6 h-6 text-white' />
            </button>
        </div>

    );
};

export default PDFViewer;
