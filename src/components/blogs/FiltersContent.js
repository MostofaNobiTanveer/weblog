import React from 'react';

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

const FiltersContent = ({ isFlyoutOpen, closeFlyout, activeFilter }) => {
  return (
    <div
      class={`${
        isFlyoutOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-5 pointer-events-none'
      } transition ease-out duration-200 bg-white absolute max-h-[80vh] overflow-y-auto top-full origin-bottom z-10 inset-x-0 transform shadow-lg`}
    >
      {/* <div class="absolute inset-0 flex" aria-hidden="true">
        <div class="bg-white w-1/2"></div>
        <div class="bg-gray-50 w-1/2"></div>
      </div> */}
      <div class="relative max-w-5xl mx-auto grid grid-cols-1 space-y-10">
        <nav className="flex flex-wrap gap-2 mt-5 px-4">
          {blogsTopics.map((topic, i) => (
            <button
              onClick={closeFlyout}
              className="py-1 px-3 border border-neutral-800 rounded-full "
            >
              {topic}
            </button>
          ))}
        </nav>
        <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
          <div>
            <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">
              From the blog
            </h3>
            <ul class="mt-6 space-y-6">
              <li class="flow-root">
                <a
                  href="#"
                  class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <div class="hidden sm:block flex-shrink-0">
                    <img
                      class="w-32 h-20 object-cover rounded-md"
                      src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1 sm:ml-8">
                    <h4 class="text-base font-medium text-gray-900 truncate">
                      Boost your conversion rate
                    </h4>
                    <p class="mt-1 text-sm text-gray-500">
                      Eget ullamcorper ac ut vulputate fames nec mattis
                      pellentesque elementum. Viverra tempor id mus.
                    </p>
                  </div>
                </a>
              </li>

              <li class="flow-root">
                <a
                  href="#"
                  class="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <div class="hidden sm:block flex-shrink-0">
                    <img
                      class="w-32 h-20 object-cover rounded-md"
                      src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1 sm:ml-8">
                    <h4 class="text-base font-medium text-gray-900 truncate">
                      How to use search engine optimization to drive traffic to
                      your site
                    </h4>
                    <p class="mt-1 text-sm text-gray-500">
                      Eget ullamcorper ac ut vulputate fames nec mattis
                      pellentesque elementum. Viverra tempor id mus.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-6 text-sm font-medium">
            <a
              href="#"
              class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
            >
              View all posts <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersContent;
