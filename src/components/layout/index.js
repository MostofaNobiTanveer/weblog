import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SlideMenu from './OffcanvasMenu';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const openSlideMenu = () => setIsSlideMenuOpen(true);
  const closeSlideMenu = () => setIsSlideMenuOpen(false);
  return (
    <div className="relative flex 2xl:container mx-auto border-x border-neutral-800">
      <SlideMenu
        isOffcanvasOpen={isSlideMenuOpen}
        closeOffcanvas={closeSlideMenu}
      />
      <Sidebar openSlideMenu={openSlideMenu} />
      <div className="relative flex-1 flex flex-col">
        <Topbar openSlideMenu={openSlideMenu} />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
