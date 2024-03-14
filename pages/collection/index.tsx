// Dependencies
import Head from 'next/head';

// Providers
import { ArtProvider } from '@/providers/ArtNSearchProvider'
import { FilterProvider } from '@/providers/FilterProvider';


//Components
import Cards from "@/components/collection/Cards";
import FilterBar from "@/components/collection/FilterBar";
import ScrollToTop from "@/components/collection/ScrollToTop";

export default function CollectionPage() {

    return (
        <FilterProvider>
            <ArtProvider>
                <div className="px-3 md:px-6 lg:px-10">
                    <Head>
                        <title>Collection | Laszlo Pecsi Art Collection</title>
                        <meta name="description" content="Discover and take a deep dive into the artistic legacy of Laszlo Pecsi." />
                        <meta property="og:image" content="/assets/images/fallen_angel_1.jpg" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <h1 className="w-fit font-header font-semibold text-[26px] md:text-[35px] lg:text-[40px] mx-auto my-8 md:my-12 lg:my-24">Collection</h1>
                    <FilterBar />
                    <Cards />
                    <ScrollToTop />
                </div>
            </ArtProvider >
        </FilterProvider>

    );
}