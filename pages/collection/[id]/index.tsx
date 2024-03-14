// Dependencies
import Head from 'next/head';

// Hooks
import { useFetchSingleArt } from '@/hooks/useFetchSingleArt';

// Components
import SingleArtImages from '@/components/singleArtPage/SingleArtImages';
import SingleArtDataSheet from '@/components/singleArtPage/SingleArtDataSheet';
import SingleArtCTA from '@/components/singleArtPage/SingleArtCTA';
import SingleArtLoadingSkeleton from '@/components/singleArtPage/loadingSkeleton/SingleArtLoadingSkeleton';

export default function ArtPage() {

    const { singleArt, loading } = useFetchSingleArt();


    if (loading) return <SingleArtLoadingSkeleton />;
    if (!singleArt.id) return <></>;

    return (
        <div className='w-full max-w-[1000px] flex flex-col px-2 md:px-4 mx-auto mt-8 md:mt-12 lg:mt-24'>
            <Head>
                <title>Discover Artpieces | Laszlo Pecsi Art Collection</title>
                <meta name="description" content="Discover and take a deep dive into the artistic legacy of Laszlo Pecsi." />
                <meta property="og:image" content="/assets/images/artistabout.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                <SingleArtImages images={singleArt.images} />
                <SingleArtDataSheet art={singleArt} />
            </div>
            <SingleArtCTA />
        </div>
    );
}
