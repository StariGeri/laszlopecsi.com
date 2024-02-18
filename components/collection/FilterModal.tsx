//Dependencies
import { useEffect, useState } from "react";

// Icons
import { HiXMark, HiOutlineFunnel, HiOutlineTrash } from "react-icons/hi2";

// 3rd Party components
import Slider from '@mui/material/Slider';

//Providers
import { useFilter } from "@/providers/FilterProvider";

//Components
import Checkbox from "./Checkbox";

const FilterModal = () => {

    const { isFilterModalOpen, setIsFilterModalOpen } = useFilter();

    const [yearRange, setYearRange] = useState<number[]>([1966, 1981]);

    // block the scroll when the modal is open
    useEffect(() => {

        if (isFilterModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = 'auto';
        }

        // cleanup
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isFilterModalOpen]);

    const handleYearChange = (event: Event, newValue: number | number[]) => {
        setYearRange(newValue as number[]);
    };

    return (
        <>
            {/**BackgroundOverlay */}
            {isFilterModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsFilterModalOpen(false)}></div>}
            {/**Modal */}
            <div className="fixed w-full md:max-w-[550px] h-fit inset-0 m-auto bg-white flex flex-col justify-center items-center z-50 rounded-lg p-2 md:p-4 lg:p-5">
                {/** Modal header */}
                <div className="w-full h-fit flex justify-between items-center pb-2 border-b border-b-black">
                    <div className="flex items-center gap-2 md:gap-3">
                        <HiOutlineFunnel className="w-5 h-5 md:w-6 md:h-6 mb-0.5" />
                        <h1 className="font-body font-semibold text-lg md:text-xl lg:text-[26px]">Filter</h1>
                    </div>
                    <button onClick={() => setIsFilterModalOpen(false)}>
                        <HiXMark className="w-5 h-5 md:w-6 md:h-6 hover:bg-slate-200 rounded-full duration-200 transition-all" />
                    </button>
                </div>
                {/** Modal Content */}
                <div className="w-full flex flex-col py-4 md:py-6">
                    {/**Availability */}
                    <div className="flex flex-col">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Status</h2>
                        <div className="grid grid-cols-3 lg:grid-cols-4 px-2">
                            <Checkbox label="Available" name="available" value="" onChange={() => console.log("clicked available")} />
                            <Checkbox label="Sold" name="sold" value="" onChange={() => console.log("clicked sold")} />
                        </div>
                    </div>
                    {/**Type */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Type</h2>
                        <div className="grid grid-cols-3 lg:grid-cols-4 px-2">
                            <Checkbox label="Gobelin" name="gobelin" value="" onChange={() => console.log("clicked gobelin")} />
                            <Checkbox label="Textil" name="textil" value="" onChange={() => console.log("clicked textil")} />
                            <Checkbox label="Painting" name="painting" value="" onChange={() => console.log("clicked painting")} />
                            <Checkbox label="Mixed" name="mixed" value="" onChange={() => console.log("clicked mixed")} />
                        </div>
                    </div>
                    {/**Material */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Material</h2>
                        <div className="grid grid-cols-3 lg:grid-cols-4 px-2">
                            <Checkbox label="Wool" name="wool" value="" onChange={() => console.log("clicked wool")} />
                            <Checkbox label="Thread" name="thread" value="" onChange={() => console.log("clicked thread")} />
                            <Checkbox label="Mixed" name="mixed" value="" onChange={() => console.log("clicked mixed")} />
                        </div>
                    </div>
                    {/**Size */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Size</h2>
                        <div className="grid grid-cols-3 lg:grid-cols-4 px-2">
                            <Checkbox label="Small" name="small" value="" onChange={() => console.log("clicked small")} />
                            <Checkbox label="Medium" name="medium" value="" onChange={() => console.log("clicked medium")} />
                            <Checkbox label="Large" name="large" value="" onChange={() => console.log("clicked large")} />
                            <Checkbox label="Extra Large" name="extra large" value="" onChange={() => console.log("clicked extra large")} />
                        </div>
                    </div>
                    {/**Year */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Year of creation</h2>
                        <div className="w-4/5 mx-auto">
                            <Slider
                                value={yearRange}
                                onChange={handleYearChange}
                                valueLabelDisplay="auto"
                                min={1966}
                                max={1981}
                                disableSwap
                            />
                        </div>
                        <p className="font-body font-medium text-sm md:text-base">{yearRange[0]} - {yearRange[1]}</p>
                    </div>
                </div>
                {/**Modal Footer */}
                <div className="w-full flex justify-between items-center">
                    <button className="flex gap-1 items-center hover:underline">
                        <HiOutlineTrash className="w-5 h-5 md:w-6 md:h-6" />
                        <h3 className="font-body font-medium text-base md:text-lg lg:text-xl text-black">Clear</h3>
                    </button>
                    <button className="bg-primaryGreen rounded-lg text-white font-medium py-1.5 px-6 text-base md:text-lg lg:text-xl font-body hover:bg-opacity-75 duration-150 transition-all">
                        Apply
                    </button>
                </div>
            </div>
            <style>
                {`
                    .MuiSlider-root {
                        color: #FF5C0A;
                    }
                `}
            </style>
        </>
    );

}

export default FilterModal;