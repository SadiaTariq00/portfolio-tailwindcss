import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-800 text-white fixed w-full z-10 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white tracking-wide">
          My Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          <li className="hover:text-emerald-300 transition duration-200">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-emerald-300 transition duration-200">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-emerald-300 transition duration-200">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-emerald-300 transition duration-200">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-emerald-300 transition duration-200">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="/Pink Clean Lines Graphic Designer Resume.pdf"
              target="_blank"
              className="px-4 py-2 bg-emerald-500 rounded-lg text-white font-medium hover:bg-emerald-600 transition duration-200"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-gray-900 text-lg font-medium">
          <li>
            <a href="#hero" onClick={toggleMenu} className="hover:text-emerald-300 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu} className="hover:text-emerald-300 transition duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu} className="hover:text-emerald-300 transition duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-emerald-300 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="hover:text-emerald-300 transition duration-200">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Pink Clean Lines Graphic Designer Resume.pdf"
              target="_blank"
              onClick={toggleMenu}
              className="px-4 py-2 bg-emerald-500 rounded-lg text-white font-medium hover:bg-emerald-600 transition duration-200"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
