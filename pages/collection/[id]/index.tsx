// Hooks
import { useFetchSingleArt } from '@/hooks/useFetchSingleArt';

// Components
import SingleArtImages from '@/components/singleArtPage/SingleArtImages';
import SingleArtDataSheet from '@/components/singleArtPage/SingleArtDataSheet';
import SingleArtCTA from '@/components/singleArtPage/SingleArtCTA';
import SingleArtLoadingSkeleton from '@/components/singleArtPage/loadingSkeleton/SingleArtLoadingSkeleton';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Discover | Laszlo Pecsi Art Collection',
};

export default function ArtPage() {

    const { singleArt, loading } = useFetchSingleArt();


    if (loading) return <SingleArtLoadingSkeleton />; //TODO: create a loading component
    if(!singleArt.id) return <></>;

    return (
        <div className='w-full max-w-[1000px] flex flex-col px-2 md:px-4 mx-auto mt-8 md:mt-12 lg:mt-24'>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                <SingleArtImages images={singleArt.images} />
                <SingleArtDataSheet art={singleArt} />
            </div>
            <SingleArtCTA />
        </div>
    );
}
