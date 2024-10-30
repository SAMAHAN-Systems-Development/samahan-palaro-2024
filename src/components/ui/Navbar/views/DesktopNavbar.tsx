import { FC } from 'react';
import Link from 'next/link';
import logo from '../public/palaro-logo.png';

const DesktopNavbar: FC = () => {
  return (
    <nav className="jersey10 bg-blue shadow-lg border-b-8 border-green">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <div className="flex items-center ml-[90px]">
          <Logo />
        </div>
        <NavLinks />
      </div>
    </nav>
  );
};

const Logo: FC = () => (
  <img src={logo.src} alt="Palaro Logo" className="h-10" />
);

const NavLinks: FC = () => {
  const links = [
    { href: '/', label: 'HOME' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/twg', label: 'TWG' },
  ];

  return (
    <div className="flex text-[48px] text-white font-jersey10">
      <ul className="flex space-x-[70px]">
        {links.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

const NavLink: FC<{ href: string }> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      aria-label={children}
      className="hover:text-pink text-white transition-colors duration-300 text-[48px]"
    >
      {children}
    </Link>
  </li>
);

export default DesktopNavbar;
