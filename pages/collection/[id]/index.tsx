// Hooks
import { useFetchSingleArt } from '@/hooks/useFetchSingleArt';

// Components
import SingleArtImages from '@/components/singleArtPage/SingleArtImages';

export default function ArtPage() {

    const { singleArt } = useFetchSingleArt();



    if (!singleArt) return <div>Loading...</div>; //TODO: create a loading component

    return (
        <div className='w-full max-w-[1240px] flex flex-row md:flex-col items-center mt-4 px-2 md:px-4 z-40'>
            <SingleArtImages images={singleArt.images} />
        </div>
    );
}
