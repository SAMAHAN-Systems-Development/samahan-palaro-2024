'use client';

import { FC } from 'react';
import MobileNavbar from './views/MobileNavbar';
import DesktopNavbar from './views/DesktopNavbar';
import { useMediaQuery } from './useMediaQuery';

const Navbar: FC = () => {
  const isDesktopView = useMediaQuery(992);

  return (
    <nav>
      {isDesktopView ? <DesktopNavbar /> : <MobileNavbar />}{' '}
    </nav>
  );
};

export default Navbar;
