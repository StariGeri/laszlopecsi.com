// Dependencies
import React from 'react';

// Components
import ArtCard from "./ArtCard";
import LoadingSkeleton from './loadingSkeleton/LoadingSkeleton';
import Pagination from './Pagination';

// Hooks
import { useFetchArts } from '@/hooks/useFetchArts';


const Cards = () => {

    const { error, searchTerm, hasFilterSet, numberOfSearchedArts, isLoading, arts, totalPages, setCurrentPage, currentPage } = useFetchArts();

    // if an error occurs, display the error message
    if (error) {
        return <div className="text-center text-red-500 my-4 md:my-6 lg:my-8">{error}</div>;
    }

    return (
        <>
            <div className='w-full max-w-[1240px] mx-auto mt-2 md:mt-3'>
                {searchTerm && !hasFilterSet && (
                    <div className="text-sm sm:text-base md:text-lg font-medium font-body">
                        ({numberOfSearchedArts}) results for &quot;{searchTerm}&quot;
                    </div>
                )}
                {hasFilterSet && !searchTerm && (
                    <div className="text-sm sm:text-base md:text-lg font-medium font-body">
                        ({numberOfSearchedArts}) results for the applied filters
                    </div>
                )}
                {searchTerm && hasFilterSet && (
                    <div className="text-sm sm:text-base md:text-lg font-medium font-body">
                        ({numberOfSearchedArts}) results for &quot;{searchTerm}&quot; and the applied filters
                    </div>
                )}
            </div>
            {/**CARDS */}
            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 min-[500px]:gap-5 lg:gap-7 w-full max-w-[1240px] xl:mx-auto my-8 md:my-12 lg:my-24">
                    {arts.map((art) => (
                        <ArtCard key={art.id} art={art} />
                    ))}
                </div>
            )}
            {/**PAGINATION */}
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
    );
}

export default Cards;
