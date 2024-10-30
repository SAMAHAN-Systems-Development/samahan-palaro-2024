import { useEffect, useState } from 'react';

export const useMediaQuery = (minWidth: number) => {
  const [matches, setMatches] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.innerWidth >= minWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minWidth]);

  return matches;
};
