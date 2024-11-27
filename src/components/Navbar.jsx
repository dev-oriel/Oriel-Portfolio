import logo from "../assets/orielLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-40" src={logo} alt="logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-300 text-lg">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#technologies" className="hover:text-cyan-400 transition">
            Technologies
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
          {/* "Hire Me" Button */}
          <a
            href="#contact"
            className="ml-4 px-8 py-3 text-sm font-medium text-white bg-cyan-600 rounded-md shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Social Media Links */}
        <div className="hidden lg:flex items-center space-x-4 text-2xl text-gray-300">
          <a
            href="https://www.linkedin.com/in/oriel-kiplangat-89ba9323a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/orii-blackmark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Black_mark9?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/_.oriel_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-300 text-lg">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#technologies" className="hover:text-cyan-400 transition">
              Technologies
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <div className="flex justify-center space-x-6 py-4 text-2xl text-gray-300">
            <a
              href="https://www.linkedin.com/in/oriel-kiplangat-89ba9323a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/orii-blackmark"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Black_mark9?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/_.oriel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
