import { FiMenu, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = ({ openSlideMenu }) => {
  return (
    <nav className="hidden h-screen sm:block flex-shrink-0 border-r border-neutral-800 hide-scrollbar overflow-hidden sticky top-0">
      <div className="relative w-16 flex flex-col h-full items-center justify-between">
        <button
          onClick={openSlideMenu}
          className="flex-shrink-0 w-full bg-[#EBEAE9] z-10 border-b border-neutral-800 text-neutral-800 inline-flex items-center justify-center h-16"
        >
          <FiMenu className="h-7 w-7 stroke-[1]" />
        </button>

        <div className="relative flex overflow-hidden -rotate-90">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Marquee Item 1</span>
            <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">Marquee Item 1</span>
            <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span>
          </div>
        </div>

        <Link
          to="/signin"
          title="Signin"
          className="flex-shrink-0 inline-flex items-center justify-center h-16 border-t border-neutral-800 w-full bg-[#EBEAE9] z-10"
        >
          <FiUserPlus className="h-6 w-6 stroke-[1]" />
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
