import React, { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TopSearchbar = ({ closeSearch }) => {
  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="w-full h-16 border-b border-neutral-800 flex items-center justify-between">
      <form className="flex-1 h-full">
        <input
          ref={searchRef}
          id="search"
          type="text"
          name="search"
          required
          autoComplete="off"
          placeholder="Search for blogs"
          className="appearance-none sm:text-lg text-sm bg-transparent block w-full h-full sm:pl-10 pl-4 placeholder-neutral-500 focus:outline-none focus:ring-black focus:border-black"
        />
      </form>
      <Link
        to={`/blogs`}
        onClick={closeSearch}
        className="underline text-sm sm:text-base"
      >
        Show filters
      </Link>
      <button
        type="button"
        onClick={closeSearch}
        className="hover:rotate-90 transition inline-flex items-center justify-center p-1 mx-3 rounded-md"
      >
        <FiX className="block h-10 w-10 stroke-[1]" />
      </button>
    </div>
  );
};

export default TopSearchbar;
