//Dependencies
import { useState, useEffect } from 'react';

// Providers
import { useFilter } from '@/providers/FilterProvider';

/**
 * @description This hook is responsible for handling the filter modal logic 
 * @returns {Object} - The state and the functions to handle the filter modal
 */
export const useFilterModal = () => {
  const { isFilterModalOpen, setIsFilterModalOpen, filterCriteria, updateFilterCriteria } = useFilter();

  const [yearRange, setYearRange] = useState<number[]>([1950, 1999]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<boolean>();

  const [resetKey, setResetKey] = useState(0);

  // block the scroll when the modal is open
  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFilterModalOpen]);

  const handleYearChange = (event: Event, newValue: number | number[]) => {
    const newYearRange = newValue as number[];
    setYearRange(newYearRange);
  };

  // Set the selected filters when the modal is opened
  useEffect(() => {
    setSelectedStatus(filterCriteria.status);
    setSelectedTypes(filterCriteria.type);
    setSelectedMaterials(filterCriteria.material);
    setSelectedSizes(filterCriteria.size);
    setYearRange(filterCriteria.yearRange);
  }, []);

  // function to apply the selected filters
  const applyFilters = () => {
    updateFilterCriteria({
      status: selectedStatus,
      type: selectedTypes,
      material: selectedMaterials,
      size: selectedSizes,
      yearRange,
    });
    setIsFilterModalOpen(false);
  };

  // function to clear the selected filters
  const clearFilters = () => {
    setSelectedStatus(undefined);
    setSelectedTypes([]);
    setSelectedMaterials([]);
    setSelectedSizes([]);
    setYearRange([1966, 1984]);
    updateFilterCriteria({
      status: undefined,
      type: [],
      material: [],
      size: [],
      yearRange: [1966, 1984],
    });
    setResetKey((prev) => prev + 1);
  };

  // function to handle the change of the selected types filter
  const handleTypeChange = (type: string) => {
    setSelectedTypes((prevSelectedTypes) => {
      if (prevSelectedTypes.includes(type)) {
        return prevSelectedTypes.filter((t) => t !== type);
      } else {
        return [...prevSelectedTypes, type];
      }
    });
  };

  // function to handle the change of the selected materials filter
  const handleMaterialChange = (material: string) => {
    setSelectedMaterials((prevSelectedMaterials) => {
      if (prevSelectedMaterials.includes(material)) {
        return prevSelectedMaterials.filter((m) => m !== material);
      } else {
        return [...prevSelectedMaterials, material];
      }
    });
  };

  // function to handle the change of the selected sizes filter
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((s) => s !== size);
      } else {
        return [...prevSelectedSizes, size];
      }
    });
  };

  // function to handle the change of the selected status filter
  const handleStatusChange = (status: boolean) => {
    setSelectedStatus((prevStatus) => {
      if (prevStatus === status) {
        return undefined; // Allow unselecting a status
      }
      return status;
    });
  };

  return {
    isFilterModalOpen,
    setIsFilterModalOpen,
    applyFilters,
    clearFilters,
    handleYearChange,
    handleTypeChange,
    handleMaterialChange,
    handleSizeChange,
    handleStatusChange,
    selectedStatus,
    yearRange,
    resetKey,
    filterCriteria,
  };
};
