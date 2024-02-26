// Dependencies
import { useState } from "react";
import Image from "next/image";

// Components
import ImageModal from "./ImageModal";
import ImagesPreview from "./ImagesPreview";

interface SingleArtImagesProps {
    images: string[];
}

/**
 * @description This component is used to display the first image of an art piece as well as the rest of the images in small
 * @param images - array of image urls
 */

const SingleArtImages = ({ images }: SingleArtImagesProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openImageViewerModal = () => {
        setIsModalOpen(true);
    };

    const closeImageViewerModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='imageContainer w-full md:w-1/2 flex flex-col mx-auto'>
            {/** Main Image */}
            <Image
                src={images[0]}
                alt="art" width={1000} height={1000}
                className="h-full w-auto max-h-[420px] object-contain cursor-pointer"
                onClick={openImageViewerModal}
            /> 
            {/** More Images */}
            <ImagesPreview images={images} onModalOpen={openImageViewerModal} />
            {isModalOpen && <ImageModal images={images} closeImageViewer={closeImageViewerModal} isModalOpen={isModalOpen} />}
        </div>
    );
};

export default SingleArtImages;