import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/orielProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border-b border-neutral-700 pb-10 lg:mb-35">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10 md:py-16 flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Oriel Kiplangat
            </span>
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide"
          >
            Crafting Stunning Digital Experiences
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base sm:text-lg lg:text-xl font-light max-w-lg"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-600 text-white rounded-full text-lg font-medium hover:bg-cyan-900 transition"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-700 text-white rounded-full text-lg font-medium hover:bg-gray-600 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              src={profilepic}
              alt="Oriel Kiplangat"
              className="rounded-lg shadow-xl z-10 relative w-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-cyan-600 via-transparent to-black opacity-50 rounded-lg"
            ></motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-sm text-gray-400">
                &quot; Turning visions into code &quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
