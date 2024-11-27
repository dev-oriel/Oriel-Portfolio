import aboutImg from "../assets/oriel2.jpg";
import resume from "../assets/ORIEL KIPLANGAT RESUME.pdf";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative py-20 border-b border-neutral-700 bg-gray-900">
      <h1 className="text-center text-4xl font-bold tracking-wider text-gray-100 lg:text-5xl">
        About <span className="text-cyan-400">Me</span>
      </h1>
      <div className="mt-12 flex flex-wrap justify-center lg:justify-between items-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2 p-6 lg:pl-0"
        >
          <div className="relative group">
            <img
              className="rounded-lg shadow-lg w-full lg:max-w-md h-auto transition-transform duration-500 group-hover:scale-105"
              src={aboutImg}
              alt="About Me"
            />
            {/* Overlay */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 px-6 lg:px-0 mt-8 lg:mt-0"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-lg lg:text-xl font-light text-center lg:text-left leading-8 text-gray-300 max-w-xl">
              {ABOUT_TEXT}
            </p>
            {/* Buttons Section */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-lg font-medium text-white bg-cyan-600 rounded-md shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                Hire Me
              </motion.a>
              <motion.a
                href={resume}
                download="ORIEL KIPLANGAT.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-lg font-medium text-gray-900 bg-gray-300 rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-cyan-500 opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
    </div>
  );
};

export default About;
