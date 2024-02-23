// Dependencies
import { useState } from "react";
import Image from "next/image";

// Components
import ImageModal from "./ImageModal";
import ImagesPreview from "./ImagesPreview";

interface SingleArtImagesProps {
    images: string[];
}

const SingleArtImages = ({ images }: SingleArtImagesProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openImageViewerModal = () => {
        setIsModalOpen(true);
    };

    const closeImageViewerModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='imageContainer flex flex-col'>
            {/** Main Image */}
            <Image
                src={images[0]}
                alt="art" width={600} height={600}
                className="w-full h-auto object-cover cursor-pointer"
                onClick={openImageViewerModal}
            />
            {/** More Images */}
            <ImagesPreview images={images} onModalOpen={openImageViewerModal} />
            {isModalOpen && <ImageModal images={images} closeImageViewer={closeImageViewerModal} />}
        </div>
    );
};

export default SingleArtImages;