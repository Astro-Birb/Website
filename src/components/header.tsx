import React, { useState } from "react";




const Header = () => {
  return (
    <header className="w-full py-3 z-1 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white text-center shadow-md fixed top-0 z-50 glassmorphism dark">
      <nav className="flex items-center justify-between w-full px-4">
        <a href="/" className="flex items-center justify-center">
          <img
            src="/astro-logo.svg"
            alt="Astro Birb Logo"
            className="w-12 h-12 mr-2"
          />
          <span className="hidden sm:block text-3xl font-bold">Astro Birb</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
