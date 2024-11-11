import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-500 bg-gray-900 text-white mt-36">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* About Me Section */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-sm leading-7">
            Passionate Full Stack Developer with expertise in React, PHP,
            and Django. I enjoy creating functional and visually appealing digital
            experiences.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-sm leading-7 space-y-1">
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-amber-700 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="technologies"
                smooth={true}
                duration={500}
                className="hover:text-amber-700 cursor-pointer"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-amber-700 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                className=" hover:text-amber-700 cursor-pointer"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-3">Services</h2>
          <ul className="text-sm leading-7 space-y-1">
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Full Stack Development</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-3">Social Links</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/dev-oriel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/orielkiplangat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Black_mark9?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-300"
              >
                <FaTwitter className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_.oriel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-300"
              >
                <FaInstagram className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-4 flex justify-center items-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Oriel Kiplangat – All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
