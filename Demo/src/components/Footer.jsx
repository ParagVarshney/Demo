import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo + Email */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="https://static.vivamoney.in/uploads/logo_img_48174ed008.svg" 
                alt="Viva Logo"
                className="h-6"
              />
              <span className="text-xl font-bold text-purple-700">viva</span>
            </div>
            <p className="mt-3 text-gray-600">
              Email:{" "}
              <a
                href="mailto:chat@vivamoney.in"
                className="text-purple-600 hover:underline"
              >
                chat@vivamoney.in
              </a>
            </p>

            <div className="flex flex-wrap mt-3 text-sm text-gray-500 gap-4">
              <a href="#" className="hover:text-purple-600">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-purple-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-600">
                Fair Practices Code
              </a>
              <a href="#" className="hover:text-purple-600">
                Loans
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <a href="#" className="hover:text-purple-600">
              Home
            </a>
            <a href="#" className="hover:text-purple-600">
              Products
            </a>
            <a href="#" className="hover:text-purple-600">
              About Us
            </a>
            <a href="#" className="hover:text-purple-600">
              Contact Us
            </a>
            <a href="#" className="hover:text-purple-600">
              Blog
            </a>
            <a href="#" className="hover:text-purple-600">
              FAQ
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col gap-2">
            <a href="#">
              <img
                src="https://static.vivamoney.in/_nuxt/google_play.CLQippOr.webp"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://static.vivamoney.in/_nuxt/app_store.BfFjYPNH.webp" 
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <div>
            NBFC Partner:{" "}
            <a href="#" className="hover:text-purple-600">
              FincFriends Private Limited
            </a>
            <br />
            CIN: U36737286KA74834 <br />
            ©2025 VIVA MONEY SOLUTION PVT LTD
          </div>

          {/* Social Icons (SVG only) */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-purple-600">
              {/* LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.3h.1c.5-1 1.8-2.3 3.9-2.3 4.2 0 5 2.8 5 6.4V24h-4v-7.8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              {/* Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              {/* Twitter (X) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.24 2H21l-6.54 7.48L22 22h-7.19l-5.64-7.36L3.88 22H1.12l7.2-8.24L2 2h7.3l5.11 6.77L18.24 2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600">
              {/* YouTube */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.6 3.2H4.4C2.4 3.2 1 4.6 1 6.6v10.8c0 2 1.4 3.4 3.4 3.4h15.2c2 0 3.4-1.4 3.4-3.4V6.6c0-2-1.4-3.4-3.4-3.4zM9.6 16V8l7.2 4-7.2 4z" />
              </svg>
            </a>
            <a href="mailto:chat@vivamoney.in" className="text-gray-600 hover:text-purple-600">
              {/* Email */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
