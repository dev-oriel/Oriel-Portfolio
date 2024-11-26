import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "254758997669";

  const getWhatsAppLink = (service) =>
    `https://wa.me/${whatsappNumber}?text=Hello!%20I%20am%20interested%20in%20your%20${encodeURIComponent(
      service
    )}%20service.`;

  return (
    <div className="border-t-2 border-gray-500 bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* About Me Section */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-sm leading-7">
            Passionate Full Stack Developer with expertise in React, Node.js,
            Express.js, PHP and MongoDB. I enjoy creating functional and
            visually appealing digital experiences.
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
                className="hover:text-cyan-500 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="technologies"
                smooth={true}
                duration={500}
                className="hover:text-cyan-500 cursor-pointer"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-cyan-500 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                className="hover:text-cyan-500 cursor-pointer"
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
            {[
              "Web Development",
              "Graphic Design",
              "Full Stack Development",
            ].map((service, index) => (
              <li
                key={index}
                className="relative group bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300"
              >
                {service}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a
                    href={getWhatsAppLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-sm px-3 py-1 rounded-lg hover:bg-green-600"
                  >
                    Order {service} via WhatsApp
                  </a>
                </div>
              </li>
            ))}
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
