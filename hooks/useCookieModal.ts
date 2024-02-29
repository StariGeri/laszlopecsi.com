import { useState, useEffect } from 'react';

export const useCookieModal = () => {
  const [showCookieModal, setShowCookieModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      setShowCookieModal(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieModal(false);
  };

  return { showCookieModal, handleConsent };
};
