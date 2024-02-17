import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchAllArt } from "@/services/api";
import { ArtModel } from '@/types/ArtModel';
import ArtCard from "./ArtCard";
import LoadingSkeleton from './loadingSkeleton/LoadingSkeleton';

const Cards = () => {
    const [arts, setArts] = useState<ArtModel[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<string>('');
    const [offset, setOffset] = useState(0);
    const limit = 6; // Adjust as needed

    useEffect(() => {
        fetchMoreData(); // Initial fetch
    }, []);

    const fetchMoreData = async () => {
        try {
            const newArts = await fetchAllArt(offset, limit) as ArtModel[];
            setArts([...arts, ...newArts]);
            setOffset(offset + limit);
            if (newArts.length === 0 || newArts.length < limit) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Failed to fetch arts:", error);
            setError("Failed to load the art collection. Please try refreshing the page.");
        }
    };

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <InfiniteScroll
            dataLength={arts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<LoadingSkeleton />}
        >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 min-[500px]:gap-5 lg:gap-7 w-full max-w-[1240px] xl:mx-auto my-8 md:my-12 lg:my-24">
                {arts.map((art, index) => (
                    <ArtCard key={index} art={art} />
                ))}
            </div>
        </InfiniteScroll>
    );
}

export default Cards;
