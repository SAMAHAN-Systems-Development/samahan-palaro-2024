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
      <div className="w-full mx-auto flex justify-between items-center p-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="lg:hidden text-4xl font-bold text-green cursor-pointer"
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>

        {/* Logo */}
        <Link href="/">
          <Image
            src={logo.src}
            width={125}
            height={125}
            alt="Palaro Logo"
            className="h-8"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 py-4 font-jersey10 ${isMenuOpen ? 'absolute top-[100px] left-0 w-full bg-blue shadow-lg' : 'hidden lg:flex z-'}`}
        >
          {menuItems.map(({ href, label }) => (
            <li
              key={href}
              className="hover:text-pink text-white transition-colors duration-300 text-2xl lg:text-4xl"
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
