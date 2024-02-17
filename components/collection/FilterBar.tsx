import { HiMagnifyingGlass, HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useArt } from "@/providers/ArtProvider";


const FilterBar = () => {

    const { searchTerm, setSearchTerm } = useArt();

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="w-full max-w-[1240px] flex items-center gap-4 lg:gap-12 mx-auto">
            {/** Search bar */}
            <div className="w-full flex-grow-0 relative">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    className="w-full h-10 md:h-12 pl-12 pr-4 border border-slate-900 rounded-lg focus:outline-none placeholder:font-body placeholder:text-lg placeholder:text-slate-900" />
                <HiMagnifyingGlass className="absolute top-2 md:top-3 left-3 w-6 h-6 text-slate-900" />
            </div>
            {/** Filter modal button */}
            <button className="flex items-center justify-center h-10 md:h-12 p-4 bg-primaryOrange rounded-lg md:w-56">
                <p className="font-body font-semibold md:text-lg lg:text-[20px] text-white hidden md:flex">Filter</p>
                <HiAdjustmentsHorizontal className="w-6 h-6 flex md:hidden text-white" />
            </button>
        </div>
    );

};

export default FilterBar;