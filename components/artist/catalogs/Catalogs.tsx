'use client';

import CatalogItem, { CatalogModel } from "./CatalogItem";
import Accordion from "../../shared/Accordion";

interface CatalogsProps {
    catalogs: CatalogModel[];
}

const Catalogs = ({ catalogs }: CatalogsProps) => {


    return (
        <Accordion title="Literature and Catalogs">
            {catalogs.map((catalog, index) => (
                <div key={index}>
                    <CatalogItem catalog={catalog} />
                </div>
            ))}
        </Accordion>
    );
}

export default Catalogs;
