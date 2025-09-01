import React, { useState } from 'react'

const navItems = [
  { label: "Home" },
  { label: "Skills" },
  { label: "Projects" },
  { label: "Services" },
  { label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItemClass =
    "cursor-pointer hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent hover:scale-105 transition-all duration-300 active:scale-95 text-slate-900";

  return (
    <nav className="w-full">
      <ul className="hidden md:flex justify-end gap-16 font-bold px-10 py-8 items-center">
        <li className="mr-auto text-3xl font-bold cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Shoaib's Portfolio
        </li>
        {navItems.map((item) => (
          <li key={item.label} className={navItemClass}>
            {item.label}
          </li>
        ))}
      </ul>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center px-6 py-8">
        <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Shoaib's Portfolio</span>
        <button
          className="text-purple-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {/* Simple hamburger icon */}
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 10h20M6 16h20M6 22h20" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-6 font-bold px-8 py-6 bg-white/90 text-pink-500 absolute w-full left-0 top-20 z-50 shadow-lg md:hidden">
          {navItems.map((item) => (
            <li key={item.label} className={navItemClass}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header