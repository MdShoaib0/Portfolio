import React from 'react'

const navItems = [
  { label: "Home" },
  { label: "Skills" },
  { label: "Projects" },
  { label: "Services" },
  { label: "Contact" },
];

function Header() {
  const navItemClass =
    "cursor-pointer hover:text-pink-400 hover:scale-105 transition-all duration-300 active:scale-95";

  return (
    <nav>
      <ul className="flex justify-end gap-16 font-bold px-10 py-8 items-center">
        <li className="mr-auto text-3xl font-bold cursor-pointer text-pink-500 hover:scale-105 transition-all duration-300 active:scale-95">
          Shoaib's Portfolio
        </li>
        {navItems.map((item) => (
          <li key={item.label} className={navItemClass}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header