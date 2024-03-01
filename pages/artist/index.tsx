'use client';

// Dependencies
import { useState } from "react";
import useAsyncEffect from "use-async-effect";

// Constants
import { exhibition_1983, hungarian_applied_arts, life_work_exhibition, memorial_exhibition } from "@/constants/PDFImages";

// Components
import PDFViewer from "@/components/artist/pdfViewer/PDFViewer";
import Catalogs from "@/components/artist/catalogs/Catalogs";
import Exhibitions from "@/components/artist/Exhibitions";
import Carousel from "@/components/shared/carousel/Carousel";
import MapSection from "@/components/artist/MapSection";
import AboutArtist from "@/components/artist/AboutArtist";

// Services
import { fetchCarouselItems } from "@/services/api";

// Types
import { ArtModel } from "@/types/ArtModel";
import { CatalogModel } from "@/components/artist/catalogs/CatalogItem";
import Biography from "@/components/artist/Biography";


export default function ArtistPage() {

    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentPdfImages, setCurrentPdfImages] = useState<string[]>([]);

    const openPdfViewer = (pdfImages: string[]) => {
        setCurrentPdfImages(pdfImages);
        setIsViewerOpen(true);
    };

    const closePdfViewer = () => {
        setIsViewerOpen(false);
        setCurrentPdfImages([]);
    };

    const catalogs: CatalogModel[] = [
        {
            title: "Laszlo Pecsi Exhibition 1983 [HU/DE]",
            images: exhibition_1983,
            catalogLink: "https://vssapevldqrtycxdjgjt.supabase.co/storage/v1/object/public/artImages/catalogs/1983_exhibition_laszlo_pecsi_HU_DE.pdf",
            openCatalog: () => openPdfViewer(exhibition_1983),
        },
        {
            title: "Hungarian Applied Arts 2005/2 [HU]",
            images: hungarian_applied_arts,
            catalogLink: "https://vssapevldqrtycxdjgjt.supabase.co/storage/v1/object/public/artImages/catalogs/hungarian_applied_arts_laszlo_pecsi_HUN.pdf",
            openCatalog: () => openPdfViewer(hungarian_applied_arts),
        },
        {
            title: "Life Work Exhibition [HU/EN]",
            images: life_work_exhibition,
            catalogLink: "https://vssapevldqrtycxdjgjt.supabase.co/storage/v1/object/public/artImages/catalogs/life_work_exhibition_laszlo_pecsi_HU_EN.pdf",
            openCatalog: () => openPdfViewer(life_work_exhibition),
        },
        {
            title: "Memorial Exhibition [HU/EN]",
            images: memorial_exhibition,
            catalogLink: "https://vssapevldqrtycxdjgjt.supabase.co/storage/v1/object/public/artImages/catalogs/memorial_exhibition_laszlo_pecsi_HU_EN.pdf",
            openCatalog: () => openPdfViewer(memorial_exhibition),
        },
    ];

    const [carouselItems, setCarouselItems] = useState<ArtModel[]>();

    // fetch the 8,12,13 id arts from the database
    useAsyncEffect(async (isMounted) => {
        const ids = [8, 12, 13];
        const items = await fetchCarouselItems(ids);

        if (!isMounted()) return;
        setCarouselItems(items);
    }, []);


    return (
        <div className='w-full max-w-[1240px] flex flex-col px-2 md:px-4 mx-auto mt-8 md:mt-12 lg:mt-24 bg-background'>
            <AboutArtist />
            <Biography />
            <MapSection />
            <div className="w-full max-w-[1000px] mx-auto flex flex-col my-8 md:my-12 lg:my-24">
                {isViewerOpen && <PDFViewer pdfImages={currentPdfImages} isViewerOpen={isViewerOpen} closePdfViewer={closePdfViewer} />}
                <ArtistAccordions catalogs={catalogs} />
            </div>
            {carouselItems ? <Carousel items={carouselItems} /> : <></>}
        </div>
    );
}

interface ArtistAccordionsProps {
    catalogs: CatalogModel[];
}

const ArtistAccordions = ({ catalogs }: ArtistAccordionsProps) => {

    return (
        <>
            <Catalogs catalogs={catalogs} />
            <Exhibitions />
        </>
    );
};