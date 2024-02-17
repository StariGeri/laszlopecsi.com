import React, { useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';

import { fetchAllArt, fetchArtCount } from "@/services/api";
import { useArt } from '@/providers/ArtProvider';
import ArtCard from "./ArtCard";
import LoadingSkeleton from './loadingSkeleton/LoadingSkeleton';


const Cards = () => {

    // get the arts and the search term from the context
    const { arts, setArts, searchTerm } = useArt();

    // debounce the search term, so it doesn't fire on every keystroke
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const [numberOfFilteredArts, setNumberOfFiltereddArts] = useState(0);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    // fetch the arts when the component mounts
    useEffect(() => {
        fetchDataAsync();
    }, []);


    // refetch the arts when the search term changes
    useEffect(() => {
        fetchDataAsync();
    }, [debouncedSearchTerm]);

// this function handles the fetching of the artpieces
    const fetchDataAsync = async () => {
        setNumberOfFiltereddArts(0);

        if (searchTerm !== '') {
            setArts([]);
        }

        setIsLoading(true);
        try {
            const searchedArtCount = await fetchArtCount(debouncedSearchTerm);
            const searchedArts = await fetchAllArt(debouncedSearchTerm);

            setArts(searchedArts);
            setNumberOfFiltereddArts(searchedArtCount);

        } catch (error) {
            console.error("Failed to fetch arts:", error);
            setError("Failed to load the art collection. Please try refreshing the page.");
        } finally {
            setIsLoading(false);
        }
    };

    // if an error occurs, display the error message
    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    // if there are no artpieces that match the search term, display a message
    if (numberOfFilteredArts === 0 && debouncedSearchTerm && !isLoading) {
        return (
            <div className="text-center text-lg my-10">
                No results found for "{debouncedSearchTerm}"
            </div>
        )
    }


    return (
        <>
            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 min-[500px]:gap-5 lg:gap-7 w-full max-w-[1240px] xl:mx-auto my-8 md:my-12 lg:my-24">
                    {arts.map((art) => (
                        <ArtCard key={art.id} art={art} />
                    ))}
                </div>
            )}
        </>
    );
}

export default Cards;
