import React from 'react';
import { SiOpenaigym } from 'react-icons/si';
import { FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const OffcanvasMenu = ({ isOffcanvasOpen, closeOffcanvas }) => {
  return (
    <div
      className={`${
        !isOffcanvasOpen && 'pointer-events-none'
      } fixed inset-0 z-40`}
    >
      <div
        onClick={closeOffcanvas}
        className={`${
          isOffcanvasOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } fixed inset-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 transition-opacity`}
      ></div>
      <nav
        className={`${
          isOffcanvasOpen
            ? 'transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100'
            : 'transform opacity-0 scale-110 sm:-translate-x-full sm:scale-100 sm:opacity-100'
        } transition ease-out duration-150 sm:ease-[cubic-bezier(0.76, 0, 0.24, 1)] sm:duration-300 fixed z-40 inset-0 h-full w-full bg-[#EBEAE9] sm:inset-y-0 sm:shadow-lg sm:right-auto sm:left-0 sm:max-w-md sm:w-full flex flex-col justify-between items-start px-4 sm:px-6`}
      >
        <div className="h-16 w-full border-b border-neutral-800 flex items-center justify-between">
          <Link to="/">
            <SiOpenaigym className="w-8 h-8" />
          </Link>
          <button
            type="button"
            onClick={closeOffcanvas}
            className="-mr-2 hover:rotate-90 transition inline-flex items-center justify-center p-2 rounded-md"
          >
            <FiX className="block h-10 w-10 stroke-[1]" />
          </button>
        </div>
        <div className="max-w-8xl flex-1 flex flex-col items-end w-full mx-auto pt-10">
          {['Articles', 'Trending', 'Popular', 'Contact'].map((item, index) => (
            <NavLink
              key={index}
              to="/"
              className="group relative inline-block transition px-4"
            >
              <span className="absolute origin-right bottom-1/2 right-0 translate-y-1/2 h-1 mb-1 w-0 group-hover:w-[105%] transition-all duration-300 bg-red-500"></span>
              <span className="block w-full pl-2 text-left py-2 text-neutral-800 text-3xl font-bold uppercase">
                {item}
              </span>
            </NavLink>
          ))}
        </div>
        <div className="border-t border-neutral-800 pt-4 pb-3 w-full">
          <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3 min-w-0 flex-1">
              <div className="text-base font-medium text-gray-800 truncate">
                Whitney Francis
              </div>
              <div className="text-sm font-medium text-gray-500 truncate">
                whitneyfrancis@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
            <button className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50">
              Sign out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default OffcanvasMenu;
