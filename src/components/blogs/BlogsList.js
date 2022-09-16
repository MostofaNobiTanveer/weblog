import React from 'react';
import { Link } from 'react-router-dom';

const BlogsList = () => {
  return (
    <div className="py-6 px-6">
      <div className="md:grid md:grid-cols-3 md:gap-6 space-y-10 md:space-y-0">
        {/* <div className="md:col-span-1">
            <div className="max-w-sm">
              <h3 className="text-3xl leading-6">React</h3>
              <p className="mt-1 sm:text-lg">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div> */}
        <div className="mt-5 md:mt-0 md:col-span-full">
          <div className="w-full">
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-6 gap-y-12 mb-6 sm:grid-cols-0 grid-cols-1">
              {[...Array(6)].map((_, i) => (
                <Link
                  to={`/blogs/${i}`}
                  key={i}
                  className="blog-item group max-w-md relative flex flex-col justify-between pl-5 border-l border-neutral-800"
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
                      src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
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
  );
};

export default BlogsList;
