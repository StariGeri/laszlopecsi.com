//Dependencies
import { useState, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';

// 3rd party
import { useDebounce } from '@uidotdev/usehooks';

// Providers
import { useSearchNArt } from '@/providers/ArtNSearchProvider';
import { useFilter } from '@/providers/FilterProvider';

// Services
import { fetchArtCount, fetchArts } from '@/services/api';

/**
 * @description This hook is responsible for fetching the arts from the database based on the search term and the filter criteria
 * @returns {Object} - The error message, the search term, the number of searched arts, the loading state and the arts
 */

export const useFetchArts = () => {
  // get the arts and the search term from the context
  const { arts, setArts, searchTerm } = useSearchNArt();
  const { filterCriteria } = useFilter();

  // debounce the search term, so it doesn't fire on every keystroke
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const [numberOfSearchedArts, setNumberOfSearchedArts] = useState(0);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasFilterSet, setHasFilterSet] = useState(false);

  // states for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 9; // number of arts to display per page

  useEffect(() => {
    if (
      filterCriteria.status !== undefined ||
      filterCriteria.type.length > 0 ||
      filterCriteria.material.length > 0 ||
      filterCriteria.size.length > 0 ||
      filterCriteria.yearRange[0] !== 1966 ||
      filterCriteria.yearRange[1] !== 1981
    ) {
      setHasFilterSet(true);
    } else {
      setHasFilterSet(false);
    }
    setCurrentPage(1); // reset the current page to 1 when the filter criteria changes
  }, [filterCriteria]);

  // refetch the arts when the search term changes
  useAsyncEffect(async () => {
    await fetchDataAsync();
  }, [debouncedSearchTerm, filterCriteria, currentPage]);

  // this function handles the fetching of the artpieces
  const fetchDataAsync = async () => {
    setNumberOfSearchedArts(0);

    setIsLoading(true);
    try {
      const totalArtCount = await fetchArtCount(debouncedSearchTerm, filterCriteria);
      const totalPageCount = Math.ceil(totalArtCount / itemsPerPage);
      setTotalPages(totalPageCount);

      const offset = (currentPage - 1) * itemsPerPage;
      const searchedArts = await fetchArts(debouncedSearchTerm, filterCriteria, offset, itemsPerPage);

      setArts(searchedArts);
      setNumberOfSearchedArts(totalArtCount);
    } catch (error) {
      console.error('Failed to fetch arts:', error);
      setError('Failed to load the art collection. Please try refreshing the page.');
    } finally {
      setIsLoading(false);
    }
  };

  return { error, searchTerm, hasFilterSet, numberOfSearchedArts, isLoading, arts, currentPage, totalPages, setCurrentPage };
};
