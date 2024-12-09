'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './public/palaro-logo.png';

const Navbar: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'HOME' },
    { href: '/Gallery', label: 'GALLERY' },
    { href: '/TWG', label: 'TWG' },
  ];

  return (
    <nav className="jersey10 bg-blue shadow-lg border-b-8 border-green px-8">
      <div className="w-full mx-auto flex justify-between items-center p-4 relative">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="lg:hidden text-4xl font-bold text-green cursor-pointer"
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>

        {/* Logo */}
        <Link href="/">
          <Image src={logo.src} width={150} height={125} alt="Palaro Logo" />
        </Link>

        {/* Navigation Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:relative ${
            isMenuOpen ? 'top-full' : 'hidden'
          } left-0 w-full lg:w-auto bg-blue lg:bg-transparent py-6 lg:py-0 px-6 lg:px-0`}
          style={{ zIndex: 40 }}
        >
          {menuItems.map(({ href, label }) => (
            <li
              key={href}
              className="font-jersey10 text-white text-3xl hover:text-pink transition-colors"
            >
              <Link href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
