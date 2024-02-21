
// Dependencies
import React, { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

// Hooks
import { useDebounce } from '@uidotdev/usehooks';

// Services
import { fetchArts, fetchArtCount } from "@/services/api";

// Providers
import { useSearchNArt } from '@/providers/ArtNSearchProvider';

// Components
import ArtCard from "./ArtCard";
import LoadingSkeleton from './loadingSkeleton/LoadingSkeleton';
import { useFilter } from '@/providers/FilterProvider';


const Cards = () => {

    // get the arts and the search term from the context
    const { arts, setArts, searchTerm } = useSearchNArt();
    const { filterCriteria } = useFilter();

    // debounce the search term, so it doesn't fire on every keystroke
    const debouncedSearchTerm = useDebounce(searchTerm, 400);

    const [numberOfSearchedArts, setNumberOfSearchedArts] = useState(0);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);


    // refetch the arts when the search term changes
    useAsyncEffect(async () => {
        await fetchDataAsync();
    }, [debouncedSearchTerm, filterCriteria]);

    // this function handles the fetching of the artpieces
    const fetchDataAsync = async () => {
        setNumberOfSearchedArts(0);

        setIsLoading(true);
        try {
            const searchedArtCount = await fetchArtCount(debouncedSearchTerm, filterCriteria);
            const searchedArts = await fetchArts(debouncedSearchTerm, filterCriteria);

            setArts(searchedArts);
            setNumberOfSearchedArts(searchedArtCount);

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

    return (
        <>
            <div className='w-full max-w-[1240px] mx-auto mt-2 md:mt-3'>
                {searchTerm && (
                    <div className="text-sm sm:text-base md:text-lg font-medium font-body">
                        ({numberOfSearchedArts}) results for "{searchTerm}"
                    </div>
                )}
            </div>
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
