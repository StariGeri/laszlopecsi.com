import React, { useEffect, useState } from 'react';

import { fetchAllArt } from "@/services/api";
import { ArtModel } from '@/types/ArtModel';

import ArtCard from "./ArtCard";
import LoadingSkeleton from './loadingSkeleton/LoadingSkeleton';

const Cards = () => {
    const [arts, setArts] = useState<ArtModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<String>('');


    useEffect(() => {
        const fetchArts = async () => {
            try {
                setIsLoading(true); // Start loading
                const fetchedArts = await fetchAllArt();
                setArts(fetchedArts);
                setIsLoading(false); // Finish loading
            } catch (error) {
                console.error("Failed to fetch arts:", error);
                setError("Failed to load the art collection. Please try refreshing the page.");
                setIsLoading(false); // Finish loading
            }
        };

        fetchArts();
    }, []);

    if (isLoading) {
        return <LoadingSkeleton />; // Show spinner while loading
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 min-[500px]:gap-5 lg:gap-7 w-full max-w-[1240px] xl:mx-auto my-8 md:my-12 lg:my-24">
            {arts.map((art) => (
                <ArtCard key={art.id} art={art} />
            ))}
        </div>
    );
}

export default Cards;
