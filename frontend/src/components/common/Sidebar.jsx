import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li><a href="/" className="block p-2 hover:bg-gray-200 rounded">Home</a></li>
          <li><a href="/about" className="block p-2 hover:bg-gray-200 rounded">About Us</a></li>
          <li><a href="/services" className="block p-2 hover:bg-gray-200 rounded">Services</a></li>
          <li><a href="/contact" className="block p-2 hover:bg-gray-200 rounded">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
