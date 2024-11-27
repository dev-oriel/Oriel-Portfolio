import aboutImg from "../assets/oriel2.jpg";
import resume from "../assets/ORIEL KIPLANGAT RESUME.pdf";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative py-10 sm:py-20 border-b border-neutral-700 bg-gray-900">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-gray-100">
        About <span className="text-cyan-400">Me</span>
      </h1>
      <div className="mt-6 sm:mt-12 flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:gap-16 px-6">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-4/5 lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto transition-transform duration-500 group-hover:scale-105"
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
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <p className="text-base sm:text-lg lg:text-xl font-light leading-7 sm:leading-8 text-gray-300 max-w-xl mx-auto lg:mx-0">
            {ABOUT_TEXT}
          </p>
          {/* Buttons Section */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-base sm:text-lg font-medium text-white bg-cyan-600 rounded-md shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Hire Me
            </motion.a>
            <motion.a
              href={resume}
              download="ORIEL KIPLANGAT.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-base sm:text-lg font-medium text-gray-900 bg-gray-300 rounded-md shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-10 left-10 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-cyan-500 opacity-20 blur-2xl"></div>
      <div className="absolute bottom-16 right-16 h-28 w-28 sm:h-40 sm:w-40 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
    </div>
  );
};

export default About;
