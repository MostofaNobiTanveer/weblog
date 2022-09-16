import React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const BlogsPagination = () => {
  return (
    <nav class="border-t border-neutral-800 h-14 flex items-center justify-between">
      <div class="w-14 h-full border-r border-neutral-800">
        <button class="border-t-2 w-full h-full border-transparent inline-flex items-center justify-center font-medium">
          <BsChevronLeft className="w-7 h-7" />
        </button>
      </div>
      <div class="hidden md:flex">
        <a href="#" class="px-3 text-lg inline-flex items-center font-medium">
          1
        </a>
        <a href="#" class="px-3 text-lg inline-flex items-center font-medium">
          2
        </a>
        <a href="#" class="px-3 text-lg inline-flex items-center font-medium">
          3
        </a>
        <span class="border-transpapx-3 text-lg inline-flex items-center font-medium">
          ...
        </span>
        <a href="#" class="px-3 text-lg inline-flex items-center font-medium">
          8
        </a>
        <a href="#" class="px-3 text-lg inline-flex items-center font-medium">
          9
        </a>
        <a href="#" class="px-3 text-lg inline-flex items-center font-medium">
          10
        </a>
      </div>
      <div className="md:hidden">Showing 1-10 of 100 results</div>
      <div class="w-14 h-full border-l border-neutral-800">
        <button class="border-t-2 w-full h-full border-transparent inline-flex items-center justify-center font-medium">
          <BsChevronRight className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
};

export default BlogsPagination;
