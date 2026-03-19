import React from "react";
import { navLinks } from "../constants";
import logo from "../assets/portfolioIcon.png"; // Importing the logo from your assets

const Navbar = () => (
  <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-md px-10">
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <div 
        className="flex items-center gap-2" 
        onClick={() => window.scrollTo(0, 0)}
      >
        {/* Added the logo image here */}
        <img src={logo} alt="logo" className="w-10 h-10 object-contain cursor-pointer" />
        
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          Anjali Gupta &nbsp;<span className="sm:block hidden"> | App Dev</span>
        </p>
      </div>

      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => (
          <li key={link.id} className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;