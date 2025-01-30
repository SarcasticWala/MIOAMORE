import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
