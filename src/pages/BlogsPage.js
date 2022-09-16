import React from 'react';
import { Link } from 'react-router-dom';
import { BlogsList, BlogsPagination, FiltersHeader } from '../components';

const BlogsPage = () => {
  return (
    <section className="relative flex flex-col justify-between h-full">
      <FiltersHeader />
      {/* Blogs list */}
      <BlogsList />
      {/* <div className="">
        <div className="grid grid-cols-3 space-y-10 lg:space-y-0 h-full relative">
          <div className="mt-5 col-span-3 md:mt-0 lg:col-span-2 px-4 py-4">
            <div className="w-full">
              <div className="grid  gap-x-6 gap-y-16 mb-6 sm:grid-cols-0 grid-cols-1">
                {[...Array(6)].map((_, i) => (
                  <Link
                    to={`blogs/${i}`}
                    key={i}
                    className="group relative flex justify-between pt-4 border-t border-neutral-800 pr-4 transition-all duration-500"
                  >
                    <span className="absolute h-0 group-hover:h-full transition-all duration-500 top-0 border-r origin-top border-neutral-800 right-0"></span>
                    <div className="flex flex-col justify-between">
                      <div className="blog-item">
                        <time dateTime="2020-01-01" className="flex gap-2">
                          <span className="bg-[#EBEAE9] group-hover:bg-neutral-800 group-hover:border-transparent transition duration-300 h-5 w-5 rounded-full border border-neutral-800"></span>
                          January 1, 2020
                        </time>
                        <h2 className="mt-1 text-2xl font-normal text-gray-900">
                          <span className="link-underline link-underline-black">
                            How React works behind the scene !!!
                          </span>
                        </h2>
                      </div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptas provident explicabo fugit, iusto
                        quibusdam quasi autem, ullam, qui eveniet fuga maxime a
                        excepturi dolorum dolor.
                      </p>
                      <p>
                        <Link to="/" className="text-sm text-gray-500">
                          by{' '}
                          <span className="text-neutral-800 font-bold link-line-through relative">
                            <span className="absolute bottom-2 h-[3px] w-0 hover:w-[110%] transition-all duration-300 bg-red-500"></span>
                            John Doe
                          </span>
                        </Link>
                      </p>
                    </div>
                    <div className="blog-item w-full max-w-xs aspect-video bg-gray-200 overflow-hidden">
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
          <div className="lg:col-span-1 col-span-3 h-full border-l border-neutral-800">
            <div className="sticky top-16">
              <div className="p-4 overflow-y-auto">
                <h3 className="text-3xl leading-6">Recommended Topics</h3>
                <div className="flex flex-wrap gap-2 mt-5">
                  {[...Array(6)].map((_, i) => (
                    <>
                      <button className="py-1 px-3 border border-neutral-800 rounded-full ">
                        React 16
                      </button>
                      <button className="py-1 px-3 border border-neutral-800 rounded-full ">
                        Web Development
                      </button>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Blogs list */}
      <BlogsPagination />
    </section>
  );
};

export default BlogsPage;
