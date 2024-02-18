import { ArtModel } from '@/types/ArtModel';
import React, { createContext, useContext, useState } from 'react';

interface ArtContextType {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    arts: ArtModel[];
    setArts: (arts: ArtModel[]) => void;
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

export const useSearchNArt = () => useContext(ArtContext);

export const ArtProvider = ({ children }: ArtProviderProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [arts, setArts] = useState<ArtModel[]>([]);

    return (
        <ArtContext.Provider value={{ searchTerm, setSearchTerm, arts, setArts }}>
            {children}
        </ArtContext.Provider>
    );
};
