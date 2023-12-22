import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('/');
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return { activeLink };
};
