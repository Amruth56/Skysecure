"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-90 h-[72px]">
      <div className="flex justify-between items-center px-4 mx-auto max-w-screen-xl h-full">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[168px] h-[50px]"
        />

        <nav className="flex gap-8 items-center max-md:hidden">
          <a
            href="#about"
            className="text-base text-black hover:text-sky-600 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-base text-black hover:text-sky-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-base text-black hover:text-sky-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-base text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <button
          className="hidden max-md:block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className="ti ti-menu-2 text-2xl" />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 md:hidden">
            <nav className="flex flex-col items-center py-8 gap-6">
              <a
                href="#about"
                className="text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-lg text-white bg-sky-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
