import { HiOutlineEye, HiOutlineExternalLink } from "react-icons/hi";

export type CatalogModel = {
    title: string;
    images: string[];
    catalogLink: string; // for opening it in a new tab
    openCatalog: () => void;
};
interface CatalogItemProps {
    catalog: CatalogModel;
}

const CatalogItem = ({ catalog }: CatalogItemProps) => {
    return (
        <div className="w-full flex items-center justify-between pt-2 last:pb-2">
            <h2 className="font-body text-base md:text-[20px] lg:text-[24px]">{catalog.title}</h2>
            <div className="flex items-center gap-3">
                <button onClick={catalog.openCatalog}>
                    <HiOutlineEye className="w-6 h-6 text-gray-500 hover:text-black duration-150 transition-all" />
                </button>
                <a href={catalog.catalogLink} target="_blank" rel="noreferrer">
                    <HiOutlineExternalLink className="w-6 h-6 text-gray-500 hover:text-black duration-150 transition-all" />
                </a>
            </div>
        </div>
    );
}
export default CatalogItem;