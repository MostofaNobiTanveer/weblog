import React, { useState } from 'react';
import { VscFilter } from 'react-icons/vsc';
import { FiChevronDown } from 'react-icons/fi';
import FiltersContent from './FiltersContent';

const blogsTopics = [
  'React',
  'Vue',
  'Angular',
  'Ember',
  'Svelte',
  'Next',
  'Nuxt',
  'Polymer',
  'Sapper',
  'Jest',
  'Enzyme',
  'Webpack',
  'Gatsby',
  'Gulp',
  'Grunt',
  'Babel',
  'Typescript',
  'Javascript',
  'CSS',
  'HTML',
  'Sass',
  'Less',
  'Stylus',
  'Node',
  'Express',
  'MongoDB',
  'Mongoose',
  'MySQL',
  'PostgreSQL',
  'SQL',
];

const FiltersHeader = () => {
  const [showFlyout, setShowFlyout] = useState(false);
  const closeFlyout = () => setShowFlyout(false);
  const [activeFilter, setActiveFilter] = useState('');
  return (
    <header className="grid grid-cols-3 z-20 sticky top-16 bg-[#EBEAE9]">
      <div className="col-span-full">
        <div className="w-full flex border-b border-neutral-800 divide-x divide-neutral-800">
          <div className="flex-shrink-0 group flex items-center gap-2 px-4">
            <span className="font-bold hidden md:block">Filter By</span>
            <VscFilter className="w-5 h-5 md:hidden" />
          </div>
          <nav className="inline-flex relative overflow-x-auto h-14 hide-scrollbar divide-x divide-neutral-800">
            {/* <button
              onClick={() => {
                setActiveFilter('categories');
                setShowFlyout(true);
                if (activeFilter === 'categories') {
                  setShowFlyout(false);
                  setActiveFilter('');
                }
              }}
              className={`${
                activeFilter === 'categories' && 'bg-white'
              } transition-all flex-shrink-0 capitalize group flex items-center gap-2 px-4`}
            >
              <span>Categories</span>
              <FiChevronDown />
            </button> */}
            <button
              onClick={() => {
                setShowFlyout(!showFlyout);
              }}
              className={`${
                showFlyout && 'bg-white'
              } transition-all flex-shrink-0 capitalize group flex items-center gap-2 px-4`}
            >
              <span>Tags</span>
              <FiChevronDown />
            </button>
            {blogsTopics.map((topic, i) => (
              <button
                className={`${
                  activeFilter === 'categories' && 'bg-white'
                } transition-all flex-shrink-0 capitalize group flex items-center gap-2 px-4`}
              >
                <span>{topic}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      <FiltersContent
        closeFlyout={closeFlyout}
        isFlyoutOpen={showFlyout}
        activeFilter={activeFilter}
      />
    </header>
  );
};

export default FiltersHeader;
