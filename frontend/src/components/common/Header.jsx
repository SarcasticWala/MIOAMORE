import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/">MioAmore</a>
        </div>
        <nav className="w-full md:w-auto mt-2 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="/" className="hover:text-gray-400 transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-400 transition-colors duration-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
