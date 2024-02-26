//Types
import { ArtModel } from "@/types/ArtModel";
import AvailableText from "../collection/AvailableText";

interface SingleArtDataSheetProps {
    art: ArtModel;
}

const SingleArtDataSheet = ({ art }: SingleArtDataSheetProps) => {

    const artDimension = `${art.dimensions[0]} x ${art.dimensions[1]} ${art.dimensions[2] !== undefined ? ` x ${art.dimensions[2]}` : ''}`;

    return (
        <div className='dataSheetContainer w-full md:w-1/2 flex flex-col p-2'>
            {/** Title */}
            <h1 className='font-body font-semibold text-2xl lg:text-[28px] mb-2 md:mb-8'>{art.title}</h1>
            {/** DataSheet */}
            <div className="flex flex-col">
                {/** Year */}
                <div className="flex justify-between items-center font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                    <h3 className="font-semibold text-base md:text-lg lg:text-xl">Year</h3>
                    <p className='font-normal text-lg md:text-xl lg:text-[22px]'>{art.year}</p>
                </div>
                {/** Dimensions */}
                <div className="flex justify-between items-center font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                    <h3 className="font-semibold text-base md:text-lg lg:text-xl">Dimensions</h3>
                    <p className='font-normal text-lg md:text-xl lg:text-[22px]'>{artDimension}</p>
                </div>
                {/** Type */}
                <div className="flex justify-between items-center font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                    <h3 className="font-semibold text-base md:text-lg lg:text-xl">Type</h3>
                    <p className='font-normal text-lg md:text-xl lg:text-[22px]'>{art.sub_type}</p>
                </div>
                {/** Material */}
                <div className="flex justify-between items-center font-body py-3 border-b-[0.5px] border-black border-opacity-50">
                    <h3 className="font-semibold text-base md:text-lg lg:text-xl">Material</h3>
                    <p className='font-normal text-lg md:text-xl lg:text-[22px]'>{art.sub_material}</p>
                </div>
            </div>
            {/** Status */}
            <div className="w-full flex justify-end items-center my-4 md:mt-8">
                <AvailableText isAvailable={art.status} />
            </div>
        </div>
    );
};

export default SingleArtDataSheet;