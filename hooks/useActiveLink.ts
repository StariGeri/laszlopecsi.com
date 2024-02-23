// Dependencies
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('/');
  const router = useRouter();

  useEffect(() => {
    // if the path is /collection/1, we want to set the active link to /collection
    const path = router.pathname.split('/')[1];

    setActiveLink(`/${path}`);
  }, [router.pathname]);

  return { activeLink };
};
