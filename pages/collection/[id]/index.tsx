// Hooks
import { useFetchSingleArt } from '@/hooks/useFetchSingleArt';

// Components
import SingleArtImages from '@/components/singleArtPage/SingleArtImages';
import SingleArtDataSheet from '@/components/singleArtPage/SingleArtDataSheet';
import SingleArtCTA from '@/components/singleArtPage/SingleArtCTA';

export default function ArtPage() {

    const { singleArt } = useFetchSingleArt();



    if (!singleArt) return <div>Loading...</div>; //TODO: create a loading component

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
