import SingleArtCTA from "../SingleArtCTA";

const SingleArtLoadingSkeleton = () => {

    return (
        <div className='w-full max-w-[1000px] flex flex-col px-2 md:px-4 mx-auto mt-8 md:mt-12 lg:mt-24 animate-pulse'>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                {/* Images Loading Skeleton*/}
                <div className='imageContainer w-full md:w-1/2 flex flex-col mx-auto'>
                    <div
                        className="flex items-center justify-center w-full h-[420px] max-w-[500px] mx-auto bg-gray-300">
                        <svg className="w-10 h-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>
                    {/** More Images Skeleton Loader */}
                    <div className="flex gap-2 mt-2 mx-auto">
                        <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 object-contain"></div>
                        <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 object-contain"></div>
                        <div className="bg-gray-300 w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 object-contain"></div>
                    </div>
                </div>
                {/* Datasheet Loading Skeleton */}
                <div className="w-full md:w-1/2 flex flex-col p-2 ">
                    <div className="h-3 bg-gray-200 rounded-full w-80 lg:w-96 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-80 lg:w-96 mb-4 md:mb-8"></div>
                    <div className="p-2 border-b-[0.5px] border-b-gray-200 flex items-center justify-between mb-4">
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="p-2 border-b-[0.5px] border-b-gray-200 flex items-center justify-between mb-4">
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="p-2 border-b-[0.5px] border-b-gray-200 flex items-center justify-between mb-4">
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="p-2 border-b-[0.5px] border-b-gray-200 flex items-center justify-between mb-4">
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 ml-auto my-4 md:mt-8">
                        <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                        <div className="h-1.5 w-24 sm:w-32 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
            <SingleArtCTA />
        </div>
    );

}

export default SingleArtLoadingSkeleton;