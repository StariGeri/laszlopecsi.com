import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

export const useLanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, locales } = useRouter();

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

  return { toggleDropdown, dropdownRef, isOpen, setIsOpen, locale, locales };
};
