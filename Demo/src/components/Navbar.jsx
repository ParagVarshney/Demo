
import React from "react";

const Navbar = () => {
  return (
    <nav className=" justify-between items-center mt-5 bg-gray-100 shadow-sm rounded-full ">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center">
      
        <div className="flex items-center space-x-10">
          <img
            src="https://static.vivamoney.in/uploads/logo_img_48174ed008.svg"
            alt="Viva Logo"
            className="h-9"
          />
          <span className="text-2xl font-semibold text-gray-800"></span>
        </div>

        
        <ul className="flex items-center ml-20 space-x-10">
          <li className="text-gray-800 text-lg hover:text-purple-600 cursor-pointer">
            Live States
          </li>
          <li className="text-gray-800 text-lg hover:text-purple-600 cursor-pointer">
            Products
          </li>
          <li className="text-gray-800 text-lg hover:text-purple-600 cursor-pointer">
            About Us
          </li>
          <li className="text-gray-800 text-lg hover:text-purple-600 cursor-pointer">
            Contact Us
          </li>
          <li className="text-gray-800 text-lg hover:text-purple-600 cursor-pointer">
            Blog
          </li>
          <li className="text-gray-800 text-lg hover:text-purple-600 cursor-pointer">
            Policies & Codes
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

