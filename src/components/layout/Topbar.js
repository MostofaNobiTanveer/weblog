import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { SiOpenaigym } from 'react-icons/si';
import { Link, NavLink, useLocation } from 'react-router-dom';
import TopSearchbar from './TopSearchbar';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blogs',
    path: '/blogs',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Sign In',
    path: '/signin',
  },
  {
    name: 'Sign Up',
    path: '/signup',
  },
];

const Topbar = ({ openSlideMenu }) => {
  const [isSearching, setIsSearching] = useState(false);
  const closeSearch = () => setIsSearching(false);
  const location = useLocation();
  return (
    <div className="sticky top-0 w-full bg-[#EBEAE9] z-20">
      <div className="mx-auto">
        {isSearching ? (
          <TopSearchbar closeSearch={closeSearch} />
        ) : (
          <div className="flex w-full justify-between items-center border-b border-neutral-800 h-16 px-4 sm:px-6">
            <div className="sm:hidden">
              <button
                onClick={openSlideMenu}
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center"
              >
                <FiMenu className="h-7 w-7 stroke-[1]" />
              </button>
            </div>
            <Link
              to="/"
              className="flex-shrink-0 text-neutral-800 flex gap-3 items-center"
            >
              <SiOpenaigym className="h-8 w-8" />
            </Link>
            <nav className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="relative uppercase group text-sm font-bold text-neutral-800"
                >
                  <span
                    className={`${
                      location.pathname === link.path
                        ? 'w-[120%]'
                        : 'w-0 group-hover:w-[120%]'
                    } absolute bottom-1/2 -translate-y-1/2 h-[2px] transition-all duration-300 bg-red-500`}
                  ></span>
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center justify-end">
              <button onClick={() => setIsSearching(true)}>
                <FiSearch className="w-6 h-6 stroke-[1]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
