// Dependencies
import { useState } from 'react';
import useAsyncEffect from 'use-async-effect';

// Providers
import { useSearchNArt } from '@/providers/ArtNSearchProvider';

// Services
import { fetchArtTypes, fetchArtMaterials } from '@/services/api';


/**
 * @description This hook is responsible for fetching the filter options from the database as well as setting them and handling the search term
 * @returns {Object} - The filter options and the search term, as well as the function to handle the search term change
 */
export const useFilterOptions = () => {
  const { searchTerm, setSearchTerm } = useSearchNArt();

  const [artTypes, setArtTypes] = useState<string[]>([]);
  const [artMaterials, setArtMaterials] = useState<string[]>([]);
  const [artSizes, setArtSizes] = useState<string[]>([]);
  const [artStatus, setArtStatus] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<number[]>([1966, 1984]);

  const sizes = ['small', 'medium', 'large', 'extra large'];
  const availablity = ['available', 'sold'];

  // fetch the filter options when the component mounts and memoize the results
  useAsyncEffect(async (isMounted) => {
    // get the filter options
    const types = await fetchArtTypes();
    const materials = await fetchArtMaterials();
    if (!isMounted()) return;

    // set the filter options
    setArtTypes(types);
    setArtMaterials(materials);
    setArtSizes(sizes);
    setArtStatus(availablity);
  }, []);

  const filterOptions = {
    artTypes,
    artMaterials,
    artSizes,
    artStatus,
    yearRange,
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { filterOptions, handleSearchTermChange, searchTerm };
};
