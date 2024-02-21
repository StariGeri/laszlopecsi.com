import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
    isFilterModalOpen: boolean;
    setIsFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filterCriteria: FilterType;
    updateFilterCriteria: (newCriteria: Partial<FilterType>) => void;
}

export interface FilterType {
    status: boolean | undefined;
    type: string[];
    material: string[];
    size: string[];
    yearRange: number[];

}

interface FilterProviderProps {
    children: React.ReactNode;
}

// Provide actual default values for filterCriteria
const defaultFilterCriteria: FilterType = {
    status: undefined,
    type: [],
    material: [],
    size: [],
    yearRange: [1966, 1981],
};

// create the context with default values
const FilterContext = createContext<FilterContextType>({
    isFilterModalOpen: false,
    setIsFilterModalOpen: () => { },
    filterCriteria: defaultFilterCriteria,
    updateFilterCriteria: () => { },
});


export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState<FilterType>(defaultFilterCriteria);

    // Add functions to update these filters
    const updateFilterCriteria = (newCriteria: Partial<FilterType>) => {
        setFilterCriteria(prev => ({ ...prev, ...newCriteria }));
    };


    return (
        <FilterContext.Provider value={{ isFilterModalOpen, setIsFilterModalOpen, filterCriteria, updateFilterCriteria }}>
            {children}
        </FilterContext.Provider>
    );
};
