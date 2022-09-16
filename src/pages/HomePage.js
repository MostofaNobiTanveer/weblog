import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="py-20 2xl:container 2xl:mx-auto px-4 sm:px-6">
      {/* title */}
      <div className="block">
        <h2 className="font-extrabold text-3xl uppercase">
          BLOGS BY CATEGORIES
        </h2>
        <div className="pb-5">
          <div className="border-t border-neutral-800"></div>
        </div>
      </div>
      {/* end of title */}

      <div className="py-6">
        <div className="md:grid md:grid-cols-3 md:gap-6 space-y-10 md:space-y-0">
          <div className="md:col-span-1">
            <div className="max-w-sm">
              <h3 className="text-3xl leading-6">React</h3>
              <p className="mt-1 sm:text-lg">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="w-full">
              <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-6 gap-y-16 mb-6 sm:grid-cols-0 grid-cols-1">
                {[...Array(6)].map((_, i) => (
                  <Link
                    to={`blogs/${i}`}
                    key={i}
                    className="blog-item group max-w-sm relative flex flex-col justify-between pl-5 border-l border-neutral-800"
                  >
                    <span className="absolute -left-[11px] bg-[#EBEAE9] top-0 h-5 w-5 rounded-full border border-neutral-800"></span>
                    <div className="mb-16">
                      <time dateTime="2020-01-01">January 1, 2020</time>
                      <h2 className="mt-1 text-2xl font-normal text-gray-900">
                        <span className="link-underline link-underline-black">
                          How React works behind the scene !!!
                        </span>
                      </h2>
                      <p>
                        {/* author */}
                        <span className="text-sm text-gray-500">
                          by{' '}
                          <span className="text-neutral-800 font-bold">
                            John Doe
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="w-full aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="banner"
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="pb-5">
          <div className="border-t border-neutral-800"></div>
        </div>
      </div>

      <div className="py-6">
        <div className="md:grid md:grid-cols-3 md:gap-6 space-y-10 md:space-y-0">
          <div className="md:col-span-1">
            <div className="max-w-sm">
              <h3 className="text-3xl leading-6">React</h3>
              <p className="mt-1 sm:text-lg">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="w-full">
              <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-6 gap-y-16 mb-6 sm:grid-cols-0 grid-cols-1">
                {[...Array(6)].map((_, i) => (
                  <Link
                    to={`blogs/${i}`}
                    key={i}
                    className="blog-item group max-w-sm relative flex flex-col justify-between pl-5 border-l border-neutral-800"
                  >
                    <span className="absolute -left-[11px] bg-[#EBEAE9] top-0 h-5 w-5 rounded-full border border-neutral-800"></span>
                    <div className="mb-16">
                      <time dateTime="2020-01-01">January 1, 2020</time>
                      <h2 className="mt-1 text-2xl font-normal text-gray-900">
                        <span className="link-underline link-underline-black">
                          How React works behind the scene !!!
                        </span>
                      </h2>
                      <p>
                        {/* author */}
                        <span className="text-sm text-gray-500">
                          by{' '}
                          <span className="text-neutral-800 font-bold">
                            John Doe
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="w-full aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                        alt="banner"
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
