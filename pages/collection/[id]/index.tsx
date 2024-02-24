// Hooks
import { useFetchSingleArt } from '@/hooks/useFetchSingleArt';

// Components
import SingleArtImages from '@/components/singleArtPage/SingleArtImages';
import SingleArtDataSheet from '@/components/singleArtPage/SingleArtDataSheet';

export default function ArtPage() {

    const { singleArt } = useFetchSingleArt();



    if (!singleArt) return <div>Loading...</div>; //TODO: create a loading component

    return (
        <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-center mt-4 px-2 md:px-4 mx-auto my-8 md:my-12 lg:my-24'>
            <SingleArtImages images={singleArt.images} />
            <SingleArtDataSheet art={singleArt} />
        </div>
    );
}
