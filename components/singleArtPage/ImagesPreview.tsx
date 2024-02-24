// Dependencies
import Image from "next/image";

interface ImagesPreviewProps {
    images: string[];
    onModalOpen: () => void;
}

/**
 * @description This component is used to display the first 1-4 images of an art piece
 * @param images - array of image urls
 * @param onModalOpen - function to open the image modal
 */
const ImagesPreview = ({ images, onModalOpen }: ImagesPreviewProps) => {

    // if there is only one image, return an empty fragment, so we don't render anything
    if (images.length < 2) return <></>;

    //display the first 1-4 images if there is more than 1 image
    const displayedImages = images.slice(1, 4);

    return (
        <div className="flex gap-2 mt-2 mx-auto">
            {displayedImages.map((image, index) => (
                <Image key={index} src={image} alt="art" width={96} height={96} className="w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 object-contain" />
            ))}
            <RestImages images={images} onModalOpen={onModalOpen} />
        </div>
    );
};

export default ImagesPreview;


/** 
 * This component is used to display the remaining images if there are more than 4 images
 * @param images - array of image urls
 * @param onModalOpen - function to open the image modal
*/
const RestImages = ({ images, onModalOpen }: ImagesPreviewProps) => {

    const imagesCount = images.length;

    if (imagesCount < 4) return <></>;

    return (
        <div
            onClick={onModalOpen}
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 cursor-pointer"
        >
            <Image src={images[4]} alt="art" width={96} height={96} className="w-full h-full object-contain" />
            <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-60 text-white font-body font-semibold text-lg md:text-xl lg:text-[22px]">
                +{imagesCount - 4}
            </div>
        </div>
    );
};