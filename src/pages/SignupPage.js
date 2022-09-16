import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// cmponent
const SignupPage = () => {
  const [mounted, setMounted] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-8 w-full mx-auto px-6">
      <div className="relative max-w-3xl md:h-[35rem] bg-[#EBEAE9] border border-neutral-800 md:grid md:grid-cols-5 mx-auto">
        <span className="absolute w-full h-full border border-neutral-800 -top-4 -left-4 -z-10"></span>
        <div
          className={`${
            mounted
              ? 'transform translate-y-0 opacity-100'
              : 'transform translate-y-2 opacity-0'
          } md:col-span-2 bg-pattern transition-all ease-in duration-300 hidden md:block`}
        >
          <div className="h-full flex flex-col justify-between">
            {/* <div className="flex-1 flex gap-2 md:gap-5 flex-col justify-center md:m-4 m-3">
              <h3 className="font-semibold tracking-wide text-4xl">Sign Up</h3>
              <p className="mt-1 text-lg max-w-sm">
                Enter your login information and enjoy experiences shared by all
                travelers and share your experience!
              </p>
            </div> */}
            <div></div>
            <div className="md:m-4 m-3 p-4 bg- border border-neutral-800 flex flex-col gap-2 mt-4">
              <p>Already have an account?</p>
              <Link
                to="/signin"
                className="text-red-500 font-semibold inline hover:underline"
              >
                Signin
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${
            mounted
              ? 'transform translate-y-0 opacity-100'
              : 'transform translate-y-2 opacity-0'
          } mt-5 md:mt-0 md:col-span-3 transition-all ease-in duration-300 delay-300`}
        >
          <div className="overflow-hidden h-full flex items-center">
            <div className="px-4 py-10 flex-1 grid grid-cols-6 gap-4">
              <form
                onSubmit={handleSubmit}
                className="col-span-6 space-y-4 px-4"
              >
                <h3 className="font-semibold tracking-wide text-4xl">
                  Sign Up
                </h3>
                {/* name input */}
                <div>
                  <label htmlFor="name" className="block text-lg">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      onChange={handleOnChange}
                      required
                      autoComplete="off"
                      placeholder="John Doe"
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:ring-black focus:border-black"
                    />
                  </div>
                </div>
                {/* email input */}
                <div>
                  <label htmlFor="email" className="block text-lg">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      onChange={handleOnChange}
                      required
                      autoComplete="email"
                      placeholder="example@mail.com"
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:ring-black focus:border-black"
                    />
                  </div>
                </div>
                {/* password input */}
                <div>
                  <label
                    htmlFor="password"
                    className="text-lg flex items-center justify-between"
                  >
                    <span>
                      Password<span className="text-red-500">*</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="underline mr-1 text-sm"
                    >
                      {showPass ? 'Hide' : 'Show'}
                    </button>
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      onChange={handleOnChange}
                      type={showPass ? 'text' : 'password'}
                      placeholder="Password"
                      required
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:ring-black focus:border-black"
                    />
                  </div>
                </div>
                {/* login button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="relative w-full bg-[#EBEAE9] uppercase disabled:opacity-90 disabled:cursor-not-allowed flex items-center gap-2 justify-center py-2 px-4 border border-neutral-800 font-normal focus:outline-none focus:ring-0"
                  >
                    <span className="absolute w-full h-full bg-neutral-800 border border-neutral-800 -top-2 -left-2 -z-10"></span>
                    <span>Signup</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
