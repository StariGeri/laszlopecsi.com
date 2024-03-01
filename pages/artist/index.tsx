'use client';

// Dependencies
import { useState } from "react";

// Constants
import { exhibition_1983, hungarian_applied_arts, life_work_exhibition, memorial_exhibition } from "@/constants/PDFImages";

// Components
import PDFViewer from "@/components/artist/pdfViewer/PDFViewer";
import { CatalogModel } from "@/components/artist/catalogs/CatalogItem";
import Catalogs from "@/components/artist/catalogs/Catalogs";
import Exhibitions from "@/components/artist/Exhibitions";

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


    return (
        <div className='w-full max-w-[1000px] flex flex-col px-2 md:px-4 mx-auto mt-8 md:mt-12 lg:mt-24'>
            {isViewerOpen && <PDFViewer pdfImages={currentPdfImages} isViewerOpen={isViewerOpen} closePdfViewer={closePdfViewer} />}
            <Catalogs catalogs={catalogs} />
            <Exhibitions />
        </div>
    );
}