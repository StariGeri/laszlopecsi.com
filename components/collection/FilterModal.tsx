//Dependencies
import React from "react";

// Hooks
import { useFilterModal } from "@/hooks/useFilterModal";

// Icons
import { HiXMark, HiOutlineFunnel, HiOutlineTrash } from "react-icons/hi2";

// 3rd Party components
import Slider from '@mui/material/Slider';

//Components
import Checkbox from "./Checkbox";


interface FilterModalProps {
    filterOptions: {
        artTypes: string[];
        artMaterials: string[];
        artSizes: string[];
        artStatus: string[];
        yearRange: number[];
    };
}

const FilterModal = ({ filterOptions }: FilterModalProps) => {

    const { isFilterModalOpen, setIsFilterModalOpen, resetKey, selectedStatus, handleMaterialChange, handleStatusChange, handleTypeChange, handleSizeChange,
        filterCriteria, yearRange, handleYearChange, applyFilters, clearFilters } = useFilterModal();

    return (
        <>
            {/**BackgroundOverlay */}
            {isFilterModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsFilterModalOpen(false)}></div>}
            {/**Modal */}
            <div key={resetKey} className="fixed w-[98%] sm:max-w-[550px] h-fit inset-0 m-auto bg-white flex flex-col justify-center items-center z-50 rounded-lg p-2 md:p-4 lg:p-5">
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
                {/**Modal Body */}
                <div className="w-full flex flex-col py-4 md:py-6">
                    {/**Availability */}
                    <div className="flex flex-col">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Status</h2>
                        <div className="grid grid-cols-3 px-2">
                            {filterOptions.artStatus.map((status, index) => (
                                <Checkbox
                                    key={index}
                                    label={status}
                                    name={status}
                                    checked={selectedStatus === (status === "available")}
                                    onChange={() => { handleStatusChange(status === "available") }}
                                />
                            ))}
                        </div>
                    </div>
                    {/**Type */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Type</h2>
                        <div className="grid grid-cols-3 px-2">
                            {filterOptions.artTypes.map((type, index) => (
                                <Checkbox
                                    key={index}
                                    label={type}
                                    name={type}
                                    defaultChecked={filterCriteria.type.includes(type)}
                                    onChange={() => { handleTypeChange(type) }}
                                />
                            ))}
                        </div>
                    </div>
                    {/**Material */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Material</h2>
                        <div className="grid grid-cols-3 px-2">
                            {filterOptions.artMaterials.map((material, index) => (
                                <Checkbox
                                    key={index}
                                    label={material}
                                    name={material}
                                    defaultChecked={filterCriteria.material.includes(material)}
                                    onChange={() => { handleMaterialChange(material) }}
                                />
                            ))}
                        </div>
                    </div>
                    {/**Size */}
                    <div className="flex flex-col mt-4">
                        <h2 className="font-body font-semibold text-lg md:text-xl lg:text-[22px] mb-2">Size</h2>
                        <div className="grid grid-cols-3 px-2">
                            {filterOptions.artSizes.map((size, index) => (
                                <Checkbox
                                    key={index}
                                    label={size}
                                    name={size}
                                    defaultChecked={filterCriteria.size.includes(size)}
                                    onChange={() => { handleSizeChange(size) }}
                                />
                            ))}
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
                    <button
                        onClick={clearFilters}
                        className="flex gap-1 items-center hover:underline"
                    >
                        <HiOutlineTrash className="w-5 h-5 md:w-6 md:h-6" />
                        <h3 className="font-body font-medium text-base md:text-lg lg:text-xl text-black">Clear</h3>
                    </button>
                    <button
                        onClick={applyFilters}
                        className="bg-primaryGreen rounded-lg text-white font-medium py-1.5 px-6 text-base md:text-lg lg:text-xl font-body hover:bg-opacity-75 duration-150 transition-all"
                    >
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