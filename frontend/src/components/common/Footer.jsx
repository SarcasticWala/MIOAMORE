import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 MioAmore. All rights reserved.</p>
        <nav>
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-2">
            <li><a href="/about" className="hover:text-gray-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
            <li><a href="/privacy" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
