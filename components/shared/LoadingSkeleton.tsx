import CardSkeleton from "../collection/loadingSkeleton/CardSkeleton";


const LoadingSkeleton = () => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 min-[500px]:gap-5 lg:gap-7 w-full max-w-[1240px] xl:mx-auto my-8 md:my-12 lg:my-24">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
};

export default LoadingSkeleton;