'use client';
import { useState, FC } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const navLinkStyles = cva(
  'transition-colors duration-300 font-jersey10 cursor-pointer text-[48px] text-white',
  {
    variants: {
      linkType: {
        home: 'hover:text-blue-300',
        gallery: 'hover:text-green-300',
        twg: 'hover:text-red-300',
        default: 'hover:text-gray-300',
      },
    },
    defaultVariants: {
      linkType: 'default',
    },
  }
);

const NavLink: FC<{
  href: string;
  linkType: VariantProps<typeof navLinkStyles>['linkType'];
}> = ({ href, linkType, children }) => (
  <li>
    <Link href={href} className={navLinkStyles({ linkType })}>
      {children}
    </Link>
  </li>
);

const Navbar: FC = () => {
  return (
    <nav className="bg-[#001f79] shadow-lg border-b-8 border-[#d3fe11]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Logo />
        <div className="hidden md:flex nav-elements">
          <ul className="flex space-x-[70px]">
            <NavLink href="/" linkType="home">
              Home
            </NavLink>
            <NavLink href="/gallery" linkType="gallery">
              Gallery
            </NavLink>
            <NavLink href="/twg" linkType="twg">
              TWG
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Logo: FC = () => (
  <h1 className="text-[48px] font-bold text-white font-jersey10">Your Logo</h1>
);

export default Navbar;
