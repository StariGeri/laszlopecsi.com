import { ArtModel } from '@/types/ArtModel';
import React, { createContext, useContext, useState } from 'react';

interface ArtContextType {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    arts: ArtModel[];
    setArts: React.Dispatch<React.SetStateAction<ArtModel[]>>;

}

interface ArtProviderProps {
    children: React.ReactNode;
}

// create the context
const ArtContext = createContext<ArtContextType>({
    searchTerm: '',
    setSearchTerm: () => { },
    arts: [],
    setArts: () => { }
}
);

export const useArt = () => useContext(ArtContext);

export const ArtProvider = ({ children }: ArtProviderProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [arts, setArts] = useState<ArtModel[]>([]);

    // Include any other state or functions related to arts here

    return (
        <ArtContext.Provider value={{ searchTerm, setSearchTerm, arts, setArts }}>
            {children}
        </ArtContext.Provider>
    );
};
