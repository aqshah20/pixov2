import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:px-10 py-4 z-50 fixed top-0 left-0 z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto">
          <img src="/images/Logo.png" alt="Logo" className="h-14" />
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop & Mobile Menu */}
        <div
          id="navbar-menu"
          className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex flex-col mt-4 border-t pt-4 lg:border-0 lg:pt-0 lg:flex-row lg:space-x-8 lg:mt-0">
            {["About Us", "Services", "Case Studies", "Blog", "How it Works", "Hire"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-700 font-medium hover:text-gradient"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Us button only inside menu on mobile */}
          <div className="mt-4 lg:hidden">
            <button className="bg-gradient-225 text-white font-semibold px-5 py-2 rounded-md w-full">
              Contact Us
            </button>
          </div>
        </div>

        {/* Contact Us Button visible only on desktop (outside menu) */}
        <div className="hidden lg:flex">
          <button className="ml-4 bg-gradient-225 hover:shadow-lg text-white font-semibold px-5 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
