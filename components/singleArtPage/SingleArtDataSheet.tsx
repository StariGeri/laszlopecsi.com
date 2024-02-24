//Types
import { ArtModel } from "@/types/ArtModel";

interface SingleArtDataSheetProps {
    art: ArtModel;
}

const SingleArtDataSheet = ({ art }: SingleArtDataSheetProps) => {

    return (
        <div className='dataSheetContainer w-full md:w-1/2 flex flex-col p-2'>
            {/** Title */}
            <h1 className='font-body font-semibold text-lg md:text-xl lg:text-[26px] my-2'>{art.title}</h1>
            {/** DataSheet */}
            <div className="flex flex-col">
                <div className="flex justify-between items-center">
                    <h3 className="">Year</h3>
                    <p className='font-body text-medium text-lg md:text-xl lg:text-[22px]'>{art.year}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleArtDataSheet;