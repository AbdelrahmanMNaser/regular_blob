import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center bg-slate-100 p-2 relative mx-auto">
      {/* Overlay for dimming the page */}
      <div className="overlay fixed inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-300 z-40"></div>

      <div className="flex space-x-20">
        <Link to="/" className="hover:underline text-black">
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/plane" className="hover:underline text-black">
            2D
          </Link>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-1 bg-white shadow-md rounded-md w-48 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/regular" className="text-black">
                  Regular
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/blob" className="text-black">
                  Blob
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/space" className="hover:underline text-black">
          3D
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;