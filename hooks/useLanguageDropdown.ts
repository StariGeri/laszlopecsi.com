import { useState, useEffect, useRef } from 'react';

export const useLanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Optional: Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const changeLanguage = (lang:string) => {
    setSelectedLanguage(lang); // Call the passed function with the new language
    setIsOpen(false); // Close the dropdown
  };

  return { toggleDropdown, dropdownRef, isOpen, changeLanguage,selectedLanguage };
};
