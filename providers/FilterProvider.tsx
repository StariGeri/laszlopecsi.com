import { ArtModel } from '@/types/ArtModel';
import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
    isFilterModalOpen: boolean;
    setIsFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filteredArts: ArtModel[];
    setFilteredArts: (arts: ArtModel[]) => void;
}

interface FilterProviderProps {
    children: React.ReactNode;
}

// create the context with default values
const FilterContext = createContext<FilterContextType>({
    isFilterModalOpen: false,
    setIsFilterModalOpen: () => { },
    filteredArts: [],
    setFilteredArts: () => { }
});


export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filteredArts, setFilteredArts] = useState<ArtModel[]>([]);

    return (
        <FilterContext.Provider value={{ isFilterModalOpen, setIsFilterModalOpen, filteredArts, setFilteredArts }}>
            {children}
        </FilterContext.Provider>
    );
};
