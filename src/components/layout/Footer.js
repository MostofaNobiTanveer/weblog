import React from 'react';
import { RiLinkedinLine } from 'react-icons/ri';
import { VscGithubAlt, VscMail } from 'react-icons/vsc';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="sticky bottom-0 w-full bg-[#EBEAE9] z-20">
      <div className="mx-auto">
        <div className="flex w-full justify-between items-center border-t border-neutral-800 h-16 px-4 sm:px-6">
          <div class="">
            <div class="text-center text-sm sm:text-base">
              Website by{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mostofa-nobi.netlify.app/"
                className="font-bold relative group"
              >
                <span className="absolute bottom-2 h-[3px] w-0 group-hover:w-[110%] transition-all duration-300 bg-red-500"></span>
                Mostofa Nobi
              </a>
            </div>
          </div>
          <div class="flex items-center justify-center space-x-5">
            <a
              href="https://github.com/MostofaNobiTanveer"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-800 hover:text-red-500"
            >
              <VscGithubAlt class="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mostofanobi"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-800 hover:text-red-500"
            >
              <RiLinkedinLine class="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
            <a
              href="mailto:m.mostofanobi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-800 hover:text-red-500"
            >
              <MdOutlineAlternateEmail class="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
